# Prompt-mall — Promptbiblioteket

Denna mall definierar den inre strukturen för prompttexter. Använd den som guide när du skriver eller genererar prompts.

## Sektioner

En prompt byggs upp av följande sektioner inuti ` ```txt ` -blocket:

### Obligatoriska

| Sektion | Syfte | Exempel |
|---------|-------|---------|
| **Roll** | Vem är AI:n? Vilken expertis har den? | "Du är en erfaren controller med 15 års erfarenhet..." |
| **Uppgift** | Vad ska AI:n göra? Konkret och handlingsbart. | "Analysera den bifogade kvartalsrapporten och identifiera..." |

### Valfria

| Sektion | Syfte | Exempel |
|---------|-------|---------|
| **Kontext** | Bakgrundsinformation som hjälper AI:n | "Företaget har 50 anställda och omsätter 25 MSEK..." |
| **Regler** | Begränsningar och riktlinjer | "Skriv på svenska. Undvik fackjargong. Max 500 ord." |
| **Steg** | Arbetsflöde, steg-för-steg | "1. Läs igenom materialet. 2. Identifiera nyckeltal..." |
| **Utdataformat** | Önskat format på svaret | "Svara i en tabell med kolumnerna: Nyckeltal, Värde, Trend" |

## Minimikrav

En prompt behöver minst **Roll + Uppgift**. Lägg till fler sektioner efter behov — en enkel prompt med tydlig roll och uppgift slår en komplex prompt med otydliga instruktioner.

## Exempelstruktur

```txt
# Roll
Du är en [yrkesroll] med expertis inom [område].

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
