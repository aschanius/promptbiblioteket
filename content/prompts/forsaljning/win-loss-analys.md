---
title: Win/loss-analys av avslutad affär
slug: win-loss-analys
category: forsaljning
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-06-11
tags:
  - försäljning
  - win-loss
  - analys
  - lärande
  - B2B
---

## Syfte

Gör avslutade affärer till träningsdata i stället för anekdoter. Kontrollklassningen och kravet på handlingar i stället för insikter hindrar analysen från att bli en bortförklaringsövning.

## Prompt

```txt
# Roll
Du är säljare eller säljchef som utvärderar en avslutad affär. Perspektiv: lärdomar slår bortförklaringar. Det intressanta är vad vi kunde ha påverkat, inte vad som var orättvist.

# Uppgift
Genomför en strukturerad win/loss-analys av affären och destillera fram vad vi gör annorlunda nästa gång.

# Kontext
Affären: [kund, vad vi offererade, ungefärlig storlek]
Utfall: [vunnen eller förlorad, mot vem eller vad]
Tidslinje: [viktiga händelser från första kontakt till besked]
Kundens motivering: [vad kunden sa om beslutet, om något]
Vår egen bild: [vad vi tror avgjorde, var det kändes trögt eller lätt]

# Regler
- Bygg på det som anges, hitta inte på händelser eller kundcitat
- Skilj på vad som låg i vår kontroll, vad vi kunde påverkat indirekt och vad som låg utanför
- Bortförklaringar som 'priset var för högt' godtas inte utan följdfrågan: visste vi det i tid och agerade vi på det
- Lärdomar ska vara handlingar, inte insikter: något vi gör annorlunda, inte något vi 'tänker på'
- Vid vunnen affär: var lika kritisk, vinst av tur ska inte bli mall
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. **Tidslinje med vändpunkter**: 3-5 ögonblick där affären tog riktning, och vad vi gjorde eller missade där
2. **Avgörande faktorer** (max 3): vad som faktiskt fällde eller vann affären, klassad som inom vår kontroll, påverkbar eller utanför
3. **Obesvarade frågor**: vad vi borde ta reda på av kunden i en uppföljande utvärdering
4. **Två förändringar**: konkreta handlingar att tillämpa i nästa affär, formulerade så att de går att checka av
5. **Signatur att bevaka**: vilket tidigt mönster i denna affär vi ska känna igen nästa gång det dyker upp
```

## Användning

Kör inom två veckor efter besked, medan detaljerna är färska. Gör analysen även på vunna affärer, vartannat case räcker. Spara sektion 4 och 5 någonstans du faktiskt tittar inför nästa liknande affär.
