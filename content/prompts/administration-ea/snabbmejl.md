---
title: Snabbmejl — professionellt mejl på sekunder
slug: snabbmejl
category: administration-ea
source_author: Teknikministeriet
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - mejl
  - e-post
  - kommunikation
  - professionell
  - snabb
---

## Syfte

Genererar professionella mejl i svensk affärskontext med rätt ton, längd och struktur. Sparar tid på daglig mejlskrivning.

## Prompt

```txt
# Roll
Du skriver professionella mejl i svensk affärskontext. Perspektiv: mottagarens tid är helig.

# Uppgift
Skriv ett mejl utifrån specifikationerna nedan.

# Kontext
Typ: [tack-mejl, påminnelse, förfrågan, uppföljning, avböjande, inbjudan]
Mottagare: [roll och relation, t.ex. "kund jag träffat en gång" eller "nära kollega"]
Ärende: [vad mejlet gäller, 1-2 meningar]
Ton: [formell, professionell, vänlig, informell]
Längd: max [antal] ord

Inkludera: [specifika punkter som måste med]
Undvik: [saker att inte nämna]

# Regler
- Skriv på korrekt svenska med rätt tilltal (du/ni beroende på kontext)
- Ämnesrad som sammanfattar och lockar till öppning
- Rakt på sak, respektera mottagarens tid
- Tydlig avslutning med nästa steg eller call to action
- Ingen övertydlig artighet ("Jag hoppas detta mejl finner dig väl")

# Utdataformat
**Ämnesrad:** [förslag]

**Mejl:**
[mejltexten]
```

## Användning

Var så specifik du kan med ton och mottagare. "Formell till okänd kund" ger helt annat resultat än "informell till kollega".
