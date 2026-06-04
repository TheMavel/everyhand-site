#!/usr/bin/env node
/**
 * Everyhand — Bildgenerierung via OpenAI Images API
 * Nutzung:   node tools/generate-images.mjs            (alle fehlenden Bilder)
 *            node tools/generate-images.mjs --force    (alle neu generieren)
 *            node tools/generate-images.mjs hero       (nur ein bestimmtes Bild)
 *
 * Liest den Key aus ../.env (OPENAI_API_KEY=...) und legt PNGs in ./img ab.
 * Die Website bindet die Dateien automatisch ein — einfach Seite neu laden.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const IMG = join(ROOT, "img");
mkdirSync(IMG, { recursive: true });

/* ---------- API key aus .env (Projekt- oder Elternordner) ---------- */
let KEY = process.env.OPENAI_API_KEY;
for (const p of [join(ROOT, ".env"), join(ROOT, "..", ".env")]) {
  if (!KEY && existsSync(p)) {
    const m = readFileSync(p, "utf8").match(/OPENAI_API_KEY\s*=\s*(\S+)/);
    if (m) KEY = m[1].trim();
  }
}
if (!KEY) { console.error("✗ Kein OPENAI_API_KEY gefunden (.env)"); process.exit(1); }

/* ---------- Bestes verfügbares Bildmodell ermitteln ---------- */
async function pickModel() {
  try {
    const r = await fetch("https://api.openai.com/v1/models", { headers: { Authorization: `Bearer ${KEY}` } });
    const { data = [] } = await r.json();
    const imgs = data.map(m => m.id).filter(id => /^gpt-image/.test(id)).sort().reverse();
    if (imgs.length) return imgs[0];           // z. B. gpt-image-2 > gpt-image-1.5 > gpt-image-1
  } catch { /* fallthrough */ }
  return "gpt-image-1";
}

/* ---------- Brand-Kontext (JSON-Context-Prompting) ---------- */
const BRAND = {
  brand: "Everyhand — robot-ready venues",
  style: "ultra-realistic editorial photography, shot on full-frame DSLR, 35mm lens, natural depth of field",
  mood: "bright, optimistic, trustworthy, human-centric, futuristic but warm — never sterile or dystopian",
  lighting: "abundant soft daylight, bright clean architecture, white and light-grey surfaces, subtle deep-blue accents (#1E40AF)",
  color_grade: "airy whites, soft silver-greys, one calm deep-blue accent; high key, low contrast shadows",
  robots: "sleek modern white-and-silver service robots with matte finish and subtle blue light accents; generic design, NO visible manufacturer logos or brand names",
  people: "real, diverse, relaxed European people in everyday work clothes, genuine warm interactions, no fear, no awe — robots are normal helpful colleagues",
  constraints: "no text, no watermarks, no logos, no captions, photorealistic only, no CGI look, no uncanny faces"
};

const SCENES = {
  "hero": {
    aspect: "1536x1024",
    scene: "wide cinematic shot inside a bright modern German DIY hardware store, a sleek humanoid service robot gently gestures down an aisle while a smiling middle-aged customer follows its direction, sunlight floods through high windows, clean white shelving with colorful tools slightly out of focus",
    focus: "robot and customer in natural side-by-side interaction, robot in service posture, plenty of negative space on the left for headline overlay"
  },
  "team-mensch-roboter": {
    aspect: "1536x1024",
    scene: "a young female hardware-store employee in a work apron leans relaxed against a shelf, laughing while taking a coffee break, next to her a compact white quadruped robot sits calmly like a colleague, bright store interior, morning light",
    focus: "genuine partnership and ease between human and machine — the human is the hero of the frame"
  },
  "quadruped-baumarkt": {
    aspect: "1536x1024",
    scene: "a white-and-silver quadruped robot dog walks ahead of a customer couple through a bright DIY store aisle, its small display showing a blue route arrow, the couple follows with a shopping cart, daylight architecture",
    focus: "the quadruped mid-stride, clearly guiding, customers relaxed and curious"
  },
  "humanoid-messe": {
    aspect: "1536x1024",
    scene: "a slim humanoid service robot greets visitors at a bright modern trade-fair stand, gesturing welcome to two business visitors with lanyards, white exhibition architecture, soft blue ambient accents, airy hall with daylight ceiling",
    focus: "robot as elegant concierge, visitors engaged and smiling, premium but approachable atmosphere"
  },
  "drone-event": {
    aspect: "1536x1024",
    scene: "aerial view of a compact white drone hovering above a daytime open-air city festival, friendly crowd strolling between food stands and a stage far below, sunny day, soft shadows, drone in sharp focus in the upper third",
    focus: "calm overview perspective — safety and orientation, not surveillance; bright cheerful event"
  },
  "sensorik-dashboard": {
    aspect: "1536x1024",
    scene: "over-the-shoulder view of a large bright wall display in a clean white control room, showing an elegant light-themed analytics dashboard with a floor-plan heatmap in blue tones, a relaxed operator with coffee points at a zone, daylight office",
    focus: "the light dashboard UI with blue heatmap — modern, calm, professional; no readable text on screen"
  }
};

/* ---------- Generierung ---------- */
const force = process.argv.includes("--force");
const only = process.argv.find(a => SCENES[a]);

const model = await pickModel();
console.log("Modell:", model);

for (const [name, cfg] of Object.entries(SCENES)) {
  if (only && name !== only) continue;
  const out = join(IMG, `${name}.png`);
  if (existsSync(out) && !force && !only) { console.log(`• ${name}.png existiert — übersprungen`); continue; }

  const prompt = JSON.stringify({ ...BRAND, scene: cfg.scene, focus: cfg.focus }, null, 1);
  process.stdout.write(`→ generiere ${name}.png … `);

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const r = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model, prompt, size: cfg.aspect, quality: "high", n: 1 })
      });
      const j = await r.json();
      if (j.error) throw new Error(j.error.message);
      const b64 = j.data[0].b64_json;
      writeFileSync(out, Buffer.from(b64, "base64"));
      console.log("✓");
      break;
    } catch (e) {
      if (attempt === 3) console.log(`✗ (${e.message})`);
      else await new Promise(res => setTimeout(res, 4000 * attempt));
    }
  }
}
console.log("\nFertig. Bilder liegen in everyhand-site/img/ — Seite neu laden.");
