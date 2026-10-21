# Beyond the Data — validation record

## Scope
Local-only production build, with original portrait, deterministic synthetic exhibits and no external tracking. Date: 20 October 2026, America/New_York client date. Baseline checkpoint: 33563a4. V4 is described in CREATIVE_DIRECTION_V4.md.

## Completed checks
- Next production build: passed (homepage, three case studies, hero A/B previews, isolated motion prototype, metadata routes).
- ESLint: passed after excluding generated Playwright reports and fixing internal links.
- TypeScript: passed.
- Unit suite: 3 passed. Graph reachability, unique dimension keys, foreign-key integrity, one-project grain, date/duration and risk consistency, intersecting/empty filter calculations.
- First V4 browser run: 18 Chromium/WebKit functional passes. Accessibility contrast finding and reviewer-discovered table keyboard gap were corrected; final run recorded below.
- Screenshots: 320, 390, 768, 1280, 1440 and 1920px homepage; 390/1440px hero A/B, noise, graph, schema, gallery, career, credentials, contact and three case pages.
- Browser console capture on hero/prototype/home: no page errors.
- Reduced motion: completed synthetic composition, no replay movement, no skip control necessary.
- Runtime dependency audit (`npm audit --omit=dev`): 0 vulnerabilities.

## Browser limitations
The installed Playwright Firefox 157 engine fails before page load with “Could not find profile folder.” Retried with a project-local TMPDIR, same failure. No Firefox coverage claimed. Chromium 156 and WebKit 27.2 were exercised; native Safari was not separately tested.

## Performance
First measured mobile Lighthouse on V4 production: Performance 91, Accessibility 96, Best Practices 100, SEO 66. Largest contentful paint 3.3s; cumulative layout shift 0. The accessibility findings were small gallery-text contrast and visible/accessibility-name mismatches; corrected. Final measurement to be appended. Scores are lab observations, not guarantees.
SEO score is intentionally constrained by local `noindex` and robots disallow. A real origin and indexing are future deployment decisions, not activated here.

## Dependency limitation
The development lint dependency chain has 5 audit findings driven by braces <=3.0.3 (GHSA-vfj7-8cjw-p6xm), a nested-pattern denial-of-service advisory. Registry latest at check was 3.0.3. npm's suggested remediation downgrades eslint-config-next to 14.2.35, incompatible with the chosen Next 16 toolchain. No blind major-version downgrade applied. Runtime audit is clean.

## Content and assets
Authentic portrait bytes preserved; Next Image serves delivery optimizations. No identity retouching. Font licenses included. Original project artwork is source SVG. Credentials link to exact user-supplied URLs; live issuer verification is not claimed. Awards, resume and GitHub remain hidden pending supplied assets. Source-reported outcomes retain explicit scope and attribution.

## Final verification — 21 October 2026
- 22/22 Playwright tests passed in Chromium and WebKit (12.9s). Includes table keyboard scrolling, settled skip state, gallery arrows/keyboard, navigation, all case pages at six widths and automated WCAG 2 A/AA + 2.1 A/AA checks on homepage and delivery schema.
- Lint, TypeScript, production build and 3/3 data tests passed.
- Final mobile Lighthouse: Performance 98, Accessibility 100, Best Practices 100, SEO 66 (intentional local indexing block). LCP 2.5s; CLS 0. Lab run, not a field performance guarantee.
- Final captures reported no JavaScript page errors.
- Independent review's two material fixes applied: explicit mobile caption whitespace and keyboard-accessible horizontally scrollable fact region. Browser test verifies latter in both engines. No independent post-fix whole-site approval is claimed.
