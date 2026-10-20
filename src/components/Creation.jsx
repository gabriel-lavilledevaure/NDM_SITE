import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

const stages = ["IMAGINER", "CRÉER", "OSER"];

export default function Creation() {
  const section = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start end", "end start"] });
  const rotation = useTransform(scrollYProgress, [0, 1], [-14, 18]);
  const move = useTransform(scrollYProgress, [0, 1], [90, -90]);

  return (
    <section ref={section} id="creation" aria-labelledby="creation-title" className="relative isolate min-h-[110svh] overflow-hidden bg-pink text-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div style={reduce ? {} : { rotate: rotation, y: move }} className="absolute -right-24 top-16 aspect-square w-[70vw] max-w-[950px] border-[clamp(24px,6vw,100px)] border-background/10" />
        <div className="absolute bottom-0 right-0 h-1/3 w-full bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_22px,rgba(3,2,7,.09)_22px,rgba(3,2,7,.09)_24px)]" />
      </div>
      <div className="relative mx-auto flex min-h-[110svh] max-w-[1600px] flex-col justify-between px-5 pb-16 pt-24 md:px-12 md:pt-32">
        <div className="flex items-center justify-between border-b-2 border-background pb-4 text-sm font-bold uppercase tracking-widest">
          <span>01 / Le défi</span><span>24 heures chrono</span>
        </div>
        <div className="py-20">
          <motion.p initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 max-w-xl text-xl font-semibold md:text-2xl">Une seule nuit pour transformer une idée en création numérique.</motion.p>
          <h2 id="creation-title" className="font-archivo text-[clamp(4.2rem,14vw,15rem)] font-black uppercase leading-[.76] tracking-[-.075em]">
            {stages.map((word, i) => <motion.span key={word} initial={{ x: i % 2 ? 110 : -110, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .8, delay: i * .12, ease: [0.22, 1, 0.36, 1] }} className="block">{word}<span className="text-primary">.</span></motion.span>)}
          </h2>
        </div>
        <div className="grid gap-6 border-t-2 border-background pt-6 md:grid-cols-[1fr_2fr]">
          <span className="font-archivo text-6xl font-black">24H↗</span>
          <p className="max-w-2xl text-lg font-semibold md:text-2xl">Pas de recette toute faite : des idées à défendre, des essais à recommencer, et un projet à faire exister avant le lever du jour.</p>
        </div>
      </div>
    </section>
  );
}
