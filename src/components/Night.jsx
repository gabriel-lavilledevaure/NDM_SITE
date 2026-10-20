import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import CharacterEyes from "./CharacterEyes";

const events = [
  ["09:00", "Début du live", "On allume les caméras."],
  ["12:00", "Défis créatifs", "Les équipes entrent en jeu."],
  ["18:00", "Le direct continue", "Créativité et surprises."],
  ["00:00", "Après minuit", "La nuit prend le relais."],
  ["06:00", "Dernière ligne droite", "On ne lâche rien."],
  ["09:00", "Fin des 24 heures", "On découvre le résultat."],
];

export default function Night() {
  const section = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });
  // Motion interpole les couleurs réelles lues depuis les variables CSS :root.
  const rootStyles = getComputedStyle(document.documentElement);
  const getColor = (name) => rootStyles.getPropertyValue(name).trim();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [getColor("--indigo"), getColor("--night-dark"), getColor("--night-dark"), getColor("--indigo2")],
  );
  const clock = useTransform(scrollYProgress, (value) => {
    const minutes = (540 + Math.round(value * 1440)) % 1440;
    return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
  });

  return (
    <motion.section
      id="programme"
      ref={section}
      className="relative h-[440vh]"
      style={{ backgroundColor }}
      aria-labelledby="schedule-title"
    >
      <div className="sticky top-0 grid h-svh grid-cols-[1.1fr_1fr] items-center gap-8 overflow-hidden px-[clamp(1rem,5vw,4rem)] pb-10 pt-20 max-[859px]:grid-cols-1 max-[859px]:content-start max-[859px]:gap-4 max-[859px]:pt-20">
        <div className="nl">
          <div className="mb-4 h-[clamp(4rem,10vw,7rem)] w-[clamp(8rem,24vw,18rem)] [&_.character-eyes]:p-0">
            <CharacterEyes model="bill" />
          </div>
          <motion.p className="my-4 font-archivo text-[clamp(5.5rem,19vw,17rem)] font-black leading-[.8] tabular-nums max-[859px]:my-2 max-[859px]:text-[min(28vw,20svh)]" aria-hidden="true">
            {clock}
          </motion.p>
          <p className="text-sm font-semibold opacity-85 max-[859px]:hidden">
            Fais défiler la page pour parcourir les 24 heures.
          </p>
        </div>
        <div>
          <h2 id="schedule-title" className="mb-5 font-archivo text-[clamp(2rem,4.5vw,3.6rem)] font-black uppercase leading-[.88] max-[859px]:hidden">
            Le programme
          </h2>
          <ol className="list-none p-0">
            {events.map(([time, title, description], index) => (
              <li
                key={`${time}-${title}`}
                className="grid grid-cols-[5rem_1fr] gap-4 border-t-2 border-white/20 py-3 opacity-75 max-[859px]:grid-cols-[4rem_1fr] max-[859px]:py-2 [&_time]:font-archivo [&_time]:text-2xl [&_time]:font-black [&_h3]:font-archivo [&_h3]:text-xl [&_h3]:font-black [&_h3]:uppercase max-[859px]:[&_h3]:text-base"
                style={{ "--event-index": index }}
              >
                <time>{time}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm opacity-60 max-[859px]:hidden">
            Horaires et activités indicatifs, à confirmer avec l'équipe.
          </p>
        </div>
        <motion.div
          className="absolute inset-x-0 bottom-0 h-1.5 origin-left bg-pink"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      </div>
    </motion.section>
  );
}
