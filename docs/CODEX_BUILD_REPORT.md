# Codex Build Report: Ash IQ Public Website

## Files Created

- `index.html`
- `about.html`
- `app.html`
- `contact.html`
- `assets/css/styles.css`
- `assets/js/site-config.js`
- `assets/js/main.js`
- `assets/img/pine-and-ash-hero.png`
- `assets/img/favicon.svg`
- `assets/img/social-preview.svg`
- `docs/LAUNCH_CHECKLIST.md`
- `docs/ABACUS_CREATIVE_BRIEF.md`
- `docs/CODEX_BUILD_REPORT.md`
- `docs/BRAND_ARCHITECTURE.md`
- `docs/GOOGLE_FORMS_WAITLIST_SETUP.md`
- `docs/WAITLIST_QA_CHECKLIST.md`
- `docs/GITHUB_PAGES_LAUNCH_REPORT.md`
- `docs/tools/create_ash_iq_google_form_apps_script.js`

## Files Changed

- `index.html`
- `about.html`
- `app.html`
- `contact.html`
- `assets/css/styles.css`
- `assets/js/site-config.js`
- `assets/js/main.js`
- `assets/img/favicon.svg`
- `assets/img/social-preview.svg`
- `.gitignore`
- `.nojekyll`
- `README.md`
- `docs/CODEX_BUILD_REPORT.md`
- `docs/GITHUB_PAGES_LAUNCH_REPORT.md`
- `docs/LAUNCH_CHECKLIST.md`
- `docs/BRAND_ARCHITECTURE.md`
- `DEVELOPMENT_LOG.md`
- `docs/tools/create_ash_iq_google_form_apps_script.js`

## GitHub Pages Launch

Automated launch was completed on June 29, 2026.

- Repository created: yes.
- Repository URL: `https://github.com/MCCreations2026/ash-iq-site`
- Repository visibility: public.
- Remote: `origin`
- Pages enabled: yes.
- Pages source: `main` branch, repository root `/`.
- Build command: none.
- Live URL: `https://mccreations2026.github.io/ash-iq-site/`
- GitHub Pages status: built.

Published site commit validated before the launch-report commit:

```text
522636f4785f45903028b60d87942bbfd7d9f4ef
```

Launch reports:

```text
docs/GITHUB_PAGES_LAUNCH_REPORT.md
docs/LAUNCH_REPORT.md
```

## Naming And Brand Changes

- Made `Ash IQ` the primary public product name.
- Positioned `Pine & Ash` as the parent/source brand.
- Added `Ash IQ by Pine & Ash` where brand context is useful.
- Integrated the primary tagline: `Know Your Smoke.`
- Replaced old public-app language that treated Pine & Ash as the app name.
- Added `docs/BRAND_ARCHITECTURE.md` to document the naming rules and product boundaries.

## Waitlist And Contact Implementation

- Added `assets/js/site-config.js` as the reusable public form configuration location.
- Added pending integration values:
  - `GOOGLE_FORM_PUBLIC_URL`
  - `GOOGLE_FORM_EMBED_URL`
  - `GOOGLE_SHEET_PRIVATE_NAME`
- Routed Home and App page waitlist CTAs to `contact.html#waitlist`.
- Rebuilt the Contact page around one dedicated Ash IQ waitlist/contact section.
- Added support for either a Google Form iframe embed or a large public Google Form button.
- Kept the pending form state polished and explicit when no live Form URL is configured.
- Did not expose any Google Sheet URL.
- Did not add a backend, authentication, profile system, database, or fake submission behavior.

## Google Form And Sheet Creation Status

Automated Google Form creation was attempted and blocked.

## EZ Estimates Form Workflow Comparison

EZ Estimates repo/folder inspected:

```text
Estimation software
Estimation software/public-launch-site
```

Files searched and inspected included:

```text
tools/google-forms/create-ez-estimates-demo-form.gs
public-launch-site/site-config.js
docs/free-launch/google-form-setup.md
docs/free-launch/demo-request-flow.md
docs/free-launch/internal-demo-lead-tracker.md
README.md
public-launch-site/*.html
```

Exact EZ Estimates method discovered:

