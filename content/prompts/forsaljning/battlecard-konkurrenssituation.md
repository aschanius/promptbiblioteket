---
title: Battlecard inför konkurrensutsatt affär
slug: battlecard-konkurrenssituation
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
  - konkurrensanalys
  - battlecard
  - B2B
  - upphandling
---

## Syfte

Bygger konkurrensförståelse utan påhitt och utan smutskastning. VET EJ-disciplinen hindrar battlecardet från att fyllas med gissningar som spricker i kundmötet, och frågelistan ger kunden ett verktyg som samtidigt gynnar seriösa leverantörer.

## Prompt

```txt
# Roll
Du är säljare i en affär där kunden jämför oss med en konkurrent. Perspektiv: kunden gör jämförelsen vare sig vi deltar eller inte, så det är bättre att kunna den. Att tala illa om konkurrenten förlorar affärer, att förstå dem vinner affärer.

# Uppgift
Strukturera det vi vet till ett battlecard: jämförelse per kundkriterium, våra styrkor och svagheter, och frågor som hjälper kunden jämföra rättvist.

# Kontext
Vårt erbjudande: [vad vi offererar, styrkor och kända begränsningar]
Vad vi VET om konkurrentens erbjudande: [bara bekräftad information, ange källa: kundens uppgift, offentlig prislista, deras webb]
Kundens beslutskriterier: [vad kunden sagt är viktigt, eller vad vi tror prioriteras]
Affärens karaktär: [upphandling, direktaffär, förnyelse där konkurrent utmanar]

# Regler
- Bygg ENBART på angiven information om konkurrenten, hitta aldrig på deras priser, brister eller egenskaper
- Saknas information om konkurrenten på ett kriterium: skriv VET EJ, gissa inte
- Aldrig nedsättande om konkurrenten, positionera våra styrkor i stället
- Våra svagheter ska fram i ljuset med en ärlig hantering, kunden hittar dem ändå
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. **Jämförelse per kundkriterium**: tabell med Kriterium | Vi | Konkurrenten (eller VET EJ) | Vem gynnas
2. **Våra trumfkort** (max 3): styrkor som är relevanta för just denna kunds kriterier, med belägg
3. **Våra svagheter** (max 3): med ärlig hantering, t.ex. kompenserande styrka eller plan
4. **Frågor kunden bör ställa till båda leverantörer**: 4-6 frågor som gynnar den som talar sanning, inte den som lovar mest
5. **Kunskapsluckor**: vad vi borde ta reda på om konkurrentens erbjudande och hur. Hederlig väg betyder offentliga källor, kundens egna uppgifter och öppna referenser, aldrig att utge sig för att vara kund hos konkurrenten
```

## Användning

Uppdatera battlecardet under affärens gång när ny bekräftad information kommer in, ofta via kundens egna frågor. Dela sektion 4 med kunden om läget passar: att hjälpa kunden jämföra rättvist är en styrkeposition.
