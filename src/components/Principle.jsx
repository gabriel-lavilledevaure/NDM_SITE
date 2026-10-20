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
    <section id="principe" className="pr" aria-labelledby="principle-title">
      <h2 id="principle-title" className="h2">
        Une nuit entière devant la caméra.
      </h2>
      <div className="prg">
        {principles.map(({ title, description }, index) => (
          <article key={title} className={`pc p${index + 1}`}>
            <h3>
              {title}
              {index === 1 && <span className="live-dot" aria-hidden="true" />}
            </h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
