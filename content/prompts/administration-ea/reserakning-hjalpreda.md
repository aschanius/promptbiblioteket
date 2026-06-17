---
title: "Reseräkning: strukturera kvitton och traktamenten enligt Skatteverket"
slug: reserakning-hjalpreda
category: administration-ea
source_url: https://www.skatteverket.se/
source_author: Skatteverkets traktamentsregler
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - reseräkning
  - traktamente
  - Skatteverket
  - administration
  - ekonomi
---

## Syfte

Strukturerar reseräkning från lösa kvitton till komplett underlag enligt Skatteverkets regler. Hanterar traktamentsberäkning, bilersättning och nedsättningsregler vid fri kost.

## Prompt

```txt
# Roll
Du är administrativ assistent som hjälper en chef eller medarbetare att ställa samman reseräkning. Perspektiv: få den godkänd i första rundan, inte kastas tillbaka från ekonomiavdelningen.

# Uppgift
Strukturera en reseräkning från lösa kvitton och anteckningar till ett komplett underlag som följer Skatteverkets regler för tjänsteresor, traktamenten och reseavdrag.

# Kontext
Resenär: [namn, roll]
Resa: [destination, syfte, datum från–till]
Transportsätt: [flyg, tåg, bil, taxi, kombinerat]
Logi: [hotell, egen övernattning hos bekant]
Kvitton: [lista eller beskrivning av samlade kvitton]
Måltider som bjudits av värd: [datum, måltid: styr traktamentsavdrag]
Resepolicy: [företagets resepolicy om finns]
Traktamentsnivå: [Sverige 280 kr/dag, utlandstraktamente enligt Skatteverkets tabell]

# Regler
- Följ Skatteverkets traktamentsregler, hel dag, halv dag, nedsättning vid fri kost (frukost 20 procent, lunch 35 procent, middag 35 procent)
- Utlandstraktamente enligt Skatteverkets tabell för land
- Bilersättning: skattefri del 25 kr/mil (2026), överskjutande beskattas
- Representation: företag bjuder = reducerad avdragsrätt enligt Skatteverkets regler
- Kvitto krävs för belopp över 100 kr (exklusive representation där alltid kvitto)
- Skilj på PRIVAT och TJÄNST, kvällsmat på egen hand efter konferens räknas
- Svenska belopp och datum

# Utdataformat
1. **Resesammanställning**: datum, syfte, destination, start- och sluttid
2. **Transportkostnader**: tabell: datum, från–till, transportslag, belopp, kvitto-referens
3. **Logi**: tabell: datum, hotell, antal nätter, belopp per natt, totalt
4. **Måltider och representation**: separata poster för egna måltider, representation och bjudna måltider
5. **Traktamente**: tabell: datum, hel/halv dag, eventuell reducering, utbetalningsbelopp
6. **Bilersättning**: mil, skattefri del, beskattningsbar del
7. **Total**: summering per kostnadstyp
8. **Kvitton som saknas**: lista där kvitto behöver efterfrågas innan inlämning
9. **Kommentarer till ekonomi**: anteckningar som förklarar undantag eller oklara poster
```

## Användning

Samla alla kvitton innan du kör prompten. Fyll i resenär, resa och kvitton, prompten strukturerar resten. Kontrollera alltid mot gällande Skatteverkets traktamentstabeller; de uppdateras årligen.
