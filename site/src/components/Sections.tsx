import { credentials, profile } from "@/data/profile";
import { Arrow } from "./ui/Arrow";
import { SocialLinks } from "./ui/SocialLinks";
export function Credentials() {
  return (
    <section className="recognition-chapter" id="credentials">
      <div className="recognition-heading">
        <h2>
          Knowledge.
          <br />
          Recognition.
          <br />
          <em>Evidence.</em>
        </h2>
        <p>
          Credentials &amp; recognition.
          <br />
          Follow the record.
        </p>
      </div>
      <div className="recognition-ledger">
        {credentials.map((c, i) => (
          <a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="recognition-index">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <small>{c.issuer}</small>
              <h3>{c.title}</h3>
              <span className="sr-only"> (opens in new tab)</span>
            </div>
            <Arrow diagonal />
          </a>
        ))}
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <footer className="human-ending" id="contact">
      <div className="ending-intro">
        <p>
          Good work starts with
          <br />a thoughtful conversation.
        </p>
        <span>Engineering × Analytics × Business</span>
      </div>
      <a className="ending-title" href={`mailto:${profile.email}`}>
        The next
        <br />
        conversation
        <br />
        <em>
          starts here<span>.</span>
        </em>
        <Arrow diagonal />
      </a>
      <SocialLinks labels />
      <div className="ending-base">
        <span>Saipranay Thandu</span>
        <span>Beyond the Data · 2026</span>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
      <p className="scene-caption">
        Independent personal portfolio. Technical demonstrations use synthetic
        data.
      </p>
    </footer>
  );
}
