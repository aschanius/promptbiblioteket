# Promptbiblioteket: Projektinstruktioner

## Om projektet
Open source promptbibliotek för svenska yrkesverksamma, under Teknikministeriet.
Sajt: https://prompts.teknikministeriet.se

## PUBLIKT REPO: läs detta först

Repot är **publikt** på GitHub sedan 2026-07-10. Allt som committas blir omedelbart läsbart för vem som helst: filinnehåll, commit-meddelanden och hela historiken. Denna fil är också publik.

- Committa ALDRIG persondata, kundnamn, priser/avtal, credentials eller interna system-detaljer. Enda godkända infra-referenser: SSH-aliaset `bahnhof-prod` och deploy-sökvägen `/var/www/prompts.teknikministeriet.se`.
- Arbetsanteckningar, planer och candid resonemang bor i `.claude/plans/` som är **gitignorad**. Lägg aldrig sådant i tracked filer.
- `.serena/` är lokal verktygskonfig och gitignorad.
- Commit-meddelanden är publika: beskriv vad som ändrats, utan interna resonemang.
- Före push av något du är osäker på: kör `gitleaks git --no-banner .` (0 riktiga fynd krävs) och läs diffen med publika ögon.
- `main` är skyddad via ruleset: externa bidrag går via fork + PR som repo-ägaren godkänner (CODEOWNERS). Direktpush är förbehållet repo-ägaren.
- Nya gitignore-undantag eller nya toppnivåfiler: tänk "blir detta publikt?" innan commit.

## Regler
- **Alla texter på korrekt svenska med å, ä, ö.** Inga ASCII-approximationer.
- **Varje prompt måste testas** mot minst en LLM innan publicering.
- **Rating-schema med 5 dimensioner** (tydlighet, specificitet, överförbarhet, innovation, testbarhet).
- **Prompts under 3.0 i snittrating avvisas.**
- **Rating är kvalitetsmärkning, inte betygsättning.** Prompten möter ribban eller möter den inte. Stanna inte på 4.2 vs 4.3-precision.
- **Vid adaption av extern prompt:** behåll original `source_author` och `source_url`, markera anpassningen i `## Syfte` (t.ex. "strukturerad enligt Promptbibliotekets mall av Teknikministeriet").

## Struktur
- `content/prompts/<kategori>/`: Prompt-filer (.md) per yrkeskategori
- `content/prompts/index.json`: Manifest med alla kategorier och prompts
- `pipeline/`: Scripts för kvalitetssäkring och publicering
- `data/`: Ratings, källor, metadata
- `site/`: Astro-sajt (statisk, Pagefind-sök)
- `scripts/deploy.sh`: Deploy till produktion

## 10 yrkeskategorier

| ID | Namn |
|----|------|
| `ekonomi-finans` | Ekonomi & finans |
| `ledarskap-strategi` | Ledarskap & strategi |
| `juridik-compliance` | Juridik & compliance |
| `administration-ea` | Administration & EA |
| `utbildning-pedagogik` | Utbildning & pedagogik |
| `marknadsforing-kommunikation` | Marknadsföring & kommunikation |
| `vard-omsorg` | Vård & omsorg |
| `hr-rekrytering` | HR & rekrytering |
| `sme-entreprenorer` | SME & entreprenörer |
| `forsaljning` | Försäljning & kundrelationer |

## Kommandon

| Kommando | Syfte |
|----------|-------|
| `npm run verify` | Kvalitetskontroll på alla prompts (read-only) |
| `npm run verify -- --verbose` | Detaljerad QC med prompt-preview |
| `npm run verify -- --category <id>` | QC för en kategori |
| `npm run generate -- --topic "Ämne" --category <id>` | Generera ny prompt via meta-prompt |
| `npm run generate -- --topic "Ämne" --category <id> --manual` | Meta-prompt till stdout (kopiera till chattbot) |
| `npm run pipeline -- pipeline/inbox/<fil>.json` | Publicera prompt från inbox |
| `npm run format -- <json-fil>` | Formatera JSON till .md |
| `npm run manifest` | Regenerera index.json |
| `npm run build` | Verify + bygga sajt |
| `npm run dev` | Lokal dev-server |
| `npm run preview` | Förhandsgranska bygge |
| `./scripts/deploy.sh` | Deploy till produktion (verify → build → rsync) |

## Slash command
- `/prompt-pipeline`: Interaktiv guide genom hela pipeline-flödet (se `.claude/commands/prompt-pipeline.md`)

