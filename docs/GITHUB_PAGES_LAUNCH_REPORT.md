# GitHub Pages Launch Report

## Launch Date

June 29, 2026

## GitHub Repository

- Repository: `MCCreations2026/ash-iq-site`
- Repository URL: `https://github.com/MCCreations2026/ash-iq-site`
- Visibility: public
- Description: `Public website for Ash IQ by Pine & Ash.`

## Live GitHub Pages URL

```text
https://mccreations2026.github.io/ash-iq-site/
```

GitHub Pages status: built.

## Pages Source Configuration

- Source: deploy from a branch.
- Branch: `main`.
- Folder: repository root (`/`).
- Build command: none.
- HTTPS: enforced.

The site is plain static HTML/CSS/JS at the repository root, so no framework build or `docs/` deployment source is required.

## Commit

Published site commit validated before the launch-report commit:

```text
522636f4785f45903028b60d87942bbfd7d9f4ef
```

The final report commit is recorded in the final Codex response because a Git commit cannot contain its own final SHA.

## Files And Assets Included

Website files:

- `index.html`
- `about.html`
- `app.html`
- `contact.html`
- `.nojekyll`

Assets:

- `assets/css/styles.css`
- `assets/js/site-config.js`
- `assets/js/main.js`
- `assets/img/favicon.svg`
- `assets/img/pine-and-ash-hero.png`
- `assets/img/social-preview.svg`

Launch docs:

- `README.md`
- `docs/ABACUS_CREATIVE_BRIEF.md`
- `docs/BRAND_ARCHITECTURE.md`
- `docs/CODEX_BUILD_REPORT.md`
- `docs/GITHUB_PAGES_LAUNCH_REPORT.md`
- `docs/GOOGLE_FORMS_WAITLIST_SETUP.md`
- `docs/LAUNCH_CHECKLIST.md`
- `docs/LAUNCH_REPORT.md`
- `docs/WAITLIST_QA_CHECKLIST.md`

## Final Brand Naming Confirmed

- Public product: Ash IQ.
- Parent/source brand: Pine & Ash.
- Public phrase: Ash IQ by Pine & Ash.
- Primary public website tagline: Know Your Smoke.
- The website is a marketing/waitlist/contact site, not the mobile app.

## Waitlist/Form Status

- Private response Sheet name: `Ash IQ Waitlist Responses`.
- Public Form URL configured: no.
- Embed URL configured: no.
- Contact page state: polished pending form state with clear setup-pending copy.
- Google Sheet private URL exposed publicly: no.
- Google Form edit URL exposed publicly: no.
- Fake submission behavior: no.

The private Sheet has been created and prepared, but a live Google Form could not be created automatically from this environment because the available connector set does not expose Google Forms creation, Apps Script execution, or authenticated Forms API access.

## Known Pending Items

- Public Google Form URL in `assets/js/site-config.js`.
- Public Google Form embed URL in `assets/js/site-config.js`.
- Final custom domain.
- Final contact email/social links.
- Final privacy policy.
- Optional final social preview artwork if Gavin wants a different brand image.

## QA Checklist Results

- Home, About, App, and Contact files exist: passed.
- Navigation links are relative and valid: passed.
- Home and App CTAs route to `contact.html#waitlist`: passed.
- Contact waitlist section renders a pending form state when Form URLs are not configured: passed.
- Public assets use relative paths: passed.
- Public HTML/JS/CSS scanned for local Windows paths: passed.
- Public HTML/JS/CSS scanned for private Google Sheet URLs: passed.
- Public HTML/JS/CSS scanned for Google Form edit URLs: passed.
- Public HTML scanned for outdated `Pine & Ash app` product naming: passed.
- Public HTML scanned for command-center/admin feature exposure: passed.
- Backend/auth/database/profile behavior added: no.
- Live GitHub Pages homepage loaded with HTTP 200: passed.
- Live About, App, and Contact pages loaded with HTTP 200: passed.
- Live CSS, JS, favicon, social preview, and hero image assets loaded with HTTP 200: passed.
- GitHub Pages API reported `status: built`: passed.
- Headless Chrome mobile and desktop screenshots were generated: passed.

## Remaining Gavin Decisions

- Create the live Google Form and connect it to the private Sheet.
- Replace the blank Google Form URL values in `assets/js/site-config.js`.
- Decide whether to connect a custom domain now or after initial launch.
- Add final contact inbox, social links, privacy policy, and analytics only after those decisions are made.
