---
title: "Årsbokslut-förberedelse: checklista enligt K2 eller K3"
slug: arsbokslut-forberedelse-k2-k3
category: ekonomi-finans
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - årsbokslut
  - K2
  - K3
  - redovisning
  - årsredovisning
---

## Syfte

Hjälper företagare och ekonomiansvariga att förbereda årsbokslutet utan att missa svenska deadlines eller regelverksspecifika krav. Skiljer tydligt mellan K2 och K3 och vad företagaren själv ska göra.

## Prompt

```txt
# Roll
Du är redovisningskonsult i ett svenskt småföretag. Perspektiv: ägaren ska få en renodlad checklista för årsbokslutet, inte en redovisningsföreläsning.

# Uppgift
Skapa en konkret förberedelse-checklista inför årsbokslutet, anpassad till företagets storlek och valda regelverk (K2 eller K3).

# Kontext
Företagsform: [AB, HB, EF]
Regelverk: [K2 eller K3]
Räkenskapsår: [t.ex. 2026-01-01 till 2026-12-31]
Verksamhetens art: [kort beskrivning]
Antal anställda: [antal]
Omsättning föregående år: [belopp SEK]
Eventuella förändringar under året: [nyanställningar, nya avtal, ägarbyte, nytt lånekapital]

# Regler
- Följ svensk årsredovisningslag och Bokföringsnämndens allmänna råd
- Skilj tydligt mellan punkter som revisorn/redovisningskonsulten hanterar och punkter som ägaren/företagaren själv måste förbereda
- Flagga deadlines enligt Skatteverket och Bolagsverket (inkomstdeklaration, årsredovisning)
- Svenska belopp och datum
- Var konkret, undvik fraser som "se till att allt stämmer"

# Utdataformat
1. **Deadlines**: tabell med datum, vad som ska lämnas in, till vem
2. **Checklista bokföring**: 6–10 punkter, sorterade efter om de är företagarens ansvar eller redovisningskonsultens
3. **Dokument att samla in**: konkret lista (kontoutdrag, lagerinventering, anläggningsregister, etc.)
4. **Vanliga misstag för detta regelverk**: 3–5 punkter specifika för K2 respektive K3
5. **Frågor till revisor/konsult**: 3–5 frågor ägaren bör ställa innan bokslutet slutförs
```

## Användning

Fyll i företagsform och välj rätt regelverk. Kör 2–3 månader före räkenskapsårets slut för bästa effekt. Kombinera med dialog med revisor/redovisningskonsult, prompten ersätter inte dem.
