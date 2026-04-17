---
title: "Månadsbokslut-kedjan"
slug: manadsbokslut-kedjan
category: ekonomi-finans
estimated_time: "45 min"
level: medel
version: "1.0"
tags:
  - månadsbokslut
  - controller
  - varians
  - ledning
steps:
  - prompt: snabb-avvikelseanalys
    role: "Identifiera topp-10 avvikelser mot budget"
  - prompt: manadsrapport-med-variansanalys
    role: "Bygg strukturerad variansrapport"
  - prompt: forklara-ekonomi-for-styrelsen
    role: "Översätt rapporten till ledningsspråk"
  - prompt: scenarioanalys-tre-utfall
    role: "Uppdatera prognos för kvartalet"
---

## Syfte

När månadens böcker stängs: från rådata till ledningsinriktad kommentar och uppdaterad prognos i fyra steg. Sparar 60–90 minuter jämfört med manuellt upplägg.

## När använd

- En gång per månad, dag 2–5 efter månadsslut
- När du behöver leverera både detaljrapport till controller-team och sammanfattning till ledning

## Tips

- Spara output mellan steg i ett dokument — ingen AI-session har tillräcklig kontext att kedja alla fyra utan copy-paste
- Kör steg 1–2 första arbetsdagen efter månadsslut, steg 3–4 när siffrorna är klara
- Låt steg 3 vara kortare än steg 2. Ledningen vill inte ha variansrapporten ordagrant
