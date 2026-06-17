#!/usr/bin/env node

/**
 * Pipeline Runner, Publicerar en granskad prompt från inbox.
 *
 * Tar en JSON-fil från pipeline/inbox/, formaterar den till .md,
 * kör verifiering, uppdaterar manifest och datafiler.
 *
 * Atomicitet: Alla filoperationer samlas i minnet, verifieras,
 * och skrivs sedan i en batch. Vid fel skrivs inga filer.
 *
 * Användning:
 *   node pipeline/run-pipeline.js pipeline/inbox/budgetanalys.json
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { VALID_CATEGORIES, CONTENT_DIR, DATA_DIR } = require('./config');
const { formatPromptFile } = require('./4-publish/format-prompt');
const { analyzePrompt, validateFrontmatter, extractPrompt, extractSections } = require('./verify-prompts');
const { scanPrompts } = require('./4-publish/update-manifest');

function loadJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function verifyContent(content, filename) {
  let parsed;
  try {
    parsed = matter(content);
  } catch (err) {
    return { ok: false, errors: [`Frontmatter-fel: ${err.message}`], warnings: [] };
  }

  const errors = [];
  const warnings = [];

  // Frontmatter-validering
  const fmIssues = validateFrontmatter(parsed.data, filename);
  for (const issue of fmIssues) {
    if (issue.severity === 'error') errors.push(issue.message);
    else warnings.push(issue.message);
  }

  // Prompt-extraktion och analys
  const extracted = extractPrompt(parsed.content);
  if (!extracted) {
    errors.push('Ingen prompt hittad (saknas ## Prompt-sektion med kodblock)');
  } else {
    const analysis = analyzePrompt(extracted.prompt);
    for (const issue of analysis.issues) {
      if (issue.severity === 'error') errors.push(issue.message);
      else warnings.push(issue.message);
    }

    // Pipeline-specifikt: nya prompts MÅSTE ha # Roll och # Uppgift
    const sections = extractSections(extracted.prompt);
    const requiredSections = ['Roll', 'Uppgift'];
    for (const req of requiredSections) {
      if (!sections.some(s => s.toLowerCase() === req.toLowerCase())) {
        errors.push(`Saknar obligatorisk sektion: # ${req}`);
      }
    }
  }

  return { ok: errors.length === 0, errors, warnings };
}

function checkSimilarity(promptData, slug) {
  const warnings = [];
  const newTitle = (promptData.title || '').toLowerCase();
  const newTags = new Set((promptData.tags || []).map(t => t.toLowerCase()));
  const newPrompt = (promptData.prompt || '').toLowerCase();

  // Extrahera nyckelord ur prompt-texten (ord > 4 tecken, exkludera stoppord)
  const stopWords = new Set(['eller', 'sedan', 'under', 'efter', 'innan', 'genom',
    'mellan', 'också', 'denna', 'dessa', 'vilka', 'vilket', 'andra', 'finns',
    'vara', 'hade', 'inte', 'från', 'till', 'sobre', 'avec', 'punkt', 'lista',
    'skriv', 'format', 'text', 'följande', 'antal', 'konkret', 'tydlig']);
  const newWords = new Set(
    newPrompt.match(/\b[a-zåäö]{5,}\b/g)?.filter(w => !stopWords.has(w)) || []
  );

  // Skanna alla befintliga prompts
  const catDirs = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('.'));

  for (const dir of catDirs) {
    const dirPath = path.join(CONTENT_DIR, dir.name);
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') && !f.startsWith('_'));

    for (const file of files) {
      const existing = matter(fs.readFileSync(path.join(dirPath, file), 'utf8'));
      const existingSlug = existing.data.slug || file.replace('.md', '');

      // Skippa om det är samma slug (uppdatering)
      if (existingSlug === slug) continue;

      const existingTitle = (existing.data.title || '').toLowerCase();
      const existingTags = new Set((existing.data.tags || []).map(t => t.toLowerCase()));
      const existingPrompt = (existing.content || '').toLowerCase();

      // 1. Titel-likhet (Jaccard på ord)
      const titleWordsNew = new Set(newTitle.split(/\s+/));
      const titleWordsExist = new Set(existingTitle.split(/\s+/));
      const titleIntersect = [...titleWordsNew].filter(w => titleWordsExist.has(w)).length;
      const titleUnion = new Set([...titleWordsNew, ...titleWordsExist]).size;
      const titleSim = titleUnion > 0 ? titleIntersect / titleUnion : 0;

      // 2. Tagg-överlappning
      const tagIntersect = [...newTags].filter(t => existingTags.has(t)).length;
      const tagUnion = new Set([...newTags, ...existingTags]).size;
      const tagSim = tagUnion > 0 ? tagIntersect / tagUnion : 0;

      // 3. Prompt-text nyckelord (Jaccard)
      const existWords = new Set(
        existingPrompt.match(/\b[a-zåäö]{5,}\b/g)?.filter(w => !stopWords.has(w)) || []
      );
      const wordIntersect = [...newWords].filter(w => existWords.has(w)).length;
      const wordUnion = new Set([...newWords, ...existWords]).size;
      const wordSim = wordUnion > 0 ? wordIntersect / wordUnion : 0;

      // Viktad score, taggar väger tungt (samma ämnesområde)
      const similarity = (titleSim * 0.25) + (tagSim * 0.4) + (wordSim * 0.35);

      if (similarity > 0.25) {
        const pct = Math.round(similarity * 100);
        warnings.push(
          `${pct}% likhet med "${existing.data.title}" (${dir.name}/${file})`
        );
      }
    }
  }

  return warnings.sort((a, b) => {
    const pctA = parseInt(a);
    const pctB = parseInt(b);
    return pctB - pctA;
  });
}

function prepareDataFiles(promptData, slug) {
  if (!slug) {
    throw new Error('slug krävs för prepareDataFiles');
  }

  const writes = [];
  const now = new Date().toISOString();

  // Förbered ratings.json
  const ratingsPath = path.join(DATA_DIR, 'ratings.json');
  let ratings = { ratings: [], schema_version: '1.0.0', updated_at: null };
  if (fs.existsSync(ratingsPath)) {
    ratings = JSON.parse(fs.readFileSync(ratingsPath, 'utf8'));
  }

  if (promptData.rating) {
    ratings.ratings = ratings.ratings.filter(r => r.slug !== slug);
    ratings.ratings.push({
      slug,
      category: promptData.category,
      rating: promptData.rating,
      rated_at: now
    });
    ratings.updated_at = now;
    writes.push({ path: ratingsPath, content: JSON.stringify(ratings, null, 2) + '\n' });
  }

  // Förbered sources.json
  const sourcesPath = path.join(DATA_DIR, 'sources.json');
  let sources = { sources: [], updated_at: null };
  if (fs.existsSync(sourcesPath)) {
    sources = JSON.parse(fs.readFileSync(sourcesPath, 'utf8'));
  }

  sources.sources = sources.sources.filter(s => s.slug !== slug);
  sources.sources.push({
    slug,
    category: promptData.category,
    source_url: promptData.source_url || null,
    source_author: promptData.source_author || null,
    source_lang: promptData.source_lang || 'sv',
    added_at: now
  });
  sources.updated_at = now;
  writes.push({ path: sourcesPath, content: JSON.stringify(sources, null, 2) + '\n' });

  return writes;
}

function prepareManifest(promptFilePath) {
  // Prompt-filen måste finnas för att scanPrompts ska hitta den,
  // men vi har redan verifierat innehållet i minnet.
  // Manifestet byggs efter att prompt-filen skrivits.
  const manifestPath = path.join(CONTENT_DIR, 'index.json');
  let currentVersion = '1.0.0';
  if (fs.existsSync(manifestPath)) {
    const current = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    currentVersion = current.version || '1.0.0';
  }

  const categories = scanPrompts();
  const totalPrompts = categories.reduce((sum, c) => sum + c.prompts.length, 0);

  const manifest = {
    version: currentVersion,
    generated_at: new Date().toISOString(),
    categories,
    total_prompts: totalPrompts
  };

  return {
    write: { path: manifestPath, content: JSON.stringify(manifest, null, 2) + '\n' },
    stats: { categories: categories.length, totalPrompts }
  };
}

function main() {
  const inputFile = process.argv[2];

  if (!inputFile) {
    console.error('Pipeline Runner, Promptbiblioteket\n');
    console.error('Användning:');
    console.error('  node pipeline/run-pipeline.js <inbox-fil.json>');
    console.error('');
    console.error('Exempel:');
    console.error('  node pipeline/run-pipeline.js pipeline/inbox/budgetanalys.json');
    process.exit(1);
  }

  const resolvedPath = path.resolve(inputFile);
  if (!fs.existsSync(resolvedPath)) {
    console.error(`Filen finns inte: ${resolvedPath}`);
    process.exit(1);
  }

  console.log('Pipeline Runner, Promptbiblioteket\n');
  console.log('='.repeat(60));

  // 1. Läs inbox-JSON
  console.log('\n1. Läser inbox-fil...');
  let promptData;
  try {
    promptData = loadJson(resolvedPath);
  } catch (err) {
    console.error(`   Kunde inte parsa JSON: ${err.message}`);
    process.exit(1);
  }

  const required = ['title', 'category', 'prompt'];
  for (const field of required) {
    if (!promptData[field]) {
      console.error(`   Saknar obligatoriskt fält: ${field}`);
      process.exit(1);
    }
  }
  console.log(`   Titel: ${promptData.title}`);
  console.log(`   Kategori: ${promptData.category}`);

  // Rating-gate: prompts med rating under 3.0 avvisas
  if (promptData.rating !== undefined && promptData.rating !== null && promptData.rating < 3.0) {
    console.error(`   Rating ${promptData.rating} under minimum 3.0, avvisad.`);
    console.error('   Förbättra prompten och kör igen.');
    process.exit(1);
  }

  // 2. Formatera i minnet (skriver INTE till disk ännu)
  console.log('\n2. Formaterar prompt-fil...');
  let formatted;
  try {
    formatted = formatPromptFile(promptData);
  } catch (err) {
    console.error(`   Formateringsfel: ${err.message}`);
    process.exit(1);
  }

  // Slug-validering: säkerställ att slug inte är tom
  if (!formatted.slug) {
    console.error('   Slug kunde inte genereras. Ange ett giltigt slug eller en titel med bokstäver/siffror.');
    process.exit(1);
  }

  const promptFilePath = path.join(CONTENT_DIR, formatted.category, `${formatted.slug}.md`);

  if (fs.existsSync(promptFilePath)) {
    console.error(`   Filen finns redan: ${promptFilePath}`);
    console.error('   Använd en annan slug eller ta bort befintlig fil.');
    process.exit(1);
  }

  // 3. Verifiera i minnet (inget skrivet till disk)
  console.log('\n3. Verifierar...');
  const verification = verifyContent(formatted.content, path.basename(promptFilePath));

  if (verification.warnings.length > 0) {
    for (const w of verification.warnings) {
      console.log(`   [VARNING] ${w}`);
    }
  }

  if (!verification.ok) {
    console.error('\n   Verifiering misslyckades:');
    for (const e of verification.errors) {
      console.error(`   [FEL] ${e}`);
    }
    console.error('   Åtgärda felen i inbox-filen och kör igen.');
    console.error('   (Inga filer har skrivits.)');
    process.exit(1);
  }
  console.log('   Alla kontroller godkända.');

  // 3b. Likhetscheck mot befintliga prompts
  const similarWarnings = checkSimilarity(promptData, formatted.slug);
  if (similarWarnings.length > 0) {
    console.log('\n   ⚠ Möjlig överlappning:');
    for (const w of similarWarnings) {
      console.log(`     ${w}`);
    }
    console.log('   (Varning, publicering fortsätter. Granska manuellt.)');
  }

  // 4. Förbered datafiler i minnet
  console.log('\n4. Förbereder datafiler...');
  const dataWrites = prepareDataFiles(promptData, formatted.slug);

  // 5. Skriv allt i en batch, prompt-fil först (behövs för manifest-scan)
  console.log('\n5. Skriver alla filer...');
  const newFiles = [];       // Filer som inte fanns innan, raderas vid rollback
  const backups = new Map(); // Befintliga filer, återställs vid rollback

  // Säker skrivning: tempfil + rename för atomicitet
  function safeWrite(filePath, content) {
    const tmpPath = filePath + '.tmp';
    fs.writeFileSync(tmpPath, content, 'utf8');
    fs.renameSync(tmpPath, filePath);
  }

  try {
    // Skapa kategori-mapp om den saknas
    const catDir = path.dirname(promptFilePath);
    if (!fs.existsSync(catDir)) {
      fs.mkdirSync(catDir, { recursive: true });
    }

    // Skriv prompt-fil (alltid ny)
    safeWrite(promptFilePath, formatted.content);
    newFiles.push(promptFilePath);
    console.log(`   Skapad: ${promptFilePath}`);

    // Bygg och skriv manifest (kräver att prompt-filen finns på disk)
    const manifestResult = prepareManifest(promptFilePath);
    const manifestPath = manifestResult.write.path;
    if (fs.existsSync(manifestPath)) {
      backups.set(manifestPath, fs.readFileSync(manifestPath, 'utf8'));
    } else {
      newFiles.push(manifestPath);
    }
    safeWrite(manifestPath, manifestResult.write.content);
    console.log(`   ${manifestResult.stats.categories} kategorier, ${manifestResult.stats.totalPrompts} prompts totalt.`);

    // Skriv datafiler
    for (const w of dataWrites) {
      if (fs.existsSync(w.path)) {
        backups.set(w.path, fs.readFileSync(w.path, 'utf8'));
      } else {
        newFiles.push(w.path);
      }
      safeWrite(w.path, w.content);
    }
    console.log('   ratings.json och sources.json uppdaterade.');

    // 6. Sammanfattning
    console.log('\n' + '='.repeat(60));
    console.log('\nPublicerad!');
    console.log(`  Fil: ${promptFilePath}`);
    console.log(`  Totalt prompts: ${manifestResult.stats.totalPrompts}`);
    console.log('\nFöreslaget nästa steg:');
    console.log(`  git add content/ data/ && git commit -m "feat: ny prompt, ${promptData.title}"`);

  } catch (err) {
    // Rollback: återställ befintliga filer, radera nya
    console.error(`\n   Fel vid skrivning: ${err.message}`);
    console.error('   Rollback, återställer...');
    for (const [filePath, original] of backups) {
      try {
        fs.writeFileSync(filePath, original, 'utf8');
        console.error(`   Återställd: ${filePath}`);
      } catch { /* best effort */ }
    }
    for (const f of newFiles) {
      try {
        if (fs.existsSync(f)) {
          fs.unlinkSync(f);
          console.error(`   Borttagen: ${f}`);
        }
      } catch { /* filen kanske inte skapades */ }
    }
    // Rensa eventuella kvarvarande .tmp-filer
    for (const f of [...newFiles, ...backups.keys()]) {
      try { fs.unlinkSync(f + '.tmp'); } catch { /* ignorera */ }
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { verifyContent, prepareDataFiles, prepareManifest };
