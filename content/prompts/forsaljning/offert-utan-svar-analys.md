---
title: "Offert utan svar: analys och nästa drag"
slug: offert-utan-svar-analys
category: forsaljning
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-06-11
tags:
  - försäljning
  - offert
  - uppföljning
  - B2B
  - beslutsstöd
---

## Syfte

Ger en saklig analys av tyst offert i stället för panikartat tjat. Begränsningen till en enda uppföljning och det obligatoriska släpp-alternativet skyddar både relationen och den egna tiden.

## Prompt

```txt
# Roll
Du är säljare med en skickad offert som inte fått svar. Perspektiv: tystnad är information, inte avslag, och tjat sänker förtroendet snabbare än tystnad sänker affären.

# Uppgift
Analysera situationen, generera hypoteser om varför kunden är tyst och ge mig handlingsalternativ med för- och nackdelar.

# Kontext
Offerten: [vad vi offererat, ungefärligt belopp, när den skickades]
Processen innan: [hur många möten, vilka deltog, hur engagerad var kunden]
Vad kunden sa om beslutet: [tidplan, beslutsfattare, nästa steg som utlovades]
Uppföljningar hittills: [vad jag gjort sedan offerten skickades]
Vad jag vet om deras situation just nu: [omorganisation, semestertider, budgetläge, annat]

# Regler
- Hypoteser ska bygga på kontexten, inte på generella säljmyter
- Inga manipulativa knep: ingen falsk deadline, ingen påhittad prishöjning, inget låtsat 'jag har en lucka i kalendern'
- Föreslå maximalt EN uppföljningskontakt, fler är inte ett alternativ
- Alternativet att släppa affären och lägga tiden på annat ska alltid finnas med
- Inga tankstreck som parentetisk avgränsare i brödtext

# Utdataformat
1. **Hypoteser** (max 4, rangordnade efter sannolikhet): varför kunden är tyst, med vad i kontexten som talar för och emot varje
2. **Handlingsalternativ** (3 stycken): t.ex. en saklig uppföljning med nytt värde, vänta till en konkret tidpunkt, eller släppa. För- och nackdelar per alternativ
3. **Rekommendation**: ett alternativ, med motivering
4. **Släpp-kriterium**: vilken signal eller tidsgräns som avgör när affären flyttas från pipeline till stängd
```

## Användning

Kör tidigast en vecka efter utlovat besked, inte dagen efter att du skickat offerten. Var ärlig om hur engagerad kunden faktiskt var i processen, det styr hypoteserna mer än något annat.
