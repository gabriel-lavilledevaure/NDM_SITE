const tapes = {
  pink: ["24 HEURES POUR CRÉER", "UNE NUIT, MILLE IDÉES", "NUIT MMI 2027"],
  violet: ["EN DIRECT DE LIMOGES", "DES TALENTS EN ÉQUIPE", "100 % MMI"],
};

function Tape({ reverse = false }) {
  const messages = reverse ? tapes.violet : tapes.pink;

  return (
    <div
      className={`absolute -left-[3%] -right-[3%] overflow-hidden whitespace-nowrap py-[.45em] font-archivo text-[clamp(1.35rem,3.6vw,2.4rem)] font-black uppercase leading-none ${
        reverse
          ? "top-[57%] rotate-[1.2deg] bg-accent text-white"
          : "top-[12%] -rotate-[1.6deg] bg-pink text-background"
      }`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max motion-safe:animate-[tape-move_28s_linear_infinite] ${
          reverse
            ? "[animation-direction:reverse] [animation-duration:32s] [animation-delay:-7s]"
            : ""
        }`}
      >
        {[0, 1].map((copy) => (
          <div className="flex shrink-0 items-center" key={copy}>
            {messages.map((message) => (
              <span
                key={message}
                className="inline-flex shrink-0 items-center gap-[.85em] whitespace-nowrap pr-[.85em]"
              >
                {message}
                <i
                  aria-hidden="true"
                  className="inline-block size-[.28em] shrink-0 rotate-45 bg-current"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div
      className="relative my-6 h-[clamp(130px,15vw,205px)] overflow-hidden"
      aria-hidden="true"
    >
      <Tape />
      <Tape reverse />
    </div>
  );
}
