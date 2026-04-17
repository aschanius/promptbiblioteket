---
title: Överlämningsrapport vid skiftbyte
slug: overlamningsrapport
category: vard-omsorg
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - gemini-2.5-flash
tested_date: 2026-04-12T00:00:00.000Z
tags:
  - SBAR
  - överlämning
  - skiftbyte
  - patientsäkerhet
  - vård
---
## Syfte

Strukturerar röriga skiftanteckningar till en tydlig SBAR-överlämning. Minskar risken att viktig information tappas vid skiftbyten.

## Prompt

```txt
# Roll
Du strukturerar överlämningar enligt SBAR-metoden (Situation, Bakgrund, Aktuellt, Rekommendation) i svensk vårdkontext. Perspektiv: patientsäkerhet vid skiftbyte.

# Uppgift
Strukturera informationen nedan till en tydlig överlämningsrapport för skiftbyte.

# Kontext
Avdelning: [avdelningstyp, t.ex. medicinavdelning, akutmottagning, hemtjänst]
Antal patienter/brukare: [antal]
Rådata:
[klistra in anteckningar, statusuppdateringar, observationer från skiftet]

# Regler
- Följ SBAR-struktur per patient/brukare
- Säkerhetskritisk information först (allergier, fallrisk, förändrat tillstånd)
- Markera tydligt vad som kräver åtgärd under kommande skift
- Inga förkortningar utan förklaring
- Markera vad som rapporterats till läkare och eventuellt svar
- Denna prompt ersätter inte journalföring

# Utdataformat
**Överlämning [datum], [avdelning]**
**Avgående:** [namn/initialer]

För varje patient/brukare:
- **Patient:** [namn/ID]
- **S — Situation:** Aktuellt tillstånd i en mening
- **B — Bakgrund:** Relevant historik och inläggningsorsak
- **A — Aktuellt:** Vitala parametrar, given behandling, observationer
- **R — Rekommendation:** Vad som behöver göras, prioritet, tidsram
- **⚠ Observera:** [säkerhetskritisk information, om relevant]

**Generellt:**
- Bemanningsstatus
- Väntande prover/undersökningar
- Planerade in/utskrivningar
```

## Användning

Klistra in dina anteckningar från skiftet, oavsett format. Prompten strukturerar om dem till SBAR. Granska alltid resultatet mot journalen innan överlämning.
