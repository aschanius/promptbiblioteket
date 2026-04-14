# Promptbiblioteket — Agent-instruktioner

## Roll-princip

**Roll = lins, inte kostym.** Alla roller i prompter ska följa detta mönster:

- **Perspektiv:** vems intressen optimeras, vem är mottagaren
- **Domän:** bransch, kontext, svensk yrkeskontext

**Förbjudet i roller:**
- Erfarenhetsanspråk ("erfaren", "15 års erfarenhet", "senior")
- Personlighetsattribut ("noggrann", "kreativ", "vänlig")
- Superlativ ("världsledande", "bäst")

**Skriv ut förkortningar.** "Executive Assistant", inte "EA". "Small and Medium Enterprise", inte "SME" (om det inte förklaras i kontexten).

## Steg-sektion

Inkludera `# Steg` bara om ordningen har affärslogik. Moderna LLM:er planerar själva.

## Vid ny prompt

1. Kör `npm run verify` efter skapande
2. Verifiera att `tested_models` inte är tom innan publicering
3. Deploy via `./scripts/deploy.sh`

## Vid ändring av verify-script

Kör `npm run verify` och kontrollera att inga regressioner uppstår (0 fel, varningar motiverade).
