---
title: Kundcase — berättelse från problem till resultat
slug: kundcase-berattelse
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
  - kundcase
  - case study
  - berättelse
  - referens
  - content
---

## Syfte

Skriver kundcase som berättelse med situation, utmaning, lösning och resultat. Låter kundens röst höras genom citat och inkluderar ärliga reflektioner över vad som var svårt.

## Prompt

```txt
# Roll
Du är content-producent eller marknadsförare som skriver ett kundcase som berättelse, inte som testimonial-citat. Perspektiv: en intresserad prospekt ska känna igen sig i kundens situation och förstå varför lösningen fungerade — inte bara läsa en hyllning.

# Uppgift
Omvandla en kundintervju, internt faktapaket eller kort brief till ett kundcase med tydlig story: situation, utmaning, lösning, resultat och lärdomar.

# Kontext
Kund: [företag, bransch, storlek, geografiskt område]
Kontaktperson: [namn, roll, om de vill vara med i citat]
Utgångsläge: [kundens situation INNAN samarbetet började]
Utmaning: [det specifika problem som skulle lösas]
Varför just vi: [hur kunden hamnade hos oss, vilka alternativ de övervägde]
Lösning: [vad vi gjorde — projekt, produkt, tjänst, process]
Resultat: [kvantitativa och kvalitativa utfall — siffror är viktiga]
Tidsram: [hur länge samarbetet pågick, när resultaten nåddes]
Användbara citat: [direkta citat från kunden, om tillgängliga]
Godkännanden: [kunden har godkänt case + eventuella begränsningar på vad som får nämnas]
Målgrupp för caset: [vem ska läsa och känna igen sig]

# Regler
- Börja INTE med "Kunden X hade ett problem" — börja med något som fångar läsarens uppmärksamhet
- Specifika siffror slår abstrakta påståenden: "35 procent snabbare" inte "mycket snabbare"
- Låt kundens röst höras genom citat, inte genom beröm
- Beskriv UTMANINGEN tillräckligt så läsaren känner igen sig
- Lösning och resultat är viktiga, men det är UTMANINGEN som är kroken
- Ärlig nyans slår marknadsförings-superlativ: inkludera vad som var svårt eller vad som inte fungerade
- Svensk berättarstil, ingen amerikansk sales-ton
- Undvik tankstreck som parentetisk avgränsare i brödtext
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Rubrik** — fångar kärnan, gärna med siffra eller konkret resultat
2. **Ingress (2-3 meningar)** — situationen eller ögonblicket som dragit läsaren in
3. **Kundens situation** — kort presentation av kunden och deras utgångsläge
4. **Utmaningen** — specifik, konkret, identifierbar. Varför detta var svårt
5. **Vägen fram** — hur kunden hittade oss, vad som övervägdes, varför vi valdes
6. **Lösningen** — vad som gjordes, med tillräckligt detalj för trovärdighet
7. **Resultatet** — mätbart och berättande. Siffror + kundens upplevelse
8. **Det som var svårt** — ärlig reflektion: vad som inte gick som planerat eller krävde extra
9. **Kundens egna ord** — 2-3 korta citat placerade naturligt i texten
10. **Lärdomar** — 2-3 punkter som kan användas av läsaren, oavsett om de blir kund
11. **Vidare** — CTA som är naturlig: nästa steg för läsare som känner igen sig
12. **Fact sheet** — kort box: kund, bransch, tidsperiod, primära KPI:er. Kan användas på översiktssida
```

## Användning

Intervjua alltid kunden innan du skriver. Skicka utkast till kunden för faktagranskning. Ärlighet om utmaningar ökar trovärdigheten — undvik att göra caset till ren lovsång.
