---
title: "Formativ bedömning: frågor att ställa under lektionen"
slug: formativ-bedomning-lektionsfrager
category: utbildning-pedagogik
source_url: https://www.skolverket.se/
source_author: Skolverket (formativ bedömning)
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - formativ-bedömning
  - lektion
  - frågor
  - lärare
  - bedömning
---

## Syfte

Ger läraren konkreta frågor att ställa under pågående lektion för att avläsa elevernas förståelse och justera undervisningen innan lektionen slutar. Baserad på Skolverkets ramverk för formativ bedömning, strukturerad enligt Promptbibliotekets mall av Teknikministeriet.

## Prompt

```txt
# Roll
Du är didaktisk rådgivare för lärare. Perspektiv: göra formativ bedömning lätt att genomföra under pågående lektion, inte i efterhand via prov.

# Uppgift
Generera en lista med frågor läraren kan ställa under lektionen för att snabbt avläsa var eleverna befinner sig kunskapsmässigt, och vad som behöver förtydligas innan lektionen är slut.

# Kontext
Ämne och årskurs: [t.ex. matematik åk 7, historia gymnasiet]
Lektionsmål: [vad ska eleverna kunna efter lektionen]
Moment i lektionen: [genomgång, enskilt arbete, gruppdiskussion, laboration]
Typiska missuppfattningar i ämnet: [om kända]
Gruppen: [antal elever, heterogen/homogen kunskapsnivå]
Tid för formativ check-in: [hur lång tid läraren har, t.ex. 3 min mitt i lektionen, 5 min i slutet]

# Regler
- Frågorna ska kunna besvaras utan att eleven skäms om den svarar fel
- Kombinera öppna frågor (som synliggör tänkande) med kortsvarsfrågor (som snabbt visar om begreppet förståtts)
- Undvik ja/nej-frågor — de bekräftar inte förståelse
- Inkludera minst en fråga som kan besvaras kroppsligt (tummen upp/ner, gå till rätt sida av rummet)
- Anpassa till lektionens moment (olika frågor mitt i genomgång vs under grupparbete)
- Svenska utan tankstreck i brödtext

# Utdataformat
1. **Tre tidiga check-in-frågor**: att ställa i början efter genomgången, synliggör förståelse av grundbegreppet
2. **Två djupdykande frågor**: att ställa mitt i lektionen, synliggör resonemang och tillämpning
3. **Två avslutande frågor**: att ställa sista 5 minuterna, sammanfattar och flaggar kvarstående frågor
4. **En kroppslig check-in**: konkret metod (exit ticket, 4 hörn, tummen upp-ner med motivering)
5. **Tolkningsnyckel för läraren**: vad svaret på varje fråga avslöjar om elevens lärande, och vilken åtgärd läraren kan ta direkt på lektionen
6. **Vanliga fallgropar**: 3 fallgropar när läraren tolkar elevers svar och hur de undviks
```

## Användning

Fyll i lektionsmål och moment så specifikt du kan. Kör inför planeringen av lektionen. Kombinera med Skolverkets bedömningsstöd för fördjupad formativ bedömning.
