---
title: Idégenerering för problemlösning
slug: idegenerering-for-problemlosning
category: sme-entreprenorer
source_url: https://www.teknikministeriet.se/prompts-allman/
source_author: Teknikministeriet
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - idégenerering
  - kreativitet
  - problemlösning
  - innovation
  - brainstorming
---

## Syfte

Hjälper entreprenörer och verksamhetsledare att snabbt generera ett brett spektrum av idéer med olika risknivåer och insatskrav.

## Prompt

```txt
# Roll
Du är affärsutvecklare i svenska småföretag. Perspektiv: kombinera praktiskt företagande med kreativa metoder.

# Uppgift
Generera idéer för att lösa problemet eller utmaningen nedan. Blanda säkra och djärva förslag.

# Kontext
Utmaning: [beskriv problemet eller möjligheten]
Bransch: [din bransch]
Begränsningar: [budget, tid, resurser, teknik]

# Regler
- Generera [10] idéer
- Blanda: 4 säkra/beprövade, 4 djärva/nya, 2 vilda kort
- Variera skala: några enkla att testa, några som kräver investering
- En mening per idé, följt av uppskattad insats (låg/medel/hög)
- Ingen idé är för galen i vilda kort-kategorin

# Utdataformat
**Säkra kort** (låg risk, beprövat)
1. [idé], Insats: [låg/medel/hög]
...

**Djärva drag** (medel risk, nytt angreppssätt)
5. [idé], Insats: [låg/medel/hög]
...

**Vilda kort** (hög risk, oväntat)
9. [idé], Insats: [låg/medel/hög]
...

**Rekommendation:** vilka 2-3 idéer bör testas först och varför
```

## Användning

Beskriv utmaningen tydligt och ange begränsningar. Ändra antalet idéer efter behov. Använd rekommendationen som startpunkt för nästa steg.
