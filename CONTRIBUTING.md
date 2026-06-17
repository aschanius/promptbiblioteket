# Bidra till Promptbiblioteket

Tack för att du vill bidra! Här är hur du gör.

## Skicka in en prompt

### 1. Formatera din prompt

Varje prompt ska följa strukturen i `pipeline/templates/prompt-template.md`. Se befintliga prompts för exempel.

**Prompttextens sektioner** (inuti ` ```txt ` -blocket):
- **Roll**: Vem är AI:n? (obligatorisk)
- **Uppgift**: Vad ska göras? (obligatorisk)
- **Kontext**: Bakgrundsinformation (valfri)
- **Regler**: Begränsningar och riktlinjer (valfri)
- **Steg**: Arbetsflöde, steg-för-steg (valfri)
- **Utdataformat**: Önskat format (valfri)

Roll + Uppgift är minimum. Sektionsrubriker på svenska.

**Obligatoriska fält i frontmatter:**
- `title`: Kort, beskrivande titel
- `slug`: URL-vänligt namn (kebab-case)
- `category`: En av de 10 yrkeskategorierna
- `tags`: Relevanta sökord

**Obligatoriska sektioner:**
- Syfte: Vad gör prompten?
- Prompt: Själva prompttexten
- Användning: Hur och när man använder den

### 2. Testa din prompt

Innan du skickar in:
- Testa mot minst en LLM (gärna två)
- Beskriv testresultaten i filen
- Verifiera att svenska termer och åäö är korrekta

### 3. Skicka en PR

1. Forka repot
2. Skapa en branch: `git checkout -b prompt/din-prompt-slug`
3. Lägg till din prompt-fil i rätt kategori-mapp
4. Kör `node pipeline/verify-prompts.js` för kvalitetskontroll
5. Skicka en pull request

## Kvalitetskrav

Prompts med rating under 3.0 avvisas. Vi bedömer:

| Dimension | Vad vi tittar på |
|-----------|-----------------|
| **Tydlighet** | Entydig instruktion utan dubbelmeningar |
| **Specificitet** | Tillräckligt kontext för att ge bra resultat |
| **Överförbarhet** | Fungerar i svensk yrkeskontext |
| **Innovation** | Tillför något utöver det uppenbara |
| **Testbarhet** | Resultatet kan bedömas objektivt |

## Yrkeskategorier

| Kategori-ID | Namn |
|-------------|------|
| `ekonomi-finans` | Ekonomi & finans |
| `ledarskap-strategi` | Ledarskap & strategi |
| `juridik-compliance` | Juridik & compliance |
| `administration-ea` | Administration & EA |
| `utbildning-pedagogik` | Utbildning & pedagogik |
| `marknadsforing-kommunikation` | Marknadsföring & kommunikation |
| `vard-omsorg` | Vård & omsorg |
| `hr-rekrytering` | HR & rekrytering |
| `sme-entreprenorer` | SME & entreprenörer |
| `forsaljning` | Försäljning & kundrelationer |

## Bransch-taggar

Branschspecifika prompts placeras i funktionskategorin med en `bransch:`-tagg. Till exempel: en prompt om budgetanalys för byggprojekt hör hemma i `ekonomi-finans` med taggen `bransch:bygg`.

Konvention: `bransch:bygg`, `bransch:transport`, `bransch:restaurang`, `bransch:tillverkning`, `bransch:handel` etc.

## Teman och flöden

Utöver yrkeskategorierna finns två tvärgående strukturer som binder ihop prompts.

**Teman** grupperar prompts tvärs kategorier via taggar. De definieras i `site/src/lib/themes.ts` som objekt med `id`, `title`, `description`, `tags` och `why`. En prompt hamnar i ett tema om någon av dess taggar finns i temats `tags`-lista. Lägg till ett tema genom att lägga ett objekt i `themes`-arrayen, och se till att de prompts som ska ingå bär minst en av temats taggar. En dedikerad umbrella-tagg (t.ex. `bygga-med-ai`) på varje medlem är säkraste sättet att styra medlemskapet utan att råka dra in andra prompts.

**Flöden** är arbetsmetoder som kedjar ihop flera prompts i ordning. De ligger som `.md`-filer i `content/flows/` med frontmatter: `title`, `slug`, `category` (flödets hemkategori), `estimated_time`, `level` (`nyborjare`, `medel` eller `expert`), `tags` och `steps`. Varje steg är `{ prompt: <slug>, role: <beskrivning> }`. Stegen får referera prompts i vilken kategori som helst, sidan slår upp varje slug globalt och länkar till promptens egen kategori. En slug som inte finns failar bygget, så dubbelkolla att varje `prompt:` matchar en publicerad prompt.

## Språkregel

Alla prompts och beskrivningar ska vara på korrekt svenska med å, ä, ö. ASCII-approximationer ("ar" istället för "är") accepteras inte.

## Licens

Genom att bidra samtycker du till att dina prompts publiceras under CC0 1.0 (public domain) och att kod publiceras under MIT-licens.
