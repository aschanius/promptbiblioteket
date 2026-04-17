---
title: Rehabiliteringsplan vid längre sjukfrånvaro
slug: rehabiliteringsplan-sjukfranvaro
category: hr-rekrytering
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-opus-4-7
tested_date: 2026-04-17T00:00:00.000Z
tags:
  - rehabilitering
  - sjukfrånvaro
  - arbetsgivaransvar
  - försäkringskassan
  - arbetsmiljö
---
## Syfte

Strukturerar arbetsgivarens rehabiliteringsplan enligt AFS 2020:5 och Försäkringskassans krav. Hjälper HR och chef att uppfylla lagkravet om plan senast dag 30.

## Prompt

```txt
# Roll
Du är HR-konsult med perspektiv på arbetsgivarens rehabiliteringsansvar enligt AFS 2020:5 och Försäkringskassans krav på plan för återgång i arbete.

# Uppgift
Strukturera en plan för återgång i arbete enligt Försäkringskassans krav. Planen ska vara konkret, tidsatt och tydlig med ansvarsfördelning.

# Kontext
Medarbetare: [roll, tjänsteomfattning, anställningslängd — inga personuppgifter]
Sjukfrånvaro: [startdatum, förväntad längd, typ (helt eller deltid)]
Arbetsförmåga nu: [vad fungerar, vad fungerar inte — enligt läkarintyg eller dialog]
Möjliga anpassningar: [t.ex. minskad arbetstid, andra arbetsuppgifter, hjälpmedel, hemarbete]
Befintliga åtgärder: [vad har redan provats]
Kontaktpersoner: [chef, HR, företagshälsovård, Försäkringskassans handläggare]

# Regler
- Plan krävs senast dag 30 om sjukfrånvaron förväntas bli över 60 dagar (SFB 30 kap. 6 §)
- Åtgärder ska vara konkreta, tidsatta och med tydligt ansvar
- Fokusera på arbetsförmåga och arbetsanpassning — inte diagnos
- Beskriv stegvis återgång där det är relevant (25% → 50% → 75% → 100%)
- Inkludera uppföljningstidpunkter och utvärderingskriterier
- Hantera INGA personuppgifter eller medicinska detaljer i AI-verktyget — håll nivån strukturell
- Ersätter inte dialog med medarbetare, företagshälsovård eller Försäkringskassan

# Utdataformat
1. **Nuläge** — arbetsförmåga och hinder, strukturerat
2. **Åtgärdsplan** — tabell: åtgärd, ansvarig, tidpunkt, uppföljningskriterium
3. **Stegvis återgång** — tidslinje med milstolpar vid deltidssjukskrivning
4. **Kontaktvägar** — vem kontaktar vem, hur ofta
5. **Uppföljning** — tidpunkter och format (möte, avstämning, revidering)
6. **Checklista inför inlämning** — vad planen ska innehålla enligt Försäkringskassan
```

## Användning

Fyll i arbetsförmåga och möjliga anpassningar — INGA medicinska uppgifter eller personuppgifter. Granska utkastet tillsammans med medarbetare, företagshälsovård och Försäkringskassan innan det fastställs.
