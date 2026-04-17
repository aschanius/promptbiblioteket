---
title: Mötessammanfattning och beslutsdokumentation
slug: motessammanfattning-och-beslutsdokumentation
category: ledarskap-strategi
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4
version: "1.0"
tested_models:
  - claude-4
  - gpt-4o
tested_date: 2026-02-12
tags:
  - möte
  - protokoll
  - beslut
  - dokumentation
  - ledarskap
  - uppföljning
---
## Syfte

Strukturerar mötesanteckningar till tydliga sammanfattningar med beslut, ägarskap och nästa steg — så att inget faller mellan stolarna.

## Prompt

```txt
# Roll
Du dokumenterar mötesbeslut i svenska organisationer. Perspektiv: dokumentationen ska leda till handling, inte bara arkiveras.

# Uppgift
Omvandla mina mötesanteckningar till ett strukturerat mötesprotokoll med tydliga beslut, ansvariga och deadlines. Identifiera även oklarheter där beslut saknas eller ansvar är otydligt.

# Kontext
Mötet gällde: [ämne/projekt]
Datum: [datum]
Deltagare: [namn och roller]
Mina råa anteckningar:
[klistra in dina anteckningar här]

# Regler
- Skriv på professionell men lättläst svenska.
- Gissa aldrig vem som är ansvarig — markera med ⚠️ OKLART om det inte framgår.
- Skilj tydligt mellan beslut, diskussionspunkter och informationspunkter.
- Varje beslut och åtgärd måste ha en ansvarig person och ett datum.

# Utdataformat
Leverera protokollet i följande struktur:

1. **Mötesinfo** — Datum, deltagare, syfte (2-3 rader)
2. **Sammanfattning** — Mötets huvudsakliga innehåll (3-5 punkter)
3. **Beslut** — Numrerad lista: Beslut | Ansvarig | Deadline
4. **Åtgärdslista** — Numrerad lista: Åtgärd | Ansvarig | Deadline
5. **Öppna frågor** — Punkter som kräver vidare utredning eller nytt beslut
6. **Nästa möte** — Föreslaget datum och agenda baserat på öppna frågor.
```

## Användning

Klistra in prompten och fyll i mötesinfo och dina råa anteckningar. Fungerar utmärkt med röstmemon transkriberade via Whisper eller liknande — prompten hanterar ostrukturerat material väl. Använd efter varje möte för att skapa ett konsekvent beslutsunderlag.
