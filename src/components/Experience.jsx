import { motion, useReducedMotion } from "motion/react";

const moments = [
  { time: "09:00", title: "TOUT COMMENCE", text: "Les équipes se retrouvent. Les premières idées fusent, personne ne sait encore où elles vont mener.", rotate: "-rotate-3", bg: "bg-primary" },
  { time: "02:17", title: "ÇA BOUGE ENCORE", text: "Les pistes évoluent, les écrans restent allumés, on s'entraide et on invente des solutions.", rotate: "rotate-2", bg: "bg-[#251782]" },
  { time: "08:59", title: "DERNIÈRE MINUTE", text: "Un dernier détail, un export, un regard sur le résultat. Vingt-quatre heures viennent de passer.", rotate: "-rotate-2", bg: "bg-[#4b35dd]" },
];

export default function Experience() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative overflow-hidden bg-background px-5 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex items-center justify-between border-b border-white/40 pb-4 text-sm font-bold uppercase tracking-widest"><span>02 / L'expérience</span><span>Pas une nuit comme les autres</span></div>
        <h2 id="experience-title" className="mt-16 max-w-6xl font-archivo text-[clamp(3.8rem,10vw,10rem)] font-black uppercase leading-[.82] tracking-[-.065em]">ÇA SE VIT.<br /><span className="text-pink">ÇA NE SE</span><br />RACONTE PAS.</h2>
        <p className="mt-9 max-w-xl text-xl text-white/75">Une aventure collective faite de discussions, de décisions, d'imprévus et de moments qu'on n'avait pas prévus.</p>
        <div className="mt-24 grid gap-10 py-10 md:grid-cols-3 md:gap-5">
          {moments.map((moment, index) => (
            <motion.article key={moment.title} initial={reduce ? false : { opacity: 0, y: 110, rotate: index === 1 ? 8 : -8 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .75, delay: index * .15, ease: [0.22, 1, 0.36, 1] }} whileHover={reduce ? {} : { y: -18, rotate: index === 1 ? 2 : -2 }} className={`relative flex min-h-[420px] flex-col justify-between overflow-hidden ${moment.bg} p-7 md:min-h-[490px] md:p-9 ${moment.rotate}`}>
              <span className="font-archivo text-[clamp(3rem,5vw,6rem)] font-black leading-none text-pink">{moment.time}</span>
              <div className="pointer-events-none absolute -right-12 top-1/3 aspect-square w-52 rotate-45 border-[28px] border-white/10" aria-hidden="true" />
              <div className="relative"><h3 className="font-archivo text-[clamp(2.5rem,4vw,4.5rem)] font-black uppercase leading-[.85]">{moment.title}</h3><p className="mt-6 max-w-xs text-lg text-white/85">{moment.text}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
