#!/usr/bin/env node

/**
 * Pipeline Runner — Publicerar en granskad prompt från inbox.
 *
 * Tar en JSON-fil från pipeline/inbox/, formaterar den till .md,
 * kör verifiering, uppdaterar manifest och datafiler.
 *
 * Användning:
 *   node pipeline/run-pipeline.js pipeline/inbox/budgetanalys.json
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { VALID_CATEGORIES, CONTENT_DIR, DATA_DIR } = require('./config');
const { formatPromptFile, writePromptFile } = require('./4-publish/format-prompt');
const { analyzePrompt, validateFrontmatter, extractPrompt } = require('./verify-prompts');
const { scanPrompts } = require('./4-publish/update-manifest');

function loadJson(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function verifyCreatedFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let parsed;
  try {
    parsed = matter(content);
  } catch (err) {
    return { ok: false, errors: [`Frontmatter-fel: ${err.message}`] };
  }

  const errors = [];
  const warnings = [];

  // Frontmatter-validering
  const fmIssues = validateFrontmatter(parsed.data, path.basename(filePath));
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
  }

  return { ok: errors.length === 0, errors, warnings };
}

function updateDataFiles(promptData) {
  // Uppdatera ratings.json
  const ratingsPath = path.join(DATA_DIR, 'ratings.json');
  let ratings = { ratings: [], schema_version: '1.0.0', updated_at: null };
  if (fs.existsSync(ratingsPath)) {
    ratings = JSON.parse(fs.readFileSync(ratingsPath, 'utf8'));
  }

  if (promptData.rating) {
    // Ta bort eventuell befintlig entry för samma slug
    ratings.ratings = ratings.ratings.filter(r => r.slug !== promptData.slug);
    ratings.ratings.push({
      slug: promptData.slug,
      category: promptData.category,
      rating: promptData.rating,
      rated_at: new Date().toISOString()
    });
    ratings.updated_at = new Date().toISOString();
    fs.writeFileSync(ratingsPath, JSON.stringify(ratings, null, 2) + '\n', 'utf8');
  }

  // Uppdatera sources.json
  const sourcesPath = path.join(DATA_DIR, 'sources.json');
  let sources = { sources: [], updated_at: null };
  if (fs.existsSync(sourcesPath)) {
    sources = JSON.parse(fs.readFileSync(sourcesPath, 'utf8'));
  }

  // Ta bort eventuell befintlig entry för samma slug
  sources.sources = sources.sources.filter(s => s.slug !== promptData.slug);
  sources.sources.push({
    slug: promptData.slug,
    category: promptData.category,
    source_url: promptData.source_url || null,
    source_author: promptData.source_author || null,
    source_lang: promptData.source_lang || 'sv',
    added_at: new Date().toISOString()
  });
  sources.updated_at = new Date().toISOString();
  fs.writeFileSync(sourcesPath, JSON.stringify(sources, null, 2) + '\n', 'utf8');
}

function updateManifest() {
  const categories = scanPrompts();
  const totalPrompts = categories.reduce((sum, c) => sum + c.prompts.length, 0);

  const manifestPath = path.join(CONTENT_DIR, 'index.json');
  let currentVersion = '1.0.0';
  if (fs.existsSync(manifestPath)) {
    const current = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    currentVersion = current.version || '1.0.0';
  }

  const manifest = {
    version: currentVersion,
    generated_at: new Date().toISOString(),
    categories,
    total_prompts: totalPrompts
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  return { categories: categories.length, totalPrompts };
}

function main() {
  const inputFile = process.argv[2];

  if (!inputFile) {
    console.error('Pipeline Runner — Promptbiblioteket\n');
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

  console.log('Pipeline Runner — Promptbiblioteket\n');
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

  // 2. Formatera och skriv .md
  console.log('\n2. Formaterar prompt-fil...');
  let createdPath;
  try {
    createdPath = writePromptFile(promptData);
  } catch (err) {
    console.error(`   Formateringsfel: ${err.message}`);
    process.exit(1);
  }

  // 3. Verifiera den skapade filen
  console.log('\n3. Verifierar...');
  const verification = verifyCreatedFile(createdPath);

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
    // Ta bort den skapade filen vid misslyckad verifiering
    fs.unlinkSync(createdPath);
    console.error(`\n   Borttagen: ${createdPath}`);
    console.error('   Åtgärda felen i inbox-filen och kör igen.');
    process.exit(1);
  }
  console.log('   Alla kontroller godkända.');

  // 4. Uppdatera manifest
  console.log('\n4. Uppdaterar manifest...');
  const manifestResult = updateManifest();
  console.log(`   ${manifestResult.categories} kategorier, ${manifestResult.totalPrompts} prompts totalt.`);

  // 5. Uppdatera datafiler
  console.log('\n5. Uppdaterar datafiler...');
  updateDataFiles(promptData);
  console.log('   ratings.json och sources.json uppdaterade.');

  // 6. Sammanfattning
  console.log('\n' + '='.repeat(60));
  console.log('\nPublicerad!');
  console.log(`  Fil: ${createdPath}`);
  console.log(`  Totalt prompts: ${manifestResult.totalPrompts}`);
  console.log('\nFöreslaget nästa steg:');
  console.log(`  git add content/ data/ && git commit -m "feat: ny prompt — ${promptData.title}"`);
}

if (require.main === module) {
  main();
}

module.exports = { verifyCreatedFile, updateDataFiles, updateManifest };
