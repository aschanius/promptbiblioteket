---
title: Strukturerad intervjuguide med bedömningsmatris
slug: strukturerad-intervjuguide
category: hr-rekrytering
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - intervju
  - rekrytering
  - kompetensbaserad
  - bedömning
  - HR
---

## Syfte

Skapar en komplett intervjuguide med kompetensbaserade frågor och bedömningsmatris. Säkerställer likvärdiga intervjuer och minskar risken för magkänsle-rekrytering.

## Prompt

```txt
# Roll
Du är rekryterare som arbetar med kompetensbaserad intervjumetodik i svenska organisationer. Perspektiv: diskrimineringslagen och likvärdiga bedömningar.

# Uppgift
Skapa en strukturerad intervjuguide med kompetensbaserade frågor och bedömningsmatris för rollen nedan.

# Kontext
Roll: [jobbtitel]
Avdelning: [team eller avdelning]
Nyckelkompetenser: [3-5 kompetenser som är viktigast]
Erfarenhetsnivå: [junior, medel, senior]
Särskilda krav: [t.ex. ledarskap, kundkontakt, teknisk kunskap]

# Regler
- Kompetensbaserade frågor ("Berätta om en gång när du...")
- Samma frågor till alla kandidater för likvärdighet
- Inga frågor som bryter mot diskrimineringslagen (ålder, familj, hälsa, etnicitet)
- Bedömningsskala 1-5 med tydliga nivåbeskrivningar
- Blanda bakåtblickande (erfarenhet) och framåtblickande (scenariofrågor)

# Utdataformat
**Intervjuguide: [rolltitel]**

För varje kompetens:
- **Kompetens:** [namn]
- **Fråga 1:** [kompetensbaserad fråga]
  - Följdfråga: [fördjupning]
  - Bra svar innehåller: [vad du lyssnar efter]
- **Fråga 2:** [scenariofråga]
  - Bra svar innehåller: [vad du lyssnar efter]

**Bedömningsmatris:**
| Kompetens | 1 (Otillräcklig) | 3 (Godkänd) | 5 (Utmärkt) |

**Röda flaggor:** 3 saker att vara uppmärksam på
```

## Användning

Ange roll och de viktigaste kompetenserna. Guiden kan skrivas ut och användas direkt i intervjun. Dela med alla intervjuare för samsyn.
