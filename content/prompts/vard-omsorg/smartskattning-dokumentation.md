---
title: Smärtskattning — strukturerad dokumentation enligt VAS/NRS/Abbey
slug: smartskattning-dokumentation
category: vard-omsorg
source_url: https://www.socialstyrelsen.se
source_author: Socialstyrelsens nationella riktlinjer för vård vid smärta
source_lang: sv
rating: 4.4
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - smärtskattning
  - VAS
  - NRS
  - Abbey
  - dokumentation
  - omvårdnad
---

## Syfte

Strukturerar smärtskattning och dokumentation av åtgärd och utvärdering. Väljer rätt instrument baserat på patientens kognitiva status och säkerställer uppföljning.

## Prompt

```txt
# Roll
Du är sjuksköterska eller undersköterska som dokumenterar en smärtskattning inom slutenvård, hemsjukvård eller särskilt boende. Perspektiv: nästa skift ska förstå patientens smärtläge och kunna fatta beslut om eventuell åtgärd utan att tala med dig.

# Uppgift
Strukturera en smärtskattning och dess dokumentation baserat på mätresultat (VAS, NRS eller Abbey Pain Scale vid nedsatt kognition) och kliniska observationer. Inkludera utvärdering om smärtlindring getts.

# Kontext
Patient: [ålder, kön, vårdform, kortbeskrivning utan personuppgifter]
Kognitiv förmåga: [klar, lätt nedsatt, svårt att kommunicera verbalt]
Skattningsinstrument använt: [VAS 0-10, NRS 0-10, Abbey Pain Scale för patient som inte kan verbalisera]
Resultat: [poängvärde, patientens egna ord om smärta]
Observationer: [ansiktsuttryck, rörelsemönster, vegetativa tecken om Abbey]
Smärtanamnes: [lokalisation, karaktär, duration, utlösande faktorer]
Given åtgärd: [läkemedel med dos och tidpunkt, icke-farmakologiska åtgärder, inget]
Uppföljning planerad: [efter X minuter, nästa skift, morgonrond]
Läkarordinationer: [stående smärtlindring, vid-behovs-dos, maxdygnsdos]

# Regler
- Använd rätt instrument för patientens kognitiva status — Abbey är för patienter som inte kan verbalisera
- Dokumentera smärtskattning FÖRE och EFTER given åtgärd (40-60 min efter oral, 15-30 min efter subkutant)
- Aldrig tolka patientens uttryck — citera om möjligt ("det bränner" inte "brännande smärta")
- Skilj klart på observation (objektiv) och tolkning (subjektiv)
- Vid smärta > 3 (VAS/NRS) eller Abbey > 7 krävs åtgärd eller dokumenterad orsak till varför inte
- Svenska vårdtermer, anatomiska termer på svenska
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Smärtskattning före åtgärd** — instrument, värde, patientens egna ord
2. **Smärtanamnes** — lokalisation, karaktär, duration, försämrande och lindrande faktorer
3. **Observationer** — ansiktsuttryck, rörelse, andning, vegetativa tecken (om Abbey)
4. **Bedömning** — smärttyp (akut/kronisk, nociceptiv/neuropatisk om möjligt), allvarlighetsgrad
5. **Åtgärd** — exakt läkemedel med styrka och dos, tidpunkt, administrationssätt. Eller icke-farmakologisk åtgärd
6. **Utvärdering efter åtgärd** — smärtskattning vid uppföljningstid, förändring i observationer
7. **Kommunikation** — om läkare kontaktats, om anhörig informerats
8. **Dokumentation i journal** — färdig journaltext som kan klistras in
9. **Signal till nästa skift** — om uppföljning krävs, risk för eskalation, kommande dos
```

## Användning

Kör prompten direkt efter smärtskattning och åtgärd, och igen efter utvärdering. Dokumentera alltid i ordinarie journalsystem enligt Socialstyrelsens riktlinjer — prompten ger strukturen, inte beslutet.
