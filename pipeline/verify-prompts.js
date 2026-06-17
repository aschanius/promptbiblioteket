#!/usr/bin/env node

/**
 * Prompt Quality Control, Promptbiblioteket
 * Verifierar alla AI-prompts i content/prompts/ mot kvalitetskrav.
 *
 * Baserad på Vardagshackers verify-prompts.js, utökad med:
 * - Rating-schema (5 dimensioner)
 * - Frontmatter-validering
 * - Svenska tecken-kontroll (åäö)
 * - Kategori-validering
 *
 * Användning: node pipeline/verify-prompts.js [--category <id>] [--verbose]
 *
 * READ-ONLY, gör inga ändringar
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { VALID_CATEGORIES } = require('./config');

const { CONTENT_DIR } = require('./config');
const RATING_THRESHOLD = 3.0;
const MIN_PROMPT_LENGTH = 50;
const MAX_PROMPT_LENGTH = 2000;

const REQUIRED_SECTIONS = ['Roll', 'Uppgift'];
const KNOWN_SECTIONS = ['Roll', 'Uppgift', 'Kontext', 'Regler', 'Steg', 'Utdataformat'];

function extractSections(promptText) {
  const sectionRegex = /^#\s+(.+)$/gm;
  const sections = [];
  let match;
  while ((match = sectionRegex.exec(promptText)) !== null) {
    sections.push(match[1].trim());
  }
  return sections;
}

// Parsning av argument
const args = process.argv.slice(2);
const verbose = args.includes('--verbose');
const categoryFilter = args.includes('--category')
  ? args[args.indexOf('--category') + 1]
  : null;

// --- Kvalitetskontroller ---

const QUALITY_CHECKS = {
  hasPlaceholder: {
    test: (prompt) => /\[.*?\]/.test(prompt),
    message: 'Innehåller placeholders [...]',
    severity: 'info',
    weight: 1
  },
  hasClearRole: {
    test: (prompt) => {
      const sections = extractSections(prompt);
      const hasRollSection = sections.some(s => s.toLowerCase() === 'roll');
      if (!hasRollSection) return false;
      // Roll-sektionen ska innehålla perspektiv eller domänindikator
      const rollMatch = prompt.match(/# Roll\n([\s\S]*?)(?=\n#\s|\n```|$)/);
      if (!rollMatch) return false;
      const rollText = rollMatch[1].trim();
      return rollText.length >= 20; // Roll måste ha substans
    },
    message: 'Roll-sektion med perspektiv och domän',
    severity: 'warning',
    weight: 2
  },
  hasContext: {
    test: (prompt) => prompt.length >= MIN_PROMPT_LENGTH,
    message: `Tillräcklig längd (>= ${MIN_PROMPT_LENGTH} tecken)`,
    severity: 'error',
    weight: 3
  },
  notTooLong: {
    test: (prompt) => prompt.length <= MAX_PROMPT_LENGTH,
    message: `Rimlig längd (<= ${MAX_PROMPT_LENGTH} tecken)`,
    severity: 'warning',
    weight: 1
  },
  hasActionableTask: {
    test: (prompt) => /ställ|förklara|hjälp|skapa|ge|föreslå|identifiera|analysera|sammanfatta|skriv|lista|jämför|granska/i.test(prompt),
    message: 'Innehåller handlingsbar instruktion',
    severity: 'warning',
    weight: 2
  },
  hasSwedishChars: {
    test: (prompt) => /[åäöÅÄÖ]/.test(prompt),
    message: 'Innehåller svenska tecken (åäö)',
    severity: 'warning',
    weight: 2
  },
  noAsciiApproximations: {
    test: (prompt) => {
      // Kontrollera vanliga ASCII-approximationer av svenska ord.
      // Lookbehind/lookahead inkluderar svenska tecken eftersom JavaScripts
      // \b bara ser ASCII-word-chars, annars triggar t.ex. "frågor" (där "å"
      // räknas som non-word och skapar falsk ordgräns före "gor").
      const suspicious = /(?<![\wåäöÅÄÖ])(ar|pa|for|las|gor|fran|atgarder)(?![\wåäöÅÄÖ])/i.test(prompt);
      return !suspicious;
    },
    message: 'Inga ASCII-approximationer av svenska tecken',
    severity: 'error',
    weight: 3
  },
  hasRequiredSections: {
    test: (prompt) => {
      const sections = extractSections(prompt);
      return REQUIRED_SECTIONS.every(req =>
        sections.some(s => s.toLowerCase() === req.toLowerCase())
      );
    },
    message: 'Innehåller obligatoriska sektioner (# Roll, # Uppgift)',
    severity: 'warning',
    weight: 3
  },
  endsCleanly: {
    test: (prompt) => /[.!?:]$/.test(prompt.trim()),
    message: 'Avslutas med skiljetecken',
    severity: 'info',
    weight: 1
  }
};

// --- Frontmatter-validering ---

const REQUIRED_FRONTMATTER = ['title', 'slug', 'category', 'tags'];
const OPTIONAL_FRONTMATTER = [
  'subcategory', 'source_url', 'source_author', 'source_lang',
  'rating', 'tested_models', 'tested_date', 'version',
  'updated_at', 'changelog'
];

function validateFrontmatter(data, filename) {
  const issues = [];

  for (const field of REQUIRED_FRONTMATTER) {
    if (!data[field]) {
      issues.push({ severity: 'error', message: `Saknar obligatoriskt fält: ${field}` });
    }
  }

  if (data.category && !VALID_CATEGORIES.includes(data.category)) {
    issues.push({
      severity: 'error',
      message: `Ogiltig kategori: "${data.category}". Giltiga: ${VALID_CATEGORIES.join(', ')}`
    });
  }

  if (data.tags && !Array.isArray(data.tags)) {
    issues.push({ severity: 'error', message: 'tags måste vara en lista' });
  }

  if (data.rating && (data.rating < 1 || data.rating > 5)) {
    issues.push({ severity: 'error', message: `Rating utanför intervall: ${data.rating} (ska vara 1-5)` });
  }

  if (data.tested_models && !Array.isArray(data.tested_models)) {
    issues.push({ severity: 'warning', message: 'tested_models bör vara en lista' });
  }

  if (data.slug && !/^[a-z0-9-]+$/.test(data.slug)) {
    issues.push({ severity: 'warning', message: `Slug innehåller ogiltiga tecken: "${data.slug}"` });
  }

  // Changelog-validering: varje post måste ha version, date, change
  if (data.changelog) {
    if (!Array.isArray(data.changelog)) {
      issues.push({ severity: 'error', message: 'changelog måste vara en lista' });
    } else {
      data.changelog.forEach((entry, i) => {
        if (!entry.version || !entry.date || !entry.change) {
          issues.push({
            severity: 'error',
            message: `changelog[${i}] saknar obligatoriska fält (version, date, change)`
          });
        }
      });
    }
  }

  // Om version > 1.0 ska det finnas en changelog som dokumenterar ändringarna
  if (data.version && data.version !== '1.0' && /^\d/.test(data.version)) {
    const versionNum = parseFloat(data.version);
    if (versionNum > 1.0 && (!data.changelog || data.changelog.length === 0)) {
      issues.push({
        severity: 'warning',
        message: `version ${data.version} saknar changelog, dokumentera vad som ändrats`
      });
    }
  }

  return issues;
}

// --- Prompt-extraktion ---

function extractPrompt(body) {
  // Format: ```txt block efter "## Prompt"
  const txtMatch = body.match(/## Prompt\s*\n+```txt\n([\s\S]*?)```/);
  if (txtMatch) {
    return { prompt: txtMatch[1].trim(), format: 'code-fence-txt' };
  }

  // Alternativt format: ```-block utan språkangivelse
  const codeMatch = body.match(/## Prompt\s*\n+```\n([\s\S]*?)```/);
  if (codeMatch) {
    return { prompt: codeMatch[1].trim(), format: 'code-fence' };
  }

  // Blockquote-format
  const bqMatch = body.match(/## Prompt\s*\n+>([\s\S]*?)(?:\n\n##|\n\n$|$)/);
  if (bqMatch) {
    return { prompt: bqMatch[1].replace(/^>\s*/gm, '').trim(), format: 'blockquote' };
  }

  return null;
}

