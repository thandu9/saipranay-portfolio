import { Arrow } from "./ui/Arrow";
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="intro-line">Independent thinking. Connected systems.</p>
        <h1 id="hero-title">
          I engineer clarity
          <br />
          out of <em>complexity.</em>
        </h1>
        <p className="hero-description">
          From fragmented systems to trusted data,
          <br className="desktop-break" /> meaningful insights, and better
          decisions.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#model">
            Explore my architecture <Arrow />
          </a>
          <a className="text-link" href="#work">
            View selected work <Arrow diagonal />
          </a>
        </div>
      </div>
      <div
        className="hero-art"
        aria-label="Conceptual illustration: fragmented sources converge into a coherent model"
      >
        <svg viewBox="0 0 520 450" fill="none" role="img">
          <title>From complexity to clarity</title>
          <defs>
            <pattern
              id="dots"
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r=".7" fill="#87938e" opacity=".35" />
            </pattern>
          </defs>
          <rect width="520" height="450" fill="url(#dots)" />
          <g className="source-lines" stroke="#9eaaa3" strokeWidth="1">
            {[55, 90, 125, 160, 195, 230, 265, 300, 335, 370].map((y, i) => (
              <path
                key={y}
                d={`M${20 + (i % 3) * 14} ${y} H${100 + (i % 4) * 22} C${180 + i * 3} ${y}, 200 220, 260 220`}
              />
            ))}
          </g>
          <path d="M260 220H340" stroke="#A64E30" strokeWidth="2" />
          <g stroke="#A64E30" strokeWidth="1.2">
            <path d="m340 168 58-32 58 32v66l-58 33-58-33z" />
            <path d="m340 168 58 34 58-34m-58 34v65m-58-66 58 33 58-33m-87-49 58 33m-58 1v65m29-82v65" />
            <path d="M398 267v55h93" />
          </g>
          <circle cx="260" cy="220" r="4" fill="#A64E30" />
          <circle cx="491" cy="322" r="4" fill="#A64E30" />
          <g
            fill="#55615c"
            fontSize="11"
            fontFamily="sans-serif"
            letterSpacing="1.5"
          >
            <text x="23" y="414">
              MANY SOURCES
            </text>
            <text x="332" y="110">
              SHARED MEANING
            </text>
            <text x="344" y="350">
              BETTER DECISIONS
            </text>
          </g>
        </svg>
        <span className="art-caption">
          A model is how the pieces make sense.
        </span>
      </div>
      <div className="hero-foot">
        <span>THE LIVING MODEL</span>
        <span>
          A portfolio of systems, decisions & the connections between them.
        </span>
        <a href="#model" aria-label="Scroll to the living model">
          ↓
        </a>
      </div>
    </section>
  );
}
