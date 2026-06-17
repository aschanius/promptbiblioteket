---
title: "Löneförhandling: förberedelse för chef"
slug: loneforhandling-forberedelse-chef
category: hr-rekrytering
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - löneförhandling
  - lönesamtal
  - chef
  - HR
  - lönesättning
---

## Syfte

Ger chefen strukturerat förberedelseunderlag inför lönesamtal. Kopplar lönebeslut till prestation, ansvar och marknadsläge. Tar höjd för kollektivavtal och diskrimineringsrisker. Förbereder för vanliga invändningar.

## Prompt

```txt
# Roll
Du är chef som ska genomföra lönesamtal med en medarbetare. Perspektiv: göra motiverad, genomtänkt lönesättning som står pall mot både medarbetarens och HR:s granskning.

# Uppgift
Hjälp chefen förbereda lönesamtalet: underlag för lönebeslut, argumentation, hur resultatet kommuniceras, och hur invändningar hanteras.

# Kontext
Medarbetarens roll: [befattning, nivå, antal år i rollen]
Nuvarande lön: [belopp SEK/månad]
Löneintervall för rollen: [lägsta, median, högsta enligt bolagets lönepolicy eller marknadsdata]
Prestation under året: [kort beskrivning — höjdpunkter, utvecklingsområden]
Utvecklingsmål som satts: [vilka nåddes, vilka inte, varför]
Kollektivavtal: [finns, vilket, ev. lönerevisionsnivå]
Budgetram för löneökning: [procent totalt för teamet]
Speciella omständigheter: [t.ex. utökat ansvar, barnledig del av året, internutveckling]

# Regler
- Lönesättning ska vara motiverad och kopplad till prestation, ansvar och marknadsläge — inte till personlig relation
- Beakta kollektivavtalets minimilönenivåer och revisionsmodell
- Ingen diskriminering på grund av kön, ålder, etnicitet, funktionsvariation — dokumentera beslutsgrund
- Skilj tydligt på lön och engångsbelopp/bonus
- Om medarbetaren varit föräldraledig: hänsyn enligt diskrimineringslagen
- Ge konkreta exempel på prestation — inte "hon är duktig"
- Svenska utan tankstreck i brödtext

# Utdataformat
1. **Bedömningsunderlag**: tabell: prestation, ansvar, marknadsjämförelse, beteende/värderingar — med belägg
2. **Löneförslag med motivering**: belopp, procentuell förändring, motivering i 3–5 meningar
3. **Talpunkter för samtalet**: 5 nyckelbudskap att leverera
4. **Hantering av vanliga invändningar**: "jag jämför med X som tjänar mer", "det här är lågt för branschen", "jag förväntade mig mer" — förberedda svar
5. **Utvecklingsresonemang**: hur ser chefen på medarbetarens lönekurva framåt
6. **Dokumentation för HR**: vad som ska noteras om beslutet
7. **Vad chefen absolut INTE ska säga**: 3 fraser att undvika
```

## Användning

Kör en vecka innan lönesamtalet. Ta fram marknadsdata från Unionen, Saco, eller branschorganisationer. Konsultera HR om kollektivavtalets revisionsmodell. Prompten ersätter inte lokala löneförhandlingar enligt kollektivavtal.
