# Promptbiblioteket — Projektinstruktioner

## Om projektet
Open source promptbibliotek för svenska yrkesverksamma, under Teknikministeriet.
Sajt: prompter.teknikministeriet.se (planerad).

## Regler
- **Alla texter på korrekt svenska med å, ä, ö.** Inga ASCII-approximationer.
- **Varje prompt måste testas** mot minst en LLM innan publicering.
- **Rating-schema med 5 dimensioner** (tydlighet, specificitet, överförbarhet, innovation, testbarhet).
- **Prompts under 3.0 i snittrating avvisas.**

## Struktur
- `content/prompts/<kategori>/` — Prompt-filer (.md) per yrkeskategori
- `content/prompts/index.json` — Manifest med alla kategorier och prompts
- `pipeline/` — Scripts för kvalitetssäkring och publicering
- `data/` — Ratings, källor, metadata

## Pipeline
1. **Scrape/insamling** → `pipeline/inbox/`
2. **Granskning** → `pipeline/2-evaluate/`
3. **Översättning** → `pipeline/3-translate/`
4. **Publicering** → `pipeline/4-publish/`

## Kommando
- `node pipeline/verify-prompts.js` — Kvalitetskontroll på alla prompts
- `node pipeline/4-publish/format-prompt.js` — Formatera en ny prompt
- `node pipeline/4-publish/update-manifest.js` — Uppdatera index.json

## Prompt-fil format
Varje .md i content/prompts/ har frontmatter med: title, slug, category, subcategory, tags, rating, tested_models, tested_date. Sedan sektioner: Syfte, Prompt (i ```txt-block), Användning, Testresultat.
