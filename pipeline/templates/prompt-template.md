# Prompt-mall: Promptbiblioteket

Denna mall definierar den inre strukturen för prompttexter. Använd den som guide när du skriver eller genererar prompts.

## Sektioner

En prompt byggs upp av följande sektioner inuti ` ```txt ` -blocket:

### Obligatoriska

| Sektion | Syfte | Exempel |
|---------|-------|---------|
| **Roll** | Lins: perspektiv och domän. Inga erfarenhetsanspråk ("erfaren", "15 år"). | "Du är controller i ett svenskt medelstort företag. Perspektiv: ledningen vill ha beslutsunderlag, inte siffror." |
| **Uppgift** | Vad ska AI:n göra? Konkret och handlingsbart. | "Analysera den bifogade kvartalsrapporten och identifiera..." |

### Valfria

| Sektion | Syfte | Exempel |
|---------|-------|---------|
| **Kontext** | Bakgrundsinformation som hjälper AI:n | "Företaget har 50 anställda och omsätter 25 MSEK..." |
| **Regler** | Begränsningar och riktlinjer | "Skriv på svenska. Undvik fackjargong. Max 500 ord." |
| **Steg** | Arbetsflöde, steg-för-steg | "1. Läs igenom materialet. 2. Identifiera nyckeltal..." |
| **Utdataformat** | Önskat format på svaret | "Svara i en tabell med kolumnerna: Nyckeltal, Värde, Trend" |

## Minimikrav

En prompt behöver minst **Roll + Uppgift**. Lägg till fler sektioner efter behov, en enkel prompt med tydlig roll och uppgift slår en komplex prompt med otydliga instruktioner.

**Roll = lins, inte kostym.** Rollen sätter perspektiv (vems intressen optimeras) och domän (svensk kontext, bransch). Erfarenhetsanspråk ("erfaren", "15 års erfarenhet", "världsledande") har ingen mätbar effekt på moderna LLM:er och ska inte användas. Skriv ut förkortningar (t.ex. "Executive Assistant", inte "EA") för att undvika tvetydighet.

**Steg är valfritt och ofta onödigt.** Moderna LLM:er planerar själva. Inkludera # Steg bara om ordningen har affärslogik ("kontrollera budget innan du föreslår lösning"), inte för att diktera resonemang.

## Exempelstruktur

```txt
# Roll
Du är [yrkesroll] i [domän/kontext]. Perspektiv: [vems intressen optimeras och hur].

# Uppgift
[Beskriv konkret vad AI:n ska göra]

# Kontext
[Relevant bakgrundsinformation]

# Regler
- [Begränsning 1]
- [Begränsning 2]

# Steg
1. [Första steget]
2. [Andra steget]
3. [Tredje steget]

# Utdataformat
[Beskriv önskat format]
```

## Riktlinjer

- **Svenska sektionsrubriker.** Använd "Roll", inte "Role". "Uppgift", inte "Task".
- **Korrekt svenska med å, ä, ö.** Inga ASCII-approximationer.
- **Konkret framför abstrakt.** "Analysera kvartalsrapporten" slår "Hjälp mig med ekonomi".
- **Testa innan publicering.** Varje prompt ska testas mot minst en LLM.
