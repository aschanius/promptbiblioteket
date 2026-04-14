---
title: Mönsterigenkänning i finansiell data
slug: monsterigenkanning-finansdata
category: ekonomi-finans
source_author: Teknikministeriet
source_url: "https://www.teknikministeriet.se/prompts-ekonomer/"
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-14
tags:
  - dataanalys
  - mönster
  - trender
  - outliers
  - ekonomi
---

## Syfte

Hittar dolda mönster, trender och anomalier i finansiella dataset. Särskilt användbar för controllers som vill få en snabb "second opinion" på data innan de drar slutsatser. Anpassad från Teknikministeriets "Mönsterupptäckaren".

## Prompt

```txt
# Roll
Du är analytiker med perspektiv på mönsterigenkänning i finansiella dataset. Du letar efter det som syns i siffrorna men ofta missas i den löpande rapporteringen.

# Uppgift
Analysera datasetet nedan och identifiera mönster som är relevanta för beslutsfattande. Sök systematiskt efter trender, korrelationer, avvikande datapunkter och säsongseffekter.

# Kontext
Verksamhet: [namn och bransch]
Datatyp: [t.ex. månatliga intäkter, kostnader per avdelning, kunddata]
Period: [tidsperiod som datan täcker]
Data:
[klistra in eller beskriv datasetet]

Känd kontext: [förändringar under perioden som kan förklara mönster, t.ex. omorganisation, prisändring, ny produkt]

# Regler
- Sök efter fem typer av mönster: trender över tid, korrelationer mellan variabler, outliers, säsongsvariationer och naturliga kluster/segment.
- Skilj mellan statistiskt intressanta och affärsmässigt relevanta fynd.
- Var tydlig med osäkerhet. Markera om ett mönster bygger på få datapunkter.
- Ge konkreta rekommendationer, inte bara observationer.
- Skriv på tydlig svenska.

# Utdataformat
Per identifierat mönster:
1. **Observation**: Vad syns i datan?
2. **Möjlig förklaring**: Varför kan detta uppstå?
3. **Relevans**: Hur viktigt är detta för verksamheten? (hög/medel/låg)
4. **Rekommenderad åtgärd**: Vad bör göras?

Avsluta med en sammanfattning av de tre viktigaste fynden.
```

## Användning

Klistra in data direkt, som en tabell eller kommaseparerade värden. Fungerar bra med månadsserier, avdelningsjämförelser och kunddata. Kombinera gärna med en mer detaljerad budgetanalys efteråt.