- EZ used Google Apps Script.
- The script used `FormApp.create('EZ Estimates Concrete Demo Request')`.
- The script used `SpreadsheetApp.create('EZ Estimates Concrete Demo Leads')`.
- The script linked responses with `form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId())`.
- The script logged the public responder URL, edit URL, and response spreadsheet URL.
- The public responder URL was stored in `public-launch-site/site-config.js`.
- The Form was opened in a new tab from the website. No embed URL was used.
- The private Sheet URL was documented in internal docs, not committed into public website config.

Same method attempted for Ash IQ:

- Added `docs/tools/create_ash_iq_google_form_apps_script.js`, modeled on the EZ Apps Script workflow.
- Checked Google Drive connector capabilities; it can work with Drive and Sheets, but not Google Forms or Apps Script execution.
- Searched Google Drive for an existing Ash IQ Form; none was found.
- Confirmed the private Sheet named `Ash IQ Waitlist Responses` exists and has the expected header row.
- Probed the Apps Script API directly; it returned `401 Unauthorized`.
- Probed the Forms API directly; it returned `401 Unauthorized`.
- Retried `clasp` with the bundled Node runtime on PATH; `clasp` ran and reported version `3.3.0`.
- Checked `clasp` authorization; it reported `Not logged in.`
- Ran `clasp login --no-localhost`; it generated the Google OAuth authorization URL and then stopped at the required browser-returned URL/code prompt.

Result:

- The EZ method was identified and reproduced as far as this environment can go without Google OAuth approval.
- The remaining blocker is authentication/user approval for Gavin's Google account, not missing script logic.
- Blocker category: Google authentication and permission approval for Apps Script/Drive/Form scopes.
- Evidence: connector lacks Forms/Apps Script actions, direct APIs returned `401 Unauthorized`, and `clasp` reached the OAuth prompt but could not complete unattended.

Creation path audit:

- Google Drive/Sheets connector: available. Used successfully to create and prepare the private response Sheet.
- Google Forms connector: unavailable. Tool discovery exposed no Forms creation action.
- Google AI tooling for Form creation: unavailable. Tool discovery exposed no Google AI path for Forms or Apps Script creation.
- Apps Script connector: unavailable. Tool discovery exposed no Apps Script create/execute action.
- Apps Script API direct call: blocked with `401 Unauthorized`.
- Google Forms API direct call: blocked with `401 Unauthorized`.
- Local `gcloud` credentials: unavailable.
- Local `clasp` CLI: available through bundled Node and pnpm.
- Local `clasp` credentials: unavailable; `clasp` reported `Not logged in`.
- Browser/OAuth authenticated creation: blocked pending Gavin approval of the Google OAuth authorization flow.

Created:

- Private Google Sheet named `Ash IQ Waitlist Responses`.
- Sheet tab named `Responses`.
- Recommended response columns.
- Internal status dropdown values.
- Apps Script generator: `docs/tools/create_ash_iq_google_form_apps_script.js`.

Not created:

- Google Form named `Ash IQ Waitlist & Contact Form`.
- Linked Google Form response destination.
- Public responder URL.
- Embed URL.

Documented remaining setup instead:

- Google Form name: `Ash IQ Waitlist & Contact Form`
- Private linked Sheet name: `Ash IQ Waitlist Responses`
- Setup guide: `docs/GOOGLE_FORMS_WAITLIST_SETUP.md`
- QA guide: `docs/WAITLIST_QA_CHECKLIST.md`

Public Form URLs intentionally left empty:

```js
GOOGLE_FORM_PUBLIC_URL: ""
GOOGLE_FORM_EMBED_URL: ""
```

Public Form responder URL configured: no.

Embed URL configured: no.

Private Sheet URL exposed publicly: no.

Form edit URL exposed publicly: no.

Test response submitted: no, because the Google Form was not created.

## Design Choices Made

- Preserved the warm, grounded visual system using cedar, ash, charcoal, off-white, muted brass, evergreen, and oxblood accents.
- Kept the Home hero full-width and app-focused with Ash IQ as the first-viewport signal.
- Used a generated hero image showing a mobile app mockup on a refined workspace.
- Updated favicon and social preview assets to use Ash IQ/AIQ language.
- Kept card radii restrained and avoided cluttered lounge tropes, smoke graphics, fake luxury claims, and dark-heavy styling.
- Preserved visible keyboard focus states, semantic headings, image alt text, skip link, and accessible navigation labels.

