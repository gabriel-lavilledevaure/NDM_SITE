import SectionMeta from "./SectionMeta";
import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

const disciplines = [
  {
    number: "01",
    name: "DESIGN",
    description:
      "Donner une forme aux idées : identité, typographie, interfaces, images.",
    keyword: "IMAGINER",
  },
  {
    number: "02",
    name: "DÉVELOPPEMENT",
    description:
      "Transformer les concepts en expériences numériques qui fonctionnent.",
    keyword: "CONSTRUIRE",
  },
  {
    number: "03",
    name: "AUDIOVISUEL",
    description: "Capter les gestes, les voix et l'énergie de la nuit.",
    keyword: "CAPTURER",
  },
  {
    number: "04",
    name: "COMMUNICATION",
    description:
      "Raconter le projet, fédérer les équipes et partager le résultat.",
    keyword: "PARTAGER",
  },
];

export default function BehindTheScenes() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.4,
  });

  const titleY = useTransform(smoothProgress, [0, 1], [20, -20]);

  const titleRotate = useTransform(smoothProgress, [0, 1], [-1.5, 1.5]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(
      disciplines.length - 1,
      Math.max(0, Math.floor(value * disciplines.length)),
    );

    setActiveIndex((previous) => (previous === index ? previous : index));
  });

  return (
    <section
      ref={sectionRef}
      id="coulisses"
      aria-labelledby="coulisses-title"
      className="bg-indigo-section relative overflow-clip text-white"
    >
      <div className="site-container">
        <div className="pt-[var(--section-space)]"><SectionMeta number="02" label="Les coulisses" detail="Des talents, une équipe" light /></div>

        <div className="site-section-content grid items-start gap-10 pb-[var(--section-space)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          {/* LEFT — STICKY EDITORIAL TITLE */}
          <div className="min-w-0 lg:sticky lg:top-28 lg:flex lg:min-h-[calc(100svh-9rem)] lg:flex-col lg:justify-center">
            <motion.div
              style={
                reduceMotion
                  ? undefined
                  : {
                      y: titleY,
                      rotate: titleRotate,
                    }
              }
            >

              <h2
                id="coulisses-title"
                className="site-heading"
              >
                TOUS
                <br />
                DIFFÉRENTS.
                <br />
                <span className="text-pink">TOUS MMI.</span>
              </h2>

              <p className="mt-8 max-w-sm text-base leading-relaxed text-white/75 md:text-xl">
                C'est en mélangeant les spécialités que naissent les projets les
                plus inattendus.
              </p>

              {/* CURRENT DISCIPLINE */}
              <div className="mt-10 hidden items-center gap-5 lg:flex">
                <div className="border-pink/60 font-archivo text-pink flex size-14 shrink-0 items-center justify-center border text-2xl font-black">
                  <motion.span
                    key={activeIndex}
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {disciplines[activeIndex].number}
                  </motion.span>
                </div>

                <div className="min-w-0">
                  <p className="font-archivo text-xs font-bold tracking-widest text-white/50 uppercase">
                    EN CE MOMENT
                  </p>

                  <motion.p
                    key={disciplines[activeIndex].keyword}
                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-archivo text-pink text-lg font-black uppercase"
                  >
                    {disciplines[activeIndex].keyword}
                  </motion.p>
                </div>
              </div>

              {/* SCROLL PROGRESS */}
              <div className="mt-8 hidden max-w-sm items-center gap-4 lg:flex">
                <span className="font-archivo text-xs font-black">01</span>

                <div className="h-[3px] flex-1 overflow-hidden bg-white/20">
                  <motion.div
                    className="bg-pink h-full origin-left"
                    style={{ scaleX: smoothProgress }}
                  />
                </div>

                <span className="font-archivo text-xs font-black">04</span>
              </div>

              <a
                href="#programme"
                className="bg-pink font-archivo text-background mt-10 inline-flex w-fit -rotate-3 items-center gap-3 px-5 py-4 text-[clamp(1rem,2vw,1.35rem)] font-black uppercase shadow-[6px_6px_0_#030207] transition-transform duration-200 hover:scale-105 hover:-rotate-1 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-95"
              >
                VOIR LE PROGRAMME
                <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT — SCROLLING DISCIPLINES */}
          <div className="min-w-0">
            <ol className="border-t border-white/35">
              {disciplines.map((discipline, index) => (
                <motion.li
                  key={discipline.number}
                  initial={reduceMotion ? false : { opacity: 0.25, y: 55 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex min-h-[45svh] flex-col justify-center overflow-hidden border-b border-white/35 py-12 md:min-h-[55svh] lg:min-h-[70svh]"
                >

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center gap-4">
                      <span className="font-archivo text-pink text-sm font-black">
                        {discipline.number} / 04
                      </span>

                      <span className="bg-pink/70 h-px w-12" />

                      <span className="font-archivo text-xs font-bold tracking-[0.2em] text-white/55 uppercase">
                        {discipline.keyword}
                      </span>
                    </div>

                    <h3 className="font-archivo group-hover:text-pink max-w-full text-[clamp(2.1rem,4.3vw,5rem)] leading-[0.9] font-black tracking-[-0.045em] break-words uppercase transition-colors duration-300">
                      {discipline.name}
                    </h3>

                    <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
                      {discipline.description}
                    </p>
                  </div>

                  <motion.div
                    className="bg-pink absolute bottom-0 left-0 h-[3px] w-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{
                      once: false,
                      amount: 0.6,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                    }}
                  />
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
