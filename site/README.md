# Saipranay Thandu — Beyond the Data

Local Next.js 16 / React 19 / TypeScript / Tailwind portfolio. The Living Model is the signature interactive architecture experience.

## Preview on this Mac

The production preview runs at http://127.0.0.1:3000.

To restart from Terminal:

```sh
cd /Users/guest1/Downloads/Saipranay_The_Living_Model_Codex_Kit/site
./run-local.sh start
```

For live editing, stop the server with Control-C, then use `./run-local.sh dev`. The helper uses Node from PATH or the existing Codex bundled runtime. It installs nothing and binds only to loopback. If port 3000 is in use, use the running preview or stop that server first.

On another computer with Node.js 22+ and npm:

```sh
npm ci
npm run dev
```

Production: `npm run build` then `npm start`.

## What is implemented

- Authentic portrait-led identity; two renderable hero explorations at `/explorations/hero-a` and `/explorations/hero-b`. B selected after desktop/mobile comparison.
- Deterministic Motion animation from noise to knowledge; three-second sequence, skip, replay, and direct reduced-motion resting state. Isolated prototype at `/explorations/noise`.
- Six-family architecture explorer with URL state, browser back, persistent inspector, native keyboard controls, and guided six-step journey.
- Synthetic star schema: declared snapshot grain, unique dimension keys, one-way 1:* filtering, intersecting filters, recalculated measures, empty state, copyable conceptual DAX.
- Native scroll-snap gallery, keyboard/arrow controls, touch scrolling, three original SVG compositions and complete case-study routes.
- Precisely scoped self-reported outcomes, career/education, exact supplied credential links, email/LinkedIn contact.
- Self-hosted licensed fonts, generated social image, Person JSON-LD, sitemap, local noindex/robots defaults.

## Validate

With production server running:

```sh
./run-local.sh lint
./run-local.sh typecheck
./run-local.sh test
./run-local.sh build
./run-local.sh e2e
```

Equivalent npm commands: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:e2e -- --project=chromium --project=webkit`.

Browser installation, only if needed on a new machine: `npx playwright install chromium webkit`. Full configuration also includes Firefox; the downloaded Firefox engine could not create its profile on this Mac, so no Firefox pass is claimed. Native Safari itself was not exercised; WebKit was.

`tests/data.test.ts` tests graph reachability, unique keys, foreign-key integrity, grain, dates, risk derivation and intersecting/empty filter measures. Browser tests exercise hero/nav/contact, gallery, motion completion/skip/reduced motion, model tour/history/reset, schema filtering and table keyboard scrolling, case routes, credential markup, accessibility and six responsive widths.

## Edit content and assets

- `src/data/profile.ts`: contact links, optional GitHub/resume, pending award and profile settings.
- `src/data/work.ts`: source-grounded case studies. Never imply conceptual architecture is an exact production implementation.
- `src/data/model.ts`: explorer families, connections and tour.
- `src/data/synthetic.ts`: deterministic dataset and calculations.
- `src/app/globals.css`: base and technical exhibit styles; `src/app/brand.css`: V4 brand composition and responsive rules.
- Original portrait: `public/images/saipranay-portrait.png`, consumed in `Hero.tsx`. No facial edits were made.
- Original SVG artwork: `ProjectArtwork.tsx`. Font licenses: `public/licenses/`.

Parent folder contains `CONTENT_SOURCE.md`, `CREATIVE_DIRECTION_V4.md`, `DESIGN.md`, `DESIGN_AUDIT.md`, `DESIGN_REVIEW.md`, `PLAN.md` and final `QA_REPORT.md`.

## Local-only boundaries and limitations

No deployment, remote push, purchases, backend, trackers or analytics. No invented credential dates, award badge, resume, GitHub link, employer endorsement or confidential data. Credential URLs are supplied by the user; issuer authenticity and current availability are not independently certified by this build. Hero Award remains hidden pending approved evidence.

`NEXT_PUBLIC_SITE_URL` is intentionally unset; index blocking is deliberate. For a later explicitly authorized deployment, set the real origin, review public claims, re-run tests and review indexing/metadata. No deployment configuration was activated.

The dependency audit reports no production vulnerabilities. A development-only braces advisory remains in Next's lint toolchain; the available automated recommendation downgrades Next ESLint across major versions and is not safe to apply blindly. See QA_REPORT.md.
