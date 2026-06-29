# GitHub Pages Launch Report

## Launch Date

June 29, 2026

## GitHub Repository

Status: blocked before repository creation.

Target repository name:

```text
ash-iq-site
```

Target description:

```text
Public website for Ash IQ by Pine & Ash.
```

Repository URL: pending.

## Live GitHub Pages URL

Status: pending.

GitHub Pages URL: pending until the repository exists and Pages is enabled.

## Pages Source Configuration

Recommended configuration:

- Source: deploy from a branch.
- Branch: `main`.
- Folder: repository root (`/`).
- Build command: none.

The site is plain static HTML/CSS/JS at the repository root, so no framework build or `docs/` deployment source is required.

## Branch Deployed

Pending. Target branch: `main`.

Local launch commit:

```text
8ed1f78f6ccd4dafbc384b33e46f40cd0f5a9426
```

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
- Contact page state: polished placeholder with clear setup-pending copy.
- Google Sheet private URL exposed publicly: no.
- Google Form edit URL exposed publicly: no.

The private Sheet has been created and prepared, but a live Google Form could not be created automatically from this environment because the available connector set does not expose Google Forms creation, Apps Script execution, or authenticated Forms API access.

## Known Placeholders

- `GOOGLE_FORM_PUBLIC_URL` in `assets/js/site-config.js`
- `GOOGLE_FORM_EMBED_URL` in `assets/js/site-config.js`
- Final custom domain.
- Final contact email/social links.
- Final privacy policy.
- Final social preview artwork if Gavin wants a non-placeholder brand image.

## QA Checklist Results

- Home, About, App, and Contact files exist: passed.
- Navigation links are relative and valid: passed.
- Home and App CTAs route to `contact.html#waitlist`: passed.
- Contact waitlist section renders a placeholder when Form URLs are not configured: passed by code inspection.
- Public assets use relative paths: passed.
- Public HTML/JS/CSS scanned for local Windows paths: passed.
- Public HTML/JS/CSS scanned for private Google Sheet URLs: passed.
- Public HTML/JS/CSS scanned for Google Form edit URLs: passed.
- Public HTML scanned for outdated `Pine & Ash app` product naming: passed.
- Public HTML scanned for command-center/admin feature exposure: passed.
- Backend/auth/database/profile behavior added: no.
- Browser-based live GitHub Pages QA: blocked until repository creation and Pages deployment are available.

## GitHub Launch Blocker

Automated GitHub launch is blocked in this environment:

- Local folder was not a Git repository at the start of the launch attempt.
- A local Git repository and launch commit now exist on `main`.
- No existing accessible `ash-iq-site` repository was found.
- `gh` is not installed in the shell.
- No GitHub token is exposed in the environment.
- Git global user identity is not configured.
- The available GitHub connector exposes repository search/inspection/file operations, but no repository-create or GitHub Pages-enable action.

## Remaining Gavin Decisions

- Create or authorize creation of the public `ash-iq-site` repository if Codex cannot receive an authenticated repo-creation path.
- Enable GitHub Pages from `main` branch root after the repository is pushed.
- Decide whether to connect a custom domain now or after initial launch.
- Create the live Google Form and connect it to the private Sheet, or provide an authenticated Google Forms/Apps Script path.
- Replace the Google Form placeholders in `assets/js/site-config.js`.
- Add final contact inbox, social links, privacy policy, and analytics only after those decisions are made.
