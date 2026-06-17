---
title: "Målgruppssegmentering: från breda grupper till skarpa segment"
slug: malgruppssegmentering
category: marknadsforing-kommunikation
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - segmentering
  - målgrupp
  - ICP
  - strategi
  - marknad
---

## Syfte

Segmenterar en bred målgrupp till 3-5 distinkta segment med egna jobb, triggers och kanaler. Inkluderar ICP för prioriterat segment.

## Prompt

```txt
# Roll
Du är marknadsförare eller affärsstrateg som segmenterar en bred målgrupp till hanterbara segment. Perspektiv: segmenten ska vara olika nog att motivera olika budskap och kanaler, inte bara olika etiketter på samma grupp.

# Uppgift
Segmentera en bred målgrupp till 3-5 distinkta segment med egna behov, trigger, budskap och kanalförslag. Inkludera ett ICP (ideal customer profile) för det viktigaste segmentet.

# Kontext
Företag eller produkt: [namn, kategori]
Affärskontext: [B2B, B2C, B2B2C]
Marknad: [geografisk, bransch, storlek på kundföretag om B2B]
Bred målgrupp idag: [hur målgruppen beskrivs nu: ofta för brett]
Kundinsikter: [kvantitativa fakta: åldrar, omsättning, branschfördelning. Kvalitativa citat: vad kunder säger]
Data: [CRM-mönster, topp-segment efter lönsamhet, churn-mönster, NPS]
Konkurrens: [vilka segment andra fokuserar på, eller missar]
Affärsmål: [vad segmenteringen ska leda till: tillväxt, retention, prissättning, produktutveckling]
Segmenteringsprincipfel att undvika: [t.ex. demografi utan beteende, eller för snäva segment]

# Regler
- Ett segment måste vara MÄTBART (hur identifierar vi det?), NÅBART (kan vi nå det?), RELEVANT (värt att satsa på?) och DIFFERENTIERAT (skiljer sig från andra)
- Blanda inte demografisk data med psykografisk utan koppling, ålder räcker sällan
- Segment ska ha 1-2 definierande jobb att göra (jobs to be done)
- ICP är beskrivning av IDEALKUND, inte alla kunder, den ska vara spetsig
- Undvik för många segment: 3-5 är hanterbart, 7+ blir ohanterligt
- Svensk marknadsterminologi, svenska kundexempel
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Segmenteringslogik**: vilken huvudaxel segmenteringen bygger på (behov, bransch, användning, etc.) och varför
2. **Segmentöversikt**: tabell: segmentnamn, storlek, lönsamhet, tillväxtpotential, strategisk prioritet
3. **Segment 1-5**: för varje segment:
   - Namn (beskrivande, inte generiskt)
   - Kort porträtt (2-3 meningar, som om du beskrev en riktig person/företag)
   - Jobb att göra (1-2 primära, 1-2 sekundära)
   - Frustrationer med nuvarande lösningar
   - Triggers som gör dem öppna för köp
   - Mätbara identifierare (hur vi känner igen dem i data)
   - Kanaler där de finns
   - Kärnbudskap som resonerar
4. **ICP-fördjupning (Ideal Customer Profile)**: det viktigaste segmentet i djupare detalj:
   - Företagstyp eller person-arketyp
   - Beslutsprocess och köpkommitté
   - Budget och betalningsvilja
   - Framgångskriterier (vad gör dem nöjda)
   - Röda flaggor (när man INTE ska vinna dem)
5. **Prioritering**: vilka segment ska vi satsa på nu, vilka senare, vilka inte alls
6. **Test-approach**: hur vi validerar segmenten i verkligheten (samtal, A/B, pilot) innan stor satsning
7. **Uppföljning**: när och hur segmenteringen revideras
```

## Användning

Basera på faktisk kunddata när det finns. Validera segmenten genom kundsamtal innan stora marknadsinvesteringar. Revidera årligen eller vid större marknadsförändring.
