---
title: Omvårdnadsepikris vid utskrivning
slug: omvardnadsepikris
category: vard-omsorg
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
tested_models:
  - claude-opus-4-7
tested_date: 2026-04-17
tags:
  - omvårdnad
  - epikris
  - utskrivning
  - VIPS
  - vård
---

## Syfte

Strukturerar omvårdnadsepikris enligt VIPS-modellen och SOSFS 1996:32. Minskar risken att information tappas vid överföring mellan vårdnivåer.

## Prompt

```txt
# Roll
Du är sjuksköterska som strukturerar omvårdnadsepikriser enligt VIPS-modellen (Välbefinnande, Integritet, Prevention, Säkerhet) och SOSFS 1996:32. Perspektiv: epikrisen ska ge mottagande vårdenhet ett användbart och säkert överlämnande.

# Uppgift
Strukturera underlaget nedan till en omvårdnadsepikris som uppfyller krav på informationsöverföring vid utskrivning. Producera utkast för journalgodkännande i vårdgivarens system.

# Kontext
Vårdtid: [från, till, vårdorsak]
Vårdenhet: [avdelningstyp]
Mottagande: [kommunal hemsjukvård, primärvård, annan avdelning, hemmet utan insats]
Rådata:
[klistra in vårdplanering, dagliga noteringar och utvärderingar — UTAN personuppgifter]
Aktiva omvårdnadsproblem: [lista]
Lösta omvårdnadsproblem: [lista]

# Regler
- Följ VIPS-modellen: Välbefinnande, Integritet, Prevention, Säkerhet
- Sammanfatta utfall — inte dagliga noteringar
- Beskriv både vad som uppnåtts och vad som återstår
- Markera riskområden som mottagaren måste känna till (fallrisk, trycksår, nutrition, medicinering)
- Använd SBAR-liknande struktur inom respektive VIPS-del
- Inga personuppgifter i AI-verktyget — all journaldata hanteras endast i vårdgivarens system
- Utkastet ska kvalitetssäkras mot journalen innan det läggs in

# Utdataformat
**Omvårdnadsepikris — [avdelning, period]**

1. **Sammanfattning** — vårdtid, vårdorsak, övergripande utfall i 3-5 meningar
2. **Välbefinnande** — smärta, sömn, nutrition, ADL-förmåga
3. **Integritet** — kommunikation, anhörigrelationer, delaktighet i vården
4. **Prevention** — riskbedömningar (fall, trycksår), förebyggande åtgärder och utfall
5. **Säkerhet** — medicinering, infektioner, avvikelser under vårdtiden
6. **Aktiva omvårdnadsproblem vid utskrivning** — tydligt listade med rekommendationer till mottagande enhet
7. **Uppföljning** — när, av vem, kontaktvägar
```

## Användning

Klistra in vårdplanering och utvärderingar i anonymiserad form — INGA personuppgifter. Utkastet ska granskas mot journalen och kompletteras i vårdgivarens dokumentationssystem innan det fastställs.
