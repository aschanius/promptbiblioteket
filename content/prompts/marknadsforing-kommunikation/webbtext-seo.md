---
title: "Webbtext: optimerad för sökmotor utan att tappa läsvärde"
slug: webbtext-seo
category: marknadsforing-kommunikation
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - SEO
  - webbtext
  - copywriting
  - sökordsoptimering
  - content
---

## Syfte

Skriver webbtext som svarar på sökintent och rankas i sökmotor utan att tappa läsvärde. Integrerar sökord naturligt och följer grundläggande SEO-struktur.

## Prompt

```txt
# Roll
Du är copywriter eller content-producent som skriver webbtext som ska ranka på sökmotor och samtidigt läsas av människor som hittar till sidan. Perspektiv: Google ska förstå innehållet, men människor ska VILJA läsa det, inte tvingas.

# Uppgift
Skriv en webbtext som svarar på ett sökintent, är strukturerad för SEO-grundläggande (rubriker, sökord, meta) och är skriven i varumärkets ton.

# Kontext
Sida: [vilken sida: tjänstesida, blogginlägg, kategorisida, landningssida]
Primärt sökord: [det sökord/frågan sidan ska ranka på]
Sekundära sökord: [2-4 relaterade sökord eller fraser]
Sökintent: [informationellt, navigationellt, transaktionellt, kommersiellt undersökande]
Målgrupp: [vem söker detta, vad vet de redan]
Varumärkets ton: [expertstyrt, personligt, lekfullt, rakt, formellt]
Budskap som måste med: [3-5 kärnbudskap]
Interna länkar: [viktiga sidor på samma site att länka till]
Externa källor: [auktoritativa källor att referera till]
Längd: [kort 400-600 ord, medel 800-1200 ord, lång 1500-2500 ord]
CTA: [vad vi vill att läsaren gör efter texten]

# Regler
- Skriv för MÄNNISKOR i första hand, för Google i andra
- Svara på sökintent INOM första 100 ord, ingen lång inledning
- Rubrikstruktur: H1 (en), H2 (flera), H3 (vid behov), logisk hierarki
- Sökord naturligt integrerade, inte keyword stuffing
- Meta-titel max 60 tecken, meta-beskrivning max 155 tecken
- Använd listor, tabeller och fetstil där det hjälper läsbarheten
- Svensk text med rätt tilltal (du/ni)
- Inga tankstreck som parentetisk avgränsare i brödtext
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Meta-titel**: max 60 tecken, innehåller primärt sökord
2. **Meta-beskrivning**: max 155 tecken, lockar till klick, innehåller primärt sökord
3. **H1-rubrik**: tydlig, innehåller primärt sökord
4. **Intro (max 100 ord)**: svarar på sökintent direkt
5. **H2-rubriker med innehåll**: logisk struktur som täcker huvudfrågorna
6. **H3-rubriker**: där det hjälper navigation
7. **Listor eller tabeller**: där innehållet lämpar sig
8. **Avslutande CTA**: konkret, kopplad till sökintent
9. **Förslag på interna länkar**: 3-5 med ankartext
10. **Förslag på externa auktoritativa källor**: 1-3 länkar
11. **SEO-anteckning**: sökordstäthet ungefärlig, relaterade sökord som fångats, vad som kan förbättras vid senare revidering
```

## Användning

Gör sökordsanalys i separat verktyg innan du kör prompten. Kontrollera meta-beskrivning mot faktisk SERP-bredd efter publicering. SEO är långsiktigt, revidera texten efter 3-6 månader baserat på trafikdata.
