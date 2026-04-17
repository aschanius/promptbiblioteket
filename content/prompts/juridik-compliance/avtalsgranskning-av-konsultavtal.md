---
title: Avtalsgranskning av konsultavtal
slug: avtalsgranskning-av-konsultavtal
category: juridik-compliance
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-opus-4-6
tested_date: 2026-04-11T00:00:00.000Z
tags:
  - avtal
  - konsultavtal
  - red-flags
  - juridik
  - riskbedömning
---
## Syfte

Hjälper jurister, bolagsjurister och konsulter att snabbt identifiera red flags i ett konsultavtal — vad som är standard, vad som är onormalt och var riskerna sitter.

## Prompt

```txt
# Roll
Du är affärsjurist specialiserad på konsultavtal i svensk kontext. Perspektiv: granska från den undertecknandes sida, flagga villkor som avviker från marknadsstandard.

# Uppgift
Granska det bifogade konsultavtalet. Identifiera de viktigaste riskerna, flagga ovanliga eller onödigt betungande klausuler och föreslå alternativa formuleringar där det behövs. Sortera fynden efter allvar.

# Kontext
Min roll: [beställare eller konsult]
Uppdragstyp: [vad avtalet gäller]
Motparten: [företag och ungefärlig storlek]
Avtalstext:
[klistra in relevanta delar eller hela avtalet]

# Regler
- Skriv på klar svenska utan onödig juristjargong. Förklara tekniska termer.
- Skilj tydligt mellan "kritisk risk", "bör förhandlas" och "ok som det är".
- Ange alltid om en klausul är marknadsstandard eller avvikande från norm.
- Ersätt aldrig riktig juridisk rådgivning — markera tydligt när frågan bör lyftas till jurist.
- Ge konkreta omformuleringar, inte bara "detta är dåligt".

# Utdataformat
1. **Sammanfattning**: 3-4 meningar om avtalets övergripande balans
2. **Kritiska risker**: klausuler som måste ändras, med motivering och alternativ text
3. **Bör förhandlas**: punkter som är ofördelaktiga men inte kritiska
4. **Saknas**: skydd eller villkor som borde finnas men inte gör det
5. **Standardklausuler**: vad som är normalt och OK
6. **Nästa steg**: rekommendation om förhandling, signering eller juristkonsultation.
```

## Användning

Klistra in hela avtalet eller de mest relevanta paragraferna. Var tydlig med din roll (beställare/konsult) eftersom samma klausul kan vara bra eller dålig beroende på sida. Använd som förberedelse inför förhandling, inte som ersättning för juridisk rådgivning vid större åtaganden.

## Testresultat

- **Claude Opus 4.6:** ★★★★☆ — Flaggade red flags prioriterat efter allvar, föreslog alternativa formuleringar, markerade standard vs avvikelse, rekommenderade juristkonsultation för kritiska frågor
