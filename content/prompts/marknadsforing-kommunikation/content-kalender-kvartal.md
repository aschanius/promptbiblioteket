---
title: Content-kalender — redaktionsplan för ett kvartal
slug: content-kalender-kvartal
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
  - content
  - redaktionsplan
  - kalender
  - marknadsföring
  - planering
---

## Syfte

Skapar en content-kalender för ett kvartal med tema, format, målgrupp och ansvar per inlägg. Minskar tiden mellan ide och publicering och säkerställer att innehåll kopplas till affärsmål.

## Prompt

```txt
# Roll
Du är content-ansvarig eller kommunikatör som planerar redaktionellt innehåll för ett helt kvartal. Perspektiv: kalendern ska göra det omöjligt att "kom igång med innehåll" — allt är redan bestämt.

# Uppgift
Skapa en content-kalender för ett kvartal baserat på strategiska teman, affärsmål och tillgängliga resurser. Kalendern ska täcka vad, när, varför, av vem och i vilken kanal.

# Kontext
Avsändare: [företag, varumärke]
Kvartal och år: [t.ex. Q2 2026, april-juni]
Affärsmål som stödjs: [lead-generering, kundlojalitet, rekrytering, produktlansering]
Målgrupper: [1-3 primära målgrupper för kvartalet]
Strategiska teman: [3-5 övergripande teman att bära genom kvartalet]
Känd händelser och tidpunkter: [mässor, produktrelease, säsongsevent, kundevenemang, pressträff]
Kanaler: [LinkedIn, nyhetsbrev, blogg, YouTube, Instagram, podcast, egna event]
Publiceringsfrekvens per kanal: [t.ex. blogg 1/vecka, LinkedIn 3/vecka, nyhetsbrev 2/månad]
Resurser: [inhouse team, frilans, extern byrå]
Tidigare toppmätningar: [vad som engagerat mest hittills — för att bygga vidare]

# Regler
- Varje innehåll ska ha en TYDLIG ROLL i kundresan: kännedom, intresse, övervägande, köp eller lojalitet
- Balansera UNIKT innehåll (egen produktion) med KURERAT innehåll (delning av relevant från andra)
- Lämna marginal för AKTUELLT (ca 20 procent) — plats för reaktion på händelser
- Varje inlägg ska ha en målgrupp, ett tema och ett mål (inte alla tre samtidigt)
- Återanvänd: ett långformat (blogg) blir 4-6 kortare format för olika kanaler
- Svenska begrepp, svenska exempel
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Kvartalets tema och berättelse** — 3-4 meningar som sammanfattar narrativet
2. **Månadsteman** — ett huvudtema per månad med koppling till affärsmål
3. **Kalendertabell** — tabell: vecka, datum, kanal, format, tema, målgrupp, mål i kundresa, ansvarig, status
4. **Återanvändningsschema** — för varje långformat (blogg, podd, video): vilka kortformat ska skapas och när publiceras de
5. **Reaktiva slots** — markerad plats för aktuellt innehåll, med riktlinjer för vad som passar varumärket
6. **Kampanjintegration** — hur kvartalets kampanjer (om finns) integreras i kalendern
7. **Produktionsplan** — deadlines för skrivande, bildsättning, granskning före publicering (7-14 dagar före)
8. **Mätplan** — vilka nyckeltal som följs per kanal och hur ofta rapportering sker
9. **Redaktionsmöten** — föreslagen rytm för avstämning (veckovis, varje tredje vecka)
10. **Risker och alternativ** — om nyckelperson är sjuk, om kampanj flyttas, vilka inlägg kan parkeras
```

## Användning

Planera innan kvartalets början. Håll en "levande" version med 20 procent reaktiv plats. Revidera efter varje månad baserat på hur mätpunkterna utvecklats.
