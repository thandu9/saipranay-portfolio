# CODEX MASTER BUILD PROMPT — THE LIVING MODEL

You are my autonomous cross-functional team: an award-winning digital art director, world-class interaction designer, senior frontend engineer, accessibility specialist, technical storyteller, and senior BI / analytics architect. Work directly in this VS Code workspace and IMPLEMENT the working website locally. This is a build request, not a request for mockups, boilerplate, or general advice.

## MISSION

Build a remarkable, deeply polished, production-ready PERSONAL PORTFOLIO website for **SAIPRANAY THANDU** (display name: Saipranay Thandu). The website should make an impression on both technically sophisticated data leaders / architects AND recruiters / hiring managers, without sacrificing accessibility or clarity.

The site is named **THE LIVING MODEL**, with the design direction internally named **ATELIER / DATA**. This is an internal creative direction, not necessarily a visible logo or final public tagline.

**The central idea: My career is a semantic model. My projects are the evidence. This website is the interface.**

Do not reproduce a resume as a webpage. Do not make a conventional template. The user values a unique, art-directed, premium editorial experience where an INTERACTIVE SEMANTIC MODEL acts as the PRIMARY NAVIGATION. Every section should tell a clear story with very few words. The experience must be impressive within 5 seconds and substantial enough to reward 2 minutes of exploration.

### Primary audience and goals
- Audience A: recruiters and hiring managers: immediately understand identity, positioning, cross-functional value, credibility, and how to contact me.
- Audience B: principal engineers, analytics architects, BI leaders, and data engineering managers: inspect sound architectural judgment, see real dimensional-model concepts, follow believable pipeline architecture, examine architectural trade-offs, and see polished engineering execution.
- Core positioning: **hybrid — Engineering + Analytics + Business**.
- Current professional brand: senior BI and analytics engineering; professional profile includes a CURRENT **Business Analyst III** role and PRIOR **Data Specialist (GIS)** role supporting VDOT. Do not silently replace these official job titles with a fictional title; brand headline and role history are separate things.
- Build LOCAL FIRST. No domain, deployment, hosting, or paid services needed yet. Do not publish publicly or push to a remote repository without user approval.

## NON-NEGOTIABLE EXECUTION CONTRACT

1. Read `CONTENT_SOURCE.md` and `AGENTS.md` completely before doing anything. Source facts override creative inference.
2. Inspect the current workspace. If empty, create the Next.js project IN THIS DIRECTORY. If already scaffolded, adapt it; do not clobber unrelated work.
3. Verify installed design skills and consult them: **emilkowalski/skills** (especially animation / interface guidance), **pbakaus/impeccable**, and **Leonxlnx/taste-skill**. If unavailable, use the principles below and report missing skills; do not claim to have invoked a skill you could not access. Avoid executing unreviewed remote scripts, especially with elevated privileges.
4. Produce a concise `DESIGN.md` containing the chosen artistic direction, typography rationale, grid, colors, motion grammar, anti-patterns, and 2 alternative rejected directions in 1–2 sentences each. Prefer decisive choices, not endless moodboards.
5. Produce `PLAN.md` with milestones and maintain a short checklist as you work. Then BUILD the website and complete the listed quality checks. Do not stop after writing a plan or building a static hero.
6. You have creative latitude; use it confidently. Do not ask for ordinary choices. Ask only for information impossible to infer safely (e.g. a missing real portrait); support deliberate placeholders with an outstanding fallback layout.
7. At the end: provide a local URL, exact run commands, what was built, tests run + results, known gaps requiring personal assets, and a screenshot summary if browser-based inspection is available.
8. Never claim a test, screenshot, skill use, or credential verification happened unless it actually did.

## DESIGN LANGUAGE — ATELIER / DATA

Treat the site as a piece of restrained information-design craft. Think design studio / Swiss editorial precision meets an advanced architecture explorer. One coherent and ownable visual idea executed perfectly, not five clashing ideas.

