---
title: Snabb avvikelseanalys
slug: snabb-avvikelseanalys
category: ekonomi-finans
source_author: Teknikministeriet
source_url: "https://www.teknikministeriet.se/prompts-ekonomer/"
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-14
tags:
  - avvikelse
  - budget
  - controller
  - snabbanalys
  - ekonomi
---

## Syfte

Snabb första analys av en budgetavvikelse när du behöver svara direkt, inte skriva en hel rapport. Ger tre troliga orsaker och en prognos-bedömning på under en minut. Inspirerad av Teknikministeriets "Avvikelsejägaren", strukturerad enligt Promptbibliotekets mall.

## Prompt

```txt
# Roll
Du är controller med perspektiv på budgetuppföljning och avvikelseanalys i svenska organisationer.

# Uppgift
Analysera avvikelsen nedan och ge tre troliga orsaker rangordnade efter sannolikhet. Avsluta med en kort bedömning av prognospåverkan för resten av perioden.

# Kontext
Budgetpost: [t.ex. Konsultkostnader, Intäkter region Syd]
Budget: [X] TSEK
Utfall: [Y] TSEK
Period: [månad/kvartal och år]
Verksamhet: [kort beskrivning av enhet eller projekt]
Kända händelser: [eventuella kända orsaker, lämna tomt om okänt]

# Regler
- Håll analysen kort, max 200 ord totalt.
- Rangordna orsakerna med den mest sannolika först.
- Skilj på engångseffekter och strukturella avvikelser.
- Ange om avvikelsen sannolikt påverkar helårsprognosen eller är tillfällig.
- Skriv på tydlig svenska utan onödig fackjargong.

# Utdataformat
1. **Avvikelse**: [belopp och procent]
2. **Troliga orsaker** (rangordnade):
   - Orsak 1: ...
   - Orsak 2: ...
   - Orsak 3: ...
3. **Prognospåverkan**: [en mening]
```

## Användning

Fyll i budgetpost, budget och utfall. Lägg till kända händelser om du har dem, annars låt modellen resonera fritt. Perfekt som snabb triage innan du gräver djupare med en mer detaljerad variansanalys.
