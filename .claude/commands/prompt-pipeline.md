# Prompt Pipeline

Kör hela pipelinen för att lägga till nya prompts i Promptbiblioteket.

## Steg

### 1. Insamling
Beskriv prompten du vill lägga till:
- **Källa:** Var hittade du den? (URL, eget skapande, etc.)
- **Originalspråk:** Svenska eller annat?
- **Yrkeskategori:** Vilken av de 10 kategorierna?

### 2. Granskning
Använd rating-schemat i `pipeline/2-evaluate/rating-schema.yaml`:
- Tydlighet (1-5)
- Specificitet (1-5)
- Överförbarhet (1-5)
- Innovation (1-5)
- Testbarhet (1-5)

Beräkna viktad rating. Prompten måste nå >= 3.0 för publicering.

### 3. Översättning (om behövs)
Om källspråket inte är svenska:
- Översätt till korrekt svenska
- Anpassa till svensk yrkeskontext
- Kontrollera att alla å, ä, ö är korrekta

### 4. Formatering
Kör format-prompt.js:
```bash
node pipeline/4-publish/format-prompt.js --json '{
  "title": "...",
  "slug": "...",
  "category": "...",
  "prompt": "...",
  "purpose": "...",
  "usage": "...",
  "tags": ["...", "..."],
  "source_url": "...",
  "source_author": "...",
  "source_lang": "...",
  "rating": 4.2,
  "tested_models": ["claude-4", "gpt-4o"],
  "tested_date": "2026-02-15",
  "test_results": [
    {"model": "Claude 4", "score": 4, "comment": "..."},
    {"model": "GPT-4o", "score": 3, "comment": "..."}
  ]
}'
```

### 5. Verifiering
```bash
node pipeline/verify-prompts.js --verbose
```

### 6. Manifest-uppdatering
```bash
node pipeline/4-publish/update-manifest.js
```

### 7. Commit
Committa prompt-filen, uppdaterat manifest och eventuell sources.json.

## Input
$ARGUMENTS
