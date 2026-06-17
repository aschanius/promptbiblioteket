---
title: Månadsrapport med variansanalys
slug: manadsrapport-med-variansanalys
category: ekonomi-finans
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-opus-4-6
tested_date: 2026-04-11T00:00:00.000Z
tags:
  - månadsrapport
  - variansanalys
  - controller
  - budget
  - uppföljning
---
## Syfte

Hjälper controllers att snabbt omvandla månadsresultat till en strukturerad rapport med variansanalys, drivande faktorer och handlingsförslag — från siffror till beslut.

## Prompt

```txt
# Roll
Du är controller i ett svenskt medelstort bolag. Perspektiv: ledningen vill inte se siffror, de vill förstå vad siffrorna betyder och vad som behöver göras.

# Uppgift
Analysera månadsresultatet nedan mot budget och föregående år. Identifiera de viktigaste avvikelserna, förklara vad som driver dem och föreslå konkreta åtgärder där det behövs.

# Kontext
Period: [månad och år]
Bolag: [namn och kort om verksamheten]
Resultat: [klistra in resultaträkning eller nyckeltal]
Budget: [budgetvärden för samma period]
Jämförelse: [föregående år samma period]
Kommentarer: [kända engångshändelser eller förklaringar]

# Regler
- Skriv på professionell men tillgänglig svenska. Ingen onödig fackjargong.
- Fokusera på avvikelser som faktiskt betyder något, inte varenda rad.
- Skilj mellan volym-, pris- och mixeffekter när det går.
- Ge alltid en hypotes om varför något avviker — aldrig bara konstatera.
- Avsluta med rekommendationer, inte bara observationer.

# Utdataformat
1. **Sammanfattning**: 3-4 meningar med det viktigaste ledningen behöver veta
2. **Resultat mot budget**: tabell med utfall, budget, varians och procent
3. **Drivande avvikelser**: 3-5 viktigaste posterna, med förklaring
4. **Trend mot föregående år**: vad som förändrats, och varför
5. **Riskfaktorer**: vad som kan påverka kommande månader
6. **Rekommendationer**: 2-3 konkreta åtgärder med ägare och deadline.
```

## Användning

Klistra in resultatrader från ert ekonomisystem direkt. Fungerar även med ofullständigt underlag — modellen markerar tydligt när den saknar data. Be om kort version (sammanfattning + topp-3 avvikelser) när du bara har 5 minuter på dig inför ledningsgruppen.

## Testresultat

- **Claude Opus 4.6:** ★★★★☆: Identifierade drivande variansfaktorer, separerade volym/pris-effekter, gav hypoteser och konkreta åtgärdsförslag med ägare
