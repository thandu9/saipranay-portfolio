import Link from "next/link";
import { studies } from "@/data/work";
import { career, credentials, profile } from "@/data/profile";
import { Arrow } from "./ui/Arrow";
import { Diagram } from "./work/Diagram";
export function Work() {
  return (
    <section className="work-section section" id="work">
      <div className="section-heading">
        <h2>
          Systems built.
          <br />
          <em>Decisions enabled.</em>
        </h2>
        <p>
          Selected work, explained from
          <br />
          the foundation up.
        </p>
      </div>
      <div className="work-list">
        {studies.map((s) => (
          <Link href={`/work/${s.slug}`} className="work-row" key={s.slug}>
            <div className="work-visual">
              <Diagram kind={s.slug} />
              <span>SYNTHETIC ARCHITECTURE</span>
            </div>
            <div className="work-copy">
              <span className="work-category">{s.category}</span>
              <h3>
                {s.title.split("\n").map((t, i) => (
                  <span key={t}>
                    {i > 0 && <br />}
                    {t}
                  </span>
                ))}
              </h3>
              <p>{s.summary}</p>
              <span className="text-link">
                Explore case study <Arrow diagonal />
              </span>
            </div>
            <span className="work-index">{s.number}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section className="process section">
      <h2>
        The path from
        <br />
        <em>source to decision.</em>
      </h2>
      <div className="process-flow">
        {[
          [
            "01",
            "Understand",
            "Start with the decision, then work back to the data.",
          ],
          [
            "02",
            "Engineer",
            "Make inputs consistent, repeatable and traceable.",
          ],
          [
            "03",
            "Model",
            "Define the grain, relationships and shared meaning.",
          ],
          [
            "04",
            "Enable",
            "Give people a signal they can question and act on.",
          ],
        ].map(([n, t, p]) => (
          <div key={n}>
            <span>{n}</span>
            <h3>{t}</h3>
            <p>{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function About() {
  return (
    <section className="about section" id="about">
      <div className="about-intro">
        <h2>
          The connective
          <br />
          <em>thread.</em>
        </h2>
        <p>
          I work at the intersection of engineering, analytics and
          business—where technical choices become practical decisions.
        </p>
        <p>
          My experience spans geospatial data, business intelligence and
          transportation decision support. The common thread is clarity.
        </p>
        <div className="education">
          <h3>Education</h3>
          <p>
            <strong>Master’s · Business Analytics</strong>
            <br />
            Sacred Heart University · Jan 2023 – Mar 2024
          </p>
          <p>
            <strong>BBA · Business Statistics</strong>
            <br />
            Osmania University
          </p>
        </div>
      </div>
      <div className="timeline">
        {career.map(([year, title, company, dates]) => (
          <article key={title}>
            <span className="timeline-year">{year}</span>
            <h3>{title}</h3>
            <p>{company}</p>
            <small>{dates}</small>
          </article>
        ))}
        <details>
          <summary>Earlier experience</summary>
          <p>
            Business Development Intern · EThames Business School, Hyderabad
            <br />
            January 2017 – June 2017
          </p>
        </details>
      </div>
    </section>
  );
}
export function Credentials() {
  return (
    <section className="credentials section" id="credentials">
      <div>
        <h2>
          Knowledge,
          <br />
          <em>with evidence.</em>
        </h2>
        <p>Explore the issuer-provided credential records.</p>
      </div>
      <div className="credential-list">
        {credentials.map((c) => (
          <a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${c.title} credential (opens in new tab)`}
          >
            <span>
              <small>{c.issuer}</small>
              <strong>{c.title}</strong>
            </span>
            <Arrow diagonal />
          </a>
        ))}
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <footer className="contact section" id="contact">
      <div className="contact-top">
        <p>
          Have a complex problem
          <br />
          that needs a clearer model?
        </p>
        <a
          className="contact-title"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s connect.
          <Arrow diagonal />
        </a>
        <div className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <Arrow diagonal />
          </a>
          <a href={`mailto:${profile.email}`}>
            Email Saipranay <Arrow diagonal />
          </a>
          {profile.github && <a href={profile.github}>GitHub</a>}
          {profile.resume && <a href={profile.resume}>Resume</a>}
        </div>
      </div>
      <div className="footer-bottom">
        <span>Saipranay Thandu</span>
        <span>The Living Model · 2026</span>
        <a href="#top">Back to top ↑</a>
      </div>
      <p className="footer-note">
        An independent personal portfolio. Employers are experience context, not
        endorsements. Technical exhibits use synthetic data.
      </p>
    </footer>
  );
}
