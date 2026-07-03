# OpenCode / ChatGPT Edit Guide

Use this when asking OpenCode or ChatGPT to make small future updates.

## Standing Instruction

Do not redesign the TCOG website. The design is locked. Only make scoped fixes, content changes, responsive corrections, logo/asset updates, SEO/accessibility fixes, or build/deploy fixes.

## Files To Read First

1. `AGENTS.md`
2. `CHANGELOG.md`
3. The one file needed for the change.

Most edits are in:

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`

## Required Workflow

1. Make the smallest patch.
2. Do not add packages unless required.
3. Run `npm run build`.
4. Add one short `CHANGELOG.md` bullet for meaningful changes.
5. Commit and push to `main`.

## Logo Assets

- Header: `public/assets/tcog-logo-transparent-navy.png`
- Footer/dark background: `public/assets/tcog-logo-transparent-white.png`
- Do not use `tcog-dark-logo.png` directly in the site; it has a baked checkerboard background.
- Do not use logo variants that say `General Headquarters` or include the `One God • One Faith • One Mind` tagline.