Default palette (fine-tune after inspecting contrast, maintaining character):
- Warm porcelain background: `#F5F3ED`
- Deep ink typography: `#171E23`
- Midnight explorer background: `#101820`
- Copper / terracotta emphasis: `#C56A45`
- Mineral teal as sparse 'active/data' accent: `#7CCBB6`
- Beautiful quiet gray for supporting text; contrast must be AA-accessible at actual size.

Typography: choose one distinctive, legally loadable display font and one highly readable sans font; optionally one subtle mono for schema IDs and metadata. Prioritize typography over unnecessary ornament. Use `next/font` when practical. Avoid default generic Inter-for-everything and excessive all-caps microtext. Typography should feel like sophisticated editorial design.

Geometry: deliberate asymmetry, strong alignment, negative space, architectural hairlines, custom nodes with exquisite spacing, precise typographic hierarchy, elegant hover and focus states. No generic stacked-card template, no dashboard grid of KPI boxes on the hero, no purple gradients, no neon cyberpunk, no excessive glassmorphism, no animated particles everywhere, no globe or stock circuit-board motif, no typewriter effect, no gratuitous spinning objects, no lorem ipsum.

Motion: use Emil Kowalski-style tasteful purpose-driven UI motion. Prefer opacity + transform, gentle spatial choreography, connector lines revealing direction of data flow, precise cubic-bezier / spring behavior, section crossfades, and selection-driven geometry. Motion intensity moderate, not a theme park. Default navigational movements roughly 180–450 ms, longer cinematic initial reveal only when it earns its place. Honor `prefers-reduced-motion` everywhere. Avoid perpetual ambient loops on mobile, expensive scroll listeners, and layout thrashing. No scroll hijacking.

### Hero art direction
The top viewport should be breathtaking but still legible:
- Small but refined identity + nav bar: name/monogram, Model, Work, About, Credentials, Contact.
- Hero headline: **“I engineer clarity out of complexity.”**
- Short subline: **“From fragmented systems to trusted data, meaningful insights, and better decisions.”**
- A subtle genuine portrait layered editorially, only if a user-provided `public/images/portrait.*` exists. Keep facial features EXACTLY as the supplied photo. Do not generate/alter/synthesize a likeness or silently pull a random stock portrait. If missing, show a beautiful typographic/shape composition; reserve a clearly marked asset slot without a broken image. Do NOT put an obvious generic silhouette placeholder in the hero.
- Embedded preview / entrance into the living graph. Above the fold MUST suggest that the site is interactive, with a clear “Explore my architecture” call-to-action and an obvious alternative “View selected work”.
- The hero should not be a fullscreen diagram with unreadable miniature nodes. The headline and professional positioning must remain the dominant first-glance content.

## EXPERIENCE INFORMATION ARCHITECTURE

Prefer a SINGLE IMMERSIVE EDITORIAL HOMEPAGE with real, individually linkable case-study routes. The semantic model is the primary navigation across the homepage; regular nav and readable fallbacks remain available for accessibility and discoverability.

### Sequence
1. **Hero / First impression:** bold narrative, subtle portrait (if asset provided), tasteful entrance into model.
2. **The Living Model / Primary interaction:** interactive, exploratory personal architecture. This is the signature feature and should occupy substantial design/implementation effort.
3. **Selected architecture & case studies:** 3 substantial featured project stories, each with an architectural diagram, synthetic-data exhibit, decisions/tradeoffs, and proof of capability.
4. **From source to decision:** short narrative that transforms incoming operational data into trustworthy modeled intelligence and a business decision; may be expressed as 4–5 choreographed beats.
5. **Experience / Career graph:** concise chronology as supporting evidence, not ten screens of job description.
6. **Credentials / Evidence:** certification verification links and placeholder for pending VDOT Hero Award evidence.
7. **Contact:** minimal, persuasive final CTA and LinkedIn; no fake contact form backend.

### Semantic explorer — NOT OPTIONAL

Create a compelling custom 2D interactive visualization: an architecture map with elegantly connected nodes and a stable overall mental model. Prefer custom SVG + React and accessible HTML controls if this yields the most art-directed performance and responsiveness. Use a graph library only if truly helpful; override generic graph aesthetics completely. Avoid heavy 3D WebGL unless you can justify faster, more accessible 2D no-jank output.

