#!/usr/bin/env node

/**
 * Update Manifest — Uppdaterar index.json baserat på befintliga prompt-filer.
 *
 * Skannar content/prompts/ och bygger om manifestet.
 * Bevarar manuellt inmatad metadata i index.json (t.ex. descriptions).
 *
 * Användning: node pipeline/4-publish/update-manifest.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(__dirname, '../../content/prompts');
const MANIFEST_PATH = path.join(CONTENT_DIR, 'index.json');

function loadCurrentManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    return { version: '1.0.0', categories: [], total_prompts: 0 };
  }
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
}

function scanPrompts() {
  const categories = [];
  const catDirs = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const catId of catDirs) {
    const catDir = path.join(CONTENT_DIR, catId);

    // Läs _meta.yaml om den finns
    const metaPath = path.join(catDir, '_meta.yaml');
    let catMeta = { id: catId, title: catId };
    if (fs.existsSync(metaPath)) {
      const yaml = require('yaml');
      catMeta = yaml.parse(fs.readFileSync(metaPath, 'utf8'));
    }

    // Hitta prompt-filer
    const promptFiles = fs.readdirSync(catDir)
      .filter(f => f.endsWith('.md') && !f.startsWith('_'));

    const prompts = [];
    for (const file of promptFiles) {
      const content = fs.readFileSync(path.join(catDir, file), 'utf8');
      try {
        const { data: fm } = matter(content);
        prompts.push({
          slug: fm.slug || file.replace('.md', ''),
          title: fm.title || file.replace('.md', ''),
          file: `${catId}/${file}`,
          rating: fm.rating || null,
          tags: fm.tags || [],
          tested_models: fm.tested_models || [],
          tested_date: fm.tested_date || null
        });
      } catch (err) {
        console.error(`Varning: Kunde inte parsa ${catId}/${file}: ${err.message}`);
      }
    }

    categories.push({
      id: catMeta.id || catId,
      title: catMeta.title || catId,
      description: catMeta.description || '',
      priority: catMeta.priority || 99,
      prompt_count: prompts.length,
      prompts
    });
  }

  // Sortera efter priority om tillgänglig
  categories.sort((a, b) => (a.priority || 99) - (b.priority || 99));

  return categories;
}

function main() {
  console.log('Update Manifest — Promptbiblioteket\n');

  const currentManifest = loadCurrentManifest();
  const categories = scanPrompts();

  const totalPrompts = categories.reduce((sum, c) => sum + c.prompts.length, 0);

  const manifest = {
    version: currentManifest.version || '1.0.0',
    generated_at: new Date().toISOString(),
    categories,
    total_prompts: totalPrompts
  };

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

  console.log(`Uppdaterad: ${MANIFEST_PATH}`);
  console.log(`Kategorier: ${categories.length}`);
  console.log(`Totalt prompts: ${totalPrompts}`);

  // Visa per kategori
  for (const cat of categories) {
    const count = cat.prompts.length;
    const label = count === 0 ? '(tom)' : `${count} prompt${count > 1 ? 's' : ''}`;
    console.log(`  ${cat.title}: ${label}`);
  }

  console.log('');
}

if (require.main === module) {
  main();
}

module.exports = { scanPrompts, loadCurrentManifest };
