const principles = [
  {
    title: "24 h",
    description:
      "Du jeudi 7 janvier à 9 h au vendredi 8 janvier à 9 h, sans interruption.",
  },
  {
    title: "En direct",
    description:
      "Le live Twitch continue toute la nuit, pendant que les projets avancent.",
  },
  {
    title: "100 % MMI",
    description:
      "Design, code, vidéo et son : tous les profils MMI travaillent ensemble.",
  },
];

export default function Principle() {
  return (
    <section id="principe" className="mx-auto max-w-[1400px] px-[clamp(1rem,5vw,4rem)] py-[clamp(3rem,8vw,7rem)]" aria-labelledby="principle-title">
      <h2 id="principle-title" className="font-archivo text-[clamp(2.6rem,7.5vw,6.5rem)] font-black uppercase leading-[.88]">
        Une nuit entière devant la caméra.
      </h2>
      <div className="mt-[clamp(2rem,5vw,4rem)] grid items-start gap-2 md:grid-cols-3">
        {principles.map(({ title, description }, index) => (
          <article key={title} className={`min-h-60 bg-primary p-[clamp(1.4rem,3vw,2.6rem)] max-md:min-h-0 ${index === 1 ? "md:mt-10 bg-[var(--deep)] [clip-path:polygon(4%_0,100%_6%,96%_96%,0_100%)]" : index === 0 ? "[clip-path:polygon(0_4%,100%_0,95%_100%,3%_94%)]" : "[clip-path:polygon(0_0,96%_5%,100%_100%,5%_95%)]"} [&_h3]:mb-3 [&_h3]:font-archivo [&_h3]:text-[clamp(2.2rem,4vw,3.4rem)] [&_h3]:font-black [&_h3]:uppercase [&_h3]:leading-[.9] [&_p]:max-w-[32ch]`}>
            <h3>
              {title}
              {index === 1 && <span className="ml-2 inline-block size-[.26em] animate-pulse rounded-full bg-red align-middle" aria-hidden="true" />}
            </h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
