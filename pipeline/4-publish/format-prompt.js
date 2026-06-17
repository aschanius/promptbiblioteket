#!/usr/bin/env node

/**
 * Format Prompt, Skapar en prompt-fil från interaktiv input eller JSON.
 *
 * Användning:
 *   node pipeline/4-publish/format-prompt.js --json '{"title":"...","category":"...","prompt":"..."}'
 *   node pipeline/4-publish/format-prompt.js --interactive
 *
 * Genererar en .md-fil i rätt kategori-mapp med korrekt frontmatter och struktur.
 */

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const { VALID_CATEGORIES, CONTENT_DIR, slugify } = require('../config');

function formatPromptFile(data) {
  const {
    title,
    slug,
    category,
    subcategory = '',
    prompt,
    purpose = '',
    usage = '',
    source_url = '',
    source_author = '',
    source_lang = 'sv',
    tags = [],
    rating = null,
    version = '1.0',
    tested_models = [],
    tested_date = null,
    updated_at = null,
    changelog = null,
    test_results = []
  } = data;

  if (!title || !category || !prompt) {
    throw new Error('Obligatoriska fält saknas: title, category, prompt');
  }

  if (!VALID_CATEGORIES.includes(category)) {
    throw new Error(`Ogiltig kategori: "${category}". Giltiga: ${VALID_CATEGORIES.join(', ')}`);
  }

  const finalSlug = slug || slugify(title);

  // Bygg frontmatter
  const fm = {
    title,
    slug: finalSlug,
    category,
    ...(subcategory && { subcategory }),
    ...(source_url && { source_url }),
    ...(source_author && { source_author }),
    ...(source_lang && { source_lang }),
    ...(rating && { rating }),
    ...(version && { version }),
    ...(tested_models.length > 0 && { tested_models }),
    ...(tested_date && { tested_date }),
    ...(updated_at && { updated_at }),
    ...(changelog && { changelog }),
    tags
  };

  // Bygg YAML-frontmatter med yaml-paketet (säker hantering av specialtecken)
  const fmYaml = '---\n' + yaml.stringify(fm, { lineWidth: 0 }) + '---\n';

  // Bygg markdown-body
  let body = '\n';

  if (purpose) {
    body += `## Syfte\n\n${purpose}\n\n`;
  }

  body += `## Prompt\n\n\`\`\`txt\n${prompt}\n\`\`\`\n`;

  if (usage) {
    body += `\n## Användning\n\n${usage}\n`;
  }

  if (test_results.length > 0) {
    body += '\n## Testresultat\n\n';
    for (const result of test_results) {
      const stars = '\u2605'.repeat(result.score) + '\u2606'.repeat(5 - result.score);
      body += `- **${result.model}:** ${stars}: ${result.comment}\n`;
    }
  }

  return { content: fmYaml + body, slug: finalSlug, category };
}

function writePromptFile(data) {
  const { content, slug, category } = formatPromptFile(data);

  const catDir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  const filePath = path.join(catDir, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    console.error(`Filen finns redan: ${filePath}`);
    console.error('Använd en annan slug eller ta bort befintlig fil.');
    process.exit(1);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Skapad: ${filePath}`);
  return filePath;
}

// --- CLI ---

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--json')) {
    const jsonIdx = args.indexOf('--json');
    const jsonStr = args[jsonIdx + 1];

    if (!jsonStr) {
      console.error('Ange JSON efter --json');
      process.exit(1);
    }

    try {
      const data = JSON.parse(jsonStr);
      writePromptFile(data);
    } catch (err) {
      console.error('Ogiltigt JSON:', err.message);
      process.exit(1);
    }
  } else if (args.includes('--dry-run')) {
    // Skriv bara till stdout för granskning
    const jsonIdx = args.indexOf('--dry-run');
    const jsonStr = args[jsonIdx + 1];

    if (!jsonStr) {
      console.error('Ange JSON efter --dry-run');
      process.exit(1);
    }

    try {
      const data = JSON.parse(jsonStr);
      const { content } = formatPromptFile(data);
      console.log(content);
    } catch (err) {
      console.error('Fel:', err.message);
      process.exit(1);
    }
  } else {
    console.log('Format Prompt, Promptbiblioteket');
    console.log('');
    console.log('Användning:');
    console.log('  node pipeline/4-publish/format-prompt.js --json \'{"title":"...","category":"...","prompt":"..."}\'');
    console.log('  node pipeline/4-publish/format-prompt.js --dry-run \'{"title":"...","category":"...","prompt":"..."}\'');
    console.log('');
    console.log('Obligatoriska fält: title, category, prompt');
    console.log(`Giltiga kategorier: ${VALID_CATEGORIES.join(', ')}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { formatPromptFile, writePromptFile };
