import SectionMeta from "./SectionMeta";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import CharacterEyes from "./CharacterEyes";

// Minutes écoulées depuis 09 h, jour 1.
const events = [
  {
    minute: 0,
    time: "09:00",
    title: "Début du live",
    description: "On allume les caméras.",
  },
  {
    minute: 180,
    time: "12:00",
    title: "Défis créatifs",
    description: "Les équipes entrent en jeu.",
  },
  {
    minute: 540,
    time: "18:00",
    title: "Le direct continue",
    description: "Créativité et surprises.",
  },
  {
    minute: 900,
    time: "00:00",
    title: "Après minuit",
    description: "La nuit prend le relais.",
  },
  {
    minute: 1260,
    time: "06:00",
    title: "Dernière ligne droite",
    description: "On ne lâche rien.",
  },
  {
    minute: 1440,
    time: "09:00",
    title: "Fin des 24 heures",
    description: "On découvre le résultat.",
  },
];

function getActiveEvent(minutes) {
  for (let index = events.length - 1; index >= 0; index -= 1) {
    if (minutes >= events[index].minute) {
      return index;
    }
  }

  return 0;
}

export default function Night() {
  const section = useRef(null);
  const [elapsedMinutes, setElapsedMinutes] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });

  const rootStyles =
    typeof document !== "undefined"
      ? getComputedStyle(document.documentElement)
      : null;

  const getColor = (name, fallback) =>
    rootStyles?.getPropertyValue(name).trim() || fallback;

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [
      getColor("--indigo", "#3523b4"),
      getColor("--night-dark", "#0a0728"),
      getColor("--night-dark", "#0a0728"),
      getColor("--indigo2", "#4a34db"),
    ],
  );

  const clock = useTransform(scrollYProgress, (progress) => {
    const minutes = (540 + Math.round(progress * 1440)) % 1440;

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextMinutes = Math.min(
      1440,
      Math.max(0, Math.round(progress * 1440)),
    );

    setElapsedMinutes((previous) =>
      previous === nextMinutes ? previous : nextMinutes,
    );
  });

  const activeIndex = getActiveEvent(elapsedMinutes);

  return (
    <motion.section
      id="programme"
      ref={section}
      className="relative h-auto min-[860px]:h-[440vh]"
      style={{ backgroundColor }}
      aria-labelledby="schedule-title"
    >
      <div className="relative grid min-h-svh min-[860px]:sticky min-[860px]:top-0 min-[860px]:h-svh grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center gap-8 overflow-hidden px-[var(--site-gutter)] pt-20 pb-10 max-[859px]:grid-cols-1 max-[859px]:content-start max-[859px]:gap-6 max-[859px]:pt-24 max-[859px]:pb-20">
        <div className="min-w-0">
          <div className="mb-4 h-[clamp(4rem,10vw,7rem)] w-[clamp(8rem,24vw,18rem)] [&_.character-eyes]:p-0">
            <CharacterEyes model="bill" />
          </div>

          <motion.p
            className="font-archivo my-4 text-[clamp(4rem,11vw,10rem)] leading-[.8] font-black tracking-[-.055em] whitespace-nowrap tabular-nums max-[859px]:my-2 max-[859px]:text-[clamp(4rem,19vw,8rem)]"
            aria-hidden="true"
          >
            {clock}
          </motion.p>

          <p className="text-sm font-semibold opacity-85 max-[859px]:hidden">
            Fais défiler la page pour parcourir les 24 heures.
          </p>
        </div>

        <div className="min-w-0">
          <div className="mb-[var(--section-heading-gap)]"><SectionMeta number="05" label="Le programme" detail="Du début à la fin" light /></div>
          <h2
            id="schedule-title"
            className="font-archivo mb-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.12] font-black uppercase max-[859px]:text-[clamp(1.9rem,9vw,3rem)]"
          >
            Le programme
          </h2>

          <ol className="list-none p-0">
            {events.map((event, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              const nextMinute = events[index + 1]?.minute ?? 1440;

              const duration = Math.max(1, nextMinute - event.minute);

              const progress = isPast
                ? 1
                : isActive
                  ? index === events.length - 1
                    ? 1
                    : Math.min(1, (elapsedMinutes - event.minute) / duration)
                  : 0;

              return (
                <motion.li
                  key={`${event.minute}-${event.title}`}
                  layout={false}
                  animate={{
                    opacity: isActive ? 1 : isPast ? 0.45 : 0.7,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.3,
                  }}
                  className="relative grid grid-cols-[5rem_minmax(0,1fr)] gap-4 border-t-2 border-white/20 py-3 max-[859px]:grid-cols-[4.2rem_minmax(0,1fr)] max-[859px]:gap-2 max-[859px]:py-2"
                  aria-current={isActive ? "step" : undefined}
                >
                  <motion.div
                    className="bg-pink pointer-events-none absolute inset-y-0 left-0 w-1"
                    animate={{
                      scaleY: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    style={{ transformOrigin: "top" }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.25,
                    }}
                    aria-hidden="true"
                  />

                  <motion.div
                    className="bg-pink/10 pointer-events-none absolute inset-0"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.25,
                    }}
                    aria-hidden="true"
                  />

                  <motion.div
                    className="bg-pink pointer-events-none absolute top-[-2px] right-0 left-0 h-[2px] origin-left"
                    animate={{ scaleX: progress }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.2,
                      ease: "easeOut",
                    }}
                    aria-hidden="true"
                  />

                  <time
                    className={`font-archivo relative pl-3 text-2xl font-black max-[859px]:text-lg ${
                      isActive ? "text-pink" : "text-white"
                    }`}
                  >
                    {event.time}
                  </time>

                  <div className="relative min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`font-archivo text-xl font-black uppercase max-[859px]:text-base ${
                          isActive ? "text-pink" : "text-white"
                        }`}
                      >
                        {event.title}
                      </h3>

                      {isActive && (
                        <motion.span
                          initial={
                            reduceMotion ? false : { opacity: 0, scale: 0.6 }
                          }
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-pink size-2 shrink-0 rounded-full"
                          aria-label="En cours"
                        />
                      )}
                    </div>

                    <p className="text-sm text-white/80 max-[859px]:text-xs">
                      {event.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>

          <p className="mt-4 text-sm opacity-60 max-[859px]:hidden">
            Horaires et activités indicatifs, à confirmer avec l'équipe.
          </p>
        </div>

        <motion.div
          className="bg-pink absolute inset-x-0 bottom-0 h-1.5 origin-left"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      </div>
    </motion.section>
  );
}
