import { useEffect, useState } from "react";
import CharacterEyes from "./CharacterEyes";
import { TWITCH_URL, EVENT_START } from "../data/event";

const tiles = [
  { position: "a", eye: "wide" },
  { position: "b", eye: "sleepy" },
  { position: "c", eye: "ghost" },
  { position: "d", eye: "angry" },
  { position: "e", eye: "surprised" },
  { position: "h", eye: "arched" },
];

function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const seconds = Math.max(0, Math.floor((EVENT_START - now) / 1000));
  const values = [
    ["j", Math.floor(seconds / 86400)],
    ["h", Math.floor((seconds % 86400) / 3600)],
    ["min", Math.floor((seconds % 3600) / 60)],
    ["s", seconds % 60],
  ];

  if (seconds === 0)
    return (
      <p className="text-2xl font-black uppercase">Le live a commencé !</p>
    );

  return (
    <div
      className="count"
      role="timer"
      aria-label="Temps restant avant le début du live"
    >
      {values.map(([label, value]) => (
        <span key={label}>
          <b>{String(value).padStart(2, "0")}</b>
          {label}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  // Les coordonnées sont transmises en variables CSS, sans re-rendu React à chaque mouvement.
  function moveEyes(event) {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty(
      "--look-x",
      `${(x * 9).toFixed(1)}px`,
    );
    event.currentTarget.style.setProperty(
      "--look-y",
      `${(y * 9).toFixed(1)}px`,
    );
  }

  return (
    <section
      id="home"
      className="wall"
      aria-labelledby="hero-title"
      onPointerMove={moveEyes}
    >
      <div className="camera-overlay" aria-hidden="true">
        <i className="camera-corner tl" />
        <i className="camera-corner tr" />
        <i className="camera-corner bl" />
        <i className="camera-corner br" />
        <span className="camera-rec">
          <span className="rec" /> REC{" "}
          <span className="camera-time">00:00:00:00</span>
        </span>
        <span className="camera-label">NUIT MMI · 2027</span>
      </div>

      {tiles.map(({ position, eye }) => (
        <div key={position} className={`cell eyes ${position}`}>
          <CharacterEyes model={eye} />
        </div>
      ))}

      <div className="cell t">
        <h1 id="hero-title" className="hero-logo">
          <img src="/logo-nuit-mmi.svg" alt="Nuit MMI" />
          <span>2027</span>
        </h1>
        <p className="sub">
          24 heures pour réaliser une création numérique, en direct de l'IUT du
          Limousin.
        </p>
      </div>
      <div className="cell f">
        <p className="lbl">Début du live dans</p>
        <Countdown />
      </div>
      <div className="cell g">
        <p className="when">9 h → 9 h</p>
        <p className="lbl">Du jeudi 7 au vendredi 8 janvier 2027</p>
        <a
          className="btn"
          href={TWITCH_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Regarder sur Twitch
        </a>
      </div>
    </section>
  );
}
