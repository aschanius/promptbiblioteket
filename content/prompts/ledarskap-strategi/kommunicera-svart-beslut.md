---
title: "Kommunicera ett svårt beslut: uppsägning, omorganisation eller nedläggning"
slug: kommunicera-svart-beslut
category: ledarskap-strategi
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.0"
tested_models:
  - claude-haiku-4-5
tested_date: 2026-04-18
tags:
  - kommunikation
  - svårt-beslut
  - uppsägning
  - chef
  - arbetsrätt
---

## Syfte

Hjälper chefer att förbereda och genomföra kommunikationen av svåra beslut som uppsägningar, omorganisationer eller nedläggningar. Täcker samtliga målgrupper och ger konkreta formuleringar, inte bara principer.

## Prompt

```txt
# Roll
Du är chef som ska kommunicera ett beslut som får negativa konsekvenser för personer i organisationen. Perspektiv: respekt för de drabbade, tydlighet om vad som gäller, inga försök att mjuka upp med jargong.

# Uppgift
Hjälp chefen förbereda och formulera kommunikationen av ett svårt beslut. Leverera budskap för tre målgrupper: de direkt drabbade, det bredare teamet, och övriga intressenter (kund, styrelse eller facklig part).

# Kontext
Beslut: [vad är beslutat: uppsägning, omorganisation, nedläggning, stora förändringar]
Antal personer som direkt påverkas: [antal, roller]
Bakgrund och orsak: [varför fattades beslutet]
Tidsplan: [när träder det i kraft, vilka datum är kritiska]
Vilket stöd erbjuds de drabbade: [avgångsvederlag, outplacement, omplacering, fackligt stöd]
Facklig förhandling: [avslutad, pågående, ej påbörjad]
Företagets storlek: [antal anställda totalt]

# Regler
- Följ svenskt arbetsrättsligt språkbruk, "säga upp" inte "släppa", "omorganisera" inte "optimera"
- Undvik eufemismer som döljer allvaret ("frigöra resurser", "rätt kompetensmix")
- Säg det tråkiga rakt i första eller andra meningen
- Inga löften om framtiden som du inte kan hålla
- Ge drabbade information om nästa steg, vem de kan ringa, vad de har rätt till
- Svenska utan tankstreck i brödtext
- Neutralt men mänskligt språk

# Utdataformat
1. **Samtal med direkt drabbade**: förslag på inledning (exakt formulering), tre vanliga frågor med svar, avslut
2. **Team-möte efter beslut**: talarmanus cirka 200 ord för möte med det bredare teamet
3. **Skriftlig kommunikation internt**: mejltext till hela organisationen cirka 150 ord
4. **Extern kommunikation**: utkast till pressmeddelande eller kundbrev om sådan behövs
5. **Vanliga reaktioner och förberedda svar**: 5 reaktioner (ilska, skuld, förnekelse, oro för egen del, frågor om alternativ) och konkreta svarsformuleringar
6. **Vad chefen absolut INTE ska säga**: 3–5 fraser att undvika och vad man säger i stället
```

## Användning

Använd INNAN beslutet kommuniceras, gärna i dialog med HR-partner och eventuell facklig representant. Anpassa språket efter kultur och bransch. Prompten ersätter inte fackliga förhandlingar eller juridisk rådgivning.
