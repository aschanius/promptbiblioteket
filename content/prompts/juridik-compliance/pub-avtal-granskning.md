---
title: Personuppgiftsbiträdesavtal (PUB-avtal) — granskning enligt GDPR artikel 28
slug: pub-avtal-granskning
category: juridik-compliance
source_url: https://www.imy.se/
source_author: IMY (artikel 28 GDPR)
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - PUB-avtal
  - GDPR
  - artikel-28
  - granskning
  - dataskydd
---

## Syfte

Granskar personuppgiftsbiträdesavtal systematiskt mot artikel 28.3 GDPR. Vanligaste juridiska uppgiften för SME som köper molntjänster, lönesystem eller marknadsföringsverktyg. Skiljer godtagbara formuleringar från vaga.

## Prompt

```txt
# Roll
Du är dataskyddsansvarig i en svensk organisation som ska teckna avtal med ett personuppgiftsbiträde. Perspektiv: säkerställa att avtalet faktiskt följer artikel 28 GDPR, inte bara ser juridiskt ut.

# Uppgift
Granska ett förslag till personuppgiftsbiträdesavtal (PUB-avtal) och identifiera brister, otydligheter och obligatoriska punkter som saknas enligt artikel 28.3 GDPR.

# Kontext
Personuppgiftsansvarig (du): [namn, bransch]
Personuppgiftsbiträde: [namn, tjänst som levereras]
Typ av personuppgifter som behandlas: [lista]
Kategorier av registrerade: [kunder, anställda, leverantörer, etc.]
Behandlingens syfte och varaktighet: [kort beskrivning]
Överförs uppgifter utanför EU/EES: [ja/nej/osäkert]
Underbiträden involverade: [ja/nej/osäkert]
Avtalstext: [klistra in hela PUB-avtalet]

# Regler
- Gå igenom ALLA nio obligatoriska punkter i artikel 28.3: föremål, varaktighet, art/ändamål, typ av uppgifter, kategori registrerade, personuppgiftsansvariges rättigheter/skyldigheter, biträdets skyldigheter (alla sex a–h)
- Flagga om avtalet är för vagt ("nödvändiga åtgärder" utan specificering) — det är en vanlig brist
- Hantering av underbiträden: krävs godkännande, förhandsgodkända, eller generellt godkännande med informationsplikt
- Tredjelandsöverföring: SCC (Standard Contractual Clauses), BCR, eller adekvansbeslut
- Revisionsrätt och inspektioner
- Incidenthantering och anmälningsskyldighet
- Skyldighet vid upphörande (radering/återlämning)
- Svenska utan tankstreck i brödtext

# Utdataformat
1. **Sammanfattning** — 2–3 meningar om avtalets övergripande status (godtagbart, behöver justeras, behöver omformuleras i grunden)
2. **Artikel 28-checklista** — tabell med kolumner: obligatorisk punkt, status (tydlig/vag/saknas), referens till paragraf i avtalet, kommentar
3. **Kritiska brister** — punkter där avtalet INTE uppfyller GDPR-kraven, med förslag på formulering
4. **Vaga formuleringar** — citat från avtalet + förslag på tydligare skrivning
5. **Tredjelandsöverföringar** — specifik analys om detta är aktuellt
6. **Underbiträden** — analys av klausulerna
7. **Frågor att ställa motparten** — 3–5 konkreta frågor innan avtalet signeras
```

## Användning

Klistra in hela PUB-avtalet och fyll i kontext om behandlingen. Kör innan avtalet signeras. Prompten ersätter inte juridisk rådgivning för komplicerade avtal — men fångar de vanligaste bristerna.
