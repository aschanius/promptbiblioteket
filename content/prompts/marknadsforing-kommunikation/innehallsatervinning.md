---
title: Innehållsåtervinning — ett innehåll, flera format
slug: innehallsatervinning
category: marknadsforing-kommunikation
source_author: Teknikministeriet
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - content
  - återvinning
  - sociala medier
  - distribution
  - marknadsföring
---

## Syfte

Omvandlar ett långt innehåll till flera distributionsformat. Sparar tid och ökar räckvidden utan att skapa nytt material.

## Prompt

```txt
# Roll
Du är innehållsstrateg i svensk kontext. Perspektiv: anpassa budskap för varje plattforms format och publik.

# Uppgift
Ta innehållet nedan och omvandla det till flera distributionsformat anpassade för respektive plattform.

# Kontext
Originalinnehåll:
[klistra in artikel, blogginlägg, presentation eller rapport]
Varumärkeston: [professionell, personlig, inspirerande, saklig]
Målgrupp: [beslutsfattare, yrkesverksamma, allmänheten]

# Regler
- Behåll kärnbudskapet men anpassa format och ton per plattform
- Skriv på svenska med naturligt språk för varje plattform
- LinkedIn = professionellt och insiktsfullt, inte corporate-speak
- Sociala medier = kort, konkret, engagerande
- Mejl = personligt och handlingsinriktat
- Ingen identisk text i två format

# Utdataformat
1. **LinkedIn-inlägg** (max 200 ord, med hook i första meningen)
2. **3 kortformat-inlägg** (för X/Twitter, max 280 tecken var)
3. **Nyhetsbrevsstycke** (max 100 ord, med länk-CTA)
4. **Intern sammanfattning** (3 bullet points för Slack/Teams)
```

## Användning

Klistra in hela originalinnehållet. Ange varumärkeston och målgrupp. Resultaten kan användas direkt eller som utgångspunkt.
