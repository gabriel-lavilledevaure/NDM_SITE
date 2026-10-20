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
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#3523b4", "#0a0728", "#0a0728", "#4a34db"],
  );
  const clock = useTransform(scrollYProgress, (value) => {
    const minutes = (540 + Math.round(value * 1440)) % 1440;
    return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
  });

  return (
    <motion.section
      id="programme"
      ref={section}
      className="night"
      style={{ backgroundColor }}
      aria-labelledby="schedule-title"
    >
      <div className="stick">
        <div className="nl">
          <div className="night-eyes">
            <CharacterEyes model="bill" />
          </div>
          <motion.p className="tc" aria-hidden="true">
            {clock}
          </motion.p>
          <p className="lbl">
            Fais défiler la page pour parcourir les 24 heures.
          </p>
        </div>
        <div>
          <h2 id="schedule-title" className="h2">
            Le programme
          </h2>
          <ol className="evs">
            {events.map(([time, title, description], index) => (
              <li
                key={`${time}-${title}`}
                className="ev"
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
          <p className="note">
            Horaires et activités indicatifs, à confirmer avec l'équipe.
          </p>
        </div>
        <motion.div
          className="bar"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      </div>
    </motion.section>
  );
}
