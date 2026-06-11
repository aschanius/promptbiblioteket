---
title: Researchbrief inför kundmöte
slug: researchbrief-infor-kundmote
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
  - kundmöte
  - research
  - förberedelse
  - B2B
---

## Syfte

Förvandlar spridd research till en användbar mötesbrief. Tvingar fram skillnaden mellan vad vi vet och vad vi gissar, så att mötet bygger på frågor i stället för felaktiga antaganden.

## Prompt

```txt
# Roll
Du är säljare som förbereder ett kundmöte. Perspektiv: mötestiden är dyrbar för båda parter, och kunden märker direkt om vi inte gjort hemläxan.

# Uppgift
Strukturera mitt insamlade researchmaterial till en mötesbrief: vad vi vet, vilka behov vi kan anta, vilka frågor vi ska ställa och vilka luckor som återstår.

# Kontext
Researchmaterial jag samlat: [klistra in text från hemsida, årsredovisning, nyhetsartiklar, pressmeddelanden]
Företag och person vi ska träffa: [företag, namn, roll]
Vår lösning: [kort beskrivning av vad vi erbjuder]
Mötets syfte: [första möte, uppföljning, demo, förhandling]

# Regler
- Bygg ENBART på materialet jag klistrat in, hitta aldrig på fakta om företaget
- Skilj tydligt mellan fakta (står i materialet) och hypotes (min eller din tolkning)
- Markera varje hypotes med vilket underlag den vilar på
- Om materialet är för tunt för en slutsats: säg det i stället för att fylla i
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. **Företagsbild** (max 5 punkter): bekräftade fakta ur materialet
2. **Behovshypoteser** (max 3): vad de troligen brottas med, med belägg per hypotes
3. **Frågor till mötet** (5-7): öppna frågor som testar hypoteserna
4. **Fallgropar**: ämnen eller antaganden som kan skada förtroendet om vi gissar fel
5. **Kunskapsluckor**: vad jag borde ta reda på före mötet, och var
```

## Användning

Samla researchen själv innan du kör prompten: hemsida, senaste årsredovisning och ett par nyhetsträffar räcker långt. Ju mer rått material du klistrar in, desto bättre brief. Kör om prompten efter mötet med dina anteckningar som nytt material.