Center: `Saipranay / Analytics Architecture`, with six primary families:
- `Data Engineering` — ingestion, orchestration, ETL/ELT, Python, SQL, ArcPy, automated QA/QC, 180+ data layers.
- `Data Modeling` — star schemas, fact/dimension design, semantic layers, measures, DAX, quality, governance.
- `Business Intelligence` — Power BI, reporting, measurable delivery/financial/risk insights; 9-district operational context.
- `Decision Systems` — performance measurement, funding/schedule context, qualification coverage, stakeholders.
- `Selected Work` — three illustrated case studies.
- `Experience & Credentials` — career milestones, DP-600 and other externally verifiable credentials.

**Crucial architecture distinction:** The career navigation uses graph metaphors; do NOT incorrectly claim that people, employers, and skill names are actual dimensional-model fact and dimension tables. When a visitor selects `Data Modeling`, transition into a technically meaningful, clearly labeled **illustrative star schema**. The schema should be a valid data model, not just random connected cards.

States and interactions:
- Initial stable state: clear 6-family composition, not 30 illegible floating labels.
- Hover/focus a node: highlight relevant connector and show a short, meaningful one-line description; keyboard parity.
- Click/Enter/Space a node: selection persists and a story inspector / editorial detail panel appears with (a) outcome, (b) architecture, (c) relevant skill/tools, (d) linked case study or career evidence.
- Click connector where useful: explain WHAT connects and WHY (e.g. source -> transformation -> model -> decision).
- A guided `Follow the data` mode progresses through Source -> Validation -> Transformation -> Modeling -> Metrics -> Decisions. Each beat is distinct and visually coherent.
- An `Explore freely` mode allows non-linear exploration with visible back/reset and no trapping.
- A simple `Architecture / Career` viewing mode MAY be added if it clarifies the experience, but do not overload the UI with tabs.
- Selected nodes are reflected in URL search params or fragment where feasible so meaningful states can be shared or revisited; the Back button must not feel broken.
- No meaningless auto-moving blobs. Interactive affordances must be obvious. Use genuinely useful microinteractions.
- Mobile: transform the graph into an editorial vertical constellation / accordion of large tappable nodes linked by a simplified line, NOT a shrunken desktop canvas. All content and actions remain available.
- Reduced motion: all content and graph connections remain visible and navigable, no animation dependency.
- Screen reader: a semantic text navigation list with logical order that fully expresses choices; SVG visual details may be hidden from assistive technologies where duplicated by controls.

### Specific deep technical exhibit: Conceptual project delivery semantic model

Inside `Data Modeling`, design an illustrative star schema with these entities, with VALID relationships:
- `Fact_ProjectDelivery`: ProjectKey, DistrictKey, ProgramKey, StartDate, ConstructionStartDate, DurationYears, ExpectedYears, RiskFlag.
- `Dim_Project`: ProjectKey [unique], ProjectType, Tier, DeliveryPhase.
- `Dim_District`: DistrictKey [unique], DistrictName.
- `Dim_Program`: ProgramKey [unique], ProgramName.
- Relationships: Dim_Project (1) to Fact_ProjectDelivery (*), Dim_District (1) to Fact_ProjectDelivery (*), Dim_Program (1) to Fact_ProjectDelivery (*); single direction dimension to fact. Explain grain: one record per illustrative project at a defined snapshot; synthetic schema is NOT claimed as the exact original organizational schema.
- Show sample measures: `Project Count`, `Average Development Duration`, `At-Risk Project Count`; use mathematically sound definitions and label measures as **conceptual DAX examples**. Make snippets copyable and syntactically reasonable if DAX is shown.
- Interactive sample: click a dimension to see how it filters the fact table; simple animation demonstrates filtered rows / measure recalculation on a small, deterministic SYNTHETIC data set.
- No invented real financial figures or district project counts; all example values visibly labeled **“Illustrative synthetic data”**.
- Optional toggles: `Relationships` / `Measures` / `Lineage` if well integrated and not overly complex.

## FEATURED CASE STUDIES — THREE HIGH-QUALITY STORIES