## Pipeline-flöde

### 1. Generera
`npm run generate` skapar en inbox-JSON i `pipeline/inbox/`. Med `--manual` fås meta-prompten till stdout.

### 2. Granska
Öppna JSON-filen i `pipeline/inbox/`. Kontrollera titel, tags, promptkvalitet, svenska tecken.

### 3. Publicera
`npm run pipeline -- pipeline/inbox/<fil>.json` kör hela kedjan:
1. Formaterar JSON till .md i rätt kategori-mapp
2. Verifierar mot kvalitetskrav
3. Uppdaterar index.json
4. Uppdaterar data/ratings.json + data/sources.json

### 4. Verifiera
`npm run verify -- --verbose`: bekräfta att allt är OK.

### 5. Deploy
`./scripts/deploy.sh`: bygger och synkar till produktion.

## Hosting och deploy
- **Server:** bahnhof-prod (`/var/www/prompts.teknikministeriet.se`)
- **Typ:** Statisk sajt (Astro 7 + nginx), Pagefind för sökning
- **Deploy:** `./scripts/deploy.sh`: manuell, verify → build → rsync
- **SSL:** Let's Encrypt via Certbot
- **Ingen CI/CD**: deploy sker från lokal maskin

## Beroendeuppdateringar (Dependabot)

Konfig: `.github/dependabot.yml`. Minor och patch grupperas till en veckovis PR
per ekosystem (måndag 07:00). Säkerhetsuppdateringar grupperas inte, de kommer
som en PR per paket direkt när en advisory publiceras.

Eftersom repot saknar CI måste varje PR testas lokalt före merge:

```bash
gh pr checkout <nr>
cd site && npm install && npm audit   # ska ge 0 vulnerabilities
npm run build                         # ska ge 511 HTML-sidor, 133 indexerade
```

Efter merge: `git pull`, `npm install`, sedan `./scripts/deploy.sh`.

Tre fallgropar, alla bekräftade i skarpt läge:

- **PR:er skapade före en tidigare merge måste rebasas** (`@dependabot rebase`)
  innan de mergas. `MERGEABLE` från GitHub betyder bara att det saknas
  textkonflikt, inte att innehållet är säkert: en äldre `package-lock.json`
  kan rulla tillbaka redan åtgärdade sårbarheter. Kontrollera alltid med
  `npm audit` på PR-branchen, inte bara att bygget går igenom.
- **Rensa lokala dependabot-brancher mellan tester.** Dependabot force-pushar
  vid rebase, vilket får `gh pr checkout` att falla med `exit status 128` och
  lämna kvar den gamla branchen. Testet körs då tyst på fel kod.
  Fix: `git branch -D dependabot/...` och checka ut på nytt.
- **`npm install` kan ge lock-drift på `libc`-fält** beroende på npm-version.
  Den ändringen ska inte committas: `git checkout site/package-lock.json`.

## Kvalitetskontroller (verify)

Verify kör 9 kontroller per prompt:

| Kontroll | Allvar | Vikt |
|----------|--------|------|
| Placeholders `[...]` | info | 1 |
| Tydlig rollbeskrivning | warning | 2 |
| Tillräcklig längd (>= 50 tecken) | error | 3 |
| Rimlig längd (<= 2000 tecken) | warning | 1 |
| Handlingsbar instruktion | warning | 2 |
| Svenska tecken (åäö) | warning | 2 |
| Inga ASCII-approximationer | error | 3 |
| Obligatoriska sektioner (# Roll, # Uppgift) | warning | 3 |
| Avslutas med skiljetecken | info | 1 |

Frontmatter valideras separat: obligatoriska fält (title, slug, category, tags), kategori-ID, rating-intervall, slug-format.

## Prompt-fil format

Varje .md i content/prompts/ har YAML-frontmatter:
```yaml
title: "Promptens titel"
slug: prompt-slug
category: kategori-id
subcategory: valfri
source_author: "Upphovsperson"
source_url: "https://..."
source_lang: en/sv
rating: 4.2          # 1.0–5.0, krävs innan publicering
tested_models: [claude-4, gpt-4o]
tested_date: "2026-01-15"
tags: [tag1, tag2]
```

Sedan sektioner: `## Syfte`, `## Prompt` (i ```txt-block med `# Roll`, `# Uppgift` som minimum), `## Användning`, `## Testresultat`.
