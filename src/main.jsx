import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  ChevronRight,
  Drone,
  EyeOff,
  Map,
  Radar,
  Route,
  ShieldCheck,
  Store,
} from "lucide-react";
import "./styles.css";

const assets = {
  cover: "/assets/cover-abstract.png",
  problem: "/assets/problem-retail.png",
  os: "/assets/product-os.png",
  retail: "/assets/retail-pilot.png",
  event: "/assets/event-flow.png",
  finance: "/assets/financials.png",
  logoMark: "/assets/everyhand-logo-only-tight.png",
  logoFull: "/assets/everyhand-logo-full-tight.png",
};

const stats = [
  ["119k EUR", "Umsatz Jahr 1"],
  ["337k EUR", "Umsatz Jahr 2"],
  ["849k EUR", "Umsatz Jahr 3"],
  ["2.76M EUR", "Umsatz Jahr 5"],
];

const layers = [
  ["01", "Standortdaten", "Karte, Zonen, Produkte, sichere Wege, Ladepunkte.", Map],
  ["02", "Privacy Sensorik", "LiDAR, mmWave, Zähler und aggregierte Bewegungsdaten.", Radar],
  ["03", "KI-Logik", "Fragen, Routen, Angebote, Warnstufen und Handoffs.", BrainCircuit],
  ["04", "Roboter & Betrieb", "Humanoid, Quadruped, Drohne, Dashboard und SLA.", Bot],
];

const markets = [
  {
    title: "Retail Guide",
    label: "Baumarkt / Fachmarkt",
    image: assets.retail,
    copy: "Der Roboter beantwortet Wiederholfragen, führt zu Produkten und misst, welche Nachfrage im Standort wirklich entsteht.",
    facts: ["6-8 Wochen Pilot", "3.900-7.900 EUR MRR", "Ketten-Rollout"],
  },
  {
    title: "Event Flow",
    label: "Messe / Event",
    image: assets.event,
    copy: "Anonyme Crowd-Flow-Daten, Robotik in sicheren Zonen und Drohnen-Mapping für Orientierung, PR und operative Steuerung.",
    facts: ["2.900-59.000 EUR Pakete", "Live-Dichte", "Reportwert"],
  },
];

