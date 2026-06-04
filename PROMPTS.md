# Everyhand — Bild- & Video-Prompts (standalone)

Jeder Prompt ist **komplett eigenständig** — einfach den gesamten Code-Block kopieren und als Prompt einfügen (OpenAI Images / gpt-image, Sora, Veo, Runway, Midjourney …). Kein zusätzlicher Kontext nötig.

Empfohlene Einstellungen Bilder: Größe `1536x1024`, Quality `high`.
Dateiname über dem Block = Ziel-Slot der Website (Ordner `img/`).

---

## Bilder

### `hero.png` — Hero-Bild

```json
{
  "brand": "Everyhand — robot-ready venues",
  "style": "ultra-realistic editorial photography, shot on full-frame DSLR, 35mm lens, natural depth of field",
  "mood": "bright, optimistic, trustworthy, human-centric, futuristic but warm — never sterile or dystopian",
  "lighting": "abundant soft daylight, bright clean architecture, white and light-grey surfaces, subtle deep-blue accents (#1E40AF)",
  "color_grade": "airy whites, soft silver-greys, one calm deep-blue accent; high key, low contrast shadows",
  "robots": "sleek modern white-and-silver service robots with matte finish and subtle blue light accents; generic design, NO visible manufacturer logos or brand names",
  "people": "real, diverse, relaxed European people in everyday work clothes, genuine warm interactions, no fear, no awe — robots are normal helpful colleagues",
  "scene": "wide cinematic shot inside a bright modern German DIY hardware store, a sleek humanoid service robot gently gestures down an aisle while a smiling middle-aged customer follows its direction, sunlight floods through high windows, clean white shelving with colorful tools slightly out of focus",
  "focus": "robot and customer in natural side-by-side interaction, robot in service posture, plenty of negative space on the left for headline overlay",
  "composition": "16:10 landscape, subject on the right two thirds, generous negative space left",
  "constraints": "no text, no watermarks, no logos, no captions, photorealistic only, no CGI look, no uncanny faces"
}
```

### `team-mensch-roboter.png` — Sektion „Mensch & Roboter"

```json
{
  "brand": "Everyhand — robot-ready venues",
  "style": "ultra-realistic editorial photography, shot on full-frame DSLR, 35mm lens, natural depth of field",
  "mood": "bright, optimistic, trustworthy, human-centric, futuristic but warm — never sterile or dystopian",
  "lighting": "abundant soft daylight, bright clean architecture, white and light-grey surfaces, subtle deep-blue accents (#1E40AF)",
  "color_grade": "airy whites, soft silver-greys, one calm deep-blue accent; high key, low contrast shadows",
  "robots": "compact white-and-silver quadruped robot with matte finish and subtle blue light accents; generic design, NO visible manufacturer logos or brand names",
  "people": "real, relaxed European people in everyday work clothes, genuine warm interactions, no fear, no awe — robots are normal helpful colleagues",
  "scene": "a young female hardware-store employee in a work apron leans relaxed against a shelf, laughing while taking a coffee break, next to her a compact white quadruped robot sits calmly like a colleague, bright store interior, morning light",
  "focus": "genuine partnership and ease between human and machine — the human is the hero of the frame",
  "composition": "16:10 landscape, human and robot side by side at eye-pleasing thirds",
  "constraints": "no text, no watermarks, no logos, no captions, photorealistic only, no CGI look, no uncanny faces"
}
```

### `quadruped-baumarkt.png` — Flotte 01 · Quadruped

```json
{
  "brand": "Everyhand — robot-ready venues",
  "style": "ultra-realistic editorial photography, shot on full-frame DSLR, 35mm lens, natural depth of field",
  "mood": "bright, optimistic, trustworthy, human-centric, futuristic but warm — never sterile or dystopian",
  "lighting": "abundant soft daylight, bright clean architecture, white and light-grey surfaces, subtle deep-blue accents (#1E40AF)",
  "color_grade": "airy whites, soft silver-greys, one calm deep-blue accent; high key, low contrast shadows",
  "robots": "white-and-silver quadruped robot dog with matte finish, a small back display showing a simple blue route arrow; generic design, NO visible manufacturer logos or brand names",
  "people": "real, relaxed European customer couple in casual clothes, curious and at ease",
  "scene": "a white-and-silver quadruped robot dog walks ahead of a customer couple through a bright DIY store aisle, its small display showing a blue route arrow, the couple follows with a shopping cart, daylight architecture",
  "focus": "the quadruped mid-stride, clearly guiding, customers relaxed and curious",
  "composition": "16:10 landscape, low camera angle at robot height, aisle leading lines",
  "constraints": "no text, no watermarks, no logos, no captions, photorealistic only, no CGI look, no uncanny faces"
}
```

### `humanoid-messe.png` — Flotte 02 · Humanoid

