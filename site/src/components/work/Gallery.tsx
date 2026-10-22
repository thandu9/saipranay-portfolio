"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { studies } from "@/data/work";
import { ProjectArtwork } from "./ProjectArtwork";
import { Arrow } from "../ui/Arrow";
const names = [
  "Geospatial data\npipeline engineering.",
  "Project delivery\nintelligence.",
  "Workforce qualification\nanalytics.",
];
export function Gallery() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  function go(next: number) {
    const el = track.current;
    const child = el?.children[next] as HTMLElement | undefined;
    if (el && child)
      el.scrollTo({
        left: child.offsetLeft - el.offsetLeft,
        behavior: reduce ? "instant" : "smooth",
      });
  }
  return (
    <section
      id="work"
      className="gallery-section"
      aria-labelledby="gallery-title"
    >
      <div className="gallery-heading">
        <div>
          <h2 id="gallery-title">
            The work.
            <br />
            <span>Beyond the dashboard.</span>
          </h2>
        </div>
        <p>
          Three systems. Different challenges.
          <br />
          One commitment to trustworthy decisions.
        </p>
      </div>
      <div
        className="gallery-track"
        ref={track}
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected architecture case studies"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(Math.min(index + 1, 2));
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(Math.max(index - 1, 0));
          }
          if (e.key === "Home") {
            e.preventDefault();
            go(0);
          }
          if (e.key === "End") {
            e.preventDefault();
            go(2);
          }
        }}
        onScroll={() => {
          const el = track.current;
          if (el)
            setIndex(
              Math.round(
                el.scrollLeft /
                  (el.children[0].getBoundingClientRect().width + 24),
              ),
            );
        }}
      >
        {studies.map((s, i) => (
          <article
            key={s.slug}
            className={`gallery-slide slide-${i}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} of 3: ${s.category}`}
          >
            <div className="slide-art">
              <ProjectArtwork kind={s.slug} />
              <span className="slide-art-label">
                CONCEPTUAL ARCHITECTURE · SYNTHETIC DATA
              </span>
            </div>
            <div className="slide-copy">
              <div className="slide-title">
                <span className="slide-number">{s.number} /</span>
                <h3>
                  {names[i].split("\n").map((l, n) => (
                    <span key={l}>
                      {n > 0 && <br />}
                      {l}
                    </span>
                  ))}
                </h3>
              </div>
              <div className="slide-summary">
                <p>{s.summary}</p>
                <small className="gallery-proof">
                  {i === 0
                    ? "180+ data pipelines · Automated spatial ETL"
                    : i === 1
                      ? "4,000+ projects · 9 districts"
                      : "Identity reconciliation · Visible exceptions"}
                </small>
                <Link
                  className="text-link"
                  href={`/work/${s.slug}`}
                  tabIndex={index === i ? 0 : -1}
                >
                  Explore case study <Arrow diagonal />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="gallery-controls">
        <div className="gallery-pagination" aria-label="Choose case study">
          {studies.map((s, i) => (
            <button
              key={s.slug}
              aria-label={`Show project ${i + 1}: ${s.category}`}
              aria-current={index === i ? "true" : undefined}
              onClick={() => go(i)}
            >
              <span />
            </button>
          ))}
        </div>
        <p aria-live="polite">
          {String(index + 1).padStart(2, "0")} <span>/ 03</span>
        </p>
        <div className="gallery-arrows">
          <button
            aria-label="Previous project"
            disabled={index === 0}
            onClick={() => go(index - 1)}
          >
            <span className="arrow-left">
              <Arrow />
            </span>
          </button>
          <button
            aria-label="Next project"
            disabled={index === 2}
            onClick={() => go(index + 1)}
          >
            <Arrow />
          </button>
        </div>
      </div>
      <noscript>
        <div className="gallery-fallback">
          {studies.map((s) => (
            <Link key={s.slug} href={`/work/${s.slug}`}>
              {s.category}
            </Link>
          ))}
        </div>
      </noscript>
    </section>
  );
}
