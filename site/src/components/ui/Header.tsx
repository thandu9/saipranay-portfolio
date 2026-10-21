"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export function Header() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="header">
      <Link href="/" className="identity">
        <span className="monogram" aria-hidden="true">
          st<span>.</span>
        </span>
        <span>
          Saipranay Thandu
          <span className="identity-sub">
            Engineering / Analytics / Business
          </span>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        {["model", "work", "about", "credentials", "contact"].map((id) => (
          <Link
            key={id}
            href={`/#${id}`}
            aria-current={active === id ? "location" : undefined}
          >
            {id[0].toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
