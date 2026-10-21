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

  if (seconds === 0) {
    return (
      <p className="text-2xl font-black uppercase">Le live a commencé !</p>
    );
  }

  return (
    <div
      className="[&_b]:font-archivo flex gap-[clamp(.6rem,1.6vw,1.4rem)] [&_b]:text-[clamp(1.9rem,3.6vw,3.4rem)] [&_b]:leading-none [&_b]:font-black [&_b]:tabular-nums [&_span]:flex [&_span]:flex-col [&_span]:text-sm"
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
  function moveEyes(event) {
    if (event.pointerType === "touch") return;

    const eyes = event.currentTarget.querySelectorAll(
      ".character-eyes[data-tracking]",
    );

    for (const eye of eyes) {
      const rect = eye.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      const distance = Math.hypot(dx, dy) || 1;
      const strength = Math.min(distance / 110, 1);

      const gazeX = (dx / distance) * strength;
      const gazeY = (dy / distance) * strength;

      eye.style.setProperty("--gaze-x", gazeX.toFixed(3));
      eye.style.setProperty("--gaze-y", gazeY.toFixed(3));
    }
  }

  function resetEyes(event) {
    const eyes = event.currentTarget.querySelectorAll(
      ".character-eyes[data-tracking]",
    );

    for (const eye of eyes) {
      eye.style.setProperty("--gaze-x", "0");
      eye.style.setProperty("--gaze-y", "0");
    }
  }

  return (
    <section
      id="home"
      className="wall relative grid h-svh min-h-[640px] grid-cols-6 grid-rows-4 gap-1.5 overflow-hidden px-1.5 pt-[calc(var(--header-height)+8px)] pb-1.5 max-[899px]:h-auto max-[899px]:min-h-0 max-[899px]:grid-cols-2 max-[899px]:grid-rows-[26vw_40vw_auto_40vw_auto_auto]"
      aria-labelledby="hero-title"
      onPointerMove={moveEyes}
      onPointerLeave={resetEyes}
    >
      <div
        className="pointer-events-none absolute inset-x-[clamp(12px,1.8vw,26px)] top-[calc(var(--header-height)+16px)] bottom-[clamp(12px,1.8vw,26px)] z-20 text-white max-[899px]:bottom-auto max-[899px]:h-[min(90svh,780px)]"
        aria-hidden="true"
      >
        <i className="camera-corner tl" />
        <i className="camera-corner tr" />
        <i className="camera-corner bl" />
        <i className="camera-corner br" />

        <span className="font-archivo absolute -top-px right-[clamp(24px,3.2vw,44px)] flex items-center gap-1 text-[clamp(.62rem,.8vw,.78rem)] font-black tracking-wider">
          <span className="bg-red mr-1 inline-block size-[.7em] animate-pulse rounded-full" />
          REC
          <span className="ml-2 font-mono tabular-nums opacity-80 max-[899px]:hidden">
            00:00:00:00
          </span>
        </span>

        <span className="font-archivo absolute -bottom-px left-[clamp(24px,3.2vw,44px)] text-[clamp(.58rem,.75vw,.72rem)] font-extrabold tracking-wider">
          NUIT MMI · 2027
        </span>
      </div>

      {tiles.map(({ position, eye }) => (
        <div
          key={position}
          className={`cell eyes ${position} bg-primary [container-type:size] relative min-h-0 min-w-0 overflow-hidden`}
        >
          <CharacterEyes model={eye} />
        </div>
      ))}

      <div className="cell t bg-primary relative flex min-h-0 min-w-0 flex-col justify-center overflow-hidden p-[clamp(1.2rem,3.5vw,3.2rem)]">
        <h1
          id="hero-title"
          className="hero-logo [&_span]:font-archivo flex items-start gap-[clamp(.4rem,1vw,1rem)] [&_img]:h-[clamp(100px,27svh,300px)] [&_img]:max-w-[calc(100%-3.5rem)] max-[899px]:[&_img]:h-auto max-[899px]:[&_img]:max-h-[200px] [&_span]:text-[clamp(1rem,2vw,2rem)] [&_span]:font-black"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo-nuit-mmi.svg`}
            alt="Nuit MMI"
          />
          <span>2027</span>
        </h1>

        <p className="mt-4 max-w-[30ch] text-[clamp(.9rem,1.2vw,1.1rem)] font-semibold">
          24 heures pour réaliser une création numérique, en direct de l'IUT du
          Limousin.
        </p>
      </div>

      <div className="cell f relative flex min-h-0 min-w-0 flex-col justify-center gap-2 overflow-hidden bg-[var(--deep)] p-[clamp(1rem,3vw,2.4rem)]">
        <p className="text-[.95rem] font-semibold opacity-85">
          Début du live dans
        </p>
        <Countdown />
      </div>

      <div className="cell g bg-primary relative flex min-h-0 min-w-0 flex-col items-start justify-center gap-2 overflow-hidden p-[clamp(1rem,3vw,2.4rem)]">
        <p className="font-archivo text-[clamp(2.2rem,4vw,3.8rem)] leading-[.9] font-black uppercase">
          9 h → 9 h
        </p>

        <p className="text-[.95rem] font-semibold opacity-85">
          Du jeudi 7 au vendredi 8 janvier 2027
        </p>

        <a
          className="bg-pink text-background font-archivo inline-block px-[1.4em] py-[.8em] text-base font-black uppercase transition-transform [clip-path:polygon(4%_0,100%_8%,96%_100%,0_90%)] hover:scale-105 hover:-rotate-2"
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
