# Everyhand — Design-System (DESIGN.md)

> Kontext-Datei für Claude (oder andere Tools/Designer): Alles, was nach Everyhand aussehen soll, folgt diesen Regeln. Quelle der Wahrheit für Website, Pitch-Decks, Social Assets und Dokumente.

## 1. Markenkern

- **Marke:** Everyhand — „Eine helfende Hand. Überall."
- **Claim:** AI. Robots. Real Impact.
- **Positionierung:** Herstellerneutraler Dienstleister, der physische Orte robot-ready macht (Beratung → Pilot → Betrieb). Wir verkaufen nicht den Roboter, sondern den Ort, der ihn nutzen kann.
- **Tonalität:** präzise, ehrlich, zuversichtlich, menschenzentriert. Keine Buzzword-Schwurbelei, keine Angstmache, keine übertriebenen Versprechen. Zahlen statt Adjektive.
- **Gefühl:** futuristisch, aber freundlich und warm. Hell und vertrauensbildend — nie steril, nie dystopisch, nie „generic AI slop".

## 2. Das eine Gestaltungsprinzip: die Schräge

Das EH-Logo besteht aus parallelen, geneigten Balken. Diese Neigung ist DAS wiedererkennbare Designelement:

- **UI-Schräge:** `skewX(-12deg)` für Buttons, Chips, Badges, Preis-Tags, Flags.
  Innenliegender Text wird mit `skewX(12deg)` gegengeneigt → bleibt gerade.
- **Grafik-Schräge:** `skewX(-28deg)` für kleine Balken-Glyphen (Eyebrow-Bars ▰▰, Meilenstein-Marker, Aufzählungs-Marker).
- **Bildrahmen:** Medien werden mit abgeschrägten Ecken beschnitten:
  `clip-path: polygon(9% 0, 100% 0, 100% 88%, 91% 100%, 0 100%, 0 12%)`
- **Sektionskanten:** Dunkle Sektionen kippen oben leicht an: `clip-path: polygon(0 0, 100% 3.5%, 100% 100%, 0 100%)`
- Sparsam einsetzen: Die Schräge ist Akzent, nicht Tapete. Fließtext, Karten und Layoutraster bleiben gerade.

## 3. Farben (Design-Tokens)

```css
:root {
  --bg:          #F6F7F9;  /* Seitenhintergrund (hell) */
  --surface:     #FFFFFF;  /* Karten, Header */
  --ink:         #0E1116;  /* Primärtext, dunkle Sektionen, Footer */
  --ink-2:       #2A313B;  /* Sekundärtext */
  --slate:       #5A6472;  /* Fließtext gedämpft, Captions */
  --line:        #E4E8EE;  /* Hairlines, Card-Borders */
  --line-2:      #D6DCE4;  /* stärkere Linien */
  --blue:        #1E40AF;  /* PRIMÄR-AKZENT: CTAs, Links, Marker */
  --blue-deep:   #16308C;  /* Hover auf Blau */
  --blue-bright: #2F6BFF;  /* Fokus-Ringe, Akzente auf Dunkel */
  --blue-tint:   #EDF2FF;  /* blaue Hintergrund-Tints (Preis-Tags) */
  --silver-1:    #E9EBEF;  /* Silber-Verlauf Start */
  --silver-2:    #C6CBD4;  /* Silber-Verlauf Mitte */
  --silver-3:    #9AA1AD;  /* Silber-Verlauf Ende */
}
```

Regeln:
- **Ein** Akzent: Blau. Alle CTAs, aktiven Zustände und Marker sind blau. Keine zweite Signalfarbe.
- Silber-Verlauf `linear-gradient(135deg, #E9EBEF, #C6CBD4 50%, #9AA1AD)` = „Robotik-Metall", v. a. fürs Logo auf dunklem Grund und Platzhalterflächen.
- Dunkle Flächen (`--ink`) nur für: Beratung/Formular-Sektion, Footer, Abo-Banner, Bild-Tags. Rest bleibt hell.
- Text auf Dunkel: `#EDEFF3` (Headlines weiß), gedämpft `#A9B0BB`, Mono-Labels `#8A93A0`.

## 4. Typografie

