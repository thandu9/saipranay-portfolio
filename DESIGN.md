---
name: Beyond the Data — V4
description: Saipranay Thandu — engineering clarity from fragmented data.
colors:
  porcelain: "#F5F2EB"
  ink: "#11151B"
  signal-orange: "#F15A35"
  soft-mint: "#D8E9E6"
  forest: "#142F30"
  dark-orange: "#A84125"
  divider: "#D6D6CB"
  muted: "#58615E"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(76px, 8.5vw, 136px)"
    fontWeight: 550
    lineHeight: 0.97
    letterSpacing: "-0.07em"
  editorial:
    fontFamily: "Fraunces, serif"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
  technical:
    fontFamily: "monospace"
rounded:
  square: "0"
  circle: "50%"
spacing:
  small: "8px"
  medium: "16px"
  large: "24px"
  gutter: "5%"
components:
  hero-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 20px"
  hero-secondary:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 20px"
  gallery-arrow:
    rounded: "{rounded.circle}"
    width: "48px"
    height: "48px"
---

# Design System: Beyond the Data — V4

## Overview

**Creative North Star: "Clarity, by design."**

Saipranay Thandu is the primary identity; Beyond the Data is the creative identity. The Living Model names the signature technical explorer. Human presence and expressive typography establish connection, then ordered technical exhibits make the work inspectable. Warm reading surfaces, a brief dark transformation and concentrated forest exploration alternate energy with calm.

The five supplied references inform scale, orange/neutral contrast, human presence, deliberate darkness and gallery pacing. Their layouts and assets are not reproduced. The user delegated design choices; this refresh records the implemented direction rather than reopening the visual workshop.

**Key Characteristics:**
- Authentic portrait and unmistakable personal identity.
- Editorial scale with restrained technical detail.
- Deterministic transformation followed by stillness.
- Native, inspectable interactions and factual evidence.

## Colors

### Primary
Signal orange marks discovery, action and grounded impact. Main orange CTAs use ink text. Dark orange supports small accent text on porcelain.

### Secondary
Soft mint marks selected model nodes and reconciliation artwork. Forest concentrates attention around technical exploration.

### Neutral
Porcelain supports the human introduction and reading. Ink serves typography and the noise sequence; muted text and fine dividers organize supporting detail. Supporting sage surfaces in the contact and case artwork remain contextual treatments, not additional brand accents.

## Typography

Locally hosted variable Manrope carries identity, interface and headings. Locally hosted Fraunces supplies selective editorial contrast; system monospace is limited to source fragments and schema labels. The frontmatter captures the desktop hero and base body, not a universal size for all headings. The mobile hero uses `clamp(65px, 19vw, 103px)` with a 0.95 line height. Hero supporting copy is 17px desktop and 14px mobile; compact exhibit labels are smaller. Do not turn exhibit label sizes into general body-copy defaults.

## Layout

An 8px rhythm is the foundation, with optical exceptions already present in component CSS. Responsive outer gutters are 5%; hero and gallery heading/control containers cap at 1600px. The desktop hero uses a 1.15fr/1fr split and 5% gap. The brand stylesheet adapts at 1100px, 800px and 560px, with a wider composition at 1600px. At 560px and below the hero stacks, the graph becomes full-width selectable rows, and noise groups become a two-by-two arrangement. These sit over retained base layout rules in globals.css.

The page sequence is portrait hero, noise-to-knowledge, Living Model, horizontal case gallery, impact, career/credentials and contact. Gallery slides occupy 88% of the track (92% on mobile), separated by 24px. Wide fact tables have a focusable horizontal scroll region and visible scrolling guidance.

## Elevation & Depth

Depth comes primarily from tonal fields, linework, the offset orange portrait frame and layered original SVG artwork. There is no reusable shadow scale. Preserve flat reading surfaces and avoid adding decorative elevation to every section.

## Shapes

Main CTAs, selects and technical frames are square. Gallery arrows are circular (48px desktop, 44px mobile); the career graph has a circular center on desktop and a simpler mobile treatment. Fine borders and disciplined alignment organize technical content.

## Components

### Hero and navigation

Direction B is selected after rendered comparison: oversized “Beyond the data.” typography, the authentic portrait against an offset orange frame, and a large personal-name signature. It provides stronger identity, energy and reading hierarchy. A remains at `/explorations/hero-a`; B remains at `/explorations/hero-b`. The portrait original is unchanged; Next Image handles delivery and responsive cropping without identity retouching. Explore work and Explore model are explicit actions. Navigation remains minimal with an accessible skip link.

### Buttons and fields

Hero primary buttons use orange/ink, changing to a brighter orange on hover; secondary buttons use a thin neutral outline. Priority hero controls have 52px minimum height on desktop and 46px on mobile. Native schema selects have 44px minimum height. A 2px dark-orange focus outline, mint on dark model surfaces, identifies keyboard focus. Pressed buttons scale to 0.98; disabled buttons use 0.4 opacity. These are observed component rules, not a claim that every compact link or pagination control has a 44px-wide hit area.

### Noise-to-knowledge

The isolated prototype is `/explorations/noise`. Twelve deterministic synthetic fragments progress through Source, Validate, Model and Decide. Phase boundaries are 0, 700, 1800 and 3000ms; fragment movement settles before the 3-second clarity state. Skip and Replay are explicit. The sequence starts on entry once, never loops or traps scrolling, and reduced motion receives the completed state. Motion for React uses `MotionConfig reducedMotion="user"`, a 450ms default and easing `[0.22, 1, 0.36, 1]`; hero headline/portrait entrances are 600/700ms. Retained CSS easing is `cubic-bezier(0.23, 1, 0.32, 1)`, not the same curve as Motion. Impact uses a single reveal, not an animated counter.

### Living Model and schema

Six families remain selectable: Data Engineering, Semantic Modeling, Business Intelligence, Decision Systems, Selected Work and Data Architecture. Selection highlights relationships and reveals context, tools and related work; URL state and keyboard controls remain part of the contract. This navigation graph is separate from the synthetic dimensional exhibit, which retains fact grain, dimension keys, one-to-many relationships, filter propagation, calculated measures, reset controls and conceptual DAX inspection/copying.

### Selected work gallery

Native horizontal scrolling and CSS scroll snap support touch. Previous/next, pagination and Arrow/Home/End controls select three original SVG architectural scenes: geospatial pipelines, project delivery and workforce reconciliation. Active-slide indication follows scrolling; only the active case link is in the tab sequence. Reduced motion uses immediate programmatic scrolling; there is no auto-advance. Deeper case routes and no-script case links remain available.

## Do's and Don'ts

### Do:
- Do preserve the authentic portrait and keep type away from facial details.
- Do make synthetic diagrams and self-reported outcomes explicit.
- Do provide visible focus, keyboard operation and completed reduced-motion states.
- Do retain typed content, URL state, case-study routes and functional schema filters.

### Don't:
- Don't retouch identity or substitute an AI-generated person.
- Don't loop the noise sequence, auto-advance the gallery or trap scrolling.
- Don't present the career graph as a literal database schema.
- Don't publish unsupported awards, metrics, credentials, resume or GitHub links.
