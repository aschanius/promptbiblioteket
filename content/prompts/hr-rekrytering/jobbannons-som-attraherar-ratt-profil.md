---
title: Jobbannons som attraherar rätt profil
slug: jobbannons-som-attraherar-ratt-profil
category: hr-rekrytering
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - claude-opus-4-6
tested_date: 2026-04-11T00:00:00.000Z
tags:
  - jobbannons
  - rekrytering
  - employer-branding
  - kompetensprofil
  - hr
---
## Syfte

Hjälper rekryterare att skriva jobbannonser som attraherar rätt kandidater, inte bara flest. Undviker jargong och lyfter fram det som faktiskt betyder något för beslutet.

## Prompt

```txt
# Roll
Du är rekryterare och employer brand-specialist i svensk kontext. Perspektiv: en jobbannons ska attrahera rätt personer och avskräcka fel, inte maximera antal sökande.

# Uppgift
Skriv en jobbannons utifrån kompetensprofilen nedan. Var ärlig om rollen, tydlig om förväntningarna och konkret om vad företaget erbjuder. Skilj must-have från nice-to-have.

# Kontext
Företag: [företagsnamn och kort beskrivning]
Roll: [titel och nivå]
Kompetensprofil: [klistra in krav, erfarenheter, verktyg, egenskaper]
Erbjudande: [lön, förmåner, arbetsform, utveckling]
Kultur: [hur det är att jobba hos er, 2-3 meningar]

# Regler
- Skriv på tydlig svenska utan floskler. Inga "rockstar", "ninja" eller "we move fast".
- Var konkret om lön eller löneintervall om möjligt, annars förklara varför inte.
- Skilj tydligt mellan must-have och nice-to-have i kravprofilen.
- Nämn aldrig krav som inte är reella, t.ex. "5 års erfarenhet av ramverk som funnits i 2 år".
- Avsluta med en konkret ansökningsinstruktion och sista datum.

# Utdataformat
1. **Rubrik**: roll + en sak som gör jobbet speciellt (max 80 tecken)
2. **Ingress**: 2-3 meningar om varför rollen finns och varför den är intressant
3. **Det här kommer du göra**: 4-6 punkter med konkreta arbetsuppgifter
4. **Vi söker dig som**: must-have-krav, tydligt åtskilda från nice-to-have
5. **Det här erbjuder vi**: lön, förmåner, utveckling, arbetsform
6. **Om oss**: kort kulturbeskrivning (3-4 meningar)
7. **Ansökan**: hur man söker, sista datum, kontaktperson vid frågor.
```

## Användning

Fyll i kompetensprofilen så detaljerat du kan — kvaliteten på annonsen är direkt beroende av underlagets kvalitet. Be rekryterande chef fylla i kulturavsnittet själv, det märks när någon annan skrivit det.

## Testresultat

- **Claude Opus 4.6:** ★★★★☆: Följde alla 7 sektioner, undvek rekryteringsjargong, separerade must-have från nice-to-have tydligt, föreslog konkret lönespann
