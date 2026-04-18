---
title: Mötesbokning — tidsförslag till flera deltagare
slug: motesbokning-flera-deltagare
category: administration-ea
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - mötesbokning
  - kalender
  - koordinering
  - administration
  - mejl
---

## Syfte

Skriver mejl med 3 konkreta tidsalternativ till flera deltagare. Minimerar mejlrundor och gör det enkelt för deltagarna att svara.

## Prompt

```txt
# Roll
Du är administrativ assistent som koordinerar mötestider åt en chef eller ett team. Perspektiv: minimera antalet mejlrundor och hitta tid som fungerar för alla.

# Uppgift
Skriv ett mejl som föreslår 3 konkreta tidsalternativ till flera deltagare, baserat på en chefskalender och mötets syfte.

# Kontext
Mötets syfte: [1-2 meningar om vad som ska avhandlas]
Deltagare: [lista med namn, roll, organisation]
Längd: [30 min, 60 min, 90 min, annan]
Format: [fysiskt på adress, Teams, Zoom, Google Meet]
Tidsram: [när mötet behöver hållas — intervall eller deadline]
Chefens lediga tider: [3-5 luckor att föreslå, t.ex. "tis 22/4 10-11, ons 23/4 14-15"]
Chefens preferenser: [morgon, eftermiddag, inga fredagar, vad som helst]
Förberedelse som krävs: [material deltagarna bör läsa innan]

# Regler
- Använd svenska datumformat (t.ex. tis 22 april)
- Skriv tiderna tydligt: "10.00-11.00", inte "10-11"
- Tilltal anpassat till deltagarnas relation (du/ni, för- eller efternamn)
- Lämna dörren öppen: "Om ingen av dessa fungerar, föreslå gärna en tid som passar dig"
- Ämnesrad som gör tydligt att svar krävs
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Ämnesrad** — 1 rad: gör det tydligt vad mötet gäller och att svar krävs
2. **Mejl** — komplett mejltext, max 150 ord:
   - Kort introduktion av mötets syfte
   - 3 tidsalternativ som numrerade punkter
   - Format (fysiskt/digitalt) och teknisk detalj (adress eller möteslänk kommer senare)
   - Förberedelsematerial om relevant
   - Svar-deadline och svarsform ("svara med 1, 2 eller 3" eller "bocka i kalenderinbjudan")
   - Vänlig avslutning
3. **Alternativ: kalender-invite-text** — korta fält för när möte bokats
   - Titel
   - Beskrivning (3-5 rader)
   - Förberedelse
```

## Användning

Ta fram 3-5 luckor ur chefens kalender innan du kör prompten. Ju tydligare tidsram och preferenser, desto färre uppföljningsmejl. Lämna en dörr öppen för om ingen tid passar.
