---
title: Mötesanteckningar till åtaganden och nästa steg
slug: motesanteckningar-till-nasta-steg
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
  - kundmöte
  - uppföljning
  - dokumentation
  - CRM
---

## Syfte

Gör råa mötesanteckningar till uppföljningsbar struktur medan mötet är färskt. OKLART-markeringarna hindrar att gissningar smyger in som fakta i CRM och uppföljning.

## Prompt

```txt
# Roll
Du är säljare som just avslutat ett kundmöte. Perspektiv: det vi lovade i mötet ska gå att följa upp, och kunden ska känna igen sitt möte i sammanfattningen.

# Uppgift
Strukturera mina råa mötesanteckningar till en tydlig sammanfattning med åtaganden, beslut och nästa steg.

# Kontext
Mina anteckningar: [klistra in råa anteckningar, stödord räcker]
Mötets deltagare: [namn och roller]
Var i affären vi befinner oss: [första möte, behovsanalys, offertfas, förhandling]

# Regler
- Bygg ENBART på anteckningarna, hitta aldrig på något som inte står där
- Markera allt tvetydigt med [OKLART] i stället för att gissa
- Skilj tydligt mellan vad kunden sa och min tolkning av det
- Datum och belopp återges exakt som i anteckningarna, normalisera inte
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. **Sammanfattning** (max 5 meningar): vad mötet handlade om och vart det ledde
2. **Kundens behov och prioriteringar**: med kundens egna formuleringar där de finns
3. **Våra åtaganden**: vad vi lovade, med deadline per punkt
4. **Kundens åtaganden**: vad de skulle göra eller ta reda på
5. **Beslut som fattades** och beslut som sköts upp
6. **Öppna frågor**: inklusive alla [OKLART]-markeringar
7. **Förslag på nästa steg**: konkret och tidsatt, baserat på vad mötet faktiskt gav
```

## Användning

Kör direkt efter mötet, helst inom en timme. Skriv anteckningarna som de är, prompten klarar stödord och halva meningar. Granska åtagandelistan extra noga innan du för in något i CRM eller delar med kunden.
