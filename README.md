# Everyhand — Landingpage

Helle, robotische Landingpage für Everyhand (Beratung + Pilotprojekte für Service-Roboter).
Eine einzige, eigenständige `index.html` — **kein Build nötig**, einfach im Browser öffnen oder bei jedem Hoster hochladen.

## Schnellstart

Doppelklick auf `index.html` — fertig. Zum Veröffentlichen den Ordner zu Vercel / Netlify / einem beliebigen Webspace hochladen.

## Was drin ist

- **Hero** mit klarer Botschaft („Eine helfende Hand. Überall.") + Doppel-CTA
- **Mensch &amp; Roboter** direkt unter der Hero — Entlastung statt Jobverlust, Jevons-Paradox, belegte Zahlen
- **System** (4 Ebenen), **Flotte** (Quadruped, Humanoid, Drohne, Sensorik mit echten Use Cases & Preisen)
- **Angebote &amp; Preise**, **Roadmap** (2026 → 2028), **Beratung/Pilot** mit Anfrageformular, **FAQ**
- **DE/EN-Umschalter** (oben rechts), **SEO**: Meta-Tags, Open Graph, Schema.org (Organization + FAQ), `sitemap.xml`, `robots.txt`
- Design 1:1 aus dem Logo abgeleitet (−12°-Schräge, Silber-Verläufe, tiefblauer Akzent). Siehe `moodboard.html`.

## Bilder hinzufügen (OpenAI Images)

Die Seite zeigt aktuell elegante Logo-Platzhalter. Echte, fotorealistische Bilder erzeugen:

```bash
cd everyhand-site
node tools/generate-images.mjs
```

Das Skript liest den `OPENAI_API_KEY` aus der `.env` (eine Ebene über diesem Ordner), wählt automatisch das beste verfügbare Bildmodell (gpt-image-2 falls vorhanden) und legt 6 Bilder in `img/` ab:
`hero.png`, `team-mensch-roboter.png`, `quadruped-baumarkt.png`, `humanoid-messe.png`, `drone-event.png`, `sensorik-dashboard.png`.

Die Website bindet sie automatisch ein — Seite neu laden.
Einzelnes Bild neu erzeugen: `node tools/generate-images.mjs hero` · Alle neu: `node tools/generate-images.mjs --force`

> Hinweis: Die Bildgenerierung ließ sich in der Cowork-Sandbox nicht ausführen (der API-Zugriff ist dort gesperrt). Auf deinem Rechner mit Internetzugang läuft das Skript direkt.

## Kontakt-Formular

Das Formular öffnet eine vorausgefüllte E-Mail an `jakow.smirin@startplatz.de` (funktioniert sofort, ohne Backend). Für ein echtes Formular ohne Mailprogramm später z. B. einen Formspree-/HubSpot-Endpoint einsetzen.

## Vor dem Livegang anpassen

- Domain in `index.html` (`canonical`, `og:url`) und `sitemap.xml` (aktuell `everyhand.de`)
- Impressum &amp; Datenschutz verlinken (Footer-Platzhalter)
- Echte Bilder generieren (siehe oben)
