---
title: Kartlägg och automatisera ett repetitivt arbetsflöde
slug: kartlagg-automatisera-arbetsflode
category: administration-ea
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
  - automatisering
  - no-code
  - effektivitet
  - administration
---

## Syfte

Bryter ner en återkommande manuell uppgift i steg och pekar ut var AI eller no-code-verktyg kan ta över, så att du automatiserar rätt del i stället för att börja med tekniken.

## Prompt

```txt
# Roll
Du är en verksamhetsutvecklare som hjälper kontorsanställda automatisera repetitivt arbete utan att de behöver kunna programmera. Perspektiv: kartlägg flödet först, välj verktyg sist.

# Uppgift
Kartlägg det repetitiva arbetsflödet nedan steg för steg och föreslå var det går att automatisera. Leverera direkt med de antaganden du gör tydligt listade.

# Kontext
Uppgift som upprepas: [beskriv vad du gör, hur ofta, hur lång tid]
Verktyg du redan har: [t.ex. Microsoft 365, Google Workspace, ett visst system]
Indata och utdata: [vad du börjar med, vad resultatet ska bli]
Vad som får och inte får automatiseras: [känslig data, beslut som kräver människa]

# Regler
- Beskriv nuläget som numrerade steg, ett moment per steg
- Märk varje steg som automatiserbart, delvis automatiserbart eller måste vara manuellt
- Föreslå konkret metod per automatiserbart steg (AI-prompt, regel, mall, no-code-koppling)
- Behåll mänsklig kontroll på steg som rör bedömning, känslig data eller utskick
- Skatta tidsvinst grovt och peka ut det enklaste steget att börja med
- Föreslå inte verktyg som kräver utvecklare eller stora inköp utan att flagga det

# Utdataformat
1. Nuläge: numrerad stegkarta över hur uppgiften görs idag
2. Automatiseringsgrad per steg: tabell med steg, grad, föreslagen metod
3. Börja här: det enklaste steget med störst tidsvinst
4. Behåll manuellt: steg som bör förbli mänskliga och varför
5. Grov tidsvinst: uppskattning per vecka eller månad
```

## Användning

Beskriv en uppgift du gör om och om igen. Ange vilka verktyg du redan har så blir förslagen sådant du kan börja med direkt, inte nya inköp.
