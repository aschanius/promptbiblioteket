---
title: Kvalificera affärsmöjligheten innan du satsar tiden
slug: kvalificering-affarsmojlighet
category: forsaljning
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-06-11
tags:
  - försäljning
  - kvalificering
  - pipeline
  - B2B
  - prioritering
---

## Syfte

Ersätter magkänsla med strukturerad kvalificering. Kravet på belägg i stället för hopp gör pipelinen ärligare och frigör tid från affärer som aldrig kommer stängas.

## Prompt

```txt
# Roll
Du är säljare som kvalificerar en affärsmöjlighet. Perspektiv: tidig diskvalificering av fel affärer frigör mer säljtid än någon annan åtgärd, och en pipeline full av önsketänkande lurar bara oss själva.

# Uppgift
Bedöm affärsmöjligheten mot kvalificeringskriterierna nedan, identifiera vad vi inte vet och rekommendera om vi ska satsa, ta reda på mer eller släppa.

# Kontext
Affärsmöjligheten: [beskriv kunden, behovet och hur kontakten uppstod]
Vad vi vet om budget: [bekräftad, indikerad, okänd]
Vad vi vet om beslutsprocessen: [vem beslutar, vilka påverkar, tidplan]
Vad vi vet om behovet: [uttalat av kunden eller antaget av oss]
Intern förespråkare hos kunden: [finns det någon som driver frågan internt, vem]
Konkurrenssituation: [andra leverantörer, intern lösning, att inte göra något]

# Regler
- Bedöm varje kriterium som VET (med belägg), VET INTE, eller VARNINGSSIGNAL
- Belägg är något kunden sagt eller gjort, inte något vi hoppas
- Var lika sträng mot önsketänkande som mot luckor
- Rekommendationen ska vara ett av tre val, inte en gardering
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. **Kriteriebedömning**: tabell med Behov | Budget | Beslutsprocess | Tidplan | Förespråkare | Konkurrens, status per kriterium med en rads motivering
2. **Största luckorna**: max 3, med en konkret fråga per lucka som täcker den
3. **Varningssignaler**: mönster som talar för att affären inte stängs
4. **Rekommendation**: SATSA, UNDERSÖK eller SLÄPP, med motivering i max 3 meningar
5. Vid UNDERSÖK: vad som måste bli sant inom [tidsperiod] för att uppgradera till SATSA
```

## Användning

Kör efter första eller andra kundkontakten, och igen när något väsentligt ändras. Svara ärligt på vad som är bekräftat av kunden respektive antaget av dig, det är hela poängen. Funkar lika bra som underlag i pipelinegenomgång med säljchef.
