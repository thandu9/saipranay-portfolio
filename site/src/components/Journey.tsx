"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { career } from "@/data/profile";
const chapters = [
  {
    title: "A statewide perspective.",
    body: "At VDOT, I connect project development, funding and delivery performance. The work brings financial variance, semantic models and stakeholder questions into a shared analytical context.",
    proof: "4,000+ projects. 9 districts. 60% less recurring processing time.",
    tools: "Power BI · SQL · Python · Financial analysis",
  },
  {
    title: "Translate the business.",
    body: "At ASTA CRS, the work began with requirements and ended with dependable CRM reporting. Resolving Salesforce issues and validating the underlying data made reporting automation useful to the people relying on it.",
    proof: "40% less manual reporting effort.",
    tools: "Salesforce · Requirements · Data validation",
  },
  {
    title: "Explore the architecture.",
    body: "Research at Sacred Heart University gave me room to connect data visualization with cloud analytics—exploring Microsoft Fabric architecture and Power BI while developing a deeper analytical perspective.",
    proof: "Research Assistant, Data Visualization & Cloud Analytics",
    tools: "Microsoft Fabric · Power BI · Cloud analytics",
  },
  {
    title: "Build the foundations.",
    body: "At Techmart, I learned how much business confidence depends on the details: reconciliation, accurate reports and reliable validation. SQL, Python and operational analysis became tools for solving those everyday problems.",
    proof: "35% improved reporting accuracy. 30% less validation effort.",
    tools: "SQL · Python · Tableau · Excel",
  },
];
export function Journey() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const c = chapters[active];
  return (
    <section className="journey-chapter" id="experience">
      <h2>
        A wider lens.
        <br />
        <em>A deeper practice.</em>
      </h2>
      <div
        className="journey-track"
        role="tablist"
        aria-label="Professional journey"
      >
        {career.map(([year, , company], i) => (
          <button
            key={company}
            id={`career-${i}`}
            role="tab"
            aria-selected={active === i}
            aria-controls="career-story"
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const n =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 3
                      : (i + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                setActive(n);
                document.getElementById(`career-${n}`)?.focus();
              }
            }}
          >
            <span className="career-point" />
            <span>{year}</span>
            <strong>{company}</strong>
          </button>
        ))}
      </div>
      <div
        className="career-story"
        id="career-story"
        role="tabpanel"
        aria-labelledby={`career-${active}`}
      >
        <div className="career-role">
          <span>7+ years of experience</span>
          <h3>{career[active][2]}</h3>
          <p>{career[active][1]}</p>
          <small>{career[active][3]}</small>
        </div>
        <motion.div
          key={active}
          initial={
            reduce ? false : { opacity: 0.7, transform: "translateY(8px)" }
          }
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.25 }}
        >
          <h4>{c.title}</h4>
          <p>{c.body}</p>
          <strong>{c.proof}</strong>
          <small>{c.tools}</small>
        </motion.div>
      </div>
      <div className="journey-education">
        <p>
          Education adds perspective.
          <br />
          Practice makes it useful.
        </p>
        <div>
          <strong>MS Business Analytics</strong>
          <span>Sacred Heart University · March 2024</span>
        </div>
        <div>
          <strong>BBA</strong>
          <span>Osmania University · August 2017</span>
        </div>
      </div>
    </section>
  );
}
