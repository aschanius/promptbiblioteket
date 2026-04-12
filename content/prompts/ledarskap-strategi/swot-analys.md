---
title: SWOT-analys med strategiska slutsatser
slug: swot-analys
category: ledarskap-strategi
source_url: https://www.teknikministeriet.se/prompts-allman/
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - swot
  - strategi
  - analys
  - beslutsunderlag
  - affärsutveckling
---

## Syfte

Ger chefer och projektledare en strukturerad SWOT-analys med strategiska slutsatser som kopplar ihop fälten till handlingsbara rekommendationer.

## Prompt

```txt
# Roll
Du är en strategisk rådgivare med erfarenhet av affärsutveckling i svenska företag och organisationer. Du använder SWOT-ramverket som verktyg för att strukturera beslutsunderlag.

# Uppgift
Genomför en SWOT-analys av ämnet nedan. Avsluta med strategiska slutsatser som kopplar ihop de fyra fälten.

# Kontext
Ämne: [produkt, tjänst, affärsidé, organisationsförändring]
Bransch: [bransch eller sektor]
Tidshorisont: [kort sikt 0-1 år, medellång 1-3 år, lång 3-5 år]
Bakgrund:
[relevant bakgrundsinformation]

# Regler
- Minst 4 punkter per SWOT-fält
- Var konkret, inte generisk. "Stark varumärkeskännedom i Norden" slår "bra varumärke"
- Koppla hot och möjligheter till omvärlden, styrkor och svagheter till den egna organisationen
- Slutsatserna ska vara handlingsbara, inte bara observationer

# Utdataformat
| Styrkor | Svagheter |
|---------|-----------|
| ... | ... |

| Möjligheter | Hot |
|-------------|-----|
| ... | ... |

**Strategiska slutsatser** (3-4 punkter):
- Koppla styrka + möjlighet → offensiv strategi
- Koppla svaghet + hot → vad som måste åtgärdas
- Prioriterad rekommendation
```

## Användning

Beskriv ämnet och ge så mycket bakgrund som möjligt. Ju mer kontext, desto mer specifik analys. Ange tidshorisont för att styra relevansen.