Make these complete, beautifully art-directed case-study routes (e.g. `/work/geospatial-pipelines`, `/work/delivery-intelligence`, `/work/qualification-analytics`). Use no proprietary content or brand-owned screenshots. Draw diagrams, light charts, synthetic code/metric exhibits, and original vector illustrations with source code.

### Case 01 — Geospatial Pipeline Engineering
- Public positioning: supporting a statewide transportation planning data platform.
- Technical storyline: numerous heterogeneous spatial/operational data sources -> Python / SQL / ArcPy ETL and spatial alignment -> validation and QA/QC -> scheduled publishing -> enterprise GIS / analytical use.
- Grounded source points: Pathways for Planning platform; integration of **180+ data layers**; reported **50–60% reduction in processing time**. Present 180+ as data LAYERS, not 180 unrelated pipelines. Clearly attribute outcome to described work; do not invent throughput, costs, users, proprietary AWS detail, or internal architecture.
- Visual: precision-engineered, animated lineage map with a few synthetic layers flowing through 4–5 stages. Short insight and design-tradeoff notes.

### Case 02 — Project Delivery Intelligence
- Public positioning: operational analytics for a multi-district transportation portfolio.
- Technical story: schedules + funding + project milestones -> cleansing/joins -> dimension/fact model -> DAX/Power BI measures -> district and project-level delivery-risk decisions.
- Context: **9 districts**; be clear that any **$28.5B / 4,300+ projects** reference is source-reported PUBLIC PROGRAM CONTEXT, not a claim the individual controlled that budget or personally built analyses for every single project. Prefer to omit large budget number unless it is independently verified and context phrased conservatively.
- Visual: conceptual star schema + 'before/after' decision question using deterministic synthetic dates and duration.
- Context for end-to-end logic: PE-to-CN delivery duration, financial variance, risk. Do not reveal internal thresholds, UPCs, actual project data, or business-sensitive measures.

### Case 03 — Qualification / Workforce Analytics
- Technical story: recurring qualification/certification inputs -> deterministic reconciliation, matching / exception detection -> quality validation -> modeled workforce / locality measures -> operational coverage and capacity insights.
- Tools grounded in professional profile: Python, pandas, SharePoint, Power BI, DAX.
- Visual: miniature interactive reconciliation storyboard, with invented people/entities clearly labeled as synthetic; example exception types (duplicate, changed organization, missing match, expiring certification). Never show identifiable employees or personal records.
- Make business outcome clear without making up financial ROI or hard percentages.

For each case study include:
- Impactful short statement (2 lines maximum above the fold)
- A system diagram as original code-based vector UI
- `Problem` (one concise sentence)
- `My role / approach` (3 concise bullets max)
- `Architecture` (interactive or annotated)
- `Decision / trade-off` (genuinely thoughtful; label conceptual details when not directly sourced)
- `Outcome` (only grounded claim; otherwise qualitative)
- `Stack` (tools directly supported by the source)
- `Synthetic recreation` notice where relevant
- Clear `Back to model` link that returns to sensible state
- Shareable metadata, consistent typographic style, strong mobile layout

## EXPERIENCE + CREDENTIALS

Consult `CONTENT_SOURCE.md` for all career dates and titles. No fabricated employers, job titles, degrees, technologies, awards, certifications, scores, or false endorsements. Treat the LinkedIn profile as the baseline; don't invent specific responsibility bullet points for roles whose responsibilities are absent.

Visible professional timeline (short):
- VDOT / transportation work: Business Analyst III, Jul 2026–Present; Data Specialist (GIS), Feb 2025–Jul 2026. Describe as work supporting VDOT, and avoid implying employment relationship if not established.
- Chevron: Business System Analyst II, Sep 2024–Jan 2025.
- People Tech Group: Enterprise AI & Machine Learning, Aug 2024–Oct 2024.
- Sacred Heart University: Business Intelligence Analyst, Sep 2023–Mar 2024.
- Southern Company: Data Analyst (Geospatial), Sep 2017–Oct 2022.
- Optional early business development internship belongs in expanded full timeline, not hero.

