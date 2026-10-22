"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Arrow } from "./ui/Arrow";
export function Hero({
  variant = "expressive",
}: {
  variant?: "expressive" | "split";
}) {
  const reduce = useReducedMotion();
  return (
    <section
      className={`brand-hero ${variant}`}
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="brand-hero-main">
        <motion.div
          className="brand-hero-copy"
          initial={false}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="hero-positioning">
            Engineering <span>/</span> Analytics <span>/</span> Business
          </p>
          <motion.h1
            id="hero-title"
            initial={reduce ? false : { y: 20, opacity: 0.85 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {variant === "expressive" ? (
              <>
                Beyond
                <br />
                the data<span className="orange-stop">.</span>
              </>
            ) : (
              <>
                Complexity,
                <br />
                <em>made clear.</em>
              </>
            )}
          </motion.h1>
          <p className="brand-value">
            I engineer scalable data pipelines, intelligent architectures, and
            analytics that turn complexity into decisions.
          </p>
          <div className="brand-actions">
            <Link className="button primary" href="/#work">
              Explore work <Arrow diagonal />
            </Link>
            <Link className="button secondary" href="/#expertise">
              Explore architecture <Arrow />
            </Link>
          </div>
        </motion.div>
        <motion.figure
          className="portrait-composition"
          initial={reduce ? false : { y: 18 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-field" />
          <Image
            src="/images/saipranay-portrait.png"
            alt="Saipranay Thandu, wearing glasses and a light blue shirt"
            width={1024}
            height={935}
            sizes="(max-width: 560px) 90vw, (max-width: 800px) 65vw, 44vw"
            preload
            className="authentic-portrait"
          />
          <figcaption>
            <span>Saipranay Thandu</span>
            <span>Clarity, by design.</span>
          </figcaption>
          <span className="portrait-side" aria-hidden="true">
            A HUMAN PERSPECTIVE ON INTELLIGENT SYSTEMS
          </span>
        </motion.figure>
      </div>
      <div className="brand-signature">
        <span>Saipranay Thandu</span>
        <Link href="#noise" aria-label="Discover the thinking behind the work">
          <Arrow />
        </Link>
      </div>
      <div className="brand-hero-foot">
        <span>Engineering the connection between data and decisions.</span>
        <span>Independent perspective. Real-world experience.</span>
      </div>
    </section>
  );
}
