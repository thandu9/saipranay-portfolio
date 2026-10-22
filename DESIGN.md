---
name: Beyond the Data — V6
description: The Signal — a personal campaign about engineering clarity.
colors:
  night: "#101219"
  navy: "#1e202a"
  white: "#f4f1eb"
  signal: "#f15a38"
  soft: "#b6b5c2"
  copper: "#fa9278"
  line: "#393b48"
  mint: "#c2b9e0"
  emphasis: "#c1b7d8"
  focus: "#ffac94"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(100px, 15.5vw, 245px)"
    fontWeight: 500
    lineHeight: 0.91
    letterSpacing: "-0.075em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(44px, 5.6vw, 84px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    lineHeight: 1.65
  reflection:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.25
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
rounded:
  flat: "0"
  circle: "50%"
spacing:
  section-inline: "5%"
  section-inline-mobile: "6%"
  control-gap: "25px"
components:
  social-link:
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
    textColor: "{colors.white}"
  social-link-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
  round-arrow:
    rounded: "{rounded.circle}"
    width: "60px"
    height: "60px"
  round-arrow-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.night}"
  selected-stage:
    rounded: "{rounded.circle}"
    width: "35px"
    height: "35px"
    backgroundColor: "{colors.signal}"
    textColor: "{colors.night}"
---

# Design System: Beyond the Data — V6

## Overview

**Creative North Star: “The Signal.”** Saipranay Thandu is the personal identity; Beyond the Data is the campaign. Midnight surfaces, oversized sans-serif typography and an authentic photographic portrait establish presence. Fine orbital lines, ordered signals and editorial stories communicate engineering judgment.

This documents the implemented V6 home and its supporting case studies and dimensional exhibit. Source order is `globals.css`, `brand.css`, then `v6.css`; the final V6 overrides govern shared styles. Earlier exploration and gallery components are retained source, not the current home composition.

Key characteristics: human presence, concentrated orange, lilac depth, finite motion, and inspectable technical evidence.

## Colors

Night is the primary page ground; navy establishes the hero, architecture and journey chapters. White carries primary reading text, soft carries secondary copy, and line separates content. Signal orange marks the hero dot, selected stages and the leading impact metric. Copper and lighter peach variants support interactive text. Mint and emphasis are lilac accents for architecture depth and serif reflection; their legacy token names do not imply a green palette.

SVG diagrams combine orange, lilac and muted blue strokes. Translucent gradients are reserved for photographic blending and conceptual data light, not large promotional banners.

## Typography

Locally bundled Manrope carries identity, headings, navigation and body. Locally bundled Fraunces supplies italic reflection within headings and career narrative. Monospace is limited to diagram coordinates. Display tracking is tight; ordinary reading copy retains comfortable leading and a maximum paragraph width of 65ch.

Hero type changes to 16.5vw below 1000px and 20vw below 700px. Mobile chapter headings use `clamp(39px, 10vw, 60px)`. Small diagram labels are separate annotations, never the sole source of essential information; accompanying HTML explains the content.

## Layout

Full-width chapters alternate dark tonal grounds. Desktop gutters are usually 5%; mobile gutters are 6%. Sections typically use 100–120px vertical spacing, reducing to 75px/55px at 700px. Architecture uses a 1.6:1 visual/detail grid; technologies use a 1:1.6 category/content grid. Work is three stacked, full-width stories, not a home carousel.

V6 breakpoints are 1700px, 1000px, 700px and 370px. At 700px, architecture details, story evidence, impact rows, career content and credentials stack; career choices become a two-column grid. Navigation wraps to a second, horizontally scrollable row. The portrait is recropped independently of desktop. Final mobile refinements shorten the hero stage and enlarge SVG labels; consult the last rules in `v6.css` when changing these dimensions.

## Elevation & Depth

Depth comes from near-black/navy layering, photographic masks, thin overlapping rings and translucent SVG light. Content panels do not use raised card shadows. The selected career point uses an inset 7px navy ring to frame its orange center.

## Shapes

Chapters and evidence ledgers are flat and rectangular with fine separators. Circular social links, arrow affordances, stage markers and career points provide the recurring geometry. Avoid generic rounded-card grids, arches and rectangular node networks.

## Components

- **Hero and opening:** Two-line campaign title, unaltered portrait asset, profession, social links and Discover the work action. A decorative 1.75s opening sends its signal toward the hero dot and wipes away. It is skippable, dismisses on input, avoids focus capture and scroll locking, and is suppressed after the first session view, on deep links, after scrolling or under reduced motion. CSS also completes the wipe without JavaScript.
- **Signal transformation:** Deterministic particles resolve into Extract / Validate / Model / Decide. The sequence reaches clarity at 3.2s; Replay and Skip are explicit controls. The server-rendered and reduced-motion state is complete. Caption the signals as synthetic.
- **Architecture:** Seven native stage buttons surround strata and rings; selection updates contextual detail and the `stage` query parameter. Arrow keys, Home/End, Reset and Follow the flow support navigation. The optional dimensional exhibit retains grain, keys, relationships, filters and conceptual measures.
- **Technology landscape:** Five vertical tabs reveal a ruled typographic list and a contextual note distinguishing implementation from broader knowledge. Up/down keys move between tabs. Do not replace it with a tag wall.
- **Work stories:** Three conceptual SVG scenes support geospatial, delivery and workforce narratives. Extract / Validate / Publish, Connect / Measure / Investigate and Normalize / Reconcile / Review controls reveal explanation; links open case-study routes. Artwork is conceptual, not a claim to reproduce operational systems.
- **Impact, journey and credentials:** Large typographic metric rows, selectable career chapters, education and a linked credential ledger provide evidence. Preserve the source order and metric qualifications in PRODUCT.md.
- **Contact and navigation:** Quiet text links and circular social controls; the ending uses a large email link. Hover adds peach, movement or an orange circle; visible keyboard focus uses a 2px peach outline offset by 5px. Social controls are 44px on desktop; compact hero controls have mobile-specific sizing.

Motion for React honors user reduced-motion preferences. V6 CSS disables animations, transitions and smooth scrolling in that mode. Signature moments settle; state changes are short and repeatable.

## Do's and Don'ts

- Do preserve the authentic face, personal identity and source-backed content.
- Do use orange sparingly for identity and selection, with lilac/blue for depth.
- Do retain keyboard controls, visible focus, explicit replay/skip and stable resting states.
- Do preserve conceptual/synthetic labels and experience-versus-familiarity distinctions.
- Don't reintroduce warm V4/V5 surfaces, home carousel cards, tag walls or repetitive orange banners.
- Don't loop signature motion, trap scrolling or make important copy depend on animation completion.
- Don't turn the architecture metaphor into an asserted production schema or expand professional claims.
