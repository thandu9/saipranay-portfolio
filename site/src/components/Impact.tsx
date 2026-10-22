"use client";
import { motion, useReducedMotion } from "motion/react";
export function Impact() {
  const reduce = useReducedMotion();
  return (
    <section className="scale-chapter">
      <h2>
        Engineering scale.
        <br />
        <em>Business significance.</em>
      </h2>
      <div className="scale-ledger">
        {[
          [
            "180+",
            "Data pipelines",
            "Spatial ETL, automated QA/QC and reliable enterprise delivery.",
          ],
          [
            "4,000+",
            "Projects supported",
            "Funding, financial variance and delivery intelligence.",
          ],
          [
            "9",
            "Districts",
            "Shared definitions across a statewide portfolio.",
          ],
          [
            "60%",
            "Less recurring processing time",
            "SQL/Python automation that makes repeatability practical.",
          ],
        ].map(([n, t, p], i) => (
          <motion.div
            key={n}
            initial={false}
            whileInView={
              reduce
                ? {}
                : {
                    opacity: [0.65, 1],
                    transform: ["translateY(14px)", "translateY(0px)"],
                  }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <strong>{n}</strong>
            <div>
              <h3>{t}</h3>
              <p>{p}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="program-context">
        <span>$28.5B</span>
        <p>
          VDOT FY2027–2032 transportation program.
          <br />
          Organizational context for financial and performance analysis, not
          personal budget ownership.
        </p>
      </div>
      <p className="scene-caption">User-provided professional achievements.</p>
    </section>
  );
}
