"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Arrow } from "../ui/Arrow";
const stories = [
  {
    slug: "geospatial-pipelines",
    title: (
      <>
        Data that moves.
        <br />A foundation that holds.
      </>
    ),
    name: "Enterprise Geospatial Pipeline Engineering",
    proof: "180+",
    unit: "data pipelines",
    copy: "Heterogeneous spatial sources. Different coordinate systems. One reliable route to enterprise publishing.",
    tools: "Python / Oracle SQL / ArcPy / Spatial ETL",
    steps: ["Extract", "Validate", "Publish"],
    details: [
      "Extract source records with traceable identifiers and repeatable Python/SQL routines.",
      "Align spatial references, check geometry and isolate exceptions before they travel downstream.",
      "Publish accepted records to enterprise GIS with a visible quality and delivery trail.",
    ],
    link: "Trace the pipeline",
  },
  {
    slug: "delivery-intelligence",
    title: (
      <>
        A portfolio of projects.
        <br />A clearer view of risk.
      </>
    ),
    name: "Project Delivery & Financial Intelligence",
    proof: "4,000+",
    unit: "projects supported · 9 districts",
    copy: "Schedules and funding tell different parts of the story. Shared definitions bring delivery, variance and risk into focus.",
    tools: "SQL / Power BI / DAX / Semantic Modeling",
    steps: ["Connect", "Measure", "Investigate"],
    details: [
      "Connect schedule, funding and milestone context at a defined project grain.",
      "Use shared semantic definitions for duration, financial variance and project scope.",
      "Investigate signals with district and program filters. A metric starts the conversation.",
    ],
    link: "Investigate delivery",
  },
  {
    slug: "qualification-analytics",
    title: (
      <>
        Find the match.
        <br />
        Keep the exceptions visible.
      </>
    ),
    name: "Workforce Qualification Intelligence",
    proof: "One",
    unit: "reconciled view of coverage",
    copy: "Recurring qualification records become dependable workforce intelligence through careful matching and explicit review.",
    tools: "Python / pandas / Data Quality / Power BI",
    steps: ["Normalize", "Reconcile", "Review"],
    details: [
      "Normalize recurring certification records while preserving the original source.",
      "Match stable identities and inspect duplicate or inconsistent affiliations.",
      "Keep uncertain records in an explicit exception queue for human review.",
    ],
    link: "Inspect reconciliation",
  },
];
function StoryScene({ kind, step }: { kind: number; step: number }) {
  const reduce = useReducedMotion();
  const reveal = {
    initial: reduce ? false : { pathLength: 0.15, opacity: 0.4 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true },
    transition: {
      duration: reduce ? 0 : 1.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  };
  return (
    <svg viewBox="0 0 1200 560" className="story-scene" aria-hidden="true">
      <defs>
        <linearGradient id={`story-spectrum-${kind}`}>
          <stop stopColor="#f15a38" />
          <stop offset="1" stopColor="#a9b8dd" />
        </linearGradient>
      </defs>
      {kind === 0 ? (
        <>
          <g transform="translate(260 20)" stroke="#8b8da4" fill="none">
            {Array.from({ length: 15 }, (_, i) => (
              <motion.path
                key={i}
                {...reveal}
                d={`M${i * 20} ${200 + i * 8}C${60 + i * 15} ${30 + i * 5} ${400 - i * 6} ${90 + i * 9} ${440 - i * 8} ${180 + i * 9}S${510 - i * 5} ${300 + i * 5} ${650 - i * 3} ${330 + i * 7}`}
                strokeOpacity={0.25 + i * 0.035}
              />
            ))}
          </g>
          <g transform="translate(360 260)" fill="#242737" stroke="#b4adc8">
            {[90, 60, 30, 0].map((y, i) => (
              <motion.path
                key={y}
                initial={false}
                animate={{
                  y: step === 0 ? i * 8 : 0,
                  opacity: step >= 1 ? 1 : 0.55,
                }}
                transition={{ duration: reduce ? 0 : 0.4 }}
                d={`M0 ${y} 200 ${y - 100} 400 ${y} 200 ${y + 100}Z`}
              />
            ))}
            <path
              d="m70 0 130-65 130 65-130 65Z"
              fill="#f15a38"
              fillOpacity=".1"
              stroke="#f15a38"
            />
            <circle cx="200" cy="0" r="6" fill="#f15a38" />
          </g>
          <motion.path
            {...reveal}
            key={step}
            d="M100 350C180 350 220 180 320 180S460 260 560 260 750 130 840 130 920 190 1080 190"
            stroke="#f57958"
            strokeWidth="2"
            fill="none"
          />
          <g fill="#f4f1eb" fontFamily="monospace" fontSize="13">
            <text x="95" y="385">
              SOURCE
            </text>
            <text x="815" y="105">
              QA / QC
            </text>
            <text x="1000" y="230">
              PUBLISH
            </text>
          </g>
          <circle
            cx="840"
            cy="130"
            r="24"
            fill="#20222d"
            stroke={step > 0 ? "#f57958" : "#a9a4b8"}
          />
          <path d="m830 130 7 7 14-15" stroke="#f4f1eb" fill="none" />
          <circle
            cx="1080"
            cy="190"
            r="10"
            fill={step === 2 ? "#f15a38" : "#777a8c"}
          />
        </>
      ) : kind === 1 ? (
        <>
          <g stroke="#555869" strokeWidth=".6">
            {[110, 190, 270, 350, 430].map((y) => (
              <path key={y} d={`M80 ${y}H1120`} />
            ))}
          </g>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <g key={i}>
              <text
                x="65"
                y={95 + i * 42}
                fontSize="11"
                fill="#b7b8c5"
                fontFamily="monospace"
              >
                D{i + 1}
              </text>
              <motion.path
                {...reveal}
                d={`M${130 + i * 24} ${90 + i * 42} H${470 + i * 65}`}
                stroke={i === 5 && step === 2 ? "#f15a38" : "#9192b1"}
                strokeWidth={i === 5 ? 4 : 2}
              />
              {[0, 1, 2].map((j) => (
                <circle
                  key={j}
                  cx={130 + i * 24 + j * (170 + i * 20)}
                  cy={90 + i * 42}
                  r={j === 2 ? 5 : 3}
                  fill={j === 2 ? "#f57958" : "#ded9ed"}
                />
              ))}
            </g>
          ))}
          <motion.path
            {...reveal}
            key={step}
            d="M130 430C290 400 290 330 440 310S650 350 740 220 900 190 1070 90"
            stroke="#f57958"
            strokeWidth="2"
            fill="none"
          />
          <g fill="#f4f1eb" fontFamily="monospace" fontSize="12">
            <text x="1120" y="455" textAnchor="end">
              SCHEDULE × FUNDING
            </text>
            <text x="1120" y="505" textAnchor="end">
              CONTEXT → DECISION
            </text>
          </g>
        </>
      ) : (
        <>
          <g fill="none" stroke="#82869d">
            {Array.from({ length: 8 }, (_, i) => (
              <motion.path
                key={i}
                {...reveal}
                d={`M${100 + (i % 2) * 100} ${80 + i * 52}C400 ${80 + i * 52} 430 ${250 + (i % 3) * 35} 600 280S840 ${150 + (i % 3) * 130} 1030 ${150 + (i % 3) * 130}`}
                stroke={i === 6 && step === 2 ? "#f57958" : "#8d92af"}
                strokeWidth={i === 6 ? 2 : 1}
              />
            ))}
          </g>
          {Array.from({ length: 8 }, (_, i) => (
            <g key={i}>
              <circle
                cx={100 + (i % 2) * 100}
                cy={80 + i * 52}
                r="16"
                fill="#242737"
                stroke="#a6a2bc"
              />
              <text
                x={100 + (i % 2) * 100}
                y={85 + i * 52}
                textAnchor="middle"
                fill="#f4f1eb"
                fontSize="11"
              >
                {i + 1}
              </text>
            </g>
          ))}
          <motion.g
            initial={false}
            animate={{ rotate: step * 30 }}
            transition={{ duration: reduce ? 0 : 0.5 }}
            style={{ transformOrigin: "600px 280px" }}
          >
            <circle
              cx="600"
              cy="280"
              r="115"
              stroke="#9991b5"
              strokeWidth=".8"
              fill="#1e202a"
            />
            <ellipse
              cx="600"
              cy="280"
              rx="90"
              ry="115"
              stroke="#77728e"
              fill="none"
            />
            <ellipse
              cx="600"
              cy="280"
              rx="48"
              ry="115"
              stroke="#77728e"
              fill="none"
            />
          </motion.g>
          <text
            x="600"
            y="285"
            textAnchor="middle"
            fill="#f4f1eb"
            fontSize="17"
          >
            {["NORMALIZE", "MATCH", "REVIEW"][step]}
          </text>
          {["ACCEPTED", "COVERAGE", "EXCEPTIONS"].map((t, i) => (
            <g key={t}>
              <circle
                cx="1030"
                cy={150 + i * 130}
                r={i === 2 ? 22 : 32}
                stroke={i === 2 ? "#f57958" : "#b8b1cf"}
                fill={i === 2 ? "#362723" : "#292c3d"}
              />
              <text
                x="1030"
                y={208 + i * 130}
                textAnchor="middle"
                fill="#e2deed"
                fontSize="12"
              >
                {t}
              </text>
            </g>
          ))}
        </>
      )}
    </svg>
  );
}
function Story({ i }: { i: number }) {
  const [step, setStep] = useState(0);
  const s = stories[i];
  return (
    <article className={`engineering-story story-${i}`} id={`story-${i + 1}`}>
      <div className="story-head">
        <span className="story-number">0{i + 1}</span>
        <p>{s.name}</p>
      </div>
      <h3>{s.title}</h3>
      <StoryScene kind={i} step={step} />
      <div className="story-evidence">
        <p>{s.copy}</p>
        <div>
          <strong>{s.proof}</strong>
          <span>{s.unit}</span>
        </div>
      </div>
      <div className="story-bottom">
        <div className="story-process">
          <div role="group" aria-label={`${s.name} stages`}>
            {s.steps.map((label, n) => (
              <button
                key={label}
                aria-pressed={step === n}
                onClick={() => setStep(n)}
              >
                <span>0{n + 1}</span>
                {label}
              </button>
            ))}
          </div>
          <p aria-live="polite">{s.details[step]}</p>
        </div>
        <div className="story-link">
          <small>{s.tools}</small>
          <Link href={`/work/${s.slug}`}>
            {s.link}
            <Arrow diagonal />
          </Link>
        </div>
      </div>
    </article>
  );
}
export function WorkStories() {
  return (
    <section className="work-narratives" id="work" aria-labelledby="work-title">
      <div className="work-intro">
        <h2 id="work-title">
          The work behind
          <br />
          <em>the intelligence.</em>
        </h2>
        <p>
          Three engineering stories.
          <br />
          From difficult inputs to useful answers.
        </p>
      </div>
      {stories.map((s, i) => (
        <Story i={i} key={s.slug} />
      ))}
      <p className="scene-caption">
        Custom illustrations use synthetic signals. Professional scale and
        outcomes are supplied by Saipranay.
      </p>
    </section>
  );
}
