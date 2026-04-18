---
title: "Avtals-granskaren"
slug: avtals-granskaren
category: juridik-compliance
estimated_time: "60 min"
level: medel
version: "1.0"
tags:
  - avtal
  - granskning
  - GDPR
  - juridik
  - compliance
steps:
  - prompt: avtalsjarforare
    role: "Jämför nytt avtal mot tidigare versioner eller standard"
  - prompt: gdpr-snabbkoll
    role: "Identifiera dataskyddskrav och personuppgiftshantering"
  - prompt: pub-avtal-granskning
    role: "Om avtalet berör personuppgiftsbiträde: granska PUB-specifika krav"
---

## Syfte

Systematisk granskning av avtalsutkast innan signering. Flödet fångar både de vanliga avtalsriskerna och de dataskyddsrisker som ofta faller mellan stolarna när juristen läser för kommersiell risk och dataskyddsombudet läser för GDPR, men ingen läser för helheten.

## När använd

- Inför signering av leverantörsavtal, SaaS-avtal eller samarbetsavtal
- När ny version av befintligt avtal kommer från motpart och du vill se vad som ändrats
- Vid upphandling där flera liknande avtal ska jämföras mot varandra

## Tips

- Steg 1 kräver både nuvarande utkast och referens (tidigare avtal eller mall). Utan jämförelsepunkt blir det bara en läsning
- Steg 2 ska alltid köras — även avtal som inte är \"dataskyddsavtal\" innehåller ofta personuppgifter (t.ex. kontaktpersoner, behöriga företrädare)
- Steg 3 hoppas över om avtalet inte berör personuppgiftsbehandling. Osäker? Kör ändå — 5 minuter som säkrar att PUB inte behövs är väl investerad tid
