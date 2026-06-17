---
title: "Kampanjbrief: från idé till skarp brief"
slug: kampanjbrief
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
  - kampanj
  - brief
  - marknadsplan
  - kommunikation
  - strategi
---

## Syfte

Omvandlar kampanjidé och mål till en skarp brief som byrå eller kollega kan arbeta med. Säkerställer mätbara mål, konkret målgrupp och motiverade kanalval.

## Prompt

```txt
# Roll
Du är marknadsförare eller kommunikatör som skriver en kampanjbrief inför en kommande kampanj. Perspektiv: briefen ska kunna läsas av en byrå eller en kollega och räcka för att komma igång — utan att du behöver vara med i nästa möte.

# Uppgift
Omvandla ett kampanjkoncept och mål till en skarp kampanjbrief med affärsmål, målgrupp, budskap, kanaler, produktion och mätning.

# Kontext
Avsändare: [företag, varumärke, produkt eller tjänst]
Kampanjens mål: [affärsmål kvantitativt: t.ex. 2000 leads, 15 procent ökad trafik, 500 nya kundregistreringar]
Lansering: [datum, säsong, koppling till event eller produktrelease]
Budget (grov): [SEK eller storleksordning, om känd]
Målgrupp: [bransch, roll, ålder, värderingar, behov — så konkret du kan]
Insight: [vad vet vi om målgruppen som få andra vet? Ur data eller samtal]
Erbjudandet: [vad vi säljer, priser om relevant, konkurrensfördel]
Kanaler som övervägs: [betald social, SEM, nyhetsbrev, PR, event, organisk närvaro]
Produktionsresurser: [inhouse, byrå, frilans]
Tidigare kampanjer: [vad som fungerat och inte]
Risker: [varumärkesrisk, juridik, kundreaktioner]

# Regler
- Målen ska vara mätbara — antal, procent eller tid, aldrig bara "öka varumärkeskännedom"
- Skilj PRIMÄRT mål (ett, det viktigaste) från sekundära mål (max 2)
- Beskriv målgruppen som en riktig människa, inte som "konsumenter"
- Kärnbudskapet ska rymmas i en tweet (<280 tecken)
- Kanalerna ska motiveras: varför just dessa, inte bara "alla"
- Svensk marknadsterminologi, undvik engelska där svensk term finns (kundresa inte customer journey)
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Brieftitel**: kampanjens arbetsnamn
2. **Sammanfattning**: 3-4 meningar: vad, för vem, varför nu, önskat resultat
3. **Affärsmål**: primärt mål (mätbart) + max 2 sekundära
4. **Målgrupp**: beskriven som persona: situation, behov, frustration, vad som triggar intresse
5. **Insight**: kärnan i vad vi vet om målgruppen som gör denna kampanj möjlig
6. **Kärnbudskap**: en mening under 280 tecken
7. **Stöttande budskap**: 3-5 budskap som bär kärnbudskapet i olika kanaler
8. **Kanaler och roller**: tabell: kanal, syfte i kampanjen, primär/stödjande, format
9. **Produktionsbehov**: vad som behöver skapas (copy, bild, film, landningssida, automatiserade flöden)
10. **Tidsplan**: milstolpar från brief till avslut, med deadlines
11. **Mätning**: nyckeltal per mål, mätpunkter, källor för data
12. **Risker och förbehåll**: vad kan gå fel, beredskap
13. **Öppna frågor**: vad briefen ännu inte besvarar och vem som ska svara
```

## Användning

Skriv briefen INNAN du bokar kreativt möte. En otydlig brief ger otydlig kampanj. Kom tillbaka till brief-dokumentet regelbundet för att stämma av om kampanjen håller riktningen.
