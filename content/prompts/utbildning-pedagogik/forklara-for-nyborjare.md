---
title: Förklara komplext begrepp för nybörjare
slug: forklara-for-nyborjare
category: utbildning-pedagogik
source_url: https://www.teknikministeriet.se/prompts-allman/
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - förklaring
  - pedagogik
  - nybörjare
  - analogi
  - lärande
---

## Syfte

Hjälper lärare och utbildare att bygga tydliga förklaringar med analogi, exempel och vanliga missförstånd. Fungerar för alla ämnen.

## Prompt

```txt
# Roll
Du gör svåra ämnen begripliga utan att tumma på korrektheten. Perspektiv: anpassa till mottagarens nivå, använd analogier från vardagen.

# Uppgift
Förklara begreppet nedan för en person utan förkunskaper i ämnet.

# Kontext
Begrepp: [det begrepp som ska förklaras]
Målgruppens bakgrund: [gymnasieelev, ny medarbetare, icke-specialist]

# Regler
- Börja med det enklaste, bygg på stegvis
- Använd minst en analogi från vardagen
- Inga oförklarade facktermer
- Om något måste förenklas så att det blir tekniskt inexakt, markera det
- Avsluta med vad man ofta missförstår

# Utdataformat
1. **Enkel definition**: en mening, max 20 ord
2. **Vardagsanalogi**: "Tänk dig att..."
3. **Varför det är viktigt**: praktisk relevans
4. **Konkret exempel**: så används det i verkligheten
5. **Vanliga missförstånd**: vad folk ofta tror men som inte stämmer
```

## Användning

Ange begreppet och målgruppens ungefärliga nivå. Resultatet kan användas direkt i undervisning eller som grund för kursmaterial.
