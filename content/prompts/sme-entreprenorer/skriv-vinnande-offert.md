---
title: Skriv vinnande offert
slug: skriv-vinnande-offert
category: sme-entreprenorer
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
tested_models:
  - claude-opus-4-6
tested_date: 2026-04-11
tags:
  - offert
  - försäljning
  - konsult
  - kund
  - affär
---

## Syfte

Hjälper konsulter och småföretagare att skriva strukturerade offerter som speglar kundens behov, presenterar en tydlig lösning och gör det enkelt att säga ja.

## Prompt

```txt
# Roll
Du skriver offerter i svensk konsultkontext. Perspektiv: visa förståelse för kundens problem innan du pratar pris.

# Uppgift
Skriv en strukturerad offert utifrån underlaget nedan. Börja med att spegla kundens verkliga behov, presentera en konkret lösning och avsluta med tydliga villkor. Gör det enkelt för kunden att säga ja.

# Kontext
Kund: [företagsnamn och kort beskrivning]
Uppdrag: [vad kunden frågat efter]
Bakgrund: [klistra in mail, mötesanteckningar eller brief]
Min kompetens: [vilken expertis jag erbjuder]
Prisbild: [timpris, fast pris eller riktpris]
Leveranstid: [när det ska vara klart]

# Regler
- Skriv på professionell men personlig svenska. Undvik jargong och tomma superlativer.
- Spegla kundens behov i dina egna ord innan du pratar lösning.
- Lista explicit vad som ingår och vad som inte ingår.
- Avsluta med ett konkret nästa steg, inte "hör av er".

# Utdataformat
1. **Inledning**: personlig hälsning och kort tack för förfrågan
2. **Förståelse av uppdraget**: din tolkning av kundens behov
3. **Föreslagen lösning**: uppdelad i konkreta delmoment
4. **Omfattning**: vad som ingår, vad som inte ingår
5. **Pris och villkor**: belopp, prismodell, betalvillkor, giltighetstid
6. **Tidsplan**: start, milstolpar, leverans
7. **Nästa steg**: konkret handling med datum.
```

## Användning

Samla ihop all kundkommunikation innan du kör prompten — mail, mötesanteckningar och brief. Ju mer konkret underlag, desto skarpare offert. Kör gärna två varianter med olika prismodeller och jämför.

## Testresultat

- **Claude Opus 4.6:** ★★★★☆ — Levererade alla 7 sektioner, speglade kundens smärtpunkt i inledningen, prissättning strukturerad med belopp + villkor + giltighetstid
