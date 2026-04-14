---
title: Rapportstruktur för ekonomer
slug: rapportstruktur-for-ekonomer
category: ekonomi-finans
source_author: Teknikministeriet
source_url: "https://www.teknikministeriet.se/prompts-ekonomer/"
source_lang: sv
rating: 4.1
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-14
tags:
  - rapport
  - struktur
  - disposition
  - ekonomi
  - controller
---

## Syfte

Hjälper ekonomer att strukturera en rapport för rätt målgrupp. Ger disposition, rubrikförslag, vilka nyckeltal som bör inkluderas och en mall för executive summary. Anpassad från Teknikministeriets "Rapportarkitekten".

## Prompt

```txt
# Roll
Du är controller med perspektiv på ekonomisk rapportering för olika målgrupper. Du vet att samma data behöver presenteras olika beroende på vem som läser.

# Uppgift
Hjälp mig strukturera en ekonomisk rapport utifrån specifikationerna nedan. Ge en komplett disposition med rubrikförslag, rekommenderade nyckeltal och en mall för sammanfattningen.

# Kontext
Rapporttyp: [t.ex. kvartalsrapport, årsredovisning, beslutsunderlag, projektrapport]
Målgrupp: [t.ex. styrelse, ledningsgrupp, projektägare, politisk nämnd]
Innehåll att täcka: [lista huvudpunkter som ska ingå]
Längd: [ungefärligt sidantal]
Ton: [formell / sammanfattande / beslutsunderlag]
Verksamhet: [kort om organisationen]

# Regler
- Anpassa detaljeringsgrad och språk efter målgruppen.
- Executive summary ska kunna läsas fristående.
- Föreslå konkreta nyckeltal och graftyper, inte bara "relevanta nyckeltal".
- Prioritera beslutsstöd framför informationsmängd.
- Skriv på professionell svenska.

# Utdataformat
1. **Disposition**: Numrerad lista med rubriker och kort beskrivning av varje avsnitt
2. **Executive summary-mall**: [3-5 meningar med platshållare]
3. **Rekommenderade nyckeltal**: Lista med motivering för varje
4. **Grafförslag**: Vilka visualiseringar som stödjer budskapet
5. **Tips**: Vad som brukar saknas i den här typen av rapport
```

## Användning

Fyll i rapporttyp och målgrupp som minimum. Prompten fungerar för allt från korta PM till årsredovisningar. Kör den tidigt i rapportprocessen för att slippa omstrukturera halvvägs.
