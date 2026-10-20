import { TWITCH_URL } from "../data/event";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-intro">
          <p className="footer-eyebrow">Nuit MMI · Édition 2027</p>
          <h2>
            LA NUIT
            <br />
            <span>NE FAIT QUE</span>
            <br />
            COMMENCER<span className="footer-dot">.</span>
          </h2>
          <p>
            24 heures de création, de défis et de direct. Une nuit pour voir les
            idées prendre vie.
          </p>
          <a
            className="btn footer-cta"
            href={TWITCH_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Suivre le live ↗
          </a>
        </div>
        <div className="footer-details">
          <div className="footer-detail">
            <span>Quand ?</span>
            <strong>7 → 8 janvier 2027</strong>
            <p>24 heures de création</p>
          </div>
          <div className="footer-detail">
            <span>Où ?</span>
            <strong>IUT du Limousin</strong>
            <p>Limoges, France</p>
          </div>
          <nav
            className="footer-detail"
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
      <div className="footer-bottom">
        <a
          href="#home"
          className="footer-brand"
          aria-label="Retour en haut de page"
        >
          <img src="/logo-nuit-mmi-dark.svg" alt="" />
        </a>
        <span>Un projet étudiant · MMI Limoges · 2027</span>
        <a href="#home" className="footer-up">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
