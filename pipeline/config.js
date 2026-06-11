/**
 * Promptbiblioteket — Delad konfiguration
 *
 * Gemensam källa för kategorier, sökvägar och andra konstanter
 * som används av verify-prompts.js, format-prompt.js, generate-prompt.js
 * och run-pipeline.js.
 */

const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'content', 'prompts');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const INBOX_DIR = path.join(__dirname, 'inbox');
const TEMPLATE_PATH = path.join(__dirname, 'templates', 'prompt-template.md');
const RATING_SCHEMA_PATH = path.join(__dirname, '2-evaluate', 'rating-schema.yaml');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[åä]/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const VALID_CATEGORIES = [
  'ekonomi-finans',
  'ledarskap-strategi',
  'juridik-compliance',
  'administration-ea',
  'utbildning-pedagogik',
  'marknadsforing-kommunikation',
  'sme-entreprenorer',
  'hr-rekrytering',
  'vard-omsorg',
  'forsaljning'
];

module.exports = {
  slugify,
  VALID_CATEGORIES,
  ROOT_DIR,
  CONTENT_DIR,
  DATA_DIR,
  INBOX_DIR,
  TEMPLATE_PATH,
  RATING_SCHEMA_PATH
};
