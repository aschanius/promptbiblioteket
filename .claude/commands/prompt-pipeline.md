# Prompt Pipeline

Kör hela pipelinen för att generera, granska och publicera nya prompts i Promptbiblioteket.

## Flöde

### 1. Generera
```bash
npm run generate -- --topic "Ämnesbeskrivning" --category kategori-id
```
Alternativt med `--manual` för att få meta-prompten till stdout (kopiera till valfri chattbot).

### 2. Granska
Läs igenom JSON-filen i `pipeline/inbox/`. Kontrollera:
- Titel och tags
- Prompttextens kvalitet (Roll + Uppgift som minimum)
- Svenska tecken (å, ä, ö)
- Att prompten följer `pipeline/templates/prompt-template.md`

### 3. Publicera
```bash
npm run pipeline -- pipeline/inbox/<fil>.json
```
Pipeline-runnern:
1. Formaterar JSON → .md i rätt kategori-mapp
2. Kör verifiering mot kvalitetskrav
3. Uppdaterar index.json (manifest)
4. Uppdaterar data/ratings.json + data/sources.json

### 4. Verifiera
```bash
npm run verify -- --verbose
```

### 5. Committa
Committa prompt-filen, manifest och datafiler.

## 9 yrkeskategorier

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

## Kvalitetskrav

Rating >= 3.0 enligt 5 dimensioner (se `pipeline/2-evaluate/rating-schema.yaml`).
Promptmall: `pipeline/templates/prompt-template.md`.

## Input
$ARGUMENTS
