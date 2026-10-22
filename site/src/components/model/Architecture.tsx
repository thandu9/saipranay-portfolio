"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { stages } from "@/data/architecture";
import { Schema } from "./Schema";
import { Arrow } from "../ui/Arrow";
export function Architecture() {
  const [selected, setSelected] = useState(0);
  const [schema, setSchema] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    const sync = () => {
      const id = new URLSearchParams(location.search).get("stage");
      const n = stages.findIndex((s) => s.id === id);
      setSelected(n < 0 ? 0 : n);
    };
    sync();
    addEventListener("popstate", sync);
    return () => removeEventListener("popstate", sync);
  }, []);
  function choose(i: number) {
    setSelected(i);
    const url = new URL(location.href);
    url.searchParams.set("stage", stages[i].id);
    url.hash = "expertise";
    history.pushState({}, "", url);
  }
  const stage = stages[selected];
  return (
    <section id="expertise" className="architecture-section">
      <span id="model" className="anchor-alias" />
      <div className="architecture-heading">
        <h2>
          How I engineer
          <br />
          <em>intelligence.</em>
        </h2>
        <p>
          From the first source to the final decision.
          <br />
          Explore the thinking behind each layer.
        </p>
      </div>
      <div className="architecture-map">
        <svg
          viewBox="0 0 1000 310"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="arch-flow">
              <stop stopColor="#f15a35" />
              <stop offset=".5" stopColor="#9b8cbe" />
              <stop offset="1" stopColor="#355a88" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M80 ${180 + i * 7}C140 ${180 + i * 7} 150 ${105 + i * 7} 220 ${105 + i * 7}S300 ${180 + i * 7} 360 ${180 + i * 7}S435 ${90 + i * 7} 500 ${90 + i * 7}S580 ${180 + i * 7} 640 ${180 + i * 7}S710 ${105 + i * 7} 780 ${105 + i * 7}S855 ${180 + i * 7} 920 ${180 + i * 7}`}
              stroke="url(#arch-flow)"
              strokeWidth={i === 0 ? 2 : 0.7}
              opacity={1 - i * 0.2}
              fill="none"
            />
          ))}
          <motion.circle
            key={selected}
            initial={false}
            animate={{ cx: stage.x * 10, cy: stage.y * 3.1 }}
            transition={{ duration: reduce ? 0 : 0.5 }}
            r="24"
            fill="#f15a35"
            opacity=".12"
          />
        </svg>
        <div className="architecture-stages">
          {stages.map((s, i) => (
            <button
              key={s.id}
              className={`architecture-stage ${selected === i ? "active" : ""}`}
              style={
                { "--x": `${s.x}%`, "--y": `${s.y}%` } as React.CSSProperties
              }
              onClick={() => choose(i)}
              aria-pressed={selected === i}
              aria-controls="stage-detail"
            >
              <span className="stage-orb">
                <span>{String(i + 1).padStart(2, "0")}</span>
              </span>
              <strong>{s.title}</strong>
              <small>{s.caption}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="stage-detail" id="stage-detail" aria-live="polite">
        <div>
          <span className="stage-count">
            {String(selected + 1).padStart(2, "0")} / 07
          </span>
          <h3>{stage.title}</h3>
          <p>{stage.decision}</p>
        </div>
        <div>
          <p>{stage.body}</p>
          <div className="tools">
            {stage.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <Link href={stage.href}>
            Explore related work <Arrow diagonal />
          </Link>
        </div>
      </div>
      <div className="architecture-actions">
        <div>
          <button onClick={() => choose(0)}>Reset</button>
          <button onClick={() => choose((selected + 1) % 7)}>
            Follow the flow <Arrow />
          </button>
        </div>
        <button onClick={() => setSchema(!schema)} aria-expanded={schema}>
          {schema ? "Close" : "Open"} dimensional model{" "}
          <span aria-hidden="true">{schema ? "−" : "+"}</span>
        </button>
      </div>
      {schema && <Schema />}
      <p className="architecture-disclaimer">
        Conceptual architecture across my practice. Technologies shown are not a
        claim that every platform was deployed together or at one employer.
      </p>
    </section>
  );
}