Education: Sacred Heart University — Master's in Business Analytics; Osmania University — BBA in Business Statistics.

Credential links (use as external `<a>` with `target="_blank"` + `rel="noopener noreferrer"`, accessible labels; user supplied these):
- Microsoft Certified: Fabric Analytics Engineer Associate (DP-600): `https://learn.microsoft.com/api/credentials/share/en-us/SaipranayThandu-2350/B62BAADF4BEFBF14?sharingId=70B4580B23BCE69`
- HackerRank SQL Advanced: `https://www.hackerrank.com/certificates/iframe/41e8a24dcee2`
- Databricks Generative AI: `https://credentials.databricks.com/b3ecfb24-49d9-4ac9-b1fc-ded7e8f8fb7a#acc.VuiaH9hr`
- LinkedIn: `https://www.linkedin.com/in/saipranaythandu`

Awards:
- User reported a **VDOT Hero Award** but has NOT yet provided proof/link or approved award wording. Include an elegant **data-driven placeholder configuration** for this award; do NOT publish a verified award claim or a fabricated badge, date, quote, or certificate. If desired, keep it hidden until `verified: true` + asset/link are supplied.
- The PDF mentions a 'Workplace Impact Award'; do NOT merge it with 'Hero Award' or assume identical. Hold for clarification instead of inventing details.

Contact:
- LinkedIn is primary.
- Professional contact email from source: `thandusaipranay@gmail.com` (make configurable in one data file and only show as configured).
- Phone number appears in the source but should NOT be public by default.
- GitHub profile URL and downloadable resume not yet supplied: don't invent, don't create broken CTA. Include optional config flags so they can be added later.

## FUNCTIONAL REQUIREMENTS

- No fake forms or fake 'Send message' confirmation. A well-styled `mailto:` link works.
- Every clickable element must actually work.
- Main nav with useful active states, smooth but native-feeling scrolling, skip link, focus states, clear back navigation.
- Keyboard-only journey works through all nodes, disclosures, and links.
- `prefers-reduced-motion` disables nonessential motion (including connector draw and entrance animations) while preserving comprehension.
- Avoid layout shifts, overflow, flashing, tiny mobile type.
- Render content without JS where practical; use Server Components by default and isolate interactive graphs as Client Components.
- Metadata, Open Graph, social preview with original composition (create local dynamic OG image or designed image; no missing assets), JSON-LD `Person` only using grounded facts, sitemap / robots, semantic headings, favicon/monogram.
- Ensure good SEO without copying personal email/phone into structured data unless appropriate. Avoid hidden keyword stuffing.
- Responsive test widths: 375px, 430px, 768px, 1024px, 1440px, ~1920px.
- Support Safari, Chrome and Firefox where feasible; include checks for Safari text, overflow, and animation behavior.
- Target Lighthouse: Performance >= 90 mobile when practical; Accessibility >= 95; Best Practices >= 95; SEO >= 95. These are TARGETS, not claims unless measured. Optimize main-thread work and keep the initial JavaScript budget conservative.
- Test interactions with Playwright or equivalent: explorer selection, keyboard operation, case-study navigation/back, reduced motion, credential outbound links, mobile no-overflow. Do not invent test results. Add at least a basic smoke suite where tooling allows.
- No secrets, third-party analytics, cookie trackers, newsletter, database, auth, payments, or API key requirements in V1. Static content is sufficient.
- No external image requests that break production; use self-contained SVG/gradients and authorized, optimized portrait asset only. Do not incorporate copyrighted brand marks / logos without suitable permission.
- Ensure well-typed project content and schema datasets in dedicated modules; add unit tests for graph connections, synthetic measures, data invariants if practical.
- Use `npm run lint`, `npm run build`, and test command; fix errors before final report.

## PREFERRED STACK