| Rolle | Font | Gewicht | Einsatz |
|---|---|---|---|
| Display/Headlines | **Space Grotesk** | 600–700 | H1–H3, Zahlen, Buttons |
| Body | **Inter** | 400–600 | Fließtext, UI-Text |
| Technik/Labels | **IBM Plex Mono** | 400–500 | Eyebrows, Tags, Preise-Meta, Daten |

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Regeln:
- Headlines: `letter-spacing: -0.02em; line-height: 1.08; text-wrap: balance`
- H1 `clamp(42px, 5.6vw, 72px)` · H2 `clamp(30px, 4vw, 46px)` · Body `16.5px / 1.65`
- Mono-Labels IMMER: Versalien + `letter-spacing: .16em–.24em` + klein (11–13px)
- Wortmarke: „EVERYHAND" in Space Grotesk 700, `letter-spacing: .34em`
- Hervorhebung in Headlines: einzelnes Wort in `--blue` (z. B. „Überall."), nie Bold-Wüsten im Fließtext.

## 5. Logo

- Monogramm „EH" als Inline-SVG (Pfade siehe `index.html`, `<g id="eh-mark">`), viewBox `0 0 740 472`.
- Auf Hell: Vollton `--ink`. Auf Dunkel: Silber-Verlauf (`url(#g-silver)`).
- Mindestabstand: Höhe des mittleren Balkens rundherum. Nicht drehen, nicht umfärben (außer Ink/Silber/Weiß), nicht zusätzlich neigen — es ist schon geneigt.
- Favicon: Monogramm weiß auf `--ink`, abgerundetes Quadrat.

## 6. Layout & Abstände

- Inhaltsbreite: `max-width: 1180px`, Seitenpadding `clamp(20px, 4vw, 32px)`
- Sektionen: `padding-block: clamp(76px, 9vw, 132px)` — großzügiger Weißraum ist Teil der Marke
- Karten: `border-radius: 8px; border: 1px solid var(--line); background: var(--surface)` — Schatten nur bei Hover (`translateY(-5px)` + weicher blauer/inkfarbener Schatten)
- Grids: 4 Spalten (Karten/Angebote/Roadmap) → 2 → 1 (Breakpoints 1020px / 780px)
- Abwechselndes Zickzack-Layout für Bild+Text-Blöcke (Flotte): Bild links, dann rechts, …
- Sektionskopf immer: Eyebrow (▰▰ + Mono-Label) → H2 → Lead (max. 58ch, `--slate`)
- Hintergrund-Detail: dezentes Blueprint-Raster (56px-Grid aus `--line`-Linien, radial ausmaskiert) nur in der Hero.

## 7. Komponenten-Rezepte

- **Button Primär:** blaue Fläche, skewX(-12°), Radius 5px, Space Grotesk 600, weicher blauer Schatten; Hover: dunkler + `translateY(-2px)`.
- **Button Ghost:** transparent, 1.5px `--line-2` Border; Hover: Border `--ink`.
- **Chip:** Mono 12.5px, weiße Fläche, Hairline-Border, skew.
- **Eyebrow:** zwei geschrägte blaue Balken + Mono-Versalien in Blau.
- **Stat:** große Space-Grotesk-Zahl, Einheit als `<sup>` in Blau, Beschreibung klein in `--slate`, Spalten durch Hairlines getrennt.
- **Bild-Tag:** schwarzes halbtransparentes Label unten links am Bild, Mono-Versalien, rechte Kante angeschrägt.
- **Preis-Tag:** Mono auf `--blue-tint` mit `#D8E2FF`-Border, skew.
- **Formular (auf Dunkel):** Felder `#0E1116` mit `#2C333E`-Border, Fokus: blauer Ring `rgba(47,107,255,.18)`; Labels Mono-Versalien.
- **FAQ:** `<details>`-Accordion, Plus-Zeichen in Blau, rotiert 45° bei offen.
- **Reveal-Animation:** Elemente faden mit `translateY(26px) → 0` beim Scrollen ein (IntersectionObserver, threshold .12). Sonst KEINE Spielereien — keine Parallax-Orgien, keine Partikel.

## 7b. Brand-Polish-Komponenten (Stand Juni 2026)

Diese Elemente machen die Site als Everyhand erkennbar — sparsam, aber konsequent auf allen Seiten:

- **Scroll-Progress:** 3px blauer Fortschrittsbalken ganz oben, rechte Kante angeschrägt (`clip-path`) — die Schräge begleitet das Lesen.
- **Button-Sheen:** Primär-Buttons bekommen beim Hover einen einmaligen diagonalen Silber-Glanz (`::before`-Sweep) — „Robotik-Metall" in Bewegung. Gilt auch für `.btn-mini` auf Unterseiten.
- **Hero-Intro:** Tagline → H1 → Sub → CTAs → Chips faden gestaffelt ein (`rise`-Keyframes, je +80ms). Einmalig beim Laden, kein Loop.
- **Monogramm-Wasserzeichen:** riesiges EH-Mark in Silber bei ~5 % Opazität — oben rechts in der Hero, unten links in der dunklen Beratungs-Sektion. Unter 780px ausgeblendet.
- **Sektionsnummern:** Eyebrows enden mit `/ 01` … `/ 07` (Mono, Silber) — technische Dramaturgie über die Seite.
- **Gestaffelte Reveals:** Grid-Kinder (Layers, Offers, Stats, Roadmap) erscheinen mit +90ms-Versatz pro Spalte.
- **Footer-Wortmarke:** „EVERYHAND" als Outline-Typo (transparent, 1px Stroke `#2A313B`) über der Copyright-Zeile — leiser Marken-Schlussakkord.
- **Bild-Zoom:** `.media`-Bilder skalieren beim Hover auf 1.035 (0.9s, weiche Kurve).
- **Unterseiten:** dunkler Ink-Footer mit Claim `AI · Robots · Real Impact`, „Pilot anfragen"-Mini-CTA im Header.
- **Respekt:** `prefers-reduced-motion` deaktiviert sämtliche Animationen; `:focus-visible` mit blauem Ring.

## 8. Bildwelt

(Details + fertige Prompts: `PROMPTS.md`)

- Helle, tageslichtdurchflutete reale Orte; Editorial-Fotografie, 35mm-Look
- Roboter: weiß/silber, matt, dezente blaue Lichtakzente, herstellerneutral (keine Logos)
- Menschen entspannt und im Mittelpunkt — Roboter als Kollege, nie Bedrohung
- Verboten: Dunkle Cyberpunk-Looks, Neon-Magenta, Terminator-Posen, CGI-Plastik, Stockfoto-Klischees (Handshake mit Roboterhand!), Text im Bild
- Platzhalter (solange Bilder fehlen): Silber-Logo auf Silber-Verlauf-Fläche im abgeschrägten Rahmen

## 9. Sprache & Microcopy

- Deutsch zuerst (DACH), EN als Toggle. Sie-Form gegenüber Kunden.
- Kurze Sätze, aktive Verben, konkrete Zahlen („ab 2.900 €", „6–8 Wochen", „über 99 %").
- Ehrlichkeit als Stilmittel: Risiken benennen („nur 35–40 % erfüllen die Erwartung — genau deshalb…").
- Jobs-Botschaft immer mitführen: Entlastung statt Ersatz; Fachberatung bleibt beim Menschen.
- Verbotene Floskeln: „revolutionär", „disruptiv", „die Zukunft ist jetzt", „KI-gestützte Synergien".

## 10. Don'ts (Kurzliste)

1. Keine zweite Akzentfarbe, kein Magenta/Pink (Alt-Design ist deprecated)
2. Keine dunkle Gesamtseite — dunkel ist nur Akzent-Sektion
3. Schräge nie auf Fließtext oder ganze Karten anwenden
4. Keine Hersteller-Namen/-Logos auf Robotern in Bildern
5. Keine Stock-Klischees, keine sterilen Render
6. Keine engen Layouts — im Zweifel mehr Weißraum
7. Logo nicht verzerren, nicht zusätzlich neigen, nicht einfärben

## 11. Datei-Referenzen

- `index.html` — Landingpage (alle Tokens & Komponenten als lebende Referenz)
- `moodboard.html` — visuelles Moodboard
- `PROMPTS.md` — Bild- & Video-Prompts (JSON-Context)
- `tools/generate-images.mjs` — automatische Bildgenerierung (OpenAI Images, Key aus `../.env`)
- `favicon.svg`, `robots.txt`, `sitemap.xml`
