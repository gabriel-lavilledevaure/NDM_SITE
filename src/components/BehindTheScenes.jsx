import { motion, useReducedMotion } from "motion/react";

const disciplines = [
  { number: "01", name: "DESIGN", description: "Donner une forme aux idées : identité, typographie, interfaces, images." },
  { number: "02", name: "DÉVELOPPEMENT", description: "Transformer les concepts en expériences numériques qui fonctionnent." },
  { number: "03", name: "AUDIOVISUEL", description: "Capter les gestes, les voix et l'énergie de la nuit." },
  { number: "04", name: "COMMUNICATION", description: "Raconter le projet, fédérer les équipes et partager le résultat." },
];

export default function BehindTheScenes() {
  const reduce = useReducedMotion();
  return (
    <section id="coulisses" aria-labelledby="coulisses-title" className="relative overflow-hidden bg-indigo-section py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-12">
        <div className="flex items-center justify-between border-b border-white/40 pb-4 text-sm font-bold uppercase tracking-widest"><span>03 / Les coulisses</span><span>Plusieurs talents. Une équipe.</span></div>
        <div className="grid gap-12 py-16 lg:grid-cols-[.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 id="coulisses-title" className="font-archivo text-[clamp(3.5rem,7vw,8rem)] font-black uppercase leading-[.82] tracking-[-.06em]">TOUS<br />DIFFÉRENTS.<br /><span className="text-pink">TOUS MMI.</span></h2>
            <p className="mt-8 max-w-sm text-xl text-white/80">C'est en mélangeant les spécialités que naissent les projets les plus inattendus.</p>
            <div className="mt-12 inline-block -rotate-6 bg-pink px-6 py-4 font-archivo text-2xl font-black uppercase text-background">FAIT ENSEMBLE ↗</div>
          </div>
          <ol className="divide-y-2 divide-white/40 border-y-2 border-white/40">
            {disciplines.map((discipline) => (
              <motion.li key={discipline.number} initial={reduce ? false : { opacity: 0, x: 75 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .45 }} transition={{ duration: .65 }} className="group relative overflow-hidden py-9 md:py-12">
                <motion.div className="pointer-events-none absolute inset-0 origin-left bg-pink" initial={{ scaleX: 0 }} whileHover={reduce ? {} : { scaleX: 1 }} transition={{ duration: .35 }} aria-hidden="true" />
                <div className="relative grid grid-cols-[3rem_1fr_auto] items-start gap-3 transition-colors duration-300 group-hover:text-background md:grid-cols-[4rem_1fr_auto] md:gap-6">
                  <span className="font-archivo text-sm font-black">{discipline.number}</span>
                  <div><h3 className="font-archivo text-[clamp(1.65rem,3.2vw,3.8rem)] font-black uppercase leading-none tracking-tight">{discipline.name}</h3><p className="mt-4 max-w-md text-base opacity-80 md:text-lg">{discipline.description}</p></div>
                  <span className="font-archivo text-3xl font-black md:text-5xl" aria-hidden="true">↗</span>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
