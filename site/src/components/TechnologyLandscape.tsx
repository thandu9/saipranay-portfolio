"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { technologyGroups } from "@/data/architecture";
export function TechnologyLandscape() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const group = technologyGroups[active];
  return (
    <section className="technology-section">
      <div className="technology-heading">
        <h2>
          Tools with purpose.
          <br />
          <em>Knowledge in context.</em>
        </h2>
        <p>Explore the technical landscape.</p>
      </div>
      <div className="technology-layout">
        <div
          className="technology-tabs"
          role="tablist"
          aria-orientation="vertical"
          aria-label="Technology disciplines"
        >
          {technologyGroups.map((g, i) => (
            <button
              key={g.title}
              role="tab"
              aria-selected={active === i}
              aria-controls="technology-panel"
              id={`technology-${i}`}
              onClick={() => setActive(i)}
              tabIndex={active === i ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                  e.preventDefault();
                  const n = (active + (e.key === "ArrowDown" ? 1 : 4)) % 5;
                  setActive(n);
                  document.getElementById(`technology-${n}`)?.focus();
                }
              }}
            >
              <span>0{i + 1}</span>
              {g.title}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div
          className="technology-panel"
          id="technology-panel"
          role="tabpanel"
          aria-labelledby={`technology-${active}`}
        >
          <div className="technology-cloud" role="list">
            {group.items.map((t, i) => (
              <motion.span
                role="listitem"
                key={t}
                initial={reduce ? false : { opacity: 0.4, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: reduce ? 0 : i * 0.025 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
          <p>{group.note}</p>
        </div>
      </div>
    </section>
  );
}
