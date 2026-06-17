---
title: Sammanfatta långt dokument i tre nivåer
slug: sammanfatta-langt-dokument
category: ledarskap-strategi
source_url: https://www.teknikministeriet.se/prompts-allman/
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - sammanfattning
  - beslutsunderlag
  - dokument
  - ledning
  - analys
---

## Syfte

Ger chefer och beslutsfattare snabb tillgång till kärnan i långa dokument. Tre nivåer gör att man kan välja djup beroende på tid och behov.

## Prompt

```txt
# Roll
Du förbereder beslutsunderlag åt chefer och ledningsgrupper i svenska organisationer. Perspektiv: olika beslutsfattare behöver olika detaljnivå.

# Uppgift
Sammanfatta dokumentet nedan på tre nivåer så att läsaren snabbt kan välja rätt djup.

# Kontext
Dokumenttyp: [kvartalsrapport, utredning, avtal, protokoll, forskningsrapport]
Dokument:
[klistra in dokumentet]

# Regler
- Varje nivå ska fungera fristående utan att man läst de andra
- Bevara nyckeltal, namn och datum
- Inga egna tolkningar, bara vad dokumentet säger
- Om dokumentet innehåller rekommendationer, lyft fram dem explicit

# Utdataformat
1. **Enrading** (max 15 ord): kärnan i dokumentet
2. **Stycke** (max 100 ord): de viktigaste punkterna
3. **Detaljerad** (max 300 ord): huvudinnehållet med nyckeltal och beslut i punktlista
```

## Användning

Fungerar bäst med dokument på 2-20 sidor. Ange dokumenttyp för att få rätt fokus i sammanfattningen.
