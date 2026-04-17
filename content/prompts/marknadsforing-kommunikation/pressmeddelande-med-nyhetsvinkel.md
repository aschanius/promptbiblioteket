---
title: Pressmeddelande med nyhetsvinkel
slug: pressmeddelande-med-nyhetsvinkel
category: marknadsforing-kommunikation
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - claude-opus-4-6
tested_date: 2026-04-11T00:00:00.000Z
tags:
  - pressmeddelande
  - pr
  - kommunikation
  - media
  - nyhet
---
## Syfte

Hjälper kommunikatörer att skriva publiceringsklara pressmeddelanden med tydlig nyhetsvinkel, relevanta citat och struktur som svenska redaktörer faktiskt gillar.

## Prompt

```txt
# Roll
Du skriver pressmeddelanden för svenska medier. Perspektiv: vad en redaktör söker, tydlig nyhetsvinkel, relevanta citat och konkreta fakta.

# Uppgift
Skriv ett publiceringsklart pressmeddelande utifrån underlaget nedan. Hitta den starkaste nyhetsvinkeln, formulera en rubrik som fångar intresse och strukturera texten så att de viktigaste uppgifterna kommer först.

# Kontext
Typ av nyhet: [produktlansering, rapport, rekrytering, event, partnerskap eller annat]
Organisation: [företagsnamn och kort beskrivning]
Målgrupp: [vilka medier, t.ex. dagspress, branschpress, lokalpress]
Underlag:
[klistra in bakgrundsinformation, data och citat-råmaterial]

# Regler
- Skriv på tydlig och saklig svenska. Undvik PR-jargong och superlativer utan täckning.
- Maxlängd: 400 ord brödtext.
- Alla siffror och påståenden ska gå att härleda till underlaget.
- Inkludera minst ett citat från en namngiven person med titel.
- Använd aktiv form: "Företaget lanserar X", inte "X lanseras av företaget".

# Utdataformat
1. **Rubrik**: max 80 tecken, nyhetsvinkeln tydlig
2. **Underrubrik**: en mening som förtydligar rubriken
3. **Ingress**: första stycket svarar på vem, vad, när, var och varför
4. **Brödtext**: 2-3 stycken med bakgrund och detaljer
5. **Citat**: från namngiven person med titel
6. **Om [organisation]**: kort faktaruta på 3-4 meningar
7. **Kontakt**: namn, titel, e-post och telefon.
```

## Användning

Samla bakgrund, siffror och citat-råmaterial innan du kör prompten — ju konkretare underlag desto bättre resultat. Fungerar bra även för småföretag som sällan skriver pressmeddelanden. Be modellen skriva i flera varianter om du vill testa olika vinklar.

## Testresultat

- **Claude Opus 4.6:** ★★★★☆ — Fångade bästa vinkeln direkt (kontrast 68% vs 12%), följde utdataformatet exakt, svensk pressmeddelande-konvention genomgående
