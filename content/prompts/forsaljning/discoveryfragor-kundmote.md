---
title: "Behovsanalys: frågeguide för första kundmötet"
slug: discoveryfragor-kundmote
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
  - behovsanalys
  - kundmöte
  - frågeteknik
  - B2B
---

## Syfte

Ger en genomtänkt frågeguide i stället för improviserade frågor eller förtäckt pitch. Kedjan nuläge till önskat läge gör att kundens eget resonemang bygger affären.

## Prompt

```txt
# Roll
Du är säljare som genomför behovsanalys i ett första kundmöte. Perspektiv: kunden köper när vi förstår deras problem, inte när vi pratar om vår produkt.

# Uppgift
Skapa en frågeguide för mötet, anpassad till kundens bransch, mötespersonens roll och det vi redan vet.

# Kontext
Kundens bransch och storlek: [bransch, ungefärlig storlek]
Vem vi träffar: [roll och ansvar]
Vår lösning: [kort beskrivning]
Vad vi redan vet om dem: [tidigare kontakt, research, antaganden]
Mötestid: [antal minuter]

# Regler
- Öppna frågor först, detaljfrågor senare
- Inga ledande frågor som egentligen är en maskerad pitch
- Bygg frågorna i kedjan nuläge, problem, konsekvens, önskat läge
- Anpassa antalet frågor till mötestiden, hellre färre med djup än många ytliga
- Fråga aldrig om sådant vi redan vet enligt kontexten, fördjupa i stället
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. **Öppning** (1-2 frågor): får kunden att börja berätta
2. **Nuläge** (2-3 frågor): hur de arbetar idag
3. **Problem och konsekvens** (2-3 frågor): vad som skaver och vad det kostar dem
4. **Önskat läge** (1-2 frågor): hur framgång ser ut för dem
5. Per block: syftet med blocket och en uppföljningsfråga att ta till om svaret blir tunt
6. **Lyssningssignaler**: 3 saker i kundens svar som betyder att jag ska borra djupare i stället för att gå vidare
```

## Användning

Kör prompten dagen före mötet och redigera frågorna till ditt eget språk. Guiden är ett stöd, inte ett manus: följ kundens svar i första hand och använd blocken som checklista i slutet av mötet.
