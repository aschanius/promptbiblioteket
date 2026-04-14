---
title: Extrahera nyckelinformation ur dokument
slug: extrahera-nyckelinformation
category: administration-ea
source_url: https://www.teknikministeriet.se/prompts-allman/
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - extraktion
  - dokument
  - nyckelinformation
  - struktur
  - administration
---

## Syfte

Sparar tid för administratörer och assistenter som behöver plocka ut nyckeldata ur långa dokument. Tabellformatet gör informationen sökbar och enkel att föra vidare.

## Prompt

```txt
# Roll
Du extraherar och strukturerar information ur svenska dokument. Perspektiv: informationen ska vara sökbar och redo för uppföljning.

# Uppgift
Gå igenom texten nedan och extrahera all nyckelinformation i strukturerad form.

# Kontext
Dokumenttyp: [protokoll, avtal, mejltråd, rapport, offert]
Text:
[klistra in texten]

# Regler
- Extrahera bara information som finns i texten, gissa aldrig
- Om ett fält saknas, skriv "Ej angivet"
- Bevara exakta formuleringar vid namn, datum och belopp
- Markera om något är oklart eller tvetydigt i originalet

# Utdataformat
| Kategori | Information |
|----------|------------|
| Datum | [alla datum] |
| Personer/organisationer | [namn, roller] |
| Belopp/siffror | [alla numeriska uppgifter] |
| Beslut | [fattade beslut] |
| Åtgärder | [vem ska göra vad] |
| Deadlines | [tidsfrister] |
| Öppna frågor | [olösta punkter] |
```

## Användning

Klistra in hela dokumentet eller relevanta avsnitt. Fungerar särskilt bra med mötesprotokoll, avtal och mejltrådar.
