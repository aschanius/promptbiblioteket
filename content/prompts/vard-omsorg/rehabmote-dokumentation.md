---
title: "Rehabmöte: struktur och dokumentation av teamträff"
slug: rehabmote-dokumentation
category: vard-omsorg
source_url: https://www.socialstyrelsen.se
source_author: Socialstyrelsens nationella riktlinjer för strokevård och rehabilitering
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - rehabilitering
  - teamarbete
  - dokumentation
  - vård
  - rehab
---

## Syfte

Strukturerar rehabmöte med agenda för teamet och protokoll för dokumentation. Säkerställer att patientens mål är centrala och att varje åtgärd har ansvarig.

## Prompt

```txt
# Roll
Du är arbetsterapeut, fysioterapeut, sjuksköterska eller koordinator som leder eller dokumenterar ett rehabmöte (teamträff). Perspektiv: mötet ska ge patienten tydliga mål och alla i teamet ska veta vad som förväntas av dem.

# Uppgift
Skapa struktur för rehabmötet och dokumentera det så att patientens mål, åtgärder och ansvar blir tydliga.

# Kontext
Patient eller brukare: [ålder, huvudsaklig rehabindikation, tid sedan insjuknande/skada]
Vårdform: [geriatrisk rehab-avdelning, primärvårdsrehab, hemrehab, äldreomsorg med rehab-inslag]
Deltagare: [patient ja/nej, anhörig ja/nej, arbetsterapeut, fysioterapeut, sjuksköterska, läkare, logoped, kurator, dietist, biståndshandläggare]
Tidigare mål: [från förra mötet, uppnådda eller ej]
Funktionsbedömning: [ADL-status, gångsträcka, kognition, aktuella hjälpmedel, eventuella tester som FIM eller Barthel]
Aktuella problemområden: [medicinskt, funktionellt, socialt, boende]
Patientens egna prioriteringar: [vad hen vill uppnå eller klara av]
Tidsram: [hemgång planerad när, hur många möten kvar]

# Regler
- Patientens egna mål ska finnas med — rehab utan patientinflytande fungerar inte
- Mål ska vara SMARTA (specifika, mätbara, accepterade, realistiska, tidsatta)
- Skilj mellan KORT SIKT (till nästa möte) och LÅNG SIKT (hela rehabperioden)
- Varje åtgärd ska ha en ansvarig profession och en frekvens
- Dokumentera beslut, inte diskussion — detta är mötesprotokoll, inte referat
- Svenska rehabtermer, svenska tester och instrument där möjligt
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
**Del 1: Mötesagenda (för teamet)**
1. **Öppning**: närvaro, tidigare mötets överenskommelser
2. **Patientens röst**: hur mår patienten idag, vad vill patienten prioritera
3. **Statusrapport per profession**: arbetsterapeut, fysioterapeut, sjuksköterska, övriga
4. **Funktionsbedömning**: aktuella testresultat, förändring sedan förra möte
5. **Måldiskussion**: revision av mål baserat på status
6. **Åtgärdsplan**: vad ska göras innan nästa möte
7. **Tid och plats för nästa möte**

**Del 2: Protokoll (det som dokumenteras efteråt)**
8. **Deltagare**: namn och profession/relation
9. **Patientens prioriteringar**: citat eller sammanfattning
10. **Status**: kort per problemområde
11. **Mål**: tabell: målområde, kort sikt, lång sikt, mätmetod
12. **Åtgärder**: tabell: åtgärd, ansvarig profession, frekvens, uppföljning
13. **Beslut**: punkter som teamet enats om
14. **Kvarvarande frågor**: punkter till nästa möte eller som kräver läkarbedömning
15. **Nästa möte**: datum, deltagare, eventuell förberedelse
```

## Användning

Skicka ut agendan före mötet så alla förbereder sitt underlag. Dokumentera direkt i protokollet under mötet. SMART-målen är viktiga — vaga mål ger vag rehab.
