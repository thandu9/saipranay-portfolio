"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
/** A decorative, fail-open introduction. No focus capture or body scroll lock. */
export function SignalOpening() {
  const [open, setOpen] = useState(true);
  const [target, setTarget] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("signal-seen") === "1";
      sessionStorage.setItem("signal-seen", "1");
    } catch {}
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const dot = document
      .getElementById("signature-dot")
      ?.getBoundingClientRect();
    const setup = setTimeout(() => {
      if (seen || reduced.matches || location.hash || scrollY > 0)
        setOpen(false);
      else if (dot)
        setTarget({
          x: dot.left + dot.width / 2 - innerWidth / 2,
          y: dot.top + dot.height / 2 - innerHeight / 2,
        });
    }, 0);
    const done = setTimeout(() => setOpen(false), 1750);
    const skip = () => setOpen(false);
    for (const event of ["pointerdown", "keydown", "wheel", "touchstart"])
      addEventListener(event, skip, { once: true, passive: true });
    reduced.addEventListener("change", skip);
    return () => {
      clearTimeout(setup);
      clearTimeout(done);
      for (const event of ["pointerdown", "keydown", "wheel", "touchstart"])
        removeEventListener(event, skip);
      reduced.removeEventListener("change", skip);
    };
  }, []);
  if (!open) return null;
  return (
    <div className="signal-opening" data-testid="signal-opening">
      <span className="opening-name">Saipranay Thandu</span>
      <svg viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
        {Array.from({ length: 7 }, (_, i) => (
          <motion.path
            key={i}
            d={`M${80 + i * 120} 0 Q${200 + i * 90} ${300 + i * 25} 500 300 T${120 + i * 120} 600`}
            stroke={i % 2 ? "#b6b1d2" : "#f15a38"}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.7, 0] }}
            transition={{ duration: 1.1, delay: i * 0.025, times: [0, 0.6, 1] }}
          />
        ))}
      </svg>
      <motion.span
        className="opening-signal"
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{
          x: [0, 0, target.x],
          y: [0, 0, target.y],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: 1.55,
          times: [0, 0.45, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
      />
      <span className="opening-caption">Finding the signal.</span>
      <button className="opening-skip" onClick={() => setOpen(false)}>
        Skip introduction
      </button>
    </div>
  );
}