```json
{
  "brand": "Everyhand — robot-ready venues",
  "style": "ultra-realistic editorial photography, shot on full-frame DSLR, 35mm lens, natural depth of field",
  "mood": "bright, optimistic, trustworthy, human-centric, futuristic but warm — never sterile or dystopian",
  "lighting": "abundant soft daylight from a glass ceiling, bright white exhibition architecture, soft blue ambient accent lighting (#1E40AF)",
  "color_grade": "airy whites, soft silver-greys, one calm deep-blue accent; high key, low contrast shadows",
  "robots": "slim humanoid service robot, white-and-silver matte finish, subtle blue light accents on chest; generic design, NO visible manufacturer logos or brand names",
  "people": "two real, relaxed European business visitors with lanyards, engaged and smiling",
  "scene": "a slim humanoid service robot greets visitors at a bright modern trade-fair stand, gesturing welcome to two business visitors with lanyards, white exhibition architecture, airy hall with daylight ceiling",
  "focus": "robot as elegant concierge, visitors engaged and smiling, premium but approachable atmosphere",
  "composition": "16:10 landscape, robot slightly left of center facing the visitors",
  "constraints": "no text, no watermarks, no logos, no captions, photorealistic only, no CGI look, no uncanny faces"
}
```

### `drone-event.png` — Flotte 03 · Drohne

```json
{
  "brand": "Everyhand — robot-ready venues",
  "style": "ultra-realistic editorial photography, aerial shot, natural depth of field",
  "mood": "bright, optimistic, trustworthy — calm overview and orientation, NOT surveillance, never dystopian",
  "lighting": "sunny day, soft shadows, warm natural daylight",
  "color_grade": "airy whites, soft silver-greys, one calm deep-blue accent; high key, low contrast shadows",
  "robots": "compact white drone with matte finish and subtle blue accents; generic design, NO visible manufacturer logos or brand names",
  "people": "friendly diverse crowd strolling far below, relaxed festival atmosphere",
  "scene": "aerial view of a compact white drone hovering above a daytime open-air city festival, friendly crowd strolling between food stands and a stage far below, sunny day, soft shadows, drone in sharp focus in the upper third",
  "focus": "calm overview perspective — safety and orientation; bright cheerful event",
  "composition": "16:10 landscape, drone sharp in upper third, festival softly blurred below",
  "constraints": "no text, no watermarks, no logos, no captions, photorealistic only, no CGI look"
}
```

### `sensorik-dashboard.png` — Flotte 04 · Sensorik & Dashboard

```json
{
  "brand": "Everyhand — robot-ready venues",
  "style": "ultra-realistic editorial photography, shot on full-frame DSLR, 35mm lens, natural depth of field",
  "mood": "bright, calm, professional, trustworthy — modern light workplace, never a dark control bunker",
  "lighting": "daylight office, bright clean white control room",
  "color_grade": "airy whites, soft silver-greys, calm deep-blue accent (#1E40AF); high key, low contrast shadows",
  "robots": "none in frame",
  "people": "one relaxed European operator with a coffee cup, casually pointing at the screen",
  "scene": "over-the-shoulder view of a large bright wall display in a clean white control room, showing an elegant light-themed analytics dashboard with a floor-plan heatmap in blue tones, a relaxed operator with coffee points at a zone, daylight office",
  "focus": "the light dashboard UI with blue heatmap — modern, calm, professional; no readable text on screen",
  "composition": "16:10 landscape, screen fills right two thirds, operator silhouette left",
  "constraints": "no readable text anywhere, no watermarks, no logos, no captions, photorealistic only, no CGI look, no uncanny faces"
}
```

---

## Videos

### `hero-loop.mp4` — Website-Hero (16:9, 8 s, nahtloser Loop, stumm)

```json
{
  "brand": "Everyhand — robot-ready venues",
  "format": "16:9 landscape, 8 seconds, seamless loop, no cuts, silent background video",
  "style": "photorealistic editorial cinematography, full-frame look, shallow depth of field, smooth slow dolly at walking pace",
  "mood": "bright, optimistic, trustworthy, human-centric, futuristic but warm — never sterile or dystopian",
  "lighting": "golden morning daylight through high windows, dust particles glittering in sunbeams",
  "color_grade": "airy whites, soft silver-greys, one deep-blue accent light on the robot's chest (#1E40AF); high key",
  "scene": "slow dolly shot gliding through a bright modern German hardware store; a sleek white humanoid service robot calmly gestures a smiling customer toward an aisle; clean white shelving with colorful tools softly out of focus",
  "robots": "sleek white-and-silver humanoid service robot, matte finish, subtle blue light accents, generic design, NO manufacturer logos",
  "people": "real, relaxed European customer, genuinely smiling, robot is a normal helpful colleague",
  "constraints": "no text, no captions, no logos, no watermarks, no uncanny faces, no CGI-plastic look"
}
```

### `quadruped-guide.mp4` — Use-Case Quadruped (16:9, 6 s)

