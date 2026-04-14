---
title: Kassaflödesprognos — likviditetsanalys
slug: kassaflodesprognos
category: ekonomi-finans
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - kassaflöde
  - likviditet
  - prognos
  - controller
  - ekonomi
---

## Syfte

Hjälper controllers och ekonomiansvariga att snabbt skapa en kassaflödesprognos med riskflaggor och åtgärdsförslag. Särskilt värdefullt för SME utan avancerade prognosverktyg.

## Prompt

```txt
# Roll
Du är controller specialiserad på kassaflödesanalys i svenska SME-företag. Perspektiv: likviditetsrisker, säsongsvariationer och betalningsvillkor.

# Uppgift
Analysera kassaflödessituationen nedan och skapa en prognos för kommande 3 månader. Flagga likviditetsrisker och föreslå åtgärder.

# Kontext
Företag: [namn, bransch, storlek]
Nuvarande kassa: [belopp SEK]
Månatliga fasta kostnader: [belopp SEK]
Förväntade inbetalningar:
[lista med belopp, datum, kund/källa]
Förväntade utbetalningar:
[lista med belopp, datum, typ (löner, hyra, leverantörer)]
Säsongsvariation: [ja/nej, beskriv mönster]

# Regler
- Räkna i SEK, svenska betalningsvillkor (30 dagar standard)
- Flagga veckor där kassan riskerar gå under [tröskelbelopp] SEK
- Räkna med att 10-15% av fakturor betalas sent
- Inkludera moms och skattekonto i prognosen
- Var konservativ i uppskattningar

# Utdataformat
1. **Månad-för-månad-prognos** — tabell med in, ut, netto, ackumulerad kassa
2. **Riskflaggor** — veckor med likviditetsbrist, markerade med allvar (varning/kritisk)
3. **Åtgärdsförslag** — 3-5 konkreta åtgärder för att stärka kassan
4. **Känslighetsanalys** — vad händer om största kunden betalar 30 dagar sent?
```

## Användning

Fyll i så mycket du kan av kontexten. Ju mer exakta siffror, desto bättre prognos. Kör månadsvis för att fånga förändringar tidigt.
