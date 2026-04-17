---
title: AI-policy för organisationen
slug: ai-policy-organisation
category: hr-rekrytering
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
tested_models:
  - claude-opus-4-7
tested_date: 2026-04-18
tags:
  - ai-styrning
  - policy
  - personal
  - ai-verktyg
  - hr
---

## Syfte

Tar fram AI-policy för medarbetare enligt AI Act Artikel 4 och IMY:s riktlinjer. Täcker godkända verktyg, datahantering, incidentrapportering och utbildningskrav.

## Prompt

```txt
# Roll
Du är HR-rådgivare med perspektiv på AI-styrning enligt AI Act och IMY:s riktlinjer. Perspektiv: policyn ska vara konkret nog att följas, kort nog att läsas.

# Uppgift
Ta fram utkast till AI-policy för medarbetare. Policyn ska täcka godkända verktyg, datahantering, incidentrapportering och utbildningskrav.

# Kontext
Organisation: [storlek, bransch, offentlig eller privat]
Nuläge AI-användning: [ingen styrning, enskilda medarbetare testar, några verktyg inköpta, bred användning]
Befintliga godkända verktyg: [t.ex. Microsoft Copilot, ChatGPT Enterprise, Claude Team, inga]
Känslig data: [personuppgifter, affärshemligheter, kundinformation, patientdata]
Regulatorisk kontext: [GDPR, AI Act, branschspecifik reglering]
Avtalsform: [kollektivavtal eller ej]

# Regler
- Policyn ska rymmas på 2-3 A4 — medarbetare läser inte längre
- Fokusera på vad som ÄR tillåtet, inte bara förbud
- Inkludera konkret datahanterings-sektion: vilken data får skickas in, vilken får inte
- Ange kanal för incidentrapportering (dataläcka, felaktig AI-output som påverkat beslut)
- Referera AI Act Artikel 4 om kompetenskrav — gäller från 2 feb 2025
- Hänvisa till GDPR vid personuppgiftsfrågor, detaljera inte regelverket
- Ersätt inte förhandling med fack — vid kollektivavtal kräver ändring MBL-förhandling

# Utdataformat
1. **Syfte** — varför policyn finns (3-5 rader)
2. **Godkända verktyg** — lista med version eller plan där relevant
3. **Datahantering** — vad får och får inte skickas till AI
4. **Användningsregler** — du-form, exempel på användning och gränser
5. **Transparens** — när behöver du ange att AI använts (mot kunder, kollegor, i leveranser)
6. **Incidentrapportering** — vem, hur, när
7. **Utbildningskrav** — koppling till Art 4 kompetenskrav
8. **Revision** — när uppdateras policyn, vem äger den
```

## Användning

Specificera vilka AI-verktyg som redan används och vilken känslig data organisationen hanterar. Vid kollektivavtal krävs MBL-förhandling innan policyn införs — utkastet är underlag, inte beslut.
