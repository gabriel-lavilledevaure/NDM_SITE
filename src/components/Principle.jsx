import SectionMeta from "./SectionMeta";
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
    <section id="principe" className="site-section" aria-labelledby="principle-title">
      <div className="site-container">
      <SectionMeta number="04" label="Le principe" detail="7–8 janvier 2027" light />
      <h2 id="principle-title" className="site-heading site-section-title">
        Une nuit entière devant la caméra.
      </h2>
      <div className="site-section-content grid items-stretch gap-5 md:grid-cols-3">
        {principles.map(({ title, description }, index) => (
          <article key={title} className={`min-h-60 bg-primary p-[clamp(1.4rem,3vw,2.6rem)] max-md:min-h-0 ${index === 1 ? "bg-[var(--deep)]" : ""} [&_h3]:mb-3 [&_h3]:font-archivo [&_h3]:text-[clamp(2.2rem,4vw,3.4rem)] [&_h3]:font-black [&_h3]:uppercase [&_h3]:leading-[.9] [&_p]:max-w-[32ch]`}>
            <h3>
              {title}
              {index === 1 && <span className="ml-2 inline-block size-[.26em] animate-pulse rounded-full bg-red align-middle" aria-hidden="true" />}
            </h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
