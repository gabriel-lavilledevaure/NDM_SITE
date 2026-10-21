import SectionMeta from "./SectionMeta";
import { motion, useReducedMotion } from "motion/react";

export default function Creation() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="creation"
      aria-labelledby="creation-title"
      className="bg-pink text-background relative overflow-hidden site-section"
    >
      <div className="site-container">
        <SectionMeta number="01" label="Le défi" detail="Nuit MMI — 2027" />

        <div className="site-section-content grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-12">
          <motion.h2
            id="creation-title"
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="site-heading min-w-0"
          >
            <span className="block ">
              IMAGINER<span className="text-primary">.</span>
            </span>

            <span className="mt-3 block ">
              CRÉER<span className="text-primary">.</span>
            </span>

            <span className="mt-3 block ">
              OSER<span className="text-primary">.</span>
            </span>
          </motion.h2>

          <div className="max-w-sm md:pb-2">
            <p className="text-base leading-relaxed font-medium sm:text-lg">
              Une nuit pour sortir du cadre, mélanger les idées et construire
              quelque chose ensemble.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
