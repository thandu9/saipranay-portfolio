"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Arrow } from "./ui/Arrow";
const fragments = [
  { label: "src.roads", x: 8, y: 18, group: 0 },
  { label: "2026-01-01", x: 38, y: 8, group: 0 },
  { label: "layer_042", x: 75, y: 14, group: 0 },
  { label: "key: P-001", x: 22, y: 67, group: 1 },
  { label: "geometry ✓", x: 58, y: 83, group: 1 },
  { label: "quality: pass", x: 85, y: 52, group: 1 },
  { label: "Dim_Project", x: 9, y: 42, group: 2 },
  { label: "ProjectKey →", x: 48, y: 40, group: 2 },
  { label: "Fact_Delivery", x: 72, y: 72, group: 2 },
  { label: "duration: 5y", x: 30, y: 88, group: 3 },
  { label: "expected: 4y", x: 57, y: 16, group: 3 },
  { label: "review risk", x: 89, y: 88, group: 3 },
];

export function NoiseToKnowledge() {
  const ref = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(3);
  const [run, setRun] = useState(0);
  const [size, setSize] = useState({ width: 1000, height: 300 });
  const started = useRef(false);
  const skipped = useRef(false);
  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) =>
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      }),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!inView || reduce || started.current) return;
    started.current = true;
    const id = setTimeout(() => setRun((n) => n + 1), 0);
    return () => clearTimeout(id);
  }, [inView, reduce]);
  useEffect(() => {
    if (run === 0 || reduce) return;
    const timers = [
      [0, 0],
      [700, 1],
      [1800, 2],
      [3000, 3],
    ].map(([delay, next]) =>
      setTimeout(() => {
        if (!skipped.current) setPhase(next);
      }, delay),
    );
    return () => timers.forEach(clearTimeout);
  }, [run, reduce]);
  const stage = reduce ? 3 : phase;
  const aligned = stage >= 2;
  const compact = size.width < 560;
  return (
    <section
      className="noise-section"
      id="noise"
      ref={ref}
      data-phase={
        stage === 3
          ? "clarity"
          : stage === 2
            ? "structure"
            : stage === 1
              ? "motion"
              : "noise"
      }
      aria-labelledby="noise-title"
    >
      <div className="noise-heading">
        <h2 id="noise-title">
          From noise
          <br />
          to knowledge.
        </h2>
        <p>
          Making the connections <br />
          that change what comes next.
        </p>
      </div>
      <div className="noise-canvas" ref={canvas} aria-hidden="true">
        <svg
          className="neural-flow"
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="neural">
              <stop stopColor="#fb7349" />
              <stop offset=".5" stopColor="#c7b3ff" />
              <stop offset="1" stopColor="#82aeef" />
            </linearGradient>
          </defs>
          {Array.from({ length: 24 }, (_, i) => (
            <motion.path
              key={i}
              initial={false}
              animate={{
                d: aligned
                  ? `M0 ${150 + i * 2} C180 ${i * 12} 250 ${300 - i * 7} 400 150 S650 ${i * 12} 1000 ${150 + i * 2}`
                  : `M0 ${i * 13} C200 ${300 - i * 9} 550 ${i * 12} 1000 ${300 - i * 12}`,
                opacity: aligned ? 0.45 : 0.18,
              }}
              transition={{ duration: reduce ? 0 : 1.2 }}
              stroke="url(#neural)"
              strokeWidth=".8"
              fill="none"
            />
          ))}
          {Array.from({ length: 64 }, (_, i) => (
            <motion.circle
              key={i}
              r={i % 7 === 0 ? 3 : 1.5}
              fill={i % 3 === 0 ? "#ff895d" : "#d4c4ff"}
              initial={false}
              animate={{
                cx: aligned ? 150 + (i % 4) * 235 : ((i * 137) % 960) + 20,
                cy: aligned
                  ? 100 + Math.floor(i / 4) * 7
                  : ((i * 67) % 270) + 15,
                opacity: aligned ? 0.8 : 0.4,
              }}
              transition={{
                duration: reduce ? 0 : 1,
                delay: reduce ? 0 : i * 0.008,
              }}
            />
          ))}
        </svg>
        {fragments.map((f, i) => {
          const finalX = compact ? (f.group % 2) * 50 + 5 : f.group * 25 + 5;
          const finalY = compact
            ? Math.floor(f.group / 2) * 50 + 13 + (i % 3) * 9
            : 24 + (i % 3) * 20;
          return (
            <motion.span
              className={`data-fragment group-${f.group}`}
              key={f.label}
              style={{ left: 0, top: 0 }}
              initial={false}
              animate={{
                x:
                  ((aligned
                    ? finalX
                    : stage === 1
                      ? (f.x + f.group * 8) % 75
                      : f.x * 0.8) *
                    size.width) /
                  100,
                y: ((aligned ? finalY : f.y * 0.85) * size.height) / 100,
                rotate: aligned ? 0 : i % 2 ? 7 : -5,
                opacity: 1,
              }}
              transition={{
                duration: reduce ? 0 : 0.85,
                delay: reduce ? 0 : i * 0.025,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {f.label}
            </motion.span>
          );
        })}
      </div>
      <div className="noise-architecture-labels" aria-hidden="true">
        <span>Source</span>
        <span>Validate</span>
        <span>Model</span>
        <span>Decide</span>
      </div>
      <div className="noise-conclusion">
        <h3>
          Complexity is inevitable.
          <br />
          <span>Clarity is engineered.</span>
        </h3>
        <div className="noise-actions">
          <p className="noise-state" role="status">
            {stage === 3
              ? "Connected. Considered. Clear."
              : stage === 2
                ? "Structure emerges."
                : stage === 1
                  ? "Finding the relationships."
                  : "Disconnected inputs."}
          </p>
          <div>
            <button
              className="noise-replay"
              onClick={() => {
                skipped.current = false;
                setPhase(reduce ? 3 : 0);
                setRun((n) => n + 1);
              }}
              aria-label="Replay data transformation"
            >
              Replay{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 10a8 8 0 1 1 1 8M4 4v6h6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            {stage < 3 && (
              <button
                className="noise-replay"
                onClick={() => {
                  skipped.current = true;
                  setPhase(3);
                }}
              >
                Skip animation
              </button>
            )}
            <Link href="/#model">
              Explore the architecture <Arrow />
            </Link>
          </div>
        </div>
      </div>
      <p className="noise-note">
        A conceptual transformation using deterministic, synthetic fragments.
      </p>
    </section>
  );
}
