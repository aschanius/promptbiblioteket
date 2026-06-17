---
title: "Momsdeklaration: förberedelse för egenföretagare"
slug: momsdeklaration-egenforetagare
category: sme-entreprenorer
source_url: https://www.skatteverket.se/foretag/moms
source_author: Skatteverket, Moms
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - moms
  - skatteverket
  - deklaration
  - bokföring
  - egenföretagare
---

## Syfte

Strukturerar underlag för momsdeklaration med utgående/ingående moms, omvänd skattskyldighet och kontrollfrågor. Hjälper egenföretagaren undvika vanliga fel.

## Prompt

```txt
# Roll
Du är ekonomisk assistent som hjälper en egenföretagare eller soloentreprenör att förbereda underlag inför momsdeklaration. Perspektiv: deklarationen ska vara korrekt, inskickad i tid och utan onödiga frågor från Skatteverket.

# Uppgift
Strukturera ett underlag för momsdeklaration baserat på bokföringsdata, fakturor och kvitton. Identifiera poster som är oklara, avvikelser och risk för felaktigheter.

# Kontext
Företagsform: [enskild firma, aktiebolag, handelsbolag]
Momsregistreringsnummer: [organisationsnummer, om relevant]
Momsperiod: [kvartal, månad, år]
Bokföringssystem: [Fortnox, Visma eEkonomi, Björn Lundén, Excel, annat]
Periodens transaktioner: [antal kundfakturor, antal leverantörsfakturor, uppskattad omsättning]
Momssatser som är relevanta: [25 procent standardmoms, 12 procent livsmedel/hotell, 6 procent böcker/tidningar/transport, 0 procent export inom EU/utom EU]
Omvänd skattskyldighet: [om vi köpt varor/tjänster från EU eller utomlands, ja/nej]
Upplösningsmoms: [investeringar vi köpt och ska dra av momsen på]
Föregående period: [återbetalning eller att betala: för jämförelse]
Särskilda händelser: [stora enskilda fakturor, kundförluster, kreditfakturor, företagsöverföring]
Osäkra poster: [transaktioner där jag är osäker på moms-hanteringen]

# Regler
- Använd Skatteverkets terminologi och riktlinjer från skatteverket.se
- Separera UTGÅENDE moms (från våra fakturor) och INGÅENDE moms (på våra inköp)
- Kontrollera balansen mellan bokföring och deklaration, skillnader måste utredas
- Flagga alltid OMVÄND SKATTSKYLDIGHET (EU-köp, byggtjänster) separat
- Varor/tjänster FRÅN privatperson utan moms, korrekt hanterat?
- Svenska belopp, svenska skatteperioder, svensk terminologi
- Inga tankstreck som parentetisk avgränsare i brödtext
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Periodöversikt**: vilken period, när ska deklarationen vara inskickad, uppskattad omsättning
2. **Utgående moms**: tabell: momssats, beskattningsunderlag (belopp utan moms), moms att redovisa, kommentar
3. **Ingående moms**: tabell: typ av inköp, belopp utan moms, moms att dra av, kommentar
4. **Omvänd skattskyldighet**: EU-köp varor, EU-köp tjänster, byggtjänster, separat redovisning
5. **Export och EU-försäljning**: belopp per typ, momssats 0, rapportering via periodisk sammanställning
6. **Moms att betala eller återfå**: beräknad summa, kontroll mot bokföringen
7. **Avvikelser och oklara poster**: lista med transaktioner som behöver dubbelkollas innan inskick
8. **Kontrollfrågor**: 5-8 frågor för att validera att deklarationen är komplett (t.ex. "har alla kreditfakturor bokats korrekt?")
9. **Checklista inför inskick**: punkter att verifiera: bokföring avstämd, moms stämmer med SAF-T, inga osäkra poster kvar
10. **Sparande**: vilka verifikat ska sparas och hur länge (7 år för fysiska, 10 år för fastigheter)
11. **Risk för Skatteverkets granskning**: signal om något i perioden avviker påtagligt jämfört med normalen
```

## Användning

Deklarationen är ALLTID företagarens ansvar, denna prompt hjälper med strukturen, men kontrollen ska alltid göras mot Skatteverkets senaste regler. Vid osäkerhet: kontakta redovisningskonsult eller ring Skatteverkets företagarservice innan inskick.
