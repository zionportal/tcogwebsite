# TCOG Website Agent Instructions

## Current Rule

The visual direction is locked. Do not redesign the website.

Allowed work:

- Apply supplied logos and assets.
- Make small layout, spacing, responsive, accessibility, SEO, or copy fixes.
- Swap content or images when David supplies replacements.
- Fix build, deploy, dependency, or broken-link issues.
- Keep the existing Next.js, TypeScript, and Tailwind structure.

Not allowed without David explicitly asking:

- New visual direction.
- Rebuilding sections from scratch.
- Replacing the design system.
- Adding unrelated packages.
- Large refactors.

## Low-Token Workflow For OpenCode And ChatGPT

1. Read this file first.
2. Read `CHANGELOG.md` for recent decisions.
3. Read only the file needed for the requested fix, usually `src/app/page.tsx` or `src/app/globals.css`.
4. Make the smallest patch that satisfies the request.
5. Run `npm run build`.
6. Update `CHANGELOG.md` with one short bullet for meaningful changes.
7. Commit with a short message and push to `main`.

## Project Map

- Homepage: `src/app/page.tsx`
- Global CSS and responsive helpers: `src/app/globals.css`
- Metadata: `src/app/layout.tsx`
- Public assets: `public/assets/`
- Brand-only header logo: `public/assets/tcog-logo-transparent-navy.png`
- Brand-only footer logo: `public/assets/tcog-logo-transparent-white.png`
- Do not use visible logo assets that say `General Headquarters` or include the `One God • One Faith • One Mind` tagline.
- Mockup-derived crops: `public/assets/crops/`
- Design directive: `WEB_DESIGN_DIRECTIVE.md`
- Change catalog: `CHANGELOG.md`

## Verification

Use the cheapest reliable check:

- Always run `npm run build` before finishing.
- For visual changes, check desktop and mobile viewport screenshots when practical.
- Do not claim deployment success unless the live URL was checked.
