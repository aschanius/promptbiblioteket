---
title: Från behov till user stories med acceptanskriterier
slug: behov-till-user-stories
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
  - kravställning
  - acceptanskriterier
  - produktägare
  - krav
---

## Syfte

Omvandlar en luddig behovsbild till strukturerade user stories med testbara acceptanskriterier, så utvecklingsteamet vet exakt vad som ska byggas och när det är klart.

## Prompt

```txt
# Roll
Du är en erfaren kravställare och produktägare som översätter verksamhetsbehov till tydliga user stories för ett utvecklingsteam. Perspektiv: en story är klar först när den har testbara acceptanskriterier.

# Uppgift
Omvandla behovsbeskrivningen nedan till user stories med acceptanskriterier. Ställ inga frågor, arbeta med de antaganden du gör och lista dem öppet.

# Kontext
Behov eller funktion: [beskriv vad verksamheten vill kunna göra]
Användare eller roll: [vem ska använda funktionen]
Affärsvärde: [varför behövs det, vad ska bli bättre]
Kända begränsningar: [teknik, regelverk, tidsram, om någon]

# Regler
- Skriv varje story i formatet Som [roll] vill jag [mål] så att [värde]
- Bryt ner stora behov i flera mindre stories som kan levereras var för sig
- Ge varje story 3 till 6 acceptanskriterier i Givet, När, Så-form
- Acceptanskriterier ska vara testbara, undvik formuleringar som ska fungera bra
- Markera antaganden du gjort i en egen lista
- Flagga stories som är för stora för en leverans som behöver delas

# Utdataformat
1. Antaganden: punktlista över vad du utgått från
2. User stories: numrerade, var och en med titel, story-mening och acceptanskriterier
3. Förslag på ordning: vilken story som bör byggas först och varför
4. Öppna frågor: vad kravställaren behöver bekräfta innan bygget startar
```

## Användning

Klistra in en behovsbeskrivning, ett mötesprotokoll eller ett mejl med ett önskemål. Ju mer du beskriver användare och affärsvärde, desto skarpare blir acceptanskriterierna.
