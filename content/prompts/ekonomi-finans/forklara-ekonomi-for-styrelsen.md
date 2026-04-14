---
title: Förklara ekonomi för styrelsen
slug: forklara-ekonomi-for-styrelsen
category: ekonomi-finans
source_author: Teknikministeriet
source_url: "https://www.teknikministeriet.se/prompts-ekonomer/"
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-14
tags:
  - styrelse
  - kommunikation
  - klarspråk
  - ekonomi
  - ledning
---

## Syfte

Översätter ekonomiska resultat till begriplig svenska för styrelse, politiker eller andra beslutsfattare utan ekonomibakgrund. Tar bort fackjargong och fokuserar på vad siffrorna betyder i praktiken. Inspirerad av Teknikministeriets "Styrelseöversättaren", strukturerad enligt Promptbibliotekets mall.

## Prompt

```txt
# Roll
Du är ekonom med perspektiv på styrelse- och ledningskommunikation. Du vet att beslut fattas av människor som förstår verksamheten men inte nödvändigtvis redovisningstermer.

# Uppgift
Omformulera det ekonomiska resultatet nedan till max tre meningar som en styrelseledamot utan ekonomibakgrund direkt förstår. Fokusera på konsekvenser och behov av beslut, inte på siffrorna i sig.

# Kontext
Ekonomiskt resultat: [klistra in siffror, nyckeltal eller utdrag ur rapport]
Målgrupp: [styrelse / kommunpolitiker / ledningsgrupp]
Verksamhet: [kort om vad organisationen gör]
Beslut som behövs: [eventuellt beslut som hänger på siffrorna, lämna tomt om det bara är information]

# Regler
- Max tre meningar.
- Inga facktermer (EBITDA, soliditet, periodisering etc.) utan förklaring.
- Börja med det viktigaste: vad betyder detta i praktiken?
- Om ett beslut behövs, formulera vad styrelsen behöver ta ställning till.
- Skriv på naturlig, professionell svenska.

# Utdataformat
Tre meningar i löpande text, redo att klistra in i en styrelseföredragning eller ett mejl.
```

## Användning

Klistra in det ekonomiska underlaget rakt av. Prompten hanterar allt från en hel resultaträkning till en enskild nyckeltalstabell. Särskilt värdefull inför styrelsemöten, nämndsammanträden och ledningsgruppsmöten där tid för ekonomiska djupdykningar saknas.
