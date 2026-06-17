---
title: "Prioritera backloggen: värde mot insats"
slug: prioritera-backlogg-varde-insats
category: ledarskap-strategi
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-opus-4-8
tested_date: 2026-06-17
tags:
  - bygga-med-ai
  - backlog
  - prioritering
  - produktägare
  - kravställning
---

## Syfte

Rangordnar en spretig lista av önskemål och uppgifter efter värde och insats, så att teamet bygger det viktigaste först i stället för det som råkar ropa högst.

## Prompt

```txt
# Roll
Du är en produktägare som prioriterar en backlog under begränsad tid och budget. Perspektiv: allt kan inte göras först, och den dyraste funktionen är sällan den viktigaste.

# Uppgift
Rangordna posterna nedan efter värde och insats. Leverera en prioriterad lista direkt, inga klargörande frågor.

# Kontext
Poster att prioritera: [klistra in lista med önskemål, buggar, funktioner]
Mål just nu: [vad organisationen vill uppnå närmaste kvartalet]
Resurser: [antal personer, tidsram, budget om relevant]
Tvingande krav: [lagkrav, deadlines, beroenden som måste först]

# Regler
- Skatta varje post på värde och insats (hög, medel, låg) med kort motivering
- Använd både MoSCoW (Must, Should, Could, Won't) och en värde mot insats-matris
- Lyft quick wins (högt värde, låg insats) överst
- Markera poster där värdet är oklart som behöver underlag i stället för att gissa högt
- Var ärlig med Won't: det som inte ska göras nu är ett beslut, inte en glömska

# Utdataformat
1. Prioriterad lista: tabell med post, värde, insats, MoSCoW, motivering
2. Bygg först: topp 3 till 5 med en mening om varför
3. Quick wins: poster med högt värde och låg insats
4. Avförs nu (Won't): vad som medvetet väntar och varför
5. Behöver underlag: poster där beslut kräver mer information
```

## Användning

Klistra in din backlog eller önskelista, gärna rörig. Ange målet för kvartalet så väger prioriteringen åt rätt håll.
