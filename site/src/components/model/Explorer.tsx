"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { families, journey } from "@/data/model";
import { Arrow } from "../ui/Arrow";
import { Schema } from "./Schema";
export function Explorer() {
  const [selected, setSelected] = useState("engineering");
  const [hovered, setHovered] = useState<string | null>(null);
  const [step, setStep] = useState<number | null>(null);
  useEffect(() => {
    const sync = () => {
      const p = new URLSearchParams(location.search);
      const node = p.get("node");
      setSelected(families.some((f) => f.id === node) ? node! : "engineering");
      const n = p.get("step");
      setStep(
        n !== null && /^\d$/.test(n) && Number(n) < journey.length
          ? Number(n)
          : null,
      );
    };
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  function choose(id: string, nextStep: number | null = null) {
    setSelected(id);
    setStep(nextStep);
    const url = new URL(location.href);
    url.searchParams.set("node", id);
    if (nextStep === null) url.searchParams.delete("step");
    else url.searchParams.set("step", String(nextStep));
    url.hash = "model";
    history.pushState({}, "", url);
  }
  const family = families.find((f) => f.id === selected)!;
  const active = hovered || selected;
  return (
    <section className="model-section" id="model" aria-labelledby="model-title">
      <div className="section-heading">
        <div>
          <h2 id="model-title">
            Nothing works
            <br />
            <em>in isolation.</em>
          </h2>
          <p>Neither does my work. Follow a connection.</p>
        </div>
        <div className="model-mode" aria-label="Exploration mode">
          <button aria-pressed={step === null} onClick={() => choose(selected)}>
            Explore freely
          </button>
          <button
            aria-pressed={step !== null}
            onClick={() => choose("engineering", 0)}
          >
            Follow the data <Arrow />
          </button>
        </div>
      </div>
      <div className="model-layout">
        <div className="graph">
          <div className="graph-label">
            THE LIVING MODEL <span>6 connected disciplines</span>
          </div>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="graph-lines"
          >
            {families.map((f) => (
              <path
                key={f.id}
                className={active === f.id ? "edge active" : "edge"}
                d={`M50 50 C50 ${f.y}, ${f.x} 50, ${f.x} ${f.y}`}
              />
            ))}
          </svg>
          <div className="graph-center">
            <span className="center-mark">st.</span>
            <strong>Saipranay</strong>
            <span>Analytics Architecture</span>
          </div>
          <div className="node-list" aria-label="Architecture families">
            {families.map((f, i) => (
              <button
                className={`node node-${i} ${selected === f.id ? "selected" : ""}`}
                style={
                  {
                    "--node-x": `${f.x}%`,
                    "--node-y": `${f.y}%`,
                  } as React.CSSProperties
                }
                key={f.id}
                onClick={() => choose(f.id)}
                onMouseEnter={() => setHovered(f.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(f.id)}
                onBlur={() => setHovered(null)}
                aria-pressed={selected === f.id}
                aria-controls="model-inspector"
              >
                <span className="node-number">
                  0{i + 1}
                  <span className="node-dot" />
                </span>
                <strong>{f.title}</strong>
                <span className="node-short">{f.short}</span>
              </button>
            ))}
          </div>
          <p className="graph-hint">
            {families.find((f) => f.id === active)?.short}
          </p>
        </div>
        <aside id="model-inspector" className="inspector" aria-live="polite">
          <div className="inspector-top">
            <span>
              {step === null
                ? "CONNECTION IN FOCUS"
                : `FOLLOW THE DATA · ${step + 1} / 6`}
            </span>
            <button
              onClick={() => choose("engineering")}
              aria-label="Reset model"
            >
              Reset
            </button>
          </div>
          <h3>{step === null ? family.title : journey[step].title}</h3>
          <p className="inspector-outcome">
            {step === null ? family.outcome : journey[step].body}
          </p>
          <div className="inspector-detail">
            <span>THE ARCHITECTURE</span>
            <p>{family.architecture}</p>
          </div>
          <div className="tools">
            {family.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <Link className="inspector-link" href={family.href}>
            {family.link}
            <Arrow diagonal />
          </Link>
          {step !== null && (
            <div className="journey-controls">
              <button
                className="small-button"
                disabled={step === 0}
                onClick={() => choose(journey[step - 1].node, step - 1)}
              >
                Previous
              </button>
              <button
                className="small-button"
                onClick={() =>
                  step < 5
                    ? choose(journey[step + 1].node, step + 1)
                    : choose(selected)
                }
              >
                {step < 5 ? "Next step" : "Finish tour"} <Arrow />
              </button>
            </div>
          )}
        </aside>
      </div>
      {selected === "modeling" && <Schema />}
      <p className="model-disclaimer">
        A map of my practice, not a database schema. Select Data Modeling to
        explore an illustrative star schema.
      </p>
      <noscript>
        <p>
          The interactive explorer needs JavaScript. Read the{" "}
          <a href="#work">case studies</a> and{" "}
          <a href="#about">career evidence</a> below for the complete story.
        </p>
      </noscript>
    </section>
  );
}
