import { TWITCH_URL } from "../data/event";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 md:h-16 items-center gap-5 border-b border-pink/25 bg-background/95 px-[clamp(.9rem,3vw,2rem)] backdrop-blur-xl">
      <a
        href="#home"
        className="inline-flex shrink-0 items-center [&_img]:w-[clamp(62px,5.4vw,78px)]"
        aria-label="Nuit MMI, retour à l'accueil"
      >
        <img src={`${import.meta.env.BASE_URL}logo-nuit-mmi.svg`} alt="" />
      </a>
      <nav aria-label="Navigation principale" className="ml-auto hidden items-center gap-6 font-semibold text-white [&_a]:transition-colors [&_a:hover]:text-pink md:flex">
        <a href="#principe">Le principe</a>
        <a href="#creation">Le défi</a>
        <a href="#experience">L’expérience</a>
        <a href="#programme">Programme</a>
      </nav>
      <a
        className="inline-block bg-pink text-background font-archivo font-black uppercase text-base px-[1.4em] py-[.8em] [clip-path:polygon(4%_0,100%_8%,96%_100%,0_90%)] transition-transform hover:-rotate-2 hover:scale-105 ml-auto text-sm md:ml-0"
        href={TWITCH_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitch
      </a>
    </header>
  );
}