const roadmap = [
  ["M4", "3 zahlende Founding-Piloten"],
  ["M6", "1 Case Study mit harten Zahlen"],
  ["M9", "4 Abos live"],
  ["M18", "erster Multi-Standort-Deal"],
  ["M24", "monatlicher Break-even"],
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.18 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useHashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(id))?.scrollIntoView({ block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
}

function Nav({ progress }) {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="Everyhand home">
        <img src={assets.logoMark} alt="" />
        <span>Everyhand</span>
      </a>
      <nav aria-label="Hauptnavigation">
        <a href="#system">System</a>
        <a href="#maerkte">Märkte</a>
        <a href="#zahlen">Zahlen</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a className="pilot-link" href="#kontakt">
        Pilot starten <ArrowUpRight size={15} />
      </a>
      <span className="progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}

function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

function Cta({ children, href = "#kontakt", tone = "solid" }) {
  return (
    <a className={`cta ${tone}`} href={href}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-image" src={assets.cover} alt="" />
      <div className="shade" />
      <div className="hero-content" data-reveal>
        <img className="hero-logo" src={assets.logoFull} alt="Everyhand" />
        <Eyebrow>AI . Robots . Real Impact</Eyebrow>
        <h1>Everyhand</h1>
        <p className="lead">
          Wir verkaufen nicht den Roboter. Wir verkaufen den Ort, der ihn nutzen kann:
          Standortdaten, Sensorik, KI-Logik und laufender Betrieb.
        </p>
        <div className="actions">
          <Cta>Founding Pilot</Cta>
          <Cta href="#system" tone="ghost">
            System ansehen
          </Cta>
        </div>
      </div>
      <div className="hero-note" data-reveal>
        <strong>Robot-ready Orte</strong>
        <span>Baumarkt. Fachmarkt. Messe. Event.</span>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section className="pitch-frame thesis" data-reveal>
      <div className="copy-block">
        <Eyebrow>These</Eyebrow>
        <h2>Hardware wird billig. Deployment bleibt schwer.</h2>
      </div>
      <p>
        Der Vorteil wandert zu dem, der reale Orte versteht: Karten, sichere Wege,
        Produktwissen, Datenschutz, Handoffs, Betrieb und messbare Ergebnisse.
      </p>
      <div className="thesis-strip">
        <div>
          <strong>&gt;90%</strong>
          <span>Preisverfall beim Einstiegshumanoiden in rund zwei Jahren</span>
        </div>
        <div>
          <strong>35-40%</strong>
          <span>Roboterprojekte erfüllen oder übertreffen Erwartungen</span>
        </div>
        <div>
          <strong>10-15%</strong>
          <span>werden binnen 18 Monaten wieder abgebaut</span>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="image-story problem">
      <img src={assets.problem} alt="Dunkler Baumarkt mit magenta Datenpfad" />
      <div className="story-card" data-reveal>
        <Eyebrow>Problem</Eyebrow>
        <h2>Physische Orte sind datenblind.</h2>
        <p>
          Websites wissen, wonach Menschen suchen. Ein Baumarkt weiß oft nicht,
          welche Frage wie viel Personalzeit bindet oder wo Besucher im Standort
          abbrechen.
        </p>
        <div className="mini-grid">
          <span>Produktfragen</span>
          <span>Wegeführung</span>
          <span>Engpaesse</span>
          <span>Handoffs</span>
        </div>
      </div>
    </section>
  );
}

function System() {
  return (
    <section className="system" id="system">
      <img className="system-bg" src={assets.os} alt="" />
      <div className="system-copy" data-reveal>
        <Eyebrow>Everyhand OS</Eyebrow>
        <h2>Vier Layer, die ein Roboter allein nicht mitbringt.</h2>
        <p>
          Die Maschine ist die sichtbare Oberfläche. Der Wert liegt in der
          Standortintelligenz darunter.
        </p>
      </div>
      <div className="layer-stack">
        {layers.map(([number, title, copy, Icon]) => (
          <article className="layer" key={title} data-reveal>
            <span>{number}</span>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Markets() {
  return (
    <section className="markets" id="maerkte">
      <div className="section-title" data-reveal>
        <Eyebrow>Startmärkte</Eyebrow>
        <h2>Erst dort starten, wo Wirkung sichtbar und ROI messbar ist.</h2>
      </div>
      <div className="market-grid">
        {markets.map((market) => (
          <article className="market" key={market.title} data-reveal>
            <img src={market.image} alt="" />
            <div>
              <span>{market.label}</span>
              <h3>{market.title}</h3>
              <p>{market.copy}</p>
              <ul>
                {market.facts.map((fact) => (
                  <li key={fact}>
                    <ChevronRight size={15} />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Fleet() {
  return (
    <section className="fleet pitch-frame" data-reveal>
      <div className="copy-block">
        <Eyebrow>Show-Flotte</Eyebrow>
        <h2>Humanoid als Held. Quadruped als Anker. Drohne als Raumverständnis.</h2>
      </div>
      <div className="fleet-line">
        <div>
          <Bot />
          <strong>Humanoid</strong>
          <span>Marken-Held und PR-Magnet</span>
        </div>
        <div>
          <Route />
          <strong>Quadruped</strong>
          <span>zuverlässiger Wirkungs-Anker</span>
        </div>
        <div>
          <Drone />
          <strong>Drohne</strong>
          <span>Mapping, Event-Spektakel, 3D-Flache</span>
        </div>
      </div>
    </section>
  );
}

function Financials() {
  const bars = [0.12, 0.34, 0.85, 1.68, 2.76];
  return (
    <section className="financials" id="zahlen">
      <img src={assets.finance} alt="" />
      <div className="finance-card" data-reveal>
        <Eyebrow>Neutral-Case</Eyebrow>
        <h2>Schlanker Start. Jahr-3 Break-even. Jahr-5 Skalierung.</h2>
        <p>
          Der Plan kalkuliert langsam: echte Hardwarekosten, 3.0% monatliche Churn,
          55% Pilot-zu-Abo-Conversion und nachfragegetriebene Flotte.
        </p>
        <div className="bars" aria-label="Umsatzentwicklung Jahr 1 bis Jahr 5">
          {bars.map((bar, index) => (
            <span key={index} style={{ height: `${20 + bar * 26}%` }}>
              <em>J{index + 1}</em>
            </span>
          ))}
        </div>
        <div className="stat-grid">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="roadmap">
      <div className="privacy" data-reveal>
        <EyeOff size={28} />
        <Eyebrow>Privacy-first</Eyebrow>
        <h2>Keine Gesichtserkennung. Keine biometrische Identifikation.</h2>
        <p>
          Everyhand arbeitet mit aggregierten Daten, klaren Sicherheitszonen,
          transparenten Regeln und extern eingeplanter Datenschutz-/Compliance-Beratung.
        </p>
      </div>
      <div className="timeline" data-reveal>
        {roadmap.map(([time, text]) => (
          <div key={time}>
            <span>{time}</span>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing" id="kontakt">
      <img src={assets.cover} alt="" />
      <div className="closing-inner" data-reveal>
        <img src={assets.logoFull} alt="Everyhand" />
        <Eyebrow>Founding Pilots</Eyebrow>
        <h2>Der erste robot-ready Standort ist kein Demo. Er ist der Beweis.</h2>
        <p>
          Wir suchen Pilotpartner, Kettenkontakte, Messe-/Eventreferenzen und
          Finanzierungspartner für den ersten kontrollierten Rollout.
        </p>
        <div className="actions">
          <Cta href="mailto:hello@everyhand.ai">hello@everyhand.ai</Cta>
          <Cta href="#top" tone="ghost">
            Zurück nach oben
          </Cta>
        </div>
      </div>
    </section>
  );
}

function App() {
  const progress = useScrollProgress();
  useReveal();
  useHashScroll();

  const scanlines = useMemo(
    () => Array.from({ length: 7 }, (_, index) => <span key={index} />),
    []
  );

  return (
    <>
      <div className="grain" />
      <div className="scanlines" aria-hidden="true">
        {scanlines}
      </div>
      <Nav progress={progress} />
      <main>
        <Hero />
        <Thesis />
        <Problem />
        <System />
        <Markets />
        <Fleet />
        <Financials />
        <Roadmap />
        <Closing />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
