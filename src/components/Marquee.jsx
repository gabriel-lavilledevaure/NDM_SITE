const messages = ["24 heures pour créer", "Des idées en équipe", "Une nuit à l’IUT", "100 % MMI"];

function Tape({ reverse = false }) {
  return (
    <div className={`tape ${reverse ? "t2" : "t1"}`} aria-hidden="true">
      <div className="trk">
        {[0, 1].map((copy) => (
          <div className="grp" key={copy}>
            {messages.map((message) => (
              <span key={message}>{message}<i aria-hidden="true" /></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return <div className="tapes" aria-hidden="true"><Tape /><Tape reverse /></div>;
}
