# Everyhand — Werbespot „Der leere Baumarkt" (Seedance 2.0 / Dreamina · CapCut)

Witziger, relatabler Hook: Kunde sucht verzweifelt einen Mitarbeiter → Western-Tumbleweed rollt durch den leeren Laden → ein „Mitarbeiter" kommt um die Ecke (erst nur Beine, sieht menschlich aus) → **Reveal: es ist ein Everyhand-Roboter** → er führt den Kunden zum Produkt → Montage, wie der Laden sich mit glücklichen Menschen füllt, jede:r mit eigenem Roboter an der Seite → **Blackout → Logo.**

Gesamtlänge ~30–35 s, zusammengebaut aus 6 Shots in der CapCut-Timeline.

---

## Wie man es in Dreamina/CapCut baut (Best Practices)

1. **Ein Shot = eine Generierung.** Seedance 2.0 liefert pro Generierung am besten 5–10 s saubere Bewegung. Nicht den ganzen Spot in einen Prompt zwingen — die 6 Shots unten einzeln erzeugen und in CapCut aneinanderreihen.
2. **Referenzbilder über „Multiframes" + `@Name`.** In Dreamina/CapCut die Bilder hochladen und im Prompt per `@Image1`, `@Image2` … referenzieren („use the robot design / character from @Image1"). Bis zu 9 Bilder pro Projekt möglich.
3. **Konsistenz erzwingen:** In JEDEM Shot, in dem der Roboter vorkommt, dasselbe Referenzbild verlinken — sonst ändert sich das Design. Für unseren Helden immer `@WorkerBot` (das Overall-Bild) nutzen.
4. **Struktur im Prompt:** WER macht WAS → Kamera/Bewegung → Ort/Raum → Licht/Stil → Stimmung. Genau diese Reihenfolge halten die Modelle am besten ein.
5. **Logo & Text NICHT im Modell rendern.** KI-Modelle verhunzen Logos/Schrift. Den Blackout im letzten Shot erzeugen, das **EH-Logo als PNG-Overlay in CapCut** drüberlegen (siehe „Endcard").
6. **Format:** Haupt-Spot `16:9`. Für Reels/TikTok zusätzlich `9:16` (gleiche Prompts, `composition` auf vertikal ändern, Tumbleweed-/Reveal-Shots funktionieren hochkant sogar besser).
7. **Ton:** Seedance kann SFX/Ambiente mitgenerieren — die Audio-Hinweise stehen je Shot. Finaler Musik-/VO-Mix trotzdem in CapCut.

---

## Referenzbilder zuordnen (img-Ordner)

Lade diese Dateien in Dreamina hoch und benenne/merke sie wie folgt (Reihenfolge = `@Image1`…):

| Alias im Prompt | Datei im `img/`-Ordner | Rolle |
|---|---|---|
| `@WorkerBot` | `ChatGPT Image Jun 4, 2026, 05_08_40 AM.png` | **Held** — Roboter im weiß/rot/schwarzen Arbeits-Overall mit EH-Brustlogo, blaues Visier. Untere Hälfte wirkt menschlich → ideal für den Reveal. |
| `@StoreGuide` | `ChatGPT Image Jun 4, 2026, 05_07_40 AM.png` | Humanoid führt Kunden durch hellen Baumarkt — für die Führ-Szene. |
| `@Montage` | `ChatGPT Image Jun 4, 2026, 05_20_08 AM.png` | Stimmungs-/Looks-Referenz für die „voller Laden"-Montage. |
| `@ConciergeBot` | `ChatGPT Image Jun 4, 2026, 05_17_34 AM.png` | Roboter-Varianten-Look (Weste) für Montage-Vielfalt. |
| `@ExpoBot` | `ChatGPT Image Jun 4, 2026, 05_15_38 AM.png` | weiterer Roboter-Look für Montage-Vielfalt. |

> Tipp: Wenn Dreamina nur `@Image1, @Image2…` zulässt, einfach in DIESER Reihenfolge hochladen. In den Prompts unten stehen beide Bezeichnungen.

---

## Shot-für-Shot Storyboard + Prompts

> Jeder Prompt ist standalone. Kompletten Code-Block kopieren, Referenzbild(er) anhängen, generieren. Dauer je Shot in der Überschrift.

### Shot 1 — Der verzweifelte Kunde (5 s)

```
A relatable comedic commercial shot. A middle-aged male customer in casual clothes stands in the middle of a large, brightly lit German DIY hardware store, holding a small plumbing part, looking around desperately for a staff member. He cranes his neck, raises the part questioningly, sighs. The wide aisles around him are completely empty — no employees anywhere.
Camera: slow push-in on the customer, eye level, slight comedic timing.
Setting: clean modern hardware store, tall shelves with colorful tools, polished concrete floor, bright daylight from skylights.
Style: photorealistic editorial commercial, warm friendly tone, airy whites and light greys, one subtle deep-blue accent.
Mood: funny, relatable, "where is everyone?".
Audio: faint echo, a lonely shop ambience, a single distant cricket.
No text, no logos, no watermarks, photorealistic, no CGI look.
```

### Shot 2 — Western-Tumbleweed (4 s, der Lacher)

```
A comedic western homage inside the same empty bright DIY hardware store. A dry tumbleweed rolls slowly across the wide empty main aisle, pushed by an invisible breeze, passing in front of the puzzled customer who watches it go by. Total emptiness, exaggerated stillness, like a deserted western town.
Camera: locked-off wide shot at floor level, the tumbleweed crosses left to right in foreground.
Setting: bright modern hardware store, long empty aisle, polished floor.
Style: photorealistic commercial with a tongue-in-cheek western vibe, bright daylight.
Mood: deadpan funny, spaghetti-western tension played for laughs.
Audio: lonely western whistle, faint wind, a creaking sign.
No text, no logos, no watermarks, photorealistic, no CGI look.
```

### Shot 3 — Der Reveal (6 s, Kernmoment) · Referenz: `@WorkerBot` (Image 05_08_40)

```
Use the exact robot character and outfit from @WorkerBot (white-red-black work overalls with a chest logo, sleek silver robotic limbs, glowing blue visor face). 
A confident "store employee" walks around the corner of an aisle toward the waiting customer. The shot starts LOW, showing only legs in work trousers and sturdy boots walking — it looks like a normal human worker. As the camera tilts up, the REVEAL: the torso is sleek robotic, the arms are silver mechanical, and the head is a friendly glowing blue visor — it is an Everyhand service robot, ready to help. The customer's eyes widen, then he smiles, relieved and delighted.
Camera: starts at boot level, smooth confident upward tilt to a medium shot on the reveal.
Setting: bright modern hardware store aisle, daylight.
Style: photorealistic commercial, satisfying reveal timing, airy whites with a deep-blue accent from the robot's visor.
Mood: surprising, warm, funny payoff — the helper has arrived.
Audio: footsteps, a hopeful musical sting on the reveal.
No text, no logos on screen, no watermarks, photorealistic, no CGI look, no uncanny face (smooth visor, not a human face).
```

### Shot 4 — Der Roboter führt den Kunden (6 s) · Referenz: `@WorkerBot` + `@StoreGuide`

```
Use the exact robot character from @WorkerBot and the guiding interaction style from @StoreGuide.
The Everyhand service robot walks side by side with the happy customer down a bright hardware-store aisle, gesturing helpfully toward a specific shelf and presenting exactly the plumbing part the customer was looking for. The customer takes it, beaming and nodding in thanks. Natural, warm, effortless service.
Camera: smooth tracking shot following the pair from the side at walking pace.
Setting: bright modern hardware store, colorful well-stocked shelves, daylight.
Style: photorealistic commercial, warm and trustworthy, airy whites, subtle blue accents.
Mood: helpful, friendly, satisfying.
Audio: pleasant store ambience, light upbeat music starting to build.
No text, no logos on screen, no watermarks, photorealistic, no CGI look.
```

### Shot 5 — Montage: der Laden füllt sich (7 s) · Referenz: `@Montage` + `@WorkerBot`

```
Use the robot design language from @WorkerBot and the multi-scene mood from @Montage.
A lively, upbeat montage / quick time-lapse feel: the once-empty hardware store rapidly fills with happy, diverse customers, and EACH person has their own friendly Everyhand service robot at their side — robots carrying paint cans, reaching high shelves, guiding a family, helping an elderly woman, handing tools to a young couple. Everyone is smiling, the store feels alive and joyful. Several quick beats blended smoothly.
Camera: dynamic — a sweeping crane move rising above the bustling aisles, plus 2-3 quick energetic inserts.
Setting: bright modern hardware store, now full of people and robots, daylight.
Style: photorealistic commercial, vibrant and warm, airy whites with consistent deep-blue robot accents.
Mood: heart-warming, optimistic, "a helping hand for everyone".
Audio: feel-good music swelling to a peak, happy chatter.
No text, no logos on screen, no watermarks, photorealistic, no CGI look, no uncanny faces.
```

### Shot 6 — Blackout (3 s, für die Endcard)

```
The bright bustling hardware store scene gently and quickly fades to a clean solid black screen, smooth and elegant, leaving a calm empty black frame at the end ready for a logo overlay.
Camera: hold steady as the image dims to full black.
Style: photorealistic, premium, soft cinematic fade.
Mood: confident, calm resolve after the joyful peak.
Audio: music resolves to a single warm chord, then quiet.
No text, no logos, no watermarks.
```

---

## Endcard (Logo) — in CapCut, NICHT im Modell

1. Shot 6 (Blackout) ans Ende der Timeline legen.
2. Darüber das **EH-Logo als PNG-Overlay** einfügen: `Everyhand_logo_color.png` oder `Everyhand_logo_only.png` (im Hauptordner) — auf Schwarz wirkt die Silber-/Weiß-Variante am besten.
3. Logo sauf Schwarz einfaden (Scale-up von 90→100 %, Opacity 0→100 in ~0,6 s).
4. Claim einblenden: **„Everyhand — Eine helfende Hand. Überall."** in Space Grotesk (Marken-Font), darunter klein die Domain. Optional CTA „Pilot anfragen".
5. Mit einem dezenten blauen Glow/Akzent (#1E40AF) abrunden. 1,5–2 s halten.

---

## Audio / Musik

- Western-Beat in Shot 1–2 (Pfeifen, Wind), harter Cut auf hoffnungsvollen Sting beim Reveal (Shot 3), dann feel-good Aufbau bis Peak in Shot 5, weicher Schluss-Akkord auf der Endcard.
- Optional VO am Ende (DE): „Niemand da, der hilft? Das war einmal. Everyhand — eine helfende Hand. Überall."
- Sound-Effekte: Tumbleweed-Rollen, Schritte beim Reveal, fröhliches Stimmengewirr in der Montage.

---

## Schnitt-Reihenfolge (CapCut Timeline)

`Shot1 (5s) → Shot2 (4s) → Shot3 Reveal (6s) → Shot4 Führung (6s) → Shot5 Montage (7s) → Shot6 Blackout (3s) → Logo-Endcard (2s)` ≈ **33 s**.

Für 9:16 dieselben Shots vertikal neu generieren (in den Prompts „Camera/composition" auf vertical/portrait ändern) und enger auf Kunde + Roboter framen.

---

## Mini-Checkliste vor dem Rendern

- [ ] In jedem Roboter-Shot `@WorkerBot` referenziert (Konsistenz)
- [ ] Reveal startet wirklich tief (nur Beine/Boots) und tiltet hoch
- [ ] In der Montage hat JEDE Person einen eigenen Roboter
- [ ] Kein Text/Logo im KI-Material — Logo erst in CapCut
- [ ] Blackout sauber schwarz für die Endcard
- [ ] Endcard: Logo + Claim + Domain, blauer Akzent
```
