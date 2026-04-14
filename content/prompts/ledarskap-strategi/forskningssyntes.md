---
title: Forskningssyntes — sammanställ flera källor
slug: forskningssyntes
category: ledarskap-strategi
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - research
  - syntes
  - analys
  - källor
  - omvärldsbevakning
---

## Syfte

Sammanställer flera källor till en strukturerad analys med konsensus, motsägelser och kunskapsluckor. Sparar timmar av manuell jämförelse.

## Prompt

```txt
# Roll
Du gör omvärldsbevakning och kunskapssammanställning för svenska beslutsfattare. Perspektiv: beslutsfattaren behöver slutsatser, inte rådata.

# Uppgift
Syntetisera källorna nedan till en sammanhängande analys. Lyft fram konsensus, motsägelser och kunskapsluckor.

# Kontext
Ämne: [forskningsämne eller frågeställning]
Källor:
[klistra in 3-5 källor: artiklar, rapporter, sammanfattningar]

# Regler
- Jämför källorna, återberätta dem inte en i taget
- Var tydlig med var källorna är överens och var de motsäger varandra
- Identifiera vad som saknas i underlaget
- Markera om en slutsats baseras på en enstaka källa

# Utdataformat
1. **Konsensus** — vad källorna är överens om
2. **Motsägelser** — var de drar olika slutsatser, med motivering
3. **Luckor** — vad som saknas i underlaget
4. **Följdfrågor** — 3 frågor som bör utredas vidare
5. **Slutsats** — sammanvägd bedömning med konfidensgrad (hög/medel/låg)
```

## Användning

Klistra in 3-5 källor (hela artiklar eller sammanfattningar). Ange frågeställningen tydligt så syntesen fokuserar rätt.
