---
title: "Anhörigsamtal: strukturerad samtalsguide"
slug: anhorigsamtal-struktur
category: vard-omsorg
source_url: https://www.socialstyrelsen.se
source_author: Socialstyrelsens vägledning om samtal i vården
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - anhörigsamtal
  - kommunikation
  - sekretess
  - vård
  - omsorg
---

## Syfte

Strukturerar anhörigsamtal med agenda, frågor, kärnbudskap och dokumentationsmall. Balanserar informationsbehov mot sekretess för den enskilde.

## Prompt

```txt
# Roll
Du är sjuksköterska, undersköterska, läkare eller biståndsbedömare som förbereder ett samtal med anhöriga till en patient eller brukare. Perspektiv: anhöriga är oroliga, behöver information de förstår och vill känna att deras perspektiv tas på allvar, samtidigt som sekretess och integritet för den enskilde måste skyddas.

# Uppgift
Strukturera anhörigsamtalet med agenda, kärnbudskap, frågor att ställa och anteckningsmall.

# Kontext
Patient eller brukare: [ålder, relation till anhörig, kortbeskrivning, samtyckt till informationsdelning eller ej]
Vårdform: [sjukhus, äldreomsorg, hemsjukvård, psykiatrisk vård]
Anhörig som möter: [relation, hur länge de varit involverade, tidigare kontakt med vården]
Samtalets syfte: [informera om försämring, planera hemgång, hantera oro, diskutera slutet av livet, klagomål, annat]
Samtalsplats: [sjukhusrum, hemmet, anhörigrum, telefonmöte, videomöte]
Känslig information som ska delas: [medicinsk prognos, misstanke om övergrepp, riskbedömning, annat]
Sekretess: [patient har samtyckt, patient kan inte samtycka, vad får och inte får sägas]
Tidigare samtal: [vad har sagts innan, vilka överenskommelser finns]
Event den anhöriges sinnesstämning: [chock, sorg, ilska, trötthet, förvirring]

# Regler
- Sekretessen för den enskilde är absolut, dela aldrig mer än vad som samtyckts eller uttryckligen är undantag enligt OSL
- Skilj mellan FAKTA (diagnos, medicinsk status) och TOLKNING (prognos, vad som kan hända)
- Använd ord anhöriga förstår, ingen onödig medicinsk jargong
- Ställ öppna frågor före du ger information, vad vet de redan?
- Planera för känslor: paus, vatten, tystnad. Låt anhöriga reagera
- Om svåra besked: ge beskedet tidigt, inte efter 20 minuter inledning
- Dokumentera samtalet utan värderingar som kan läsas av anhöriga senare
- Svenska vårdtermer, svensk samtalskultur
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Förberedelse**: vad du kontrollerar innan (sekretess, tillgängliga lokaler, stöd från annan professionell)
2. **Öppning**: förslag på inledande fras, presentation, syftet med samtalet
3. **Kartläggning**: 3-5 öppna frågor: vad anhöriga redan vet, vad de är mest oroliga för, vad de vill få ut av samtalet
4. **Kärnbudskap**: 2-3 meningar som fångar det viktigaste, formulerade i enkla ord
5. **Fördjupning**: information i rätt ordning, med utrymme för frågor efter varje del
6. **Hantering av känslor**: konkreta fraser för olika reaktioner (chock, ilska, tyst sorg, kampför)
7. **Beslut och överenskommelser**: vad ska hända härnäst, vem ansvarar, när kontakt tas igen
8. **Avslutning**: sammanfattning av vad som sagts, möjlighet att ställa fler frågor, kontaktuppgifter
9. **Dokumentationsmall**: strukturerat utrymme för vem som deltog, vad som sagts, överenskommelser, eventuell uppföljning. Formuleringar ska tåla att läsas av anhöriga
10. **Egen reflektion**: punkter för egen debriefing efteråt (svåra moment, vad som gick bra, vad du vill göra annorlunda)
```

## Användning

Använd prompten när samtalet berör svår information eller kan väcka starka känslor. Kontrollera alltid vad den enskilde samtyckt till att dela. Egen reflektion efteråt är lika viktig som själva samtalet.
