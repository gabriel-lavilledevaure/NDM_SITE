import { TWITCH_URL } from "../data/event";

export default function Header() {
  return (
    <header className="hd">
      <a
        href="#home"
        className="brand"
        aria-label="Nuit MMI, retour à l'accueil"
      >
        <img src="/logo-nuit-mmi.svg" alt="" />
      </a>
      <nav aria-label="Navigation principale">
        <a href="#principe">Le principe</a>
        <a href="#creation">Le défi</a>
        <a href="#experience">L’expérience</a>
        <a href="#programme">Programme</a>
      </nav>
      <a
        className="btn"
        href={TWITCH_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitch
      </a>
    </header>
  );
}
