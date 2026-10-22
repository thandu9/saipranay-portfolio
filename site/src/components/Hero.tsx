"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SocialLinks } from "./ui/SocialLinks";
import { Arrow } from "./ui/Arrow";
import { SignalOpening } from "./SignalOpening";
export function Hero({
  variant = "expressive",
}: {
  variant?: "expressive" | "split";
}) {
  const reduce = useReducedMotion();
  return (
    <>
      <SignalOpening />
      <section
        className="campaign-hero"
        id="home"
        aria-labelledby="hero-title"
        data-variant={variant}
      >
        <div className="hero-introduction">
          <p>
            Engineering <span>×</span> Analytics <span>×</span> Business
          </p>
          <SocialLinks />
        </div>
        <div className="hero-stage">
          <motion.div
            className="hero-photo"
            initial={false}
            animate={{ opacity: 1 }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/saipranay-portrait.png`}
              alt="Saipranay Thandu, wearing glasses and a light blue shirt"
              width={1024}
              height={935}
              sizes="(max-width:700px) 100vw, 65vw"
              preload
            />
            <div className="photo-blend" />
          </motion.div>
          <div className="hero-orbit" aria-hidden="true">
            <svg viewBox="0 0 1000 700">
              <ellipse
                cx="570"
                cy="370"
                rx="400"
                ry="230"
                transform="rotate(-25 570 370)"
              />
              <ellipse
                cx="570"
                cy="370"
                rx="430"
                ry="245"
                transform="rotate(-25 570 370)"
              />
              <circle cx="918" cy="164" r="4" />
            </svg>
          </div>
          <motion.h1
            id="hero-title"
            initial={
              reduce ? false : { opacity: 0.85, transform: "translateY(20px)" }
            }
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Beyond</span>
            <span>
              the data
              <span id="signature-dot" className="signature-dot">
                .
              </span>
            </span>
          </motion.h1>
          <div className="hero-profession">
            <span>
              Business Analyst &amp;
              <br />
              Analytics Engineer
            </span>
            <span>
              7+ years of connecting
              <br />
              engineering to decisions.
            </span>
          </div>
        </div>
        <div className="hero-bottom">
          <p>
            I engineer scalable data pipelines, intelligent architectures, and
            analytics that turn complex information into decisions.
          </p>
          <Link className="round-link" href="#work">
            <span>Discover the work</span>
            <span className="round-arrow">
              <Arrow diagonal />
            </span>
          </Link>
          <Link
            className="hero-next"
            href="#noise"
            aria-label="From complexity to clarity: discover how I think"
          >
            <span>
              From complexity
              <br />
              to clarity
            </span>
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
