---
title: "Vårdplan: utkast från bedömning till konkret plan"
slug: vardplan-utkast
category: vard-omsorg
source_url: https://www.socialstyrelsen.se
source_author: Socialstyrelsens föreskrifter om dokumentation i patientjournal
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - vårdplan
  - omvårdnad
  - dokumentation
  - journal
  - vård
---

## Syfte

Strukturerar ett utkast till vårdplan utifrån bedömningsdata. Skiljer medicinska mål från omvårdnadsmål och säkerställer att åtgärder är konkreta och mätbara.

## Prompt

```txt
# Roll
Du är sjuksköterska eller rehab-personal som ska ta fram ett utkast till vårdplan utifrån en patientbedömning. Perspektiv: planen ska kunna läsas och följas av kollegor på alla skift, även nattpersonal som inte träffat patienten.

# Uppgift
Strukturera ett utkast till vårdplan med mål, åtgärder och utvärdering utifrån bedömningsdata. Utkastet ska granskas och kompletteras av ansvarig sjuksköterska innan det blir journalfört beslut.

# Kontext
Patient: [ålder, kön, korta identifierare utan personuppgifter]
Vårdform: [hemsjukvård, särskilt boende, slutenvård-avdelning, rehabilitering]
Bedömningsdata: [kroppsliga fynd, funktion, kognition, social situation, anhöriga]
Diagnos eller problemområden: [medicinska och omvårdnadsproblem]
Patientens mål: [vad patienten själv vill uppnå eller bevara]
Bakgrundsdokument: [MAS-riktlinjer, regionala PM, lokala rutiner om relevant]
Riskfaktorer: [fall, trycksår, undernäring, suicidrisk om relevant]

# Regler
- Skilj mellan MEDICINSKA mål (läkarordination) och OMVÅRDNADSMÅL (sjuksköterskans ansvarsområde)
- Mål ska vara mätbara: "ökad mobilisering" räcker inte, skriv hur det mäts
- Åtgärder ska ange VEM gör VAD, NÄR och HUR OFTA
- Inkludera patientens egen röst när den finns i bedömningen
- Följ Socialstyrelsens föreskrifter för dokumentation i patientjournal
- Svenska vårdtermer, inga anglicismer där svensk term finns
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
1. **Sammanfattning av situation**: 3-5 meningar: patient, vårdform, huvudsakliga problemområden
2. **Vårdplanemål**: tabell: målområde, mål (mätbart), tidsram, uppföljningsdatum
3. **Åtgärder per mål**: tabell: mål, åtgärd, ansvarig (roll), frekvens, dokumentationspunkt
4. **Patientens och anhörigas delaktighet**: hur de är involverade, vad de uttryckt önskemål om
5. **Riskbedömning**: identifierade risker och förebyggande åtgärder
6. **Uppföljning och utvärdering**: datum, vem ansvarar, utvärderingskriterier
7. **Informationsöverföring**: vilka rutiner/dokument behöver uppdateras
8. **Oklarheter att följa upp**: punkter som kräver läkarbedömning, anhörigkontakt eller kompletterande information
9. **Påminnelse**: detta är ett utkast, ansvarig sjuksköterska ska granska och justera innan journalföring
```

## Användning

Samla bedömningsdata innan du kör prompten. Utkastet ska alltid granskas av ansvarig sjuksköterska innan journalföring. Mät mål i konkreta termer, "bättre" räcker inte.
