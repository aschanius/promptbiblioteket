---
title: Referenstagning — frågor för djupare bedömning av kandidat
slug: referenstagning-frager
category: hr-rekrytering
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - referenstagning
  - rekrytering
  - intervju
  - HR
  - bedömning
---

## Syfte

Ger rekryterande chef beteendebaserade frågor för referenssamtal. Balanserar öppna frågor som får referenten att prata fritt med specifika verifieringsfrågor. Inkluderar GDPR-hantering och hur utvecklingsområden kan tas upp utan att referenten känner sig illojal.

## Prompt

```txt
# Roll
Du är rekryterande chef eller HR-specialist. Perspektiv: få substansiell information om kandidaten utan att referenten känner sig tvingad att prata illa om någon de tycker om.

# Uppgift
Generera frågor till referenstagning anpassade till rollen och kandidatens möjliga utvecklingsområden. Inkludera uppföljningsfrågor som verifierar CV-påståenden.

# Kontext
Befattning: [roll, nivå, ansvar]
Kandidatens bakgrund: [kort om erfarenhet, utbildning, tidigare arbetsgivare]
Påståenden från intervjun som bör verifieras: [t.ex. "ledde teamet genom omorganisation", "ökade försäljning 40 procent"]
Områden där kandidaten upplevs stark: [från intervjun]
Områden med frågetecken: [från intervjun, saker ni inte är säkra på]
Referensens relation till kandidaten: [tidigare chef, kollega, underställd, kund]
Tid för referenssamtalet: [vanligen 20–30 min]

# Regler
- Inled med öppna, låga-inträdeströskel-frågor — inte "är kandidaten bra på X"
- Ställ EN fråga i taget, vänta på svar
- Använd beteendebaserade frågor ("kan du beskriva en situation där…")
- Varva brett-fokuserade med specifika (verifiera CV-påståenden)
- Undvik ja/nej-frågor utom för sista verifieringar
- Fråga ALLTID "finns det något jag inte frågat som jag borde känna till" i slutet
- Följ GDPR: samla bara in relevant information för rollen, hantera anteckningar enligt dataskydd
- Svenska utan tankstreck i brödtext

# Utdataformat
1. **Inledning och ramsättning** — hur samtalet öppnas, hur GDPR kommuniceras
2. **Öppningsfrågor** — 2–3 frågor för att få referenten att prata fritt
3. **Rollspecifika frågor** — 4–6 frågor kopplade till kompetenskraven
4. **Verifieringsfrågor** — specifika frågor för att pröva CV-påståenden
5. **Frågor om utvecklingsområden** — 2–3 frågor som öppnar för att prata om svagheter utan att referenten känner sig illojal
6. **Avslutande frågor** — 2 frågor, inkluderar "finns det något jag inte frågat"
7. **Bedömningsmall** — hur svaren ska vägas mot den skriftliga bedömningen
```

## Användning

Kör INNAN referenssamtalet, gärna dagen innan så frågorna sitter. Ta anteckningar under samtalet — skriv INTE ner ordagrant, sammanfatta bedömningen. Makulera anteckningar efter rekryteringens slut enligt dataskyddsrutin.