```json
{
  "brand": "Everyhand — robot-ready venues",
  "format": "16:9 landscape, 6 seconds, single continuous tracking shot, smooth gimbal movement",
  "style": "photorealistic editorial cinematography, tracking shot at knee height, natural depth of field",
  "mood": "bright, calm, helpful, human-centric — never sterile or dystopian",
  "lighting": "abundant soft daylight, bright store architecture",
  "color_grade": "airy whites, soft silver-greys, one calm deep-blue accent; high key, low contrast shadows",
  "scene": "a white-and-silver quadruped robot dog trots steadily ahead through a bright DIY-store aisle, a small blue arrow glowing on its back display; a couple with a shopping cart follows, relaxed and curious; natural store ambience",
  "robots": "white-and-silver quadruped robot dog, matte finish, small back display with simple blue arrow, generic design, NO manufacturer logos",
  "people": "real, relaxed European customer couple in casual clothes",
  "constraints": "no text, no captions, no logos, no watermarks, no uncanny faces, no CGI-plastic look"
}
```

### `messe-concierge.mp4` — Use-Case Messe (16:9, 6 s)

```json
{
  "brand": "Everyhand — robot-ready venues",
  "format": "16:9 landscape, 6 seconds, static wide shot, no camera movement",
  "style": "photorealistic editorial cinematography, subtle crowd motion blur in background",
  "mood": "premium but approachable, bright, welcoming — never sterile or dystopian",
  "lighting": "airy daylight hall, glass ceiling, soft blue ambient light strips (#1E40AF)",
  "color_grade": "airy whites, soft silver-greys, one calm deep-blue accent; high key",
  "scene": "static wide shot of a bright white trade-fair stand; a slim humanoid robot turns toward two arriving visitors with lanyards and performs a gentle welcoming gesture; the visitors smile and approach",
  "robots": "slim white-and-silver humanoid service robot, matte finish, subtle blue chest light, generic design, NO manufacturer logos",
  "people": "two real, relaxed European business visitors with lanyards, engaged and smiling",
  "constraints": "no text, no captions, no logos, no watermarks, no uncanny faces, no CGI-plastic look"
}
```

### `drone-overview.mp4` — Event-Sensorik (16:9, 7 s)

```json
{
  "brand": "Everyhand — robot-ready venues",
  "format": "16:9 landscape, 7 seconds, single smooth ascending aerial shot",
  "style": "photorealistic aerial cinematography, stabilized, gentle speed",
  "mood": "calm, organized, cheerful — overview and orientation, NOT surveillance, never dystopian",
  "lighting": "sunny day, soft shadows, warm natural daylight",
  "color_grade": "warm daylight grade with airy whites and a calm deep-blue accent; high key",
  "scene": "a compact white drone rises smoothly above a sunny open-air city festival, revealing flowing crowds between food stands and a stage; relaxed festival atmosphere",
  "robots": "compact white drone, matte finish, subtle blue accents, generic design, NO manufacturer logos",
  "people": "friendly diverse crowd strolling far below",
  "constraints": "no text, no captions, no logos, no watermarks, no CGI-plastic look"
}
```

### `social-teaser.mp4` — LinkedIn / Instagram (9:16, 9 s)

```json
{
  "brand": "Everyhand — robot-ready venues",
  "format": "9:16 vertical, 9 seconds, three scenes connected by smooth whip-pans",
  "style": "photorealistic editorial cinematography, energetic but clean cuts, natural depth of field",
  "mood": "bright, optimistic, human-centric, futuristic but warm — never sterile or dystopian",
  "lighting": "abundant soft daylight in all three scenes",
  "color_grade": "airy whites, soft silver-greys, one deep-blue accent (#1E40AF); high key",
  "scene": "scene 1: a white quadruped robot guides a customer through a bright hardware store; whip-pan; scene 2: a slim humanoid robot welcomes trade-fair visitors at a white stand; whip-pan; scene 3: a store employee laughs during a coffee break next to a calmly resting quadruped robot",
  "robots": "white-and-silver service robots (quadruped + humanoid), matte finish, subtle blue light accents, generic design, NO manufacturer logos",
  "people": "real, diverse, relaxed European people — robots are normal helpful colleagues",
  "constraints": "no text overlays, no captions, no logos, no watermarks, no uncanny faces, no CGI-plastic look"
}
```

---

## Checkliste für neue Prompts

- [ ] Heller, realer Ort mit Tageslicht (Baumarkt, Messe, Empfang, Event)
- [ ] Roboter weiß/silber, matt, dezente blaue Lichtakzente, **keine Herstellerlogos**
- [ ] Mensch im Bild = entspannt, lächelnd, in Aktion — Roboter als Kollege, nie als Bedrohung
- [ ] Editorial-Foto-Look, 35mm, natürliche Tiefenschärfe — **kein CGI-/Render-Look**
- [ ] Keine Texte, Wasserzeichen, Captions im Bild
- [ ] Negativraum lassen, wo Headlines/UI darüberliegen (v. a. Hero)
- [ ] Prompt enthält IMMER das volle Profil (brand, style, mood, lighting, color_grade, robots, people, scene, focus/format, constraints) — standalone, ohne externen Kontext
