"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { stages } from "@/data/architecture";
import { Schema } from "./Schema";
import { Arrow } from "../ui/Arrow";
const positions = [
  [14, 64],
  [24, 36],
  [40, 19],
  [60, 19],
  [76, 36],
  [86, 64],
  [50, 85],
];
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
    <section id="expertise" className="intelligence-chapter">
      <span id="model" />
      <div className="intelligence-title">
        <h2>
          How I engineer
          <br />
          <em>intelligence.</em>
        </h2>
        <p>
          Seven layers. One continuous idea.
          <br />
          Select a stage to explore the decisions within.
        </p>
      </div>
      <div className="intelligence-theatre">
        <div className="strata-map">
          <svg viewBox="0 0 1000 650" aria-hidden="true">
            <defs>
              <linearGradient id="strata-line" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#f15a38" />
                <stop offset=".5" stopColor="#b3a3d2" />
                <stop offset="1" stopColor="#729bce" />
              </linearGradient>
              <radialGradient id="strata-light">
                <stop stopColor="#8e81ac" stopOpacity=".16" />
                <stop offset="1" stopColor="#8e81ac" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse
              cx="500"
              cy="330"
              rx="430"
              ry="300"
              fill="url(#strata-light)"
            />
            {Array.from({ length: 9 }, (_, i) => (
              <ellipse
                key={i}
                cx="500"
                cy={290 + i * 12}
                rx={300 - i * 13}
                ry={155 - i * 6}
                transform={`rotate(-15 500 ${290 + i * 12})`}
                fill="none"
                stroke="url(#strata-line)"
                strokeWidth={i === 0 ? 1.2 : 0.6}
                opacity={0.65 - i * 0.045}
              />
            ))}
            {positions.map(([x, y], i) => (
              <motion.path
                key={i}
                initial={false}
                animate={{
                  opacity: selected === i ? 0.95 : 0.15,
                  pathLength: 1,
                }}
                d={`M${x * 10} ${y * 6.5} C${x * 10} 330 500 ${y * 6.5} 500 320`}
                stroke={selected === i ? "#f57958" : "#b1a9ce"}
                strokeWidth={selected === i ? 1.5 : 0.7}
                fill="none"
                transition={{ duration: reduce ? 0 : 0.25 }}
              />
            ))}
            <motion.circle
              key={selected}
              cx="500"
              cy="320"
              r="90"
              fill="none"
              stroke="#e1d6ef"
              strokeWidth=".7"
              initial={reduce ? false : { opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "500px 320px" }}
            />
            <circle cx="500" cy="320" r="78" fill="#1b1d28" />
            <circle
              cx="500"
              cy="320"
              r="105"
              stroke="#9f93bb"
              strokeOpacity=".2"
              fill="none"
            />
          </svg>
          <div className="strata-center" aria-hidden="true">
            <span>{String(selected + 1).padStart(2, "0")}</span>
            <small>{stage.title}</small>
          </div>
          {stages.map((s, i) => (
            <button
              key={s.id}
              className={`strata-node ${selected === i ? "selected" : ""}`}
              style={{
                left: `${positions[i][0]}%`,
                top: `${positions[i][1]}%`,
              }}
              onClick={() => choose(i)}
              onKeyDown={(e) => {
                if (
                  ["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)
                ) {
                  e.preventDefault();
                  const n =
                    e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? 6
                        : (i + (e.key === "ArrowRight" ? 1 : 6)) % 7;
                  choose(n);
                  document.getElementById(`stage-${n}`)?.focus();
                }
              }}
              id={`stage-${i}`}
              aria-pressed={selected === i}
              aria-controls="stage-detail"
            >
              <span className="strata-dot">
                {String(i + 1).padStart(2, "0")}
              </span>
              <strong>{s.title}</strong>
            </button>
          ))}
        </div>
        <div
          className="intelligence-detail"
          id="stage-detail"
          aria-live="polite"
        >
          <span className="detail-sequence">
            {String(selected + 1).padStart(2, "0")} / 07
          </span>
          <h3>{stage.title}</h3>
          <p className="stage-principle">{stage.decision}</p>
          <p>{stage.body}</p>
          <ul>
            {stage.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <Link href={stage.href}>
            See it in the work <Arrow diagonal />
          </Link>
        </div>
      </div>
      <div className="intelligence-controls">
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
      {schema && (
        <div className="schema-reveal">
          <Schema />
        </div>
      )}
      <p className="scene-caption">
        A conceptual reference architecture. Explore implementation experience
        and broader platform knowledge below.
      </p>
    </section>
  );
}
