import { motion, useReducedMotion } from "motion/react";
import SectionMeta from "./SectionMeta";
import photo2025 from "../assets/nuit-mmi-2025.png";

const ease = [0.22, 1, 0.36, 1];

function Polaroid({
  year,
  image,
  alt,
  upcoming = false,
  rotation = 0,
  index = 0,
  reduceMotion,
}) {
  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 45,
              rotate: rotation * 1.8,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: rotation,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : index * 0.12,
        ease,
      }}
      whileHover={reduceMotion ? undefined : { y: -6, rotate: 0 }}
      className="w-full min-w-0 bg-[#f7f5f0] p-3 pb-4 text-[#111111] shadow-[0_16px_40px_rgba(0,0,0,0.25)] sm:p-4 sm:pb-5"
    >
      <div className="relative aspect-[4/3.7] overflow-hidden bg-[#e9e7e2]">
        {image ? (
          <img
            src={image}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : upcoming ? (
          <div className="flex h-full flex-col items-center justify-center bg-white px-4 text-center">
            <span className="font-archivo text-[clamp(3rem,6vw,5rem)] leading-none font-black tracking-[-0.07em] text-[#3822b7]">
              2027.
            </span>

            <span className="font-archivo mt-4 text-xs font-black tracking-[0.12em] text-[#111111] uppercase sm:text-sm">
              ÇA ARRIVE BIENTÔT
            </span>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-4 text-center">
            <span className="font-archivo text-5xl font-black tracking-[-0.06em] text-[#111111]/20">
              {year}
            </span>

            <span className="font-archivo mt-3 text-xs font-bold tracking-wider text-[#111111]/45 uppercase">
              PHOTO À VENIR
            </span>
          </div>
        )}
      </div>

      <div className="flex items-end justify-between gap-3 pt-4">
        <span className="font-archivo text-3xl leading-none font-black tracking-[-0.06em] sm:text-4xl">
          {year}
        </span>

        <span className="font-archivo text-[10px] font-bold tracking-wider text-[#111111]/55 uppercase">
          NUIT MMI
        </span>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-background relative overflow-hidden py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="site-container">
        <SectionMeta
          number="03"
          label="L'expérience"
          detail="Les éditions précédentes"
          light
        />

        {/* Title */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mt-8"
        >
          <h2 id="experience-title" className="site-heading">
            ÇA SE VIT.
            <br />
            <span className="text-pink">ÇA NE SE</span>
            <br />
            RACONTE PAS.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Chaque édition laisse des images, des rencontres et des souvenirs.
            La prochaine s'écrit en 2027.
          </p>
        </motion.div>

        {/* Photo archive composition */}
        <div className="mt-16 grid grid-cols-1 items-start gap-12 sm:mt-20 sm:grid-cols-2 sm:gap-10 lg:gap-16">
          {/* 2025 */}
          <div className="mx-auto w-full max-w-[530px] sm:mx-0">
            <Polaroid
              year="2025"
              image={photo2025}
              alt="Souvenir de la Nuit MMI 2025"
              rotation={-2}
              index={0}
              reduceMotion={reduceMotion}
            />
          </div>

          {/* 2026, slightly lower on desktop */}
          <div className="mx-auto w-full max-w-[530px] sm:mx-0 sm:mt-24 lg:mt-32">
            <Polaroid
              year="2026"
              rotation={2}
              index={1}
              reduceMotion={reduceMotion}
            />
          </div>
        </div>

        {/* Transition to 2027 */}
        <div className="mt-20 grid items-center gap-10 sm:mt-24 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="lg:pr-10"
          >
            <p className="font-archivo text-[clamp(2rem,4.5vw,4.5rem)] leading-[0.95] font-black tracking-[-0.055em] uppercase">
              ET LA
              <br />
              <span className="text-pink">SUITE ?</span>
            </p>

            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/65 sm:text-lg">
              La prochaine photo n'existe pas encore. Elle se prendra pendant la
              Nuit MMI 2027.
            </p>
          </motion.div>

          <div className="mx-auto w-full max-w-[430px] lg:mx-0 lg:ml-auto">
            <Polaroid
              year="2027"
              upcoming
              rotation={-1.5}
              index={2}
              reduceMotion={reduceMotion}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
