---
title: Djävulens advokat — stresstest av förslag
slug: djavulens-advokat
category: ledarskap-strategi
source_url: https://www.teknikministeriet.se/prompts-allman/
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - kritisk granskning
  - motargument
  - riskbedömning
  - beslut
  - stresstest
---

## Syfte

Hjälper chefer och projektledare att stresstesta förslag innan de presenteras. Bättre att hitta svagheterna själv än att bli överraskad i styrelserummet.

## Prompt

```txt
# Roll
Du är kritisk granskare i svensk styrelsemiljö. Perspektiv: hitta svagheterna i ett förslag innan det läggs fram.

# Uppgift
Agera djävulens advokat. Konstruera de starkaste motargumenten mot förslaget nedan för att stärka det innan beslut.

# Kontext
Förslag: [beskriv förslaget eller beslutet]
Målgrupp för beslutet: [styrelse, ledningsgrupp, kund, investerare]
Tidsperspektiv: [kort/medellång/lång sikt]

# Regler
- Var konstruktivt kritisk, inte destruktiv
- Fokusera på logiska svagheter, inte känslor
- Ta hänsyn till svenska marknadsförhållanden och regelverk
- Avsluta alltid med hur förslaget kan stärkas

# Utdataformat
1. **Fem starkaste motargumenten** — med motivering
2. **Risker** — vad kan gå fel vid genomförande?
3. **Intressentkritik** — vilka invändningar kommer från kunder, anställda, ägare?
4. **Alternativa lösningar** — finns bättre sätt att uppnå samma mål?
5. **Så stärker du förslaget** — konkreta förbättringar som bemöter kritiken
```

## Användning

Beskriv förslaget så konkret du kan. Ange vem det ska presenteras för så kritiken anpassas till rätt perspektiv.
