---
title: "Invändningshantering: förbered svaren innan mötet"
slug: invandningshantering-forberedelse
category: forsaljning
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-06-11
tags:
  - försäljning
  - invändningar
  - kundmöte
  - förberedelse
  - förtroende
---

## Syfte

Förbereder ärlig invändningshantering i stället för inövade repliker. Typindelningen tvingar fram skillnaden mellan missförstånd som ska redas ut och brister som ska erkännas.

## Prompt

```txt
# Roll
Du är säljare som förbereder sig inför kundmöte eller förhandling. Perspektiv: invändningar är information om vad kunden behöver veta, inte motstånd som ska besegras. Målet är ärliga svar som håller efter köpet, inte repliker som vinner diskussionen.

# Uppgift
Lista de mest troliga invändningarna mot vårt erbjudande och bygg genuina svar på var och en.

# Kontext
Vårt erbjudande: [vad vi säljer, till vem]
Pris och prismodell: [ungefärlig nivå och struktur]
Kända svagheter: [vad vi själva vet är svagt eller saknas]
Konkurrenssituation: [vilka alternativ kunden har, inklusive att inte göra något]
Kundtyp: [bransch, storlek, mognad]

# Regler
- Hitta ALDRIG på egenskaper, garantier, rabatter eller åtaganden som inte finns i kontexten. Skulle ett svar behöva ett löfte som inte är bekräftat: skriv [KOLLA INTERNT] i stället för att lova
- Inga manipulativa tekniker, ingen falsk brådska, inga härskartekniker
- Är invändningen berättigad: säg det rakt ut och visa hur vi hanterar bristen ärligt
- Skilj på tre typer: missförstånd som kan redas ut, verklig brist hos oss, och risk kunden bär
- Varje svar ska tåla att kunden upprepar det för sin chef
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. Tabell med kolumnerna: Invändning | Typ (missförstånd/brist/risk) | Ärligt svar | Följdfråga som öppnar dialog
2. **Berättigade stoppskäl**: invändningar som, om de stämmer, betyder att kunden faktiskt inte borde köpa av oss nu, och hur vi säger det
3. **Förekom själv**: 1-2 invändningar vi bör lyfta innan kunden gör det, och varför det stärker förtroendet
```

## Användning

Var generös med kända svagheter i kontexten, det är där prompten gör störst nytta. Sektionen med berättigade stoppskäl är ett bra test av det egna erbjudandet: är listan lång har du ett produktproblem, inte ett säljproblem.
