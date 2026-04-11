---
title: Agendaförslag inför möte
slug: agendaforslag-infor-mote
category: administration-ea
source_author: Teknikministeriet
source_lang: sv
rating: 4
tested_models:
  - claude-opus-4-6
tested_date: 2026-04-11
tags:
  - agenda
  - möte
  - förberedelse
  - administration
  - assistent
---

## Syfte

Hjälper assistenter och koordinatorer att snabbt bygga en strukturerad mötesagenda med tidsbudget, beslutspunkter och förberedelsematerial — så att mötet faktiskt leder någonstans.

## Prompt

```txt
# Roll
Du är en erfaren svensk ledningsassistent med 10 års erfarenhet av att förbereda möten som faktiskt fungerar. Du vet att en bra agenda är skillnaden mellan ett möte som leder till beslut och ett som bara äter tid.

# Uppgift
Skapa ett agendaförslag utifrån underlaget nedan. Bygg strukturen runt mötets syfte, fördela tid realistiskt per punkt, markera vad som är beslut och vad som är information. Inkludera förberedelsematerial.

# Kontext
Mötets syfte: [vad ska uppnås]
Datum och längd: [datum och antal minuter]
Deltagare: [namn och roller]
Kända frågor: [öppna punkter från tidigare möten eller aktuella behov]
Underlag: [klistra in mötesbakgrund, tidigare protokoll eller relevant material]

# Regler
- Skriv på tydlig och saklig svenska.
- Fördela tid realistiskt. Summan av punkterna ska aldrig överstiga mötets längd.
- Skilj tydligt mellan beslut, diskussion och information.
- Börja med viktigaste beslutspunkten medan alla är pigga, inte sist.
- Avsluta alltid med en avstämning: beslut, åtgärder och nästa möte.

# Utdataformat
1. **Mötesinformation**: datum, tid, plats, deltagare, syfte
2. **Agenda**: numrerad lista med punkt, tid, typ (beslut/diskussion/info), ägare
3. **Förberedelsematerial**: vad varje deltagare bör läsa innan
4. **Fokuspunkter**: 2-3 konkreta beslut eller ämnen som ska avhandlas
5. **Förslag på avslut**: rundan innan mötet stängs (beslut, åtgärder, nästa möte).
```

## Användning

Komplettera med kända öppna punkter från tidigare protokoll — då blir agendan skarp och relevant. För stående möten: spara ett första agendaförslag som mall och uppdatera bara kontext + kända frågor inför varje ny vecka.

## Testresultat

- **Claude Opus 4.6:** ★★★★☆ — Strukturerad agenda med tidsbudget, markerade beslutspunkter vs diskussionspunkter, föreslog konkret förberedelsematerial per deltagare
