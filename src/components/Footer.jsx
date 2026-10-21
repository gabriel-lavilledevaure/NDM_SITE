import { TWITCH_URL } from "../data/event";

export default function Footer() {
  return (
    <footer className="bg-pink px-[var(--site-gutter)] pb-6 pt-[clamp(3.5rem,7vw,7rem)] text-background">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-[clamp(3rem,8vw,9rem)] pb-[clamp(3rem,6vw,6rem)] lg:grid-cols-[minmax(0,1.55fr)_minmax(230px,.65fr)]">
        <div className="[&_h2]:my-6 [&_h2]:font-archivo [&_h2]:text-[clamp(2.25rem,8.5vw,9rem)] [&_h2]:font-black [&_h2]:uppercase [&_h2]:leading-[.88] [&_h2]:tracking-[-.045em] [&>p]:max-w-[40ch] [&>p]:text-lg">
          <p className="font-archivo text-sm font-bold uppercase tracking-wider">Nuit MMI · Édition 2027</p>
          <h2>
            LA NUIT
            <br />
            <span className="text-primary">NE FAIT QUE</span>
            <br />
            COMMENCER<span className="text-primary">.</span>
          </h2>
          <p>
            24 heures de création, de défis et de direct. Une nuit pour voir les
            idées prendre vie.
          </p>
          <a
            className="inline-block bg-pink text-background font-archivo font-black uppercase text-base px-[1.4em] py-[.8em] [clip-path:polygon(4%_0,100%_8%,96%_100%,0_90%)] transition-transform hover:-rotate-2 hover:scale-105 mt-8 !bg-background !text-white"
            href={TWITCH_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Suivre le live ↗
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:flex lg:flex-col lg:justify-center lg:gap-10">
          <div className="flex flex-col items-start gap-2 border-t border-background/30 pt-5 [&>span]:font-archivo [&>span]:text-sm [&>span]:font-bold [&>span]:uppercase [&>strong]:font-archivo [&>strong]:text-[clamp(1.3rem,2.3vw,2rem)] [&>strong]:font-black [&>strong]:uppercase [&>p]:opacity-75 [&>a]:text-lg [&>a]:font-bold [&>a:hover]:underline">
            <span>Quand ?</span>
            <strong>7 → 8 janvier 2027</strong>
            <p>24 heures de création</p>
          </div>
          <div className="flex flex-col items-start gap-2 border-t border-background/30 pt-5 [&>span]:font-archivo [&>span]:text-sm [&>span]:font-bold [&>span]:uppercase [&>strong]:font-archivo [&>strong]:text-[clamp(1.3rem,2.3vw,2rem)] [&>strong]:font-black [&>strong]:uppercase [&>p]:opacity-75 [&>a]:text-lg [&>a]:font-bold [&>a:hover]:underline">
            <span>Où ?</span>
            <strong>IUT du Limousin</strong>
            <p>Limoges, France</p>
          </div>
          <nav
            className="flex flex-col items-start gap-2 border-t border-background/30 pt-5 [&>span]:font-archivo [&>span]:text-sm [&>span]:font-bold [&>span]:uppercase [&>strong]:font-archivo [&>strong]:text-[clamp(1.3rem,2.3vw,2rem)] [&>strong]:font-black [&>strong]:uppercase [&>p]:opacity-75 [&>a]:text-lg [&>a]:font-bold [&>a:hover]:underline"
            aria-label="Navigation de pied de page"
          >
            <span>Retrouvez-nous</span>
            <a href={TWITCH_URL} target="_blank" rel="noopener noreferrer">
              Twitch ↗
            </a>
            <a href="#programme">Programme ↗</a>
          </nav>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 border-t border-background/35 pt-6 text-sm font-bold uppercase max-sm:[&>span]:order-3 max-sm:[&>span]:w-full">
        <a
          href="#home"
          className="inline-flex bg-transparent p-0 [&_img]:w-[clamp(96px,9vw,128px)]"
          aria-label="Retour en haut de page"
        >
          <img src={`${import.meta.env.BASE_URL}logo-nuit-mmi-dark.svg`} alt="" />
        </a>
        <span>Un projet étudiant · MMI Limoges · 2027</span>
        <a href="#home" className="hover:underline">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
