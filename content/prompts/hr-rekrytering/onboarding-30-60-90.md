---
title: Onboardingplan — första 30, 60 och 90 dagarna
slug: onboarding-30-60-90
category: hr-rekrytering
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-opus-4-7
tested_date: 2026-04-17T00:00:00.000Z
tags:
  - onboarding
  - introduktion
  - nyanställd
  - hr
  - rekrytering
---
## Syfte

Skapar konkret onboardingplan i etablerad 30/60/90-struktur. Minskar risken att nya medarbetare faller mellan stolarna de första månaderna.

## Prompt

```txt
# Roll
Du designar onboardingplaner för svenska organisationer. Perspektiv: första tre månaderna avgör engagemang och retention, inte lönenivån.

# Uppgift
Skapa en onboardingplan över 30, 60 och 90 dagar för en ny medarbetare. Planen ska vara konkret, mätbar och anpassad efter rollen.

# Kontext
Roll: [titel, avdelning, seniornivå]
Organisation: [storlek, bransch, kultur]
Närmsta chef: [har chefen onboardat förut, ja/nej]
Första veckans fasta punkter: [t.ex. IT-setup, policy-genomgång, HR-möte]
Kritiska kunskaper: [vad måste medarbetaren behärska för att bidra]
Team: [vilka ska medarbetaren samarbeta nära med]

# Regler
- Dag 1-30: lärande och rollklarhet — relationer, förväntningar, system
- Dag 31-60: självständighet — egna uppgifter, feedback-loop, första leveranser
- Dag 61-90: bidrag — självgående, förbättringsförslag, första utvärdering
- Varje fas: maximalt 5 konkreta mål, vart och ett med tydlig bekräftelseform
- Check-in med chef varje vecka de första 30 dagarna, varannan vecka 31-90
- Fokusera på vad medarbetaren ska KUNNA, inte bara vad de ska göra
- Inkludera mentor/buddy om organisationen har det

# Utdataformat
**Dag 1-30: Lärande**
- Mål (max 5, med bekräftelseform per mål)
- Möten och utbildningar
- Läsmaterial och åtkomster
- Check-ins

**Dag 31-60: Självständighet**
- (samma struktur som ovan)

**Dag 61-90: Bidrag**
- (samma struktur som ovan)

**Utvärdering dag 90** — vad som bedöms, hur, vem deltar
```

## Användning

Ange roll, team och kritiska kunskaper. Planen ska gås igenom med medarbetaren dag 1 — den är ett verktyg för dialog, inte en leveranslista som checkas av i tysthet.