## Copy Choices Made

- Used the approved Abacus package as the source for the new public messaging.
- Selected `Know Your Smoke.` as the primary tagline.
- Used the strongest approved copy around journaling, favorites, want-to-try lists, palate tracking, and launch waitlist.
- Framed discovery as developing/coming over time, not as a fully shipped website feature.
- Removed public mentions of private/internal tooling from the HTML pages.
- Avoided copy that conflicts with the North Star, including retailer, purchase, price-tracking, checkout, coupon, or where-to-buy positioning.

## Architecture Choices Made

- Kept the website static: HTML, CSS, and small vanilla JavaScript only.
- Placed pages at the repository root so GitHub Pages can publish without a build step.
- Kept all styling in `assets/css/styles.css`.
- Kept all browser behavior in `assets/js/main.js`, limited to mobile navigation and footer copyright text.
- Replaced the previous mailto waitlist/contact path with a Google Forms-ready pending path.
- Added pending-integration comments only where future waitlist-form and app-store-link integrations should go.
- Used relative links so the site works locally and on GitHub Pages project URLs.

## What Was Intentionally Not Built

- No authentication.
- No user accounts.
- No user profiles on the website.
- No database logic.
- No contact form backend.
- No public admin/internal tooling surface.
- No recommendation runtime inside the website.
- No mobile app functionality inside the website.
- No hosted AI dependency.
- No tobacco sales, checkout, affiliate links, coupons, retailer ordering, delivery, pickup, or where-to-buy flow.

## Image Generation Note

The hero image was generated with the built-in image generation tool and copied into the project as:

```text
assets/img/pine-and-ash-hero.png
```

Prompt summary: realistic editorial product mockup of a smartphone showing an abstract cigar journal and discovery app UI on a warm cedar-toned workspace, with no readable text, no people, no smoke, no retailer cues, no purchase cues, and no sales imagery.

## How To Preview

Open `index.html` directly in a browser, or run:

```bash
python -m http.server 8080
```

Then visit:

```text
the local server URL printed by the command
```

## How To Deploy

1. Push the repository to GitHub.
2. Enable GitHub Pages in repository settings.
3. Deploy from the branch and root folder containing `index.html`.
4. Confirm Home, About, App, Contact, CSS, JS, and images load from the published URL.

## Validation Run

- Static validation passed for pages, metadata, assets, and internal links.
- Each public HTML page has one `h1`.
- Required SEO, Open Graph, and Twitter metadata are present on every public page.
- Public HTML pages were scanned for old app naming, internal-tooling exposure, and disallowed commerce language.
- Public HTML and JavaScript were scanned to confirm no Google Sheet URL or private Google Form edit URL was committed.
- Remaining restricted terms appear only in developer/support docs as explicit guardrails or conflict notes.
- JavaScript syntax checking was initially skipped because `node.exe` was not on PATH; later inspection found bundled Node in the local Codex runtime and the Apps Script generator passed `node --check`.
- Browser screenshot QA was not run because no local browser command or Playwright package is available in this shell.

## Remaining Decisions For Gavin

- Final public domain.
- Final public contact email and email hosting provider.
- Create the live Google Form and link it to the already-created private Google Sheet.
- Paste the public responder URL and optional embed URL into `assets/js/site-config.js`.
- Submit and verify a test response using `docs/WAITLIST_QA_CHECKLIST.md`.
- Final social handles.
- Final founder anecdote or signature note.
- Final social preview artwork.
- Whether to add privacy-conscious analytics.
- Whether to add a root `CNAME` file after the custom domain is chosen.

## North Star Alignment

Potential conflicts in the Abacus package were identified around purchase, retailer, shop, price, and buying language. Those lines were not implemented in public copy. The published pages support Ash IQ as the future mobile app and do not introduce sales, retailer, checkout, coupon, affiliate, marketplace, delivery, pickup, or where-to-buy behavior.
