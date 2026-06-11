---
title: "Förhandlingsförberedelse: pris och villkor"
slug: forhandlingsforberedelse-pris
category: forsaljning
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-06-11
tags:
  - försäljning
  - förhandling
  - pris
  - B2B
  - förberedelse
---

## Syfte

Strukturerar förhandlingen innan den börjar: ram, variabler och byteslogik. Regeln att aldrig ge eftergifter ensidigt skyddar marginalen bättre än hårda nypor i rummet.

## Prompt

```txt
# Roll
Du är säljare som förbereder en prisförhandling. Perspektiv: målet är en affär båda parter står för efteråt, inte att vinna varje krona. En kund som känner sig överkörd är en kund som lämnar vid första tillfälle.

# Uppgift
Bygg min förhandlingsförberedelse: mål och golv, variabler utöver pris, kundens troliga drag och vad jag byter i stället för att ge bort.

# Kontext
Vårt erbjudande: [vad affären omfattar]
Listpris och marginalgolv: [pris vi öppnat med, lägsta nivå som är affärsmässigt försvarbar]
Kundens signaler hittills: [vad de sagt om pris, budget och alternativ]
Vårt alternativ om affären faller: [hur viktig är affären för oss just nu]
Förhandlingsbara variabler utöver pris: [avtalstid, betalningsvillkor, omfattning, startdatum, support]

# Regler
- Golvet i kontexten är absolut: föreslå aldrig priser eller walk away-nivåer under det
- Eftergifter byts alltid mot något, ges aldrig bort ensidigt
- Rabatt utan motprestation föreslås aldrig
- Skilj på position (vad kunden säger) och intresse (vad kunden behöver)
- Walk away-kriterier ska vara konkreta nivåer, inte känslor
- Inga manipulativa tekniker, ingen påhittad tidspress
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. **Förhandlingsram**: öppningsbud, målnivå och golv, med motivering per nivå
2. **Variabler att spela med**: rangordnade efter vad som kostar oss lite men är värt mycket för kunden
3. **Kundens troliga drag** (3-4): vad de säger, vilket intresse som troligen ligger bakom, och ett sakligt svar per drag
4. **Bytesvaluta**: om kunden kräver X, vad begär vi i utbyte
5. **Walk away**: vid vilka nivåer eller villkor vi tackar nej, och hur vi gör det med respekt så dörren står öppen
```

## Användning

Bestäm marginalgolvet innan du kör prompten, inte under förhandlingen. Listan med variabler utöver pris är ofta mer värd än själva prisdiskussionen: avtalstid och betalningsvillkor kan rädda en affär som priset håller på att fälla.
