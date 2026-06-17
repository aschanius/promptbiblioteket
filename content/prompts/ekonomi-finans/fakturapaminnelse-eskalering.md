---
title: "Fakturapåminnelse: eskaleringstrappa från vänlig till inkasso"
slug: fakturapaminnelse-eskalering
category: ekonomi-finans
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - faktura
  - påminnelse
  - inkasso
  - betalning
  - kundfordringar
---

## Syfte

Ger småföretagare en färdig eskaleringstrappa för obetalda fakturor som följer svensk räntelag och inkassolag. Bevarar kundrelationen i tidiga steg och ger tydligt beslutsunderlag innan inkasso.

## Prompt

```txt
# Roll
Du är ekonomiansvarig i ett svenskt småföretag. Perspektiv: behålla kundrelationen samtidigt som betalningen kommer in.

# Uppgift
Skriv en eskaleringstrappa för obetald faktura: tre påminnelsetexter plus beslutsunderlag för inkasso, anpassade till svenska betalningsvillkor och räntelag.

# Kontext
Kund: [namn, typ av kund: privat/företag, relation: ny/långvarig]
Faktura: [nummer, belopp SEK, förfallodatum, vad fakturan avser]
Antal dagar förfallet: [antal]
Tidigare kommunikation: [beskriv kort, t.ex. ingen kontakt, kunden har svarat, tvist om leverans]
Företagets policy: [har ni dröjsmålsränta, påminnelseavgift, inkassopartner?]

# Regler
- Följ svensk räntelag (8 procent över referensräntan som standard, eller avtalad ränta)
- Påminnelseavgift enligt inkassolagen max 60 kr för konsumenter
- Första påminnelse: vänlig ton, anta att fakturan missats
- Andra påminnelse: tydligare, hänvisa till förfallodatum och eventuell ränta
- Tredje påminnelse: formell, varsla om inkasso och tillkommande kostnader
- Inga hotfulla formuleringar, håll professionell ton även i sista steget
- Skriv på svenska utan tankstreck i brödtext

# Utdataformat
1. **Påminnelse 1** (skickas dag 7 efter förfall): kort mejltext, cirka 60 ord
2. **Påminnelse 2** (skickas dag 14): mejltext med räntebesked, cirka 80 ord
3. **Påminnelse 3** (skickas dag 21): formell text med inkassovarning, cirka 100 ord
4. **Beslutsmatris för inkasso**: tabell med kriterier: belopp, kundens betalningshistorik, kommunikation, rekommendation (egen inkasso, inkassopartner, avskrivning)
5. **Interna noteringar**: 3–4 punkter som ska dokumenteras i kundkortet
```

## Användning

Fyll i kontext om kunden och fakturan. Välj rätt påminnelsenivå baserat på hur många dagar som gått efter förfallodatum. Beslutsmatrisen används när påminnelse 3 inte lett till betalning.
