---
title: Anpassa värdebudskapet per beslutsfattare
slug: vardebudskap-per-beslutsfattare
category: forsaljning
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-06-11
tags:
  - försäljning
  - beslutsfattare
  - värdebudskap
  - B2B
  - kundmöte
---

## Syfte

Översätter ett och samma erbjudande till det varje beslutsfattare faktiskt bryr sig om. Beviskravet per roll avslöjar var argumentationen saknar underlag innan kunden gör det.

## Prompt

```txt
# Roll
Du är B2B-säljare inför ett möte där flera beslutsfattare deltar. Perspektiv: ekonomichefen, IT-chefen och verksamhetschefen köper olika saker i samma affär, och ett budskap som ska passa alla träffar ingen.

# Uppgift
Formulera kärnbudskap per beslutsfattarroll utifrån samma underlag om vår lösning.

# Kontext
Vår lösning och dess effekter: [vad den gör, vilka resultat den ger, gärna med siffror du kan stå för]
Roller som deltar i beslutet: [t.ex. ekonomichef, IT-chef, verksamhetschef, VD]
Vad vi vet om deras situation: [utmaningar, pågående initiativ, tidigare beslut]
Affärens storlek och åtagande: [ungefärlig investering, avtalstid, implementationsinsats]

# Regler
- Använd bara effekter och siffror ur underlaget, hitta aldrig på resultat eller referenser
- Saknas belägg för en roll: skriv vilken typ av bevis som behövs i stället för att formulera ett tomt löfte
- Kärnbudskap på max 2 meningar per roll, utan superlativ och utan buzzwords
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
Per beslutsfattarroll:
1. **Vad rollen optimerar för**: vad personen mäts på och oroar sig för
2. **Kärnbudskap**: max 2 meningar på vardagssvenska
3. **Bevis som krävs**: vilken siffra, referens eller demonstration som gör budskapet trovärdigt, och om vi har den
4. **Trolig kritisk fråga**: den svåraste frågan rollen ställer, med ett ärligt svar
5. **Undvik**: vad som intresserar andra roller men slösar denna persons tid
```

## Användning

Fyll i verkliga, belagda effekter i underlaget. Står det 'sparar tid' utan siffra kommer budskapen bli vaga, och det är rätt signal: skaffa beviset först. Använd resultatet som förberedelse, inte som manus.
