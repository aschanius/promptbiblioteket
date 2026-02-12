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
| Vård & omsorg | Sjuksköterskor, läkare, undersköterskor |
| Utbildning | Lärare, rektorer, utbildare |
| Handel & försäljning | Butik, e-handel, försäljare |
| IT & mjukvara | Utvecklare, systemadministratörer |
| Administration | Handläggare, assistenter, koordinatorer |
| Bygg & anläggning | Byggledare, projektörer, hantverkare |
| Transport & logistik | Förare, planerare, lagerarbetare |
| Restaurang & hotell | Kockar, servis, reception |
| Tillverkning & industri | Operatörer, tekniker, ingenjörer |
| Städ & fastighet | Fastighetsskötare, städpersonal |

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

[Vardagshacker](https://vardagshacker.se) — AI-tips för svenska yrkesverksamma.
