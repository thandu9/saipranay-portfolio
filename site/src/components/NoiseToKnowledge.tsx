"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Arrow } from "./ui/Arrow";
const process = ["Extract", "Validate", "Model", "Decide"];
const particles = Array.from({ length: 72 }, (_, i) => ({
  x: 40 + ((i * 137) % 920),
  y: 30 + ((i * 79) % 440),
  group: i % 4,
  angle: i * 2.39996,
  radius: 22 + ((i * 17) % 45),
}));
export function NoiseToKnowledge() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(3);
  const [run, setRun] = useState(0);
  const started = useRef(false);
  const skipped = useRef(false);
  useEffect(() => {
    if (!inView || reduce || started.current) return;
    started.current = true;
    const t = setTimeout(() => setRun((n) => n + 1), 0);
    return () => clearTimeout(t);
  }, [inView, reduce]);
  useEffect(() => {
    if (!run || reduce) return;
    const timers = [
      [0, 0],
      [650, 1],
      [1550, 2],
      [3200, 3],
    ].map(([delay, p]) =>
      setTimeout(() => {
        if (!skipped.current) setPhase(p);
      }, delay),
    );
    return () => timers.forEach(clearTimeout);
  }, [run, reduce]);
  const stage = reduce ? 3 : phase;
  const aligned = stage >= 2;
  return (
    <section
      className="signal-chapter"
      id="noise"
      ref={ref}
      data-phase={["noise", "motion", "structure", "clarity"][stage]}
      aria-labelledby="noise-title"
    >
      <div className="signal-title">
        <h2 id="noise-title">
          From noise
          <br />
          <em>to knowledge.</em>
        </h2>
        <p>
          Information arrives fragmented.
          <br />I give it a way forward.
        </p>
      </div>
      <div className="signal-scene" aria-hidden="true">
        <svg viewBox="0 0 1000 500">
          <defs>
            <linearGradient id="signal-spectrum">
              <stop stopColor="#F15A38" />
              <stop offset=".5" stopColor="#b7aedf" />
              <stop offset="1" stopColor="#8baee4" />
            </linearGradient>
            <radialGradient id="signal-core">
              <stop stopColor="#f4f1eb" stopOpacity=".2" />
              <stop offset="1" stopColor="#f4f1eb" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 16 }, (_, i) => (
            <motion.path
              key={i}
              initial={false}
              animate={{
                d: aligned
                  ? `M0 ${235 + i * 2} C160 ${120 + i * 12} 260 ${380 - i * 10} 380 250 S620 ${100 + i * 14} 860 250 S960 ${210 + i * 5} 1000 ${235 + i * 2}`
                  : `M${i * 60} 0 C${900 - i * 40} ${i * 20} ${100 + i * 50} ${500 - i * 17} ${1000 - i * 55} 500`,
                opacity: aligned ? 0.35 : 0.18,
              }}
              transition={{
                duration: reduce ? 0 : 1.3,
                ease: [0.76, 0, 0.24, 1],
              }}
              stroke="url(#signal-spectrum)"
              fill="none"
              strokeWidth="1"
            />
          ))}
          {process.map((label, i) => (
            <motion.g
              key={label}
              initial={false}
              animate={{ opacity: aligned ? 1 : 0, scale: aligned ? 1 : 0.8 }}
              transition={{ duration: reduce ? 0 : 0.7 }}
              style={{ transformOrigin: `${140 + i * 240}px 250px` }}
            >
              <circle
                cx={140 + i * 240}
                cy="250"
                r="105"
                fill="url(#signal-core)"
              />
              <circle
                cx={140 + i * 240}
                cy="250"
                r="78"
                stroke={i === 0 ? "#f15a38" : "#b1a9cf"}
                strokeWidth=".7"
                fill="none"
              />
              <circle
                cx={140 + i * 240}
                cy="250"
                r="66"
                stroke="#a5a4bb"
                strokeOpacity=".25"
                fill="none"
              />
              <text
                x={140 + i * 240}
                y="375"
                textAnchor="middle"
                fill="#e6e3ef"
                fontSize="17"
                fontFamily="sans-serif"
              >
                {label}
              </text>
            </motion.g>
          ))}
          {particles.map((p, i) => {
            const x = 140 + p.group * 240 + Math.cos(p.angle) * p.radius;
            const y = 250 + Math.sin(p.angle) * p.radius;
            return (
              <motion.circle
                key={i}
                r={i % 9 === 0 ? 5 : 2}
                fill={i % 4 === 0 ? "#f57958" : "#c5bee3"}
                initial={false}
                animate={{
                  cx: aligned ? x : stage === 1 ? 1000 - p.x : p.x,
                  cy: aligned ? y : stage === 1 ? 500 - p.y : p.y,
                  opacity: aligned ? 0.85 : 0.45,
                }}
                transition={{
                  duration: reduce ? 0 : stage === 1 ? 0.8 : 1.15,
                  delay: reduce ? 0 : i * 0.006,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            );
          })}
          {[0, 1, 2, 3].map((i) => (
            <motion.circle
              key={`${run}-${i}`}
              r="5"
              fill="#f15a38"
              initial={false}
              animate={
                stage === 1
                  ? {
                      cx: [140, 380, 620, 860],
                      cy: [250, 160, 340, 250],
                      opacity: [0, 1, 1, 0],
                    }
                  : { cx: 140 + i * 240, cy: 250, opacity: aligned ? 1 : 0 }
              }
              transition={{
                duration: reduce ? 0 : 1.2,
                delay: reduce ? 0 : i * 0.09,
              }}
            />
          ))}
        </svg>
        <div className="scene-coordinates">
          <span>INPUT / UNSTRUCTURED</span>
          <span>OUTPUT / DECISION READY</span>
        </div>
      </div>
      <div className="signal-ending">
        <h3>
          Complexity is inevitable.
          <br />
          <span>Clarity is engineered.</span>
        </h3>
        <div className="signal-controls">
          <p role="status">
            {
              [
                "Finding the signal.",
                "Connecting the evidence.",
                "Testing the structure.",
                "A system you can trust.",
              ][stage]
            }
          </p>
          <div>
            <button
              aria-label="Replay data transformation"
              onClick={() => {
                skipped.current = false;
                setPhase(reduce ? 3 : 0);
                setRun((n) => n + 1);
              }}
            >
              Replay <span aria-hidden="true">↻</span>
            </button>
            {stage < 3 && (
              <button
                onClick={() => {
                  skipped.current = true;
                  setPhase(3);
                }}
              >
                Skip animation
              </button>
            )}
            <Link href="#expertise">
              Step inside <Arrow diagonal />
            </Link>
          </div>
        </div>
      </div>
      <p className="scene-caption">
        Conceptual transformation. Synthetic signals, real engineering
        principles.
      </p>
    </section>
  );
}
