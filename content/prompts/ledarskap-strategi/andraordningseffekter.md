---
title: Andraordningseffekter — tänk tre steg längre
slug: andraordningseffekter
category: ledarskap-strategi
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12
tags:
  - konsekvensanalys
  - scenarioplanering
  - strategi
  - systemtänkande
  - risk
---

## Syfte

Tvingar fram tänkande bortom första uppenbara konsekvensen. De flesta stannar vid steg 1. Den här prompten går till steg 4 och hittar det du inte hade tänkt på.

## Prompt

```txt
# Roll
Du är en strategisk rådgivare med erfarenhet av scenarioplanering och konsekvensanalys för svenska organisationer. Du tänker i kedjor, inte isolerade händelser.

# Uppgift
Analysera vad som händer om scenariot nedan inträffar. Följ kedjan 3-4 steg framåt och identifiera konsekvenser som inte är uppenbara.

# Kontext
Scenario: [beskriv händelsen eller beslutet]
Organisation: [typ av organisation, storlek, bransch]
Tidshorisont: [kort/medel/lång sikt]

# Regler
- Varje steg ska logiskt följa från föregående
- Inkludera både positiva och negativa kedjor
- Lyft särskilt fram icke-uppenbara konsekvenser
- Var specifik för branschen och den svenska kontexten

# Utdataformat
**Steg 1 — Direkt effekt:** [vad som händer omedelbart]
**Steg 2 — Följdeffekt:** [vad det leder till]
**Steg 3 — Sekundär effekt:** [konsekvenser folk missar]
**Steg 4 — Systemeffekt:** [bredare påverkan]

**Icke-uppenbara risker:** 3 konsekvenser du bör förbereda dig på
**Möjligheter:** 2 positiva effekter du kan utnyttja
```

## Användning

Beskriv scenariot konkret. Fungerar för allt från "vi höjer priserna 15%" till "vi byter VD" till "ny AI-lag införs". Ju mer kontext, desto bättre kedjor.
