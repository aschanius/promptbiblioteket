# Promptbiblioteket

Open source-samling av AI-prompts för svenska yrkesverksamma.

## Vad är detta?

Promptbiblioteket är en kuraterad samling av testade och kvalitetssäkrade AI-prompts, organiserade efter yrkeskategori. Varje prompt är:

- **Testad** mot minst två LLM:er (Claude, GPT)
- **Ratad** enligt fem kvalitetsdimensioner
- **Anpassad** för svenska yrkesverksamma med korrekt terminologi
- **Källhänvisad** med attribution till ursprunglig skapare

## Yrkeskategorier

| Kategori | Beskrivning |
|----------|-------------|
| Ekonomi & finans | Ekonomer, controllers, revisorer, finansanalytiker |
| Ledarskap & strategi | Chefer, projektledare, beslutsfattare |
| Juridik & compliance | Jurister, bolagsjurister, complianceansvariga |
| Administration & EA | Assistenter, koordinatorer, kontorsadministration |
| Utbildning & pedagogik | Lärare, utbildare, rektorer, studiehandledare |
| Marknadsföring & kommunikation | Marknadschefer, copywriters, PR, sociala medier |
| Vård & omsorg | Sjuksköterskor, läkare, undersköterskor, vårdadministratörer |
| HR & rekrytering | HR-chefer, rekryterare, personalutvecklare |
| SME & entreprenörer | Småföretagare, verksamhetsledare, enmansföretag |

## Struktur

```
content/prompts/           # Prompts organiserade per yrkeskategori
pipeline/                  # Scripts för kvalitetssäkring
data/                      # Manifest, ratings, källor
```

## Använda en prompt

Varje prompt-fil (.md) innehåller:
1. **Syfte** — Vad prompten gör
2. **Prompt** — Texten att kopiera
3. **Användning** — Tips och kontext
4. **Testresultat** — Hur den presterar i olika modeller

## Bidra

Se [CONTRIBUTING.md](CONTRIBUTING.md) för hur du bidrar med nya prompts.

## Kvalitetskrav

Prompts som ingår måste uppnå minst 3.0 i genomsnittlig rating:

| Dimension | Beskrivning |
|-----------|-------------|
| Tydlighet | Är instruktionen entydig? |
| Specificitet | Ger den tillräckligt kontext? |
| Överförbarhet | Fungerar den för svenska yrkesverksamma? |
| Innovation | Går den bortom det uppenbara? |
| Testbarhet | Kan resultatet bedömas objektivt? |

## Licens

- **Prompts:** [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) — fri att använda utan attribution
- **Kod:** [MIT](LICENSE)

## Byggt av

[Teknikministeriet](https://teknikministeriet.se) — AI och teknik för svenska yrkesverksamma.
