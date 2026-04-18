---
title: "Inkommande förfrågan → svar"
slug: inkommande-forfragan-svar
category: administration-ea
estimated_time: "30 min"
level: nyborjare
version: "1.0"
tags:
  - mejl
  - triage
  - svar
  - inkorg
  - administration
steps:
  - prompt: mejltriage-for-chefens-inkorg
    role: "Kategorisera inkomna mejl och prioritera svar"
  - prompt: extrahera-nyckelinformation
    role: "Plocka ut det viktigaste ur långa eller röriga mejl"
  - prompt: snabbmejl
    role: "Skriv ett professionellt svar på sekunder"
---

## Syfte

Från inkorgsöversvämning till hanterat ärende. Flödet passar executive assistants, kundtjänst och alla som får många mejl och behöver ett snabbt, konsekvent sätt att svara utan att missa något.

## När använd

- Efter helg eller ledighet när inkorgen svämmar över
- När chefen är på möte och du behöver hantera dagens ärenden
- När liknande mejl kommer återkommande och en struktur sparar tid

## Tips

- Steg 1 körs på hela inkorgen samtidigt, inte mejl för mejl. Tabellöversikten gör att du ser mönster och kan batcha svar
- Steg 2 bara när mejlet är långt eller innehåller kritiska detaljer dolda i text. Korta mejl behöver inget extrakt
- Steg 3 slår ihop triage-förslag och extraherad information till ett svar. Läs igenom en gång innan avsändning, särskilt om tonen är känslig
