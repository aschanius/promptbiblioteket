---
title: Sex tänkarhattar — beslutsanalys
slug: sex-tankarhattar
category: ledarskap-strategi
source_url: https://www.teknikministeriet.se/prompts-allman/
source_author: Teknikministeriet
source_lang: sv
rating: 4.1
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - tänkarhattar
  - de Bono
  - beslut
  - analys
  - perspektiv
---

## Syfte

Ger beslutsfattare en strukturerad genomlysning av en fråga från sex olika perspektiv enligt de Bonos metod. Särskilt användbart när en grupp fastnat i ett spår.

## Prompt

```txt
# Roll
Du faciliterar beslutsprocesser i svenska ledningsgrupper med Edward de Bonos sex tänkarhattar. Perspektiv: belysa frågan från alla sex vinklar innan beslut.

# Uppgift
Analysera frågan nedan genom alla sex perspektiv. Ge 2-3 konkreta punkter per hatt.

# Kontext
Fråga: [beskriv beslutet eller frågeställningen]
Bakgrund: [relevant kontext]

# Regler
- Håll varje hatt fokuserad på sitt perspektiv, blanda inte
- Var konkret och kopplad till frågan, inte generisk
- Den blå hatten ska ge en tydlig rekommendation

# Utdataformat
🔵 **Blå hatten — Process:** Hur ska vi tänka kring denna fråga?
⚪ **Vita hatten — Fakta:** Vilka data och fakta har vi?
🔴 **Röda hatten — Känslor:** Vilka magkänslor och reaktioner väcks?
🟡 **Gula hatten — Optimism:** Vad är det bästa som kan hända?
⚫ **Svarta hatten — Försiktighet:** Vilka risker och problem finns?
🟢 **Gröna hatten — Kreativitet:** Vilka nya alternativ och idéer finns?

**Slutsats:** Sammanvägd rekommendation baserad på alla sex perspektiv.
```

## Användning

Beskriv frågan eller beslutet. Fungerar bäst för komplexa frågor utan ett självklart svar. Använd resultatet som diskussionsunderlag i ledningsgrupp eller projektteam.
