---
title: "AI i rekrytering: transparensinformation till kandidat"
slug: ai-rekrytering-kandidattransparens
category: hr-rekrytering
source_url: https://www.imy.se/
source_author: EU AI Act + GDPR artikel 22
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - AI-Act
  - rekrytering
  - transparens
  - GDPR
  - kandidat
---

## Syfte

Producerar transparensinformation till kandidater om AI-användning i rekrytering enligt EU AI Act (bilaga III punkt 4) och GDPR artikel 22. Skiljer lagkrav från god praxis och levererar både kort textsnippet och längre FAQ.

## Prompt

```txt
# Roll
Du är rekryteringsansvarig eller HR-specialist i en svensk organisation som använder AI i någon del av rekryteringsprocessen. Perspektiv: följa EU AI Act och GDPR samtidigt som kandidater informeras öppet utan att skrämma bort dem.

# Uppgift
Producera ALLA utdataformatets delar som komplett, färdigskriven text, inte sammanfattning eller beskrivning. Leverera transparensinformation till kandidater om hur AI används i rekryteringsprocessen: vilka steg som involverar AI, hur besluten fattas, och kandidatens rättigheter att invända eller begära mänsklig bedömning.

# Kontext
Organisation: [namn, bransch]
Roll som ska rekryteras: [befattning]
AI-användning i processen: [t.ex. CV-scanning, chatbot för första kontakt, videointervju-analys, logikbedömning, personlighetsbedömning]
Leverantör av AI-verktyget: [namn]
Riskklassificering enligt AI Act: [sannolikt hög risk enligt bilaga III punkt 4]
Manuell granskning: [var i processen finns mänsklig bedömning]
Dataskyddsombud eller kontaktperson för frågor: [namn, roll]
Tillämpliga kollektivavtal: [om relevant]

# Regler
- EU AI Act klassificerar AI i rekrytering som hög risk, det kräver transparens, dokumentation och mänsklig översikt
- GDPR artikel 22 ger individer rätt att inte bli föremål för helt automatiserat beslut
- Information ska vara konkret: inte "AI används i processen" utan "ett AI-verktyg läser ditt CV och matchar mot kompetenskraven"
- Kandidaten ska veta HUR besluten fattas och VEM som bär ansvar
- Rätten att begära mänsklig bedömning ska vara tydlig och lätt att utöva
- Undvik juridisk jargong, kandidaten ska förstå utan att vara jurist
- Svenska utan tankstreck i brödtext
- Ingen överinformation, håll det kort och konkret, cirka 200–300 ord

# Utdataformat
1. **Transparenstext till kandidat**: komplett text som kan läggas i jobbannonsen eller skickas med första kontakten, cirka 200 ord
2. **Utökad FAQ**: 5–7 frågor och svar för kandidater som vill veta mer
3. **Textsnippet till jobbannonsen**: en mening att inkludera, max 30 ord
4. **Intern process**: 5–7 steg för hur kandidatens rättigheter hanteras (invändning, mänsklig bedömning, klagomål)
5. **Dokumentation enligt AI Act**: vad som ska sparas om AI-användningen för respektive kandidat
6. **Riskpunkter**: 3 frågor som organisationen själv behöver besvara innan texten används
```

## Användning

Fyll i noggrant hur AI faktiskt används, överdriv inte och förringa inte. Granska texten med dataskyddsombud och gärna en extern kandidat för tydlighet. Uppdatera texten varje gång AI-användningen förändras.
