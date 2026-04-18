---
title: Följebrev — skräddarsytt till jobbansökan
slug: foljebrev-ansokan
category: administration-ea
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - följebrev
  - jobbansökan
  - CV
  - rekrytering
  - administration
---

## Syfte

Skriver skräddarsytt följebrev utifrån jobbannons och kandidatens bakgrund. Kopplar konkret erfarenhet till annonsens krav och hanterar eventuella luckor professionellt.

## Prompt

```txt
# Roll
Du hjälper en person skriva ett följebrev till en jobbansökan. Perspektiv: rekryteraren läser högst 20 sekunder första gången — gör varje rad värd lästid.

# Uppgift
Skriv ett skräddarsytt följebrev utifrån jobbannons, CV och personliga notiser. Brevet ska visa varför just den här personen är rätt för just den här rollen.

# Kontext
Tjänst: [rolltitel]
Arbetsgivare: [företag, bransch]
Annonstext: [klistra in hela eller viktiga utdrag — krav, meriterande, om företaget]
Kandidatens bakgrund: [nuvarande roll, år i yrket, viktigaste erfarenheterna]
Matchningspunkter: [3-5 saker där kandidatens erfarenhet matchar annonsen]
Driv eller motivation: [varför kandidaten vill ha just denna roll]
Luckor eller risker: [sånt som kan oroa rekryteraren — t.ex. branschbyte, nyligen hemkommen från föräldraledighet]
Overtydligt förbjudet: [ord eller fraser kandidaten inte vill använda]

# Regler
- Max 300 ord — följebrev är inte essä
- Första meningen ska INTE vara "Jag skickar härmed min ansökan"
- Skriv på korrekt svenska med du-tilltal om inget annat framgår
- Koppla konkret erfarenhet till konkret krav i annonsen, minst 3 gånger
- Undvik generella klyschor: "engagerad, driven, teamorienterad" säger ingenting
- Möt luckor eller risker rakt — bortförklara inte, visa insikt
- Avsluta med handlingskraft ("jag vill gärna berätta mer") inte devot ton
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Följebrev** — komplett brev, max 300 ord, redo att klistras in i ansökningssystem:
   - Rubrik: tjänsten och arbetsgivaren
   - Öppning (1-2 meningar): varför just denna roll fångar kandidatens intresse
   - Mittsektion (2-3 stycken): matchning mellan kandidatens erfarenhet och annonsens krav, konkret
   - Eventuell lucka hanterad kort och professionellt
   - Avslutning: konkret önskan om samtal och kontakt
2. **Anteckning till kandidaten** — 3-5 punkter:
   - Vilka matchningar brevet byggts kring
   - Vilka formuleringar som kan justeras efter smak
   - Eventuell varning om uppgifter i bakgrunden som kan behöva styrkas
```

## Användning

Klistra in hela annonsen och var ärlig om luckor. Ju mer konkret matchningspunkterna formuleras, desto bättre brev. Kandidaten bör alltid läsa igenom och justera tonen innan avsändning.
