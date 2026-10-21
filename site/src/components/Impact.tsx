"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
export function Impact() {
  const reduce = useReducedMotion();
  return (
    <section className="impact section" aria-labelledby="impact-title">
      <div className="impact-heading">
        <h2 id="impact-title">
          Real work.
          <br />
          Grounded impact.
        </h2>
        <p>
          From my public professional profile.
          <br />
          Outcomes from the work, not this demonstration.
        </p>
      </div>
      <div className="impact-stat">
        <motion.strong
          initial={false}
          whileInView={reduce ? {} : { y: [8, 0], opacity: [0.7, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          180<span>+</span>
        </motion.strong>
        <div>
          <h3>
            Integrated geospatial
            <br />
            data layers.
          </h3>
          <p>
            Supporting the Pathways for Planning platform through spatial
            alignment, automated ETL and quality controls.
          </p>
        </div>
      </div>
      <div className="impact-secondary">
        <strong>
          50–60<span>%</span>
        </strong>
        <p>
          Reported reduction in processing time for the described geospatial
          work. Self-reported professional outcome.
        </p>
        <Link href="/work/geospatial-pipelines">
          Read the context <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
