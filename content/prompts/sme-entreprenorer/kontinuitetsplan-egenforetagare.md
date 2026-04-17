---
title: Kontinuitetsplan vid egen sjukdom
slug: kontinuitetsplan-egenforetagare
category: sme-entreprenorer
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - claude-opus-4-7
tested_date: 2026-04-17T00:00:00.000Z
tags:
  - kontinuitet
  - sjukdom
  - egenföretagare
  - risk
  - beredskap
---
## Syfte

Skapar kontinuitetsplan för egenföretagare vid sjukdom. Adresserar största oron hos svenska egenföretagare 2026 (52 % oroar sig för egen sjukdom enligt Driva Eget).

## Prompt

```txt
# Roll
Du är rådgivare åt svenska egenföretagare. Perspektiv: företaget står och faller med personen — planen ska minska sårbarheten utan att bli byråkrati.

# Uppgift
Ta fram en kontinuitetsplan för företaget vid egen sjukdom eller oförmåga. Planen ska vara konkret, handlingsbar inom en timme och begränsad till det som verkligen behövs.

# Kontext
Bolagsform: [enskild firma, AB, handelsbolag]
Verksamhet: [typ av uppdrag, produkt eller tjänst]
Kunder: [antal aktiva, typ av bindningar]
Leverantörer: [återkommande leverantörer som måste betalas]
Anställda: [ja eller nej, antal]
Nätverk: [kollega eller branschkontakt som kan rycka in]
Existerande försäkringar: [sjukförsäkring, sjukavbrottsförsäkring, annat]
Familjesituation: [någon som känner till företaget och kan agera vid kris]

# Regler
- Planen ska rymmas på en A4 — det som får plats, inget mer
- Fokusera på första två veckorna — långtidsfrånvaro kräver separat plan
- Skilj akuta aktiviteter (kundkontakt, fakturor, lön) från planerbara (nya uppdrag, projektleveranser)
- Ange VEM som gör VAD — inte bara processen
- Inkludera var kritiska dokument och åtkomster finns (lösenord förvaras säkert, INTE i planen)
- Flagga försäkringsglapp — sjukpenningen täcker sällan företagets kostnader
- Planen ska granskas årligen — datera senast uppdaterad
- Inga lösenord, personnummer eller känsliga uppgifter i AI-verktyget

# Utdataformat
**Kontinuitetsplan — [företagsnamn], version [datum]**

1. **Akut kontaktlista** — tabell: roll, namn, telefon, vad de kan agera på
2. **Första 48 timmarna** — vad MÅSTE ske, av vem
3. **Första två veckorna** — kundkontakt, fakturering, pågående leveranser
4. **Löpande åtaganden** — återkommande betalningar, avtal som löper
5. **Kritisk åtkomst** — pekare (inte värden): "banklogin hos person X", "avtal i mapp Y"
6. **Försäkringsstatus** — vad täcker vad, brister att hantera
7. **Långtidsfrånvaro (över två veckor)** — utlöser separat plan, vem tar kontakt
8. **Revision** — datum för nästa genomgång
```

## Användning

Skriv ALDRIG lösenord eller personnummer i AI-verktyget — använd pekare ("lösenord finns hos X"). Gå igenom planen med den person som ska agera om du blir sjuk, och uppdatera årligen.
