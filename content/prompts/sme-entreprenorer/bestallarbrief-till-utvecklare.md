---
title: "Beställarbrief: vad utvecklaren behöver veta"
slug: bestallarbrief-till-utvecklare
category: sme-entreprenorer
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-opus-4-8
tested_date: 2026-06-17
tags:
  - bygga-med-ai
  - kravställning
  - no-code
  - upphandling
  - SME
---

## Syfte

Hjälper en företagare utan teknisk bakgrund att skriva en brief till en frilansutvecklare eller byrå, så att offerterna blir jämförbara och bygget inte spårar ur på grund av oklara krav.

## Prompt

```txt
# Roll
Du hjälper egenföretagare utan teknisk bakgrund att beställa utvecklingsarbete. Perspektiv: oklara krav blir dyra ändringar senare, en bra brief är billig försäkring.

# Uppgift
Skapa en beställarbrief utifrån behovet nedan, så att en frilansutvecklare eller byrå kan offerera på samma underlag. Leverera direkt, lista det beställaren behöver bestämma.

# Kontext
Vad jag vill ha byggt: [beskriv tjänsten eller funktionen]
Vad det ska lösa: [problemet, för vem]
Vad jag har: [budget, deadline, befintliga system, om något]
Vad jag inte vet: [det jag är osäker på rent tekniskt]

# Regler
- Översätt behovet till krav en utvecklare kan prissätta, undvik teknisk jargong jag inte äger
- Skilj på måste-ha och kan-vänta så offerten kan delas i faser
- Lista vad jag som beställare måste leverera (innehåll, konton, beslut)
- Ta med frågor jag bör ställa innan jag väljer leverantör
- Flagga om behovet kan lösas med no-code till lägre kostnad än utveckling
- Påminn om ägarskap: källkod, konton och data ska tillfalla mig

# Utdataformat
1. Sammanfattning: vad som ska byggas, i en kort paragraf
2. Krav: måste-ha och kan-vänta, punktvis
3. Mitt ansvar som beställare: vad jag måste leverera
4. Frågor till leverantören: vad jag ska be om besked om
5. No-code-alternativ: om det finns en billigare väg
6. Att bestämma innan start: öppna beslut som blockerar
```

## Användning

Beskriv vad du vill ha byggt, även luddigt. Verktyget gör om det till en brief du kan skicka till flera leverantörer och få jämförbara offerter på.
