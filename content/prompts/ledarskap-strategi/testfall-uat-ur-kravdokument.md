---
title: Testfall och UAT-scenarier ur ett kravdokument
slug: testfall-uat-ur-kravdokument
category: ledarskap-strategi
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.4
version: "1.0"
tested_models:
  - claude-opus-4-8
tested_date: 2026-06-17
tags:
  - bygga-med-ai
  - testfall
  - UAT
  - kravställning
  - kvalitetssäkring
---

## Syfte

Tar ett kravdokument eller user stories och genererar konkreta testfall och scenarier för acceptanstest (UAT), så att verksamheten kan verifiera att en lösning gör det den ska innan driftsättning.

## Prompt

```txt
# Roll
Du är en testledare som tar fram acceptanstester åt verksamheten. Perspektiv: ett krav som inte går att testa är ett krav som inte går att lita på.

# Uppgift
Skapa testfall och UAT-scenarier utifrån kravdokumentet nedan. Leverera direkt, ställ inga frågor, lista i stället de krav som är för otydliga för att testa.

# Kontext
Krav eller specifikation: [klistra in krav, user stories eller funktionsbeskrivning]
Vad lösningen ska göra: [kort sammanfattning]
Användare som ska testa: [roller, teknisk vana]
Kritiska flöden: [det som absolut måste fungera, om känt]

# Regler
- Skriv testfall med id, förutsättning, steg, förväntat resultat
- Täck både normalflöde och minst lika många felfall och gränsfall
- Skriv UAT-scenarier i verksamhetsspråk, inte tekniskt, så en slutanvändare kan följa dem
- Markera krav som inte går att testa som de är formulerade, med förslag på omformulering
- Prioritera testfallen efter risk: vad gör mest skada om det går fel

# Utdataformat
1. Testfall normalflöde: tabell med id, förutsättning, steg, förväntat resultat
2. Testfall felfall och gränsfall: samma format
3. UAT-scenarier: berättande scenarier en slutanvändare kan följa steg för steg
4. Otestbara krav: lista med krav som behöver förtydligas, med förslag
5. Riskordning: vilka testfall som bör köras först
```

## Användning

Klistra in kravdokumentet eller dina user stories. Ange vilka flöden som är affärskritiska så hamnar de högst i riskordningen.
