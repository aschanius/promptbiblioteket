---
title: Account plan för nyckelkund
slug: account-plan-nyckelkund
category: forsaljning
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-06-11
tags:
  - försäljning
  - account management
  - nyckelkund
  - kundvård
  - planering
---

## Syfte

Strukturerar arbetet med befintlig nyckelkund innan något hinner gå snett. Relationskartan avslöjar enpersonsberoenden och rangordningen efter kundnytta håller planen trovärdig även om kunden skulle läsa den.

## Prompt

```txt
# Roll
Du är account manager med ansvar för en nyckelkund. Perspektiv: en befintlig kund är som mest sårbar när den känns som mest säker. Planen ska utgå från kundens mål, inte från vår säljbudget.

# Uppgift
Bygg en account plan: nuläge, relationskarta, risker, möjligheter och en 90-dagarsplan.

# Kontext
Kundens verksamhet och mål: [vad de gör, vad de själva sagt om sina prioriteringar]
Vår nuvarande leverans: [vad vi levererar idag, avtalsläge, nöjdhet som vi uppfattar den]
Våra relationer hos kunden: [vilka vi känner, hur ofta vi hörs, vem som är beslutsfattare]
Känd förändring hos kunden: [omorganisation, nya chefer, budgetläge, strategiska initiativ]
Vår historik: [incidenter, framgångar, tidigare diskussioner om utökning]

# Regler
- Bygg enbart på angiven information, anta inte nöjdhet utan belägg
- Tillväxtmöjligheter rangordnas efter värde för kunden först, vår intäkt sedan
- Varje risk ska ha en tidig varningssignal som går att observera
- 90-dagarsplanen ska rymmas i verklig kalendertid för en person med fler kunder
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. **Nulägesbild** (max 5 punkter): var relationen faktiskt står, med belägg
2. **Relationskarta**: vilka vi känner och på vilken nivå, var vi är beroende av en enda person, och vilka roller vi saknar ingång till
3. **Risker** (max 4): vad som kan hota relationen eller avtalet, med tidig varningssignal och motåtgärd per risk
4. **Möjligheter** (max 3): rangordnade efter kundnytta, med vad som behöver vara sant för att de ska vara aktuella
5. **90-dagarsplan**: 4-6 konkreta aktiviteter med syfte och tidpunkt, inklusive minst en som inte har säljmål alls
```

## Användning

Kör en gång per kvartal per nyckelkund, eller direkt när något stort förändras hos kunden. Testa gärna tankeexperimentet: skulle du våga visa planen för kunden? Om inte, är den för säljdriven.
