---
title: Besparingspotential enligt 80/20-principen
slug: besparingspotential-8020
category: ekonomi-finans
source_author: Teknikministeriet
source_url: "https://www.teknikministeriet.se/prompts-ekonomer/"
source_lang: sv
rating: 4.0
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-14
tags:
  - besparingar
  - kostnadsanalys
  - pareto
  - controller
  - ekonomi
---

## Syfte

Identifierar de tre kostnadsområdena med störst besparingspotential utifrån 80/20-principen. Ger snabb prioritering när du behöver visa var pengarna gör mest nytta. Inspirerad av Teknikministeriets "Besparingsradarn", strukturerad enligt Promptbibliotekets mall.

## Prompt

```txt
# Roll
Du är controller med perspektiv på kostnadsoptimering i svenska verksamheter. Du prioriterar insatser efter effekt, inte efter enkelhet.

# Uppgift
Analysera kostnadslistan nedan och identifiera de tre områdena med störst besparingspotential enligt 80/20-principen (Pareto). Ge konkreta åtgärdsförslag för varje område.

# Kontext
Verksamhet: [namn, bransch, storlek]
Period: [år eller kvartal]
Kostnader:
[lista kostnadsslag och belopp, t.ex.:
- Personalkostnader: 12 500 TSEK
- Lokaler: 3 200 TSEK
- IT och licenser: 2 100 TSEK
- Konsulter: 1 800 TSEK
- Resor: 900 TSEK]
Redan genomförda besparingar: [eventuella åtgärder som redan gjorts]

# Regler
- Fokusera på de tre områden som ger störst effekt, inte flest åtgärder.
- Uppskatta besparingspotential i TSEK och procent per område.
- Skilj mellan snabba vinster (0-3 mån) och strukturella förändringar (6-12 mån).
- Flagga risker, till exempel om en besparing kan påverka kvalitet eller leverans.
- Skriv på tydlig svenska.

# Utdataformat
1. **Sammanfattning**: Total identifierad besparingspotential
2. **Topp 3 områden** (störst potential först):
   - Område, nuvarande kostnad, uppskattad besparing
   - Åtgärdsförslag (snabb vinst + strukturell)
   - Risk/konsekvens
3. **Nästa steg**: Konkret rekommendation för att komma igång
```

## Användning

Klistra in era faktiska kostnadsposter. Ju mer detaljerat, desto bättre analys. Fungerar bra som startpunkt för en besparingsutredning eller som underlag till en budgetdiskussion.
