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

## GitHub Pages Launch Attempt

Automated launch was attempted on June 29, 2026.

Repo created or reused: no.

Reason:

- The local folder was not a Git repository at the start of the launch attempt.
- A local Git repository was initialized on `main`.
- No existing accessible `ash-iq-site` repository was found through the GitHub connector.
- `gh` is not installed in the shell.
- No GitHub token is exposed in the environment.
- Git global `user.name` and `user.email` are not configured.
- The available GitHub connector exposes repository search/inspection and file operations, but no repository-create or GitHub Pages-enable action.

Target repository:

```text
ash-iq-site
```

Target repository description:

```text
Public website for Ash IQ by Pine & Ash.
```

Local launch content commit hash:

```text
8ed1f78f6ccd4dafbc384b33e46f40cd0f5a9426
```

Remote commit status: not pushed because no remote repository could be created or reused from this environment.

GitHub Pages status: not enabled.

Live URL: pending.

Pages source configuration to use after repo creation:

- Branch: `main`
- Folder: repository root (`/`)
- Build command: none

Launch report:

```text
docs/GITHUB_PAGES_LAUNCH_REPORT.md
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

Creation path audit:

- Google Drive/Sheets connector: available. Used successfully to create and prepare the private response Sheet.
- Google Forms connector: unavailable. Tool discovery exposed no Forms creation action.
- Google AI tooling for Form creation: unavailable. Tool discovery exposed no Google AI path for Forms or Apps Script creation.
- Apps Script connector: unavailable. Tool discovery exposed no Apps Script create/execute action.
- Apps Script API direct call: blocked with `401 Unauthorized`.
- Google Forms API direct call: blocked with `401 Unauthorized`.
- Local `gcloud` credentials: unavailable.
- Local `clasp` credentials/CLI: unavailable.
- Browser-based authenticated creation: unavailable because no local browser command was present.

Created:

- Private Google Sheet named `Ash IQ Waitlist Responses`.
- Sheet tab named `Responses`.
- Recommended response columns.
- Internal status dropdown values.

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
- JavaScript syntax checking was skipped because no local or bundled `node.exe` was available in this shell.
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
