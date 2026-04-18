---
title: NDA-utkast — sekretessavtal enligt svensk standard
slug: nda-utkast-svensk-standard
category: juridik-compliance
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - NDA
  - sekretessavtal
  - avtal
  - juridik
  - svensk-rätt
---

## Syfte

Producerar komplett utkast till sekretessavtal anpassat till svensk affärspraxis. Skiljer NDA från konkurrensklausul, inkluderar vanliga undantag och flaggar för när PUB-avtal krävs parallellt.

## Prompt

```txt
# Roll
Du är jurist eller affärsutvecklare i ett svenskt bolag som ska teckna sekretessavtal. Perspektiv: balansera skydd av egen konfidentiell information med att inte göra avtalet så ensidigt att motparten inte skriver på.

# Uppgift
Utforma ett utkast till sekretessavtal (NDA) anpassat till svensk affärspraxis och lag. Producera ett komplett utkast som kan skickas till motpart efter redaktionell granskning.

# Kontext
Typ av NDA: [ensidigt (du delar ut information), ömsesidigt, tvåsidigt]
Parter: [namn och organisationsnummer för båda]
Syfte med informationsutbytet: [beskriv affären eller samarbetet kort]
Typ av konfidentiell information: [teknisk, kommersiell, strategisk, finansiell, kunddata, prospektlista]
Längd på sekretess: [vanligen 3–5 år efter avtalets upphörande]
Geografiskt omfång: [Sverige, Norden, EU, globalt]
Behöver avtalet gälla under förhandling eller efter tecknat huvudavtal: [ange]
Särskilda krav: [t.ex. exportkontroll, GDPR, insiderinformation]

# Regler
- Skriv på tydlig svensk juridik — undvik onödig engelsk jargong ("non-compete" blir konkurrensklausul)
- Svensk lag ska vara tillämplig, svensk domstol som tvistforum (föreslå men motivera)
- Undantag för allmänt tillgänglig information, självständigt utvecklad information, information från tredje part utan sekretess, samt lagstadgad upplysningsskyldighet
- Konkurrensklausul HÖR INTE HEMMA i ett NDA — flagga om användaren vill ha det och rekommendera separat avtal
- Vitesklausul kan användas men måste vara rimlig (vanligen 500 000–2 000 000 SEK beroende på bransch)
- Personuppgifter: om NDA innebär behandling av personuppgifter krävs kompletterande PUB-avtal
- Svenska utan tankstreck i brödtext

# Utdataformat
1. **Avtalsparter** — formell rubrik med uppgifter
2. **Bakgrund** — 2–3 meningar om sammanhang
3. **Definitioner** — vad konfidentiell information omfattar i detta avtal
4. **Sekretessåtagande** — vad part(er) förbinder sig till
5. **Undantag** — vilken information som inte omfattas
6. **Varaktighet** — avtalstid och efterverkande sekretess
7. **Påföljd** — vitesklausul och skadestånd
8. **Tillämplig lag och tvistforum**
9. **Övriga villkor** — fullständigt avtal, ändringar, överlåtelse
10. **Signaturrader**
11. **Granskningsanteckningar** — 3–5 punkter att särskilt överväga innan avtalet skickas ut
```

## Användning

Fyll i kontext noggrant — typ av NDA och informationens natur styr hela avtalet. Utkastet är en startpunkt; komplicerade avtal bör granskas av jurist innan signering.
