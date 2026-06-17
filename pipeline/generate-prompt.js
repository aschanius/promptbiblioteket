#!/usr/bin/env node

/**
 * Generate Prompt, Genererar en ny prompt via meta-prompt.
 *
 * Tar ämne + kategori, bygger en meta-prompt som instruerar Claude
 * att generera en högkvalitativ prompt, och sparar resultatet som
 * JSON i pipeline/inbox/.
 *
 * Två lägen:
 *   --manual   Skriver meta-prompten till stdout (kopiera till valfri chattbot)
 *   Standard   Pipar meta-prompten genom `claude --print` (subprocess)
 *
 * Användning:
 *   node pipeline/generate-prompt.js --topic "Budgetanalys" --category ekonomi-finans
 *   node pipeline/generate-prompt.js --topic "Budgetanalys" --category ekonomi-finans --manual
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const yaml = require('yaml');
const { VALID_CATEGORIES, CONTENT_DIR, INBOX_DIR, TEMPLATE_PATH, RATING_SCHEMA_PATH, slugify } = require('./config');

function parseArgs(argv) {
  const args = argv.slice(2);
  const result = { manual: false, topic: null, category: null };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--manual') result.manual = true;
    if (args[i] === '--topic' && args[i + 1]) result.topic = args[++i];
    if (args[i] === '--category' && args[i + 1]) result.category = args[++i];
  }

  return result;
}

function loadGoldStandard() {
  const goldPath = path.join(CONTENT_DIR, 'utbildning-pedagogik', 'forklaringsdesigner.md');
  if (!fs.existsSync(goldPath)) return null;
  return fs.readFileSync(goldPath, 'utf8');
}

function loadTemplate() {
  if (!fs.existsSync(TEMPLATE_PATH)) return null;
  return fs.readFileSync(TEMPLATE_PATH, 'utf8');
}

function loadRatingSchema() {
  if (!fs.existsSync(RATING_SCHEMA_PATH)) return null;
  return fs.readFileSync(RATING_SCHEMA_PATH, 'utf8');
}

function loadCategoryMeta(category) {
  const metaPath = path.join(CONTENT_DIR, category, '_meta.yaml');
  if (!fs.existsSync(metaPath)) return null;
  return fs.readFileSync(metaPath, 'utf8');
}

function parseRatingDimensions(ratingSchemaRaw) {
  if (!ratingSchemaRaw) return null;
  try {
    const schema = yaml.parse(ratingSchemaRaw);
    if (!schema?.dimensions || !schema?.weights) return null;
    return {
      dimensions: Object.values(schema.dimensions).map(d => ({
        title: d.title,
        description: d.description,
        weight: schema.weights[d.id] || 1.0
      })),
      thresholds: schema.thresholds || {}
    };
  } catch {
    return null;
  }
}

function buildMetaPrompt(topic, category, categoryMeta, template, ratingSchema, goldStandard) {
  const categoryTitle = categoryMeta
    ? categoryMeta.match(/title:\s*"(.+?)"/)?.[1] || category
    : category;

  let prompt = `Du ska generera en högkvalitativ AI-prompt för Promptbiblioteket, ett open source-bibliotek med AI-prompts för svenska yrkesverksamma.

## Uppgift

Skapa en prompt om "${topic}" i kategorin "${categoryTitle}" (${category}).

## Promptstruktur`;

  // Injicera template dynamiskt om den finns
  if (template) {
    prompt += `

Följ denna mall för prompttextens inre struktur:

---
${template}
---`;
  } else {
    // Fallback om mallen saknas
    prompt += `

Prompttexten (inuti txt-blocket) ska använda svenska sektionsrubriker:
- **# Roll** (obligatorisk): Vem är AI:n? Vilken expertis?
- **# Uppgift** (obligatorisk): Vad ska AI:n göra? Konkret och handlingsbart.
- **# Kontext** (valfri): Bakgrundsinformation
- **# Regler** (valfri): Begränsningar och riktlinjer
- **# Steg** (valfri): Arbetsflöde, steg-för-steg
- **# Utdataformat** (valfri): Önskat format på svaret

Använd minst Roll + Uppgift. Lägg till fler sektioner när de tillför värde.`;
  }

  // Injicera rating-dimensioner dynamiskt om schema finns
  const parsed = parseRatingDimensions(ratingSchema);
  if (parsed) {
    const publishThreshold = parsed.thresholds.publish || 4.0;
    prompt += `

## Kvalitetskrav

Prompten bedöms på ${parsed.dimensions.length} dimensioner (1-5 poäng vardera):`;
    for (let i = 0; i < parsed.dimensions.length; i++) {
      const d = parsed.dimensions[i];
      const weightNote = d.weight !== 1.0 ? ` (viktas ${d.weight}x)` : '';
      prompt += `\n${i + 1}. **${d.title}**${weightNote}: ${d.description}`;
    }
    prompt += `\n\nSikta på minst ${publishThreshold} i snittrating.`;
  } else {
    prompt += `

## Kvalitetskrav

Prompten bedöms på 5 dimensioner (1-5 poäng vardera):
1. **Tydlighet**: Entydig instruktion utan dubbelmeningar
2. **Specificitet**: Tillräckligt kontext och detaljer
3. **Överförbarhet**: Fungerar i svensk yrkeskontext (viktas 1.2x)
4. **Innovation**: Tillför något utöver det uppenbara
5. **Testbarhet**: Resultatet kan bedömas objektivt

Sikta på minst 4.0 i snittrating.`;
  }

  prompt += `

## Regler

- Skriv på korrekt svenska med å, ä, ö
- Prompttexten ska vara 100-1500 tecken
- Inkludera placeholders med [hakparenteser] där användaren ska fylla i eget innehåll
- Prompten ska vara praktisk och direkt användbar för svenska yrkesverksamma
- Definiera AI:ns roll tydligt i början
- Avsluta med skiljetecken`;

  if (goldStandard) {
    prompt += `

## Referensexempel (gold standard)

Här är en exempelprompt som representerar den kvalitetsnivå vi siktar på:

---
${goldStandard}
---`;
  }

  prompt += `

## Utdataformat

Svara med ENBART ett JSON-objekt (inget annat). Följande fält:

{
  "title": "Kort, beskrivande titel på svenska",
  "category": "${category}",
  "tags": ["tagg1", "tagg2", "tagg3"],
  "purpose": "En kort beskrivning av vad prompten gör (1-2 meningar)",
  "prompt": "Hela prompttexten med sektionsrubriker (# Roll, # Uppgift, etc.)",
  "usage": "Praktiska tips för hur man använder prompten (2-3 meningar)",
  "source_author": "Promptbiblioteket",
  "source_lang": "sv"
}`;

  return prompt;
}

function main() {
  const opts = parseArgs(process.argv);

  if (!opts.topic || !opts.category) {
    console.error('Generate Prompt, Promptbiblioteket\n');
    console.error('Användning:');
    console.error('  node pipeline/generate-prompt.js --topic "Ämne" --category kategori-id [--manual]');
    console.error('');
    console.error('Flaggor:');
    console.error('  --topic     Ämnet för prompten (obligatorisk)');
    console.error('  --category  Kategori-ID (obligatorisk)');
    console.error('  --manual    Skriv meta-prompten till stdout istället för att köra claude');
    console.error('');
    console.error(`Giltiga kategorier: ${VALID_CATEGORIES.join(', ')}`);
    process.exit(1);
  }

  if (!VALID_CATEGORIES.includes(opts.category)) {
    console.error(`Ogiltig kategori: "${opts.category}"`);
    console.error(`Giltiga: ${VALID_CATEGORIES.join(', ')}`);
    process.exit(1);
  }

  // Ladda resurser
  const template = loadTemplate();
  const ratingSchema = loadRatingSchema();
  const goldStandard = loadGoldStandard();
  const categoryMeta = loadCategoryMeta(opts.category);

  // Bygg meta-prompt
  const metaPrompt = buildMetaPrompt(
    opts.topic, opts.category, categoryMeta,
    template, ratingSchema, goldStandard
  );

  if (opts.manual) {
    console.log('--- META-PROMPT (kopiera till valfri AI-chattbot) ---\n');
    console.log(metaPrompt);
    console.log('\n--- SLUT ---');
    console.log('\nKlistra in svaret (JSON) i en fil i pipeline/inbox/ och kör:');
    console.log(`  node pipeline/run-pipeline.js pipeline/inbox/<slug>.json`);
    return;
  }

  // Kör via claude --print med execFileSync (säkert, ingen shell-injektion)
  console.log(`Genererar prompt: "${opts.topic}" (${opts.category})...\n`);

  let response;
  try {
    response = execFileSync('claude', ['--print', '-p', metaPrompt], {
      encoding: 'utf8',
      maxBuffer: 1024 * 1024,
      timeout: 120000
    });
  } catch (err) {
    console.error('Fel vid körning av claude CLI:', err.message);
    console.error('\nTips: Kör med --manual för att generera meta-prompten utan claude CLI.');
    process.exit(1);
  }

  // Försök extrahera JSON från svaret
  let promptData;
  try {
    // Hitta JSON i svaret (kan vara omgivet av text/markdown)
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Inget JSON-objekt hittades i svaret');
    }
    promptData = JSON.parse(jsonMatch[0]);
  } catch (err) {
    console.error('Kunde inte parsa JSON från svaret:', err.message);
    console.error('\nRåsvar från Claude:\n');
    console.error(response);
    console.error('\nSpara svaret manuellt i pipeline/inbox/');
    process.exit(1);
  }

  // Validera obligatoriska fält
  const required = ['title', 'category', 'prompt'];
  for (const field of required) {
    if (!promptData[field]) {
      console.error(`Saknar obligatoriskt fält i svaret: ${field}`);
      process.exit(1);
    }
  }

  // Lägg till metadata
  const slug = slugify(promptData.title);
  const outputData = {
    ...promptData,
    slug,
    status: 'pending_review',
    generated_at: new Date().toISOString(),
    generated_topic: opts.topic
  };

  // Spara till inbox
  if (!fs.existsSync(INBOX_DIR)) {
    fs.mkdirSync(INBOX_DIR, { recursive: true });
  }

  const outPath = path.join(INBOX_DIR, `${slug}.json`);
  fs.writeFileSync(outPath, JSON.stringify(outputData, null, 2) + '\n', 'utf8');

  console.log(`Genererad prompt sparad: ${outPath}`);
  console.log(`\nNästa steg:`);
  console.log(`  1. Granska: Läs igenom ${outPath}`);
  console.log(`  2. Publicera: node pipeline/run-pipeline.js ${outPath}`);
}

if (require.main === module) {
  main();
}

module.exports = { buildMetaPrompt, parseRatingDimensions };
