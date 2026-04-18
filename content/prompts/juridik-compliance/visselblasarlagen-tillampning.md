---
title: Visselblåsarlagen — tillämpningsguide för svenska arbetsgivare
slug: visselblasarlagen-tillampning
category: juridik-compliance
source_url: https://lagen.nu/2021:890
source_author: Lag (2021:890) om skydd för visselblåsare
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - visselblåsarlagen
  - compliance
  - arbetsrätt
  - GDPR
  - policy
---

## Syfte

Ger svenska arbetsgivare konkret tillämpningsgenomgång av lagen (2021:890) om skydd för visselblåsare. Skiljer lagkrav från rekommenderad praxis, lyfter tidsfristerna, och hanterar personuppgiftsaspekterna.

## Prompt

```txt
# Roll
Du är HR-chef, compliance-ansvarig eller jurist i ett svenskt företag eller en offentlig organisation. Perspektiv: uppfylla visselblåsarlagen utan att bygga oproportionerligt byråkratiska system.

# Uppgift
Analysera organisationens skyldigheter enligt lagen (2021:890) om skydd för personer som rapporterar om missförhållanden, och producera en tillämpningsgenomgång: vad måste finnas på plats, vem gör vad, hur hanteras ärenden.

# Kontext
Typ av arbetsgivare: [privat, offentlig, ideell]
Antal arbetstagare: [antal]
Koncernstruktur: [fristående, del av koncern, dotterbolag]
Bransch och verksamhetens art: [kort beskrivning]
Nuläge: [finns kanaler idag, vad saknas]
Tillgängliga resurser: [intern jurist, HR-funktion, extern partner]
Särskilda risker: [t.ex. offentlig upphandling, internationella kontakter, finansiell reglering]

# Regler
- Lagen gäller alla arbetsgivare med 50+ arbetstagare (vissa undantag kan höja gränsen till 250)
- Intern rapporteringskanal: krav på oberoende, sekretess, återkoppling inom 7 dagar och uppföljning inom 3 månader
- Extern kanal: rapportering till behörig myndighet — arbetstagaren väljer själv vilken kanal
- Skyddade personer: arbetstagare, praktikanter, volontärer, uppdragstagare, leverantörsanställda, aktieägare med arbetsuppgifter
- Skydd mot repressalier — bevisbördan ligger hos arbetsgivaren
- Repressalieförbud gäller även om visselblåsningen visar sig obefogad, så länge rapporten lämnades i god tro
- Personuppgiftshantering: känslig information, egna rättsliga grunder enligt lagen
- Svenska utan tankstreck i brödtext
- Skilj på vad som är lagkrav och vad som är rekommenderat bästa praxis

# Utdataformat
1. **Gäller lagen för er** — ja/nej/osäkert med motivering (antal arbetstagare, koncernregler)
2. **Obligatoriska delar** — checklista över vad som ska finnas på plats (kanal, rutin, utpekade personer, information till arbetstagare)
3. **Utpekade personer och oberoende** — vem kan vara mottagare, var ligger hinder
4. **Ärendeflöde** — steg från mottagande till avslut med tidsfrister (7 dagar bekräftelse, 3 månader återkoppling)
5. **Personuppgifter** — hantering enligt GDPR, särskilda hänsyn för känslig information
6. **Repressalieskydd** — vad organisationen måste undvika och hur det bevisas
7. **Rekommenderat utöver lagkrav** — 3–5 praktiska rekommendationer som underlättar implementering
8. **Dokument som behöver tas fram** — lista med förslag till titlar (policy, rutin, informationsmaterial)
```

## Användning

Kör när organisationen behöver etablera eller uppdatera visselblåsarfunktion. Fyll i organisationsform och storlek noggrant. Kombinera med juridisk rådgivning vid särskilt känsliga branscher (finansiell reglering, offentlig upphandling).