// --- Analys ---

function analyzePrompt(prompt) {
  const results = {
    length: prompt.length,
    checks: {},
    score: 0,
    maxScore: 0,
    issues: []
  };

  for (const [checkName, check] of Object.entries(QUALITY_CHECKS)) {
    const passed = check.test(prompt);
    results.checks[checkName] = {
      passed,
      message: check.message,
      severity: check.severity
    };

    results.maxScore += check.weight;
    if (passed) {
      results.score += check.weight;
    } else if (check.severity !== 'info') {
      results.issues.push({ check: checkName, ...check });
    }
  }

  return results;
}

// --- Huvudkörning ---

function findPromptFiles(dir, category) {
  const files = [];
  const categories = category ? [category] : VALID_CATEGORIES;

  for (const cat of categories) {
    const catDir = path.join(dir, cat);
    if (!fs.existsSync(catDir)) continue;

    const entries = fs.readdirSync(catDir)
      .filter(f => f.endsWith('.md') && !f.startsWith('_'));

    for (const entry of entries) {
      files.push({
        path: path.join(catDir, entry),
        filename: entry,
        category: cat
      });
    }
  }

  return files;
}

async function main() {
  console.log('Prompt Quality Control, Promptbiblioteket\n');
  console.log('='.repeat(70));

  if (categoryFilter) {
    if (!VALID_CATEGORIES.includes(categoryFilter)) {
      console.error(`\nOgiltig kategori: "${categoryFilter}"`);
      console.error(`Giltiga kategorier: ${VALID_CATEGORIES.join(', ')}`);
      process.exit(1);
    }
    console.log(`\nFiltrerar: ${categoryFilter}\n`);
  }

  const files = findPromptFiles(CONTENT_DIR, categoryFilter);

  if (files.length === 0) {
    console.log('\nInga prompt-filer hittade.');
    console.log(`Sökväg: ${CONTENT_DIR}`);
    if (categoryFilter) {
      console.log(`Kategori: ${categoryFilter}`);
    }
    process.exit(0);
  }

  const results = [];
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const file of files) {
    const content = fs.readFileSync(file.path, 'utf8');
    let parsed;

    try {
      parsed = matter(content);
    } catch (err) {
      console.log(`\n  ${file.filename}`);
      console.log(`   Frontmatter-fel: ${err.message}`);
      totalErrors++;
      continue;
    }

    const { data: frontmatter, content: body } = parsed;

    // Frontmatter-validering
    const fmIssues = validateFrontmatter(frontmatter, file.filename);
    const fmErrors = fmIssues.filter(i => i.severity === 'error').length;
    const fmWarnings = fmIssues.filter(i => i.severity === 'warning').length;

    // Prompt-extraktion
    const extracted = extractPrompt(body);

    if (!extracted) {
      console.log(`\n  ${frontmatter.title || file.filename}`);
      console.log(`   ${file.category}/${file.filename}`);
      console.log('   Ingen prompt hittad (saknas ## Prompt-sektion med kodblock)');
      totalErrors++;
      continue;
    }

    const { prompt, format } = extracted;
    const analysis = analyzePrompt(prompt);

    const scorePercent = ((analysis.score / analysis.maxScore) * 100).toFixed(0);
    const promptErrors = analysis.issues.filter(i => i.severity === 'error').length + fmErrors;
    const promptWarnings = analysis.issues.filter(i => i.severity === 'warning').length + fmWarnings;

    totalErrors += promptErrors;
    totalWarnings += promptWarnings;

    results.push({
      file,
      frontmatter,
      prompt,
      format,
      analysis,
      fmIssues,
      scorePercent: parseInt(scorePercent)
    });
  }

  // Sortera: lägst score först
  results.sort((a, b) => a.scorePercent - b.scorePercent);

  // Skriv ut resultat
  console.log(`\nResultat (${results.length} prompts):\n`);

  for (const r of results) {
    const icon = r.scorePercent >= 80 ? 'OK' : r.scorePercent >= 60 ? 'VARNING' : 'FEL';

    console.log(`  [${icon}] ${r.frontmatter.title || r.file.filename}`);
    console.log(`       ${r.file.category}/${r.file.filename}`);
    console.log(`       Score: ${r.analysis.score}/${r.analysis.maxScore} (${r.scorePercent}%)`);
    console.log(`       Längd: ${r.analysis.length} tecken | Format: ${r.format}`);

    if (r.frontmatter.rating) {
      console.log(`       Rating: ${r.frontmatter.rating}/5`);
    }

    // Visa problem
    const allIssues = [...r.fmIssues, ...r.analysis.issues.map(i => ({
      severity: i.severity,
      message: i.message
    }))];

    if (allIssues.length > 0 && (verbose || allIssues.some(i => i.severity === 'error'))) {
      for (const issue of allIssues) {
        const prefix = issue.severity === 'error' ? 'FEL' : 'VARNING';
        console.log(`       [${prefix}] ${issue.message}`);
      }
    }

    if (verbose) {
      const preview = r.prompt.substring(0, 80).replace(/\n/g, ' ');
      console.log(`       Prompt: "${preview}..."`);
    }

    console.log('');
  }

  // Sammanfattning
  console.log('='.repeat(70));
  console.log('\nSammanfattning:\n');
  console.log(`  Totalt: ${results.length} prompts`);
  console.log(`  Fel: ${totalErrors} | Varningar: ${totalWarnings}`);

  if (results.length > 0) {
    const avgScore = results.reduce((sum, r) => sum + r.scorePercent, 0) / results.length;
    console.log(`  Genomsnittlig score: ${avgScore.toFixed(1)}%`);

    const excellent = results.filter(r => r.scorePercent >= 80).length;
    const good = results.filter(r => r.scorePercent >= 60 && r.scorePercent < 80).length;
    const needsWork = results.filter(r => r.scorePercent < 60).length;

    console.log(`  Utmärkta (>= 80%): ${excellent}`);
    console.log(`  Bra (60-79%): ${good}`);
    console.log(`  Behöver förbättras (< 60%): ${needsWork}`);
  }

  console.log('');

  // Exit code baserat på antal fel
  if (totalErrors > 0) {
    console.log(`${totalErrors} fel hittade. Åtgärda dessa innan publicering.\n`);
    process.exit(1);
  }

  console.log('Alla kontroller godkända.\n');
}

if (require.main === module) {
  main().catch(err => {
    console.error('Oväntat fel:', err.message);
    process.exit(1);
  });
}

module.exports = { analyzePrompt, validateFrontmatter, extractPrompt, extractSections, findPromptFiles, QUALITY_CHECKS };
