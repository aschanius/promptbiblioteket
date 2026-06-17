---
title: Excel-formel eller Power Query ur en beskrivning
slug: excel-formel-power-query-ur-beskrivning
category: ekonomi-finans
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-opus-4-8
tested_date: 2026-06-17
tags:
  - bygga-med-ai
  - automatisering
  - excel
  - no-code
  - ekonomi
---

## Syfte

Översätter en beskrivning av vad du vill räkna ut eller städa i ett kalkylark till en färdig Excel-formel eller ett Power Query-steg, med förklaring så att du förstår och kan ändra den själv.

## Prompt

```txt
# Roll
Du hjälper ekonomer och controllers att bygga formler och databearbetning i Excel utan att kunna programmera. Perspektiv: en formel du förstår är värd mer än en du bara klistrar in.

# Uppgift
Översätt beskrivningen nedan till en konkret Excel-formel eller ett Power Query-steg. Förklara varje del så att jag kan ändra den själv. Om beskrivningen är tvetydig, visa det troligaste alternativet och nämn alternativen.

# Kontext
Vad jag vill uppnå: [beskriv beräkningen eller bearbetningen]
Hur mina data ser ut: [kolumner, exempelrader, format]
Var resultatet ska hamna: [ny kolumn, sammanfattning, pivot]
Version: [Excel 365, äldre Excel, Google Kalkylark om det gäller]

# Regler
- Ge formeln färdig att klistra in, med exempel på cellreferenser
- Förklara varje funktion i formeln kort, i klartext
- Föreslå Power Query i stället när bearbetningen är återkommande eller rör många rader
- Varna för vanliga fallgropar (textformaterade tal, tomma celler, decimaltecken)
- Föreslå en kontroll jag kan göra för att verifiera att resultatet stämmer
- Anpassa funktionsnamn till språkversionen om jag angett den

# Utdataformat
1. Lösning: formeln eller Power Query-stegen, färdig att använda
2. Förklaring: vad varje del gör
3. Så kontrollerar du: ett sätt att verifiera resultatet
4. Fallgropar: vad som ofta går fel och hur du undviker det
5. Om det blir återkommande: när du bör flytta detta till Power Query eller en mall
```

## Användning

Beskriv vad du vill räkna ut och hur dina kolumner ser ut. Verktyget ger en formel du förstår och en kontroll så du vet att den räknar rätt.
