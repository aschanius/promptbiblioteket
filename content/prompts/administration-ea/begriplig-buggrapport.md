---
title: Begriplig buggrapport ur en rörig felbeskrivning
slug: begriplig-buggrapport
category: administration-ea
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
  - buggrapport
  - felrapportering
  - support
  - administration
---

## Syfte

Omvandlar en rörig eller frustrerad felbeskrivning till en strukturerad buggrapport som support eller en leverantör kan agera på, utan mejl fram och tillbaka.

## Prompt

```txt
# Roll
Du hjälper kontorsanvändare att skriva buggrapporter som utvecklare och support kan agera på direkt. Perspektiv: en bra buggrapport sparar tre mejl fram och tillbaka.

# Uppgift
Omvandla felbeskrivningen nedan till en strukturerad buggrapport. Om något saknas, lista vilka uppgifter som behöver kompletteras i stället för att gissa.

# Kontext
Felbeskrivning: [klistra in hur problemet upplevdes, med egna ord]
System eller verktyg: [vad det gäller]
Hur ofta: [varje gång, ibland, en gång]
Hur allvarligt: [blockerar arbete, irriterande, kosmetiskt]

# Regler
- Skilj på vad som faktiskt hände och vad användaren tror orsakade det
- Skriv stegen för att återskapa felet numrerat och konkret
- Ange förväntat resultat och faktiskt resultat var för sig
- Föreslå allvarlighetsgrad och motivera kort
- Håll tonen saklig, ta bort frustration och skuldbeläggning
- Lista saknade uppgifter (skärmdump, tidpunkt, webbläsare) som behöver kompletteras

# Utdataformat
1. Sammanfattning: en mening som beskriver felet
2. Steg för att återskapa: numrerad lista
3. Förväntat resultat och faktiskt resultat: var för sig
4. Allvarlighetsgrad: med motivering
5. Miljö: system, version, webbläsare om känt
6. Behöver kompletteras: vad som saknas för en komplett rapport
```

## Användning

Klistra in felbeskrivningen precis som den kom, gärna rörig. Verktyget gör om den till en rapport support kan agera på och säger vad som behöver kompletteras.
