# LOCAL RUNBOOK — MacBook M4 + VS Code + Codex

## Before building

1. Install current VS Code, the official **Codex** IDE extension, Git, and **Node.js 22 or newer** (Node 22 recommended here because the Taste skill needs it). Log into the Codex extension with your ChatGPT account.
2. Open macOS Terminal and verify `node -v`, `npm -v`, `git --version`. You should also have Chrome/Chromium available for visual testing (Safari can be checked manually).
3. In Terminal, create the project once:

```bash
mkdir -p ~/Projects
cd ~/Projects
npx create-next-app@latest saipranay-living-model --ts --tailwind --eslint --app --src-dir --import-alias '@/*' --use-npm
cd saipranay-living-model
```

The Next CLI flags or defaults can change; if an option is rejected, run `npx create-next-app@latest --help` and select TypeScript / App Router / Tailwind / ESLint interactively. Do not create nested Next.js apps.

4. Copy `MASTER_CODEX_PROMPT.md`, `CONTENT_SOURCE.md` and `AGENTS.md` from this kit into the new project root. Keep this `LOCAL_RUNBOOK.md` for reference. (Drag/drop in VS Code Finder, or Terminal `cp`.)
5. Install design skills from trusted repositories **from your project root**. These installers may prompt you to select Codex or local project install; make those choices when prompted:

```bash
npx skills@latest add emilkowalski/skills
npx impeccable install --providers=codex --scope=project
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

**Security note:** inspect external installer prompts and repos; do not casually grant full computer permissions. For Impeccable, Codex may ask you to approve a project hook in `/hooks`. Approve only after reviewing it. If skills install in user-global rather than repo-local, that's okay as long as Codex actually discovers them. Restart/reload the Codex session after installations and verify the skills are visible.

6. Open the project in VS Code:

```bash
code .
```

If `code` is not recognized, open VS Code and select File -> Open Folder, choosing `~/Projects/saipranay-living-model`. Or in VS Code open the Command Palette and install the `code` command into PATH.

## The ONE prompt to paste

In Codex inside VS Code, with project root selected, paste:

> Read `AGENTS.md`, `CONTENT_SOURCE.md` and `MASTER_CODEX_PROMPT.md` from this repository. Execute the full master build prompt. Work directly in this local project in phases and build the complete functional website. Verify installed design skills; do not stop at planning, a mockup, or scaffolding. Maintain `DESIGN.md`, `PLAN.md`, and `README.md`. Run the local site, inspect desktop/mobile if a browser is available, fix problems, and show me the final run instructions plus a truthful validation summary. Ask only if a truly essential input is missing.

If Codex asks for permission to install packages or inspect the local browser, review and approve sensible project-scoped operations.

## How to view the website

```bash
npm run dev
```

Open `http://localhost:3000`. If the port is occupied, the dev server may choose another localhost port; follow its terminal output.

For production simulation:

```bash
npm run lint
npm run build
npm run start
```

Run `npm test` or `npx playwright test` only if Codex has configured those scripts/tests. For Playwright's first use, browsers may need a separate install.

## Visual approval workflow — three focused rounds

After the first working build:

**Round A: Signature / first impression**
> Audit the current site visually at 1440x900 and 390x844. Does the hero feel like an exceptional boutique engineering-portfolio site? Improve typography, whitespace, portrait framing/fallback and overall art direction. Remove anything that feels template-generated. Apply targeted fixes; don't redesign the interaction model yet.

**Round B: Technical story / explorer**
> Focus only on the interactive semantic explorer and the project delivery star-schema exhibit. Inspect actual interactions on desktop and mobile. Make node selection, real relationships, filtering examples, keyboard behavior, back/reset and guided traversal technically correct and effortlessly usable. Simplify where clarity improves. Apply fixes and run relevant tests.

**Round C: Final craftsmanship / production**
> Perform a production-quality final pass with the installed design skills: critique, distill, accessibility/responsive audit, performance checks, and copy editing. Remove redundant UI and animations. Fix actual issues, run lint/build/tests, and show verified results and remaining actions before deployment.

## Add assets later

- Your original professional portrait: place at `public/images/portrait.webp` (or tell Codex actual filename and have it update the typed config). Choose a real high-resolution photograph; preserve its authentic facial features.
- VDOT Hero Award document/link: provide the public-safe asset/URL and exact wording. Ask Codex to switch the award entry from pending to visible only after review.
- GitHub profile: add the actual URL when ready.
- Resume download: put a sanitized PDF under `public/` and update the config; no private contact info unless intentionally public.

## When ready for public hosting (NOT now)

1. Review claims, public-safe work descriptions, email visibility, domain/name, certificates and award proof.
2. Run clean production build and accessible cross-browser testing.
3. Decide on domain and hosting (Vercel or another suitable Next.js host) only after design approval; configure DNS, metadata, robots, sitemap and HTTPS at that point.
4. Commit to Git and optionally publish to GitHub with no secrets, proprietary data or unlicensed assets.

## Known source documentation

- https://github.com/emilkowalski/skills — official README gives `npx skills@latest add emilkowalski/skills`.
- https://github.com/pbakaus/impeccable — official README currently uses `npx impeccable install` with Codex project provider options.
- https://github.com/Leonxlnx/taste-skill — official README documents the `design-taste-frontend` skill and Node 22+ requirement.
- https://nextjs.org/docs/app/getting-started/installation — official Next.js installation and localhost workflow.
- https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex — practical `AGENTS.md` guidance.
