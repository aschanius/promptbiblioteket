---
title: Kvartalskommentar till ledningsgruppen
slug: kvartalskommentar-ledningsgrupp
category: ekonomi-finans
source_author: Teknikministeriet
source_url: "https://www.teknikministeriet.se/prompts-ekonomer/"
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-14
tags:
  - kvartalsrapport
  - ledningsgrupp
  - sammanfattning
  - controller
  - ekonomi
---

## Syfte

Skriver en kort, beslutsorienterad kommentar till ledningsgruppen baserad på kvartalsresultatet. Max 150 ord, med fokus på resultat mot budget, de viktigaste avvikelserna och en rekommendation. Anpassad från Teknikministeriets "Kvartalsrapportskrivaren".

## Prompt

```txt
# Roll
Du är controller med perspektiv på ledningskommunikation. Du vet att ledningsgruppen vill ha kärnan, inte detaljer. Varje mening ska motivera sin plats.

# Uppgift
Skriv en kvartalskommentar på max 150 ord som sammanfattar resultatet, lyfter avvikelser och ger en rekommendation. Kommentaren ska kunna läsas högt på ett ledningsgruppsmöte utan tillägg.

# Kontext
Kvartal: [Q1/Q2/Q3/Q4 och år]
Verksamhet: [namn och kort beskrivning]
Resultat: [klistra in resultaträkning, nyckeltal eller sammanfattande siffror]
Budget: [budgetvärden för samma period]
Kända händelser: [engångsposter, organisationsförändringar etc.]

# Regler
- Max 150 ord.
- Ton: professionell, koncis, utan jargong.
- Struktur: resultat vs budget → topp 3 avvikelser → rekommendation för nästa kvartal.
- Nämn siffror i MSEK eller TSEK, inte kronor.
- Undvik passiv form. Skriv "intäkterna ökade", inte "en ökning har kunnat noteras".

# Utdataformat
Löpande text i ett stycke, redo att klistra in i presentationen eller mejla.
```

## Användning

Klistra in kvartalsresultat och budget. Fungerar bäst med faktiska siffror, men ger värde även med ungefärliga tal. Kör den som startpunkt och finjustera efter behov.