- Next.js App Router, React, TypeScript, Tailwind CSS; latest compatible stable releases at build time.
- Motion (`motion/react`) for component microinteractions if appropriate; custom SVG for the graph; minimal dependencies. If a stronger utility is chosen, justify it in `DESIGN.md`.
- Use `next/font`, `next/image`, React Server Components, statically supplied TypeScript data and MDX or typed case-study objects.
- Consider Playwright for automated UI smoke tests and screenshot verification, when practical.
- Data-like elements: use true typed relationship objects; use deterministic synthetic sample data, no random samples on every render.
- Keep maintainable architecture, no giant component. Organize e.g. `src/components/hero`, `src/components/model`, `src/components/work`, `src/components/ui`, `src/data`, `src/lib`, `src/app/work/[slug]`, `src/styles`.
- Prefer simple correct code to impressive but unmaintainable engineering. No pointless CMS, microservices, backend, heavy UI kit, or WebGL dependencies in V1.

## EXPECTED REPO CONTENT

Maintain the following useful files, adapting to existing structure:
- `AGENTS.md`: durable development standards and source-of-truth guardrails
- `CONTENT_SOURCE.md`: user-provided facts and claims policy
- `DESIGN.md`: brand, design tokens, motion rules, information architecture
- `PLAN.md`: short implementation phases with completion statuses
- `README.md`: Mac setup, local commands, assets, content editing, later deployment notes
- `public/images/README.md`: where the user should place the original portrait and any later award proof
- Source code and tests

## THE EXECUTION SEQUENCE

### Phase 0 — Inspect + art direct (fast, but essential)
- Inspect repo and available skills. Read `AGENTS.md` and `CONTENT_SOURCE.md`.
- Commit to a cohesive visual thesis; design tokens, fonts, story structure, graph interaction model, page/component plan.
- Write `DESIGN.md` and a short `PLAN.md`. Then proceed without waiting for permission on non-sensitive implementation steps.

### Phase 1 — Above-the-fold art direction
- Build hero and top nav to a high visual standard first.
- The hero must work beautifully with NO portrait asset and gracefully incorporate one later.
- Set up typography, tokens, motion system, site-level accessibility.
- Start dev server and inspect desktop + mobile if browser tooling is available; screenshot, critique, refine.

### Phase 2 — The signature interactive semantic model
- Implement fully functioning clickable/keyboard navigable architecture map, data-driven edges, context inspector, reset/back, guided mode, and reduced-motion states.
- Build real illustrative star schema and synthetic sample filter behavior, if feasible within high-quality implementation.
- Inspect high-resolution and mobile layouts. Correct every overflow/collision, ensure selected-state clarity.

### Phase 3 — Case studies + career + credentials + contact
- Build three complete architectural stories with bespoke diagrams and source-consistent outcomes.
- Add measured timeline, credible certificates, pending-award placeholder, contact.
- Carefully edit copy. SHORT, grounded, compelling, varied.

### Phase 4 — Production-quality polish
- Implement metadata, responsive work, keyboard flows, performance optimizations, accessible fallback, robust error states.
- Run tests, lint, typecheck, production build, and screenshots where possible.
- Use installed design skills to critique / distill / polish, then apply concrete corrections (do not simply report vague feedback).
- Verify exactly what works; deliver precise local instructions.

## SUCCESS CRITERIA / FINAL ACCEPTANCE

The project is only complete when:
- Within five seconds a new visitor can understand who I am and what I do.
- The diagram is my REAL primary navigation and is stable, intuitive and keyboard accessible.
- Clicking the diagram reveals genuinely educational and believable architecture, not generic prose.
- The embedded star schema shows defensible fact/dimension relationships and deterministic synthetic example measures.
- Three case studies look and read like premium technical editorials, not stock portfolio templates.
- Desktop and mobile are both bespoke experiences; neither is awkwardly squeezed.
- Portrait absence does not cause a blank block or broken image.
- The UI is restrained, intentional, premium, legible, responsive, and memorable.
- No claims, numbers, titles, certifications, awards, or endorsements have been invented.
- `npm run build` succeeds and working site launches locally.
- Final response tells me exactly what to run and what remains for me to provide.

## IMPORTANT FINAL DIRECTION

I would rather see ONE exceptional interactive concept executed with taste than TEN mediocre special effects. Distill repeatedly. Make the site feel authored, not generated. Treat every pixel and every data relationship as consequential. Build it now.
