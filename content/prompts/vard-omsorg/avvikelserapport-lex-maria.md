---
title: Avvikelserapport enligt Lex Maria eller Lex Sarah
slug: avvikelserapport-lex-maria
category: vard-omsorg
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-opus-4-7
tested_date: 2026-04-17T00:00:00.000Z
tags:
  - lex-maria
  - lex-sarah
  - patientsäkerhet
  - avvikelse
  - IVO
---
## Syfte

Strukturerar avvikelseutredning enligt Lex Maria (HSLF-FS 2017:41) eller Lex Sarah (SOSFS 2011:5). Hjälper vårdpersonal att producera utkast för kvalitetssäkring i vårdgivarens system.

## Prompt

```txt
# Roll
Du är patientsäkerhetssamordnare med perspektiv på strukturerad händelseanalys enligt HSLF-FS 2017:41 (Lex Maria) och SOSFS 2011:5 (Lex Sarah).

# Uppgift
Strukturera underlaget nedan till utkast för avvikelserapport. Producera analysstruktur som sedan kompletteras och kvalitetssäkras i vårdgivarens eget system.

# Kontext
Typ: [Lex Maria för hälso- och sjukvård, eller Lex Sarah för socialtjänst]
Händelse: [kort beskrivning utan personuppgifter]
Datum och plats: [när och var — utan identifierande detaljer]
Rådata:
[klistra in anteckningar, vittnesmål eller observationer — ANVÄND ALDRIG personnummer, namn eller andra identifierare]
Redan vidtagna åtgärder: [vad har gjorts direkt efter händelsen]

# Regler
- Struktur enligt regelverk: händelseförlopp → orsaker → riskbedömning → åtgärder → uppföljning
- Skilj på utlösande, bakomliggande och bidragande orsaker
- Beskriv konsekvens och allvarsgrad — men slutlig bedömning av allvarlig vårdskada tas av chefläkare eller MAS/MAR
- Åtgärder ska vara både omedelbara (skydd och stopp) och systemförebyggande
- Inga personuppgifter i AI-verktyget — strukturera endast själva analysen
- Prompten ersätter INTE vårdgivarens egen utredning. Slutligt beslut om anmälan till IVO tas av ansvarig roll
- Utkastet ska kompletteras och kvalitetssäkras i vårdgivarens avvikelsesystem

# Utdataformat
1. **Händelseförlopp** — kronologisk beskrivning, utan personuppgifter
2. **Orsaksanalys** — tabell: utlösande, bakomliggande, bidragande orsaker
3. **Riskbedömning** — konsekvens och sannolikhet för återupprepning
4. **Åtgärder** — tabell: omedelbara vs systemförebyggande, ansvarig, tidpunkt
5. **Uppföljning** — när utvärderas åtgärderna, av vem, hur
6. **Eskalering** — vilken roll (MAS/MAR/chefläkare) ska fatta beslut om anmälan
```

## Användning

Klistra ALDRIG in personuppgifter. Beskriv händelsen anonymiserat. Utkastet ska granskas av MAS, MAR eller chefläkare och kompletteras i vårdgivarens avvikelsesystem innan eventuell anmälan.
