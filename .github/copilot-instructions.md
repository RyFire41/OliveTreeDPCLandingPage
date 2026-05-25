Purpose
This file tells an AI coding agent how this repository is organized, the minimal developer workflows, and repository-specific conventions to make useful, low-risk changes quickly.

Repository
- GitHub: `RyFire41/OliveTreeDPCLandingPage` — push changes to `main` for production deploys (Cloudflare Pages recommended).

Quick start (local)
- Install deps: `npm install`
- Run dev server: `npm run dev` (Vite, serves at http://localhost:5173 by default)
- Build for production: `npm run build` (output => `dist`)
- Preview production build locally: `npm run preview`

Architecture overview
- Vite + React single-page landing site. Key entry points:
  - `index.html` mounts the element with id "root" and loads `/src/main.jsx`.
  - `src/main.jsx` renders the `App` component from `src/App.jsx`.
  - Styling is a single global stylesheet: `src/index.css` (imports Google fonts).
- Static assets (logos, favicon, manifest) live in `public/` and are referenced with absolute paths (e.g. `/logo-horizontal.svg`).
- Icons use `lucide-react` (imported in `src/App.jsx`).

Project-specific conventions and common edits
- Form: the interest-list form URL is a single constant in `src/App.jsx`:
  - Replace `const FORM_URL = 'https://tally.so/r/YOUR_FORM_ID'` with the project form URL when wiring the real form.
- Branding assets: replace the SVGs in `public/`:
  - `public/logo-horizontal.svg`, `public/logo-stacked.svg`, `public/favicon.svg`.
- Fonts are loaded via `@import` at the top of `src/index.css`; keep those lines when adjusting typography.
- Do not add a client-side router — this is a single-file landing page. If adding pages, prefer separate static pages and update `index.html` or Vite config accordingly.

Build & deployment notes
- Cloudflare Pages preview from README recommends:
  - Framework preset: Vite
  - Build command: `npm run build`
  - Build output directory: `dist`
  - Production branch: `main`
- `package.json` currently pins tools to the `latest` tag. Be conservative when updating dependencies; pin versions if you need reproducible builds.

Local build verification (this repo)
- Commands used:
  - `npm install`
  - `npm run build`
- Example successful build output from a local run:

  vite v8.0.14 building client environment for production...
  ✓ 1738 modules transformed.
  computing gzip size...
  dist/index.html                   1.00 kB │ gzip:  0.48 kB
  dist/assets/index-BMhgFFu9.css    4.93 kB │ gzip:  1.78 kB
  dist/assets/index-BMb2Oy2g.js   195.84 kB │ gzip: 62.17 kB

  ✓ built in 1.20s

Include similar output when you run a build locally so reviewers can quickly verify the build succeeded and the `dist/` artifacts were produced.

Code patterns and examples
- Minimal React usage: functional component default export in `src/App.jsx` (no routing, server calls, or state management). Keep components simple and self-contained.
- Styling is global CSS (no CSS modules). Add small, scoped classnames rather than large global overrides.
- Accessibility: headings and ARIA labels are present in `App.jsx` (e.g. `<nav aria-label="Main navigation">`, `aria-label` on brand and hero card). Follow existing pattern when adding interactive controls.

Integration points & external dependencies
- No backend code in this repo. Integration points are external:
  - Tally form (the form URL in `src/App.jsx`).
  - Hosting on static hosts (Cloudflare Pages recommended).
- External packages used (see `package.json`): `vite`, `react`, `react-dom`, `@vitejs/plugin-react`, `lucide-react`.

Tests & CI
- There are no tests or CI configs in the repository. If you add tests, include a simple npm script and document how to run them in this file.

When editing: low-risk checklist
1. Update the `FORM_URL` in `src/App.jsx` if your work affects the sign-up flow.
2. If changing styles, prefer adding new classnames and small rules in `src/index.css` to avoid regressing the hero layout and responsive breakpoints (see `@media (max-width: 860px)` rules).
3. Replace or add static assets in `public/` and reference them with absolute paths (leading slash).
4. Run `npm run dev` and visually verify changes on mobile-sized viewport (hero layout and nav behaviour change under 860px).

What I couldn't discover automatically
- Any preferred Node/npm version (use `.nvmrc` or engines in `package.json` if you need pinning).
- Any CI pipeline conventions beyond Cloudflare Pages (no `.github/workflows` present).

If something is unclear or you want the file to include more details (example PR templates, linting rules, or CI examples), tell me which area to expand and I'll iterate.
