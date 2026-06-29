# Ash IQ Public Website

This repository includes the public GitHub Pages website for Ash IQ by Pine & Ash. The site is a static marketing, brand, and waitlist surface for the coming Ash IQ mobile app.

Ash IQ is the public-facing mobile app product. Pine & Ash is the parent/source brand behind the product. The website should make that relationship clear without making Pine & Ash and Ash IQ feel like competing products.

## What This Site Is

- A public website for Ash IQ by Pine & Ash.
- A static GitHub Pages site with `index.html`, `about.html`, `app.html`, and `contact.html`.
- A place to explain the Ash IQ mobile app direction and collect launch interest through a Google Forms-ready waitlist/contact path.
- A fast, low-maintenance front door that can later point visitors to app-store links when the app is actually available.

## What This Site Is Not

- Not the Ash IQ mobile app.
- Not a login, account, profile, review, saved-list, or recommendation surface.
- Not private internal tooling.
- Not a backend service, database, API, or hosted AI surface.
- Not a tobacco sales app, marketplace, affiliate site, coupon site, retailer directory, checkout flow, delivery flow, pickup flow, or where-to-buy flow.

## Brand Architecture

- `Ash IQ` is the mobile app name and primary public product.
- `Pine & Ash` is the parent/source brand.
- Public-facing phrasing should usually be `Ash IQ by Pine & Ash`.
- The primary tagline is `Know Your Smoke.`

See `docs/BRAND_ARCHITECTURE.md` for the full naming guide.

## Site Structure

```text
index.html
about.html
app.html
contact.html
assets/css/styles.css
assets/js/site-config.js
assets/js/main.js
assets/img/
docs/BRAND_ARCHITECTURE.md
docs/GOOGLE_FORMS_WAITLIST_SETUP.md
docs/WAITLIST_QA_CHECKLIST.md
docs/LAUNCH_CHECKLIST.md
docs/ABACUS_CREATIVE_BRIEF.md
docs/CODEX_BUILD_REPORT.md
docs/GITHUB_PAGES_LAUNCH_REPORT.md
```

The larger product repository still contains the mobile app, backend, scripts, and product documentation. Read `PROJECT_NORTH_STAR.md` before changing product, architecture, API, data model, or UI decisions.

## Preview Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a closer GitHub Pages-style preview, run a local static server from the repo root:

```bash
python -m http.server 8080
```

Then open:

```text
http://127.0.0.1:8080/
```

## Deploy With GitHub Pages

Launch status as of June 29, 2026: local site preparation is complete, but automated GitHub repository creation and GitHub Pages enablement are blocked in this Codex environment because `gh` is not installed/authenticated and the available GitHub connector does not expose repository-creation or Pages-configuration actions.

Local launch commit:

```text
83a93a0d144e9e6dbd7e3cf7c31df786c135593a
```

Target repository:

```text
ash-iq-site
```

Target description:

```text
Public website for Ash IQ by Pine & Ash.
```

1. Push this repository to GitHub.
2. Open the repository settings in GitHub.
3. Go to `Pages`.
4. Set the source to deploy from the branch that contains these root files.
5. Choose the root folder if GitHub asks for a folder.
6. Save and wait for GitHub Pages to publish.
7. Confirm these URLs work:
   - `/`
   - `/about.html`
   - `/app.html`
   - `/contact.html`
   - `/assets/css/styles.css`
   - `/assets/js/main.js`

No build command is required.

## Waitlist And Contact Flow

The site is wired for one public waitlist/contact path:

- Home page CTAs route to `contact.html#waitlist`.
- App page CTAs route to `contact.html#waitlist`.
- Contact page contains the Ash IQ waitlist/contact section.
- The Contact page can either embed the public Google Form or open the public Google Form in a new tab.

A private Google Sheet named `Ash IQ Waitlist Responses` was created and prepared through the Google Drive connector. A live Google Form could not be created from this environment because no Google Forms or Apps Script creation/execution path is available. The Form URLs remain placeholders until Gavin creates the Google Form and links it to the private response Sheet.

Configuration lives in:

```text
assets/js/site-config.js
```

Placeholders:

```js
GOOGLE_FORM_PUBLIC_URL: "GOOGLE_FORM_PUBLIC_URL"
GOOGLE_FORM_EMBED_URL: "GOOGLE_FORM_EMBED_URL"
GOOGLE_SHEET_PRIVATE_NAME: "Ash IQ Waitlist Responses"
```

Only the public Google Form responder URL and optional public embed URL belong in the website. Do not commit Google Form edit links, Google Sheet URLs, credentials, or private sharing links.

Manual setup docs:

- `docs/GOOGLE_FORMS_WAITLIST_SETUP.md`
- `docs/WAITLIST_QA_CHECKLIST.md`

## Test The Waitlist Flow

1. Create `Ash IQ Waitlist & Contact Form` in Google Forms.
2. Link responses to the private Sheet named `Ash IQ Waitlist Responses`.
3. Paste the public Form URL and optional embed URL into `assets/js/site-config.js`.
4. Preview the site locally.
5. Click every waitlist/contact CTA.
6. Submit a test response.
7. Confirm the response appears in the private Google Sheet.
8. Confirm the Sheet URL is not exposed anywhere public.

## Connect A Custom Domain Later

When the domain is ready:

1. Add the custom domain in GitHub Pages settings.
2. Add a root-level `CNAME` file containing only the domain, for example `ashiq.app` or the final Pine & Ash-owned domain.
3. Configure DNS with the domain provider.
4. Enable HTTPS in GitHub Pages after DNS resolves.
5. Update Open Graph URLs and image URLs from relative placeholders to the final absolute domain.

GitHub Pages hosts the website only. Domain registration, DNS, and email hosting are separate services.

## Replace Images

Image assets live in `assets/img/`.

- `pine-and-ash-hero.png` is the current hero/product preview image.
- `favicon.svg` is a placeholder Ash IQ favicon.
- `social-preview.svg` is a placeholder Ash IQ Open Graph/social preview image.

Replace files in place to keep the existing HTML references working. If filenames change, update all page metadata and image references.

## Update Copy

Page copy is edited directly in the HTML files:

- Home: `index.html`
- About: `about.html`
- App: `app.html`
- Contact: `contact.html`

Keep public website copy aligned with `PROJECT_NORTH_STAR.md` and `docs/BRAND_ARCHITECTURE.md`. Do not imply that visitors can create accounts, save cigars, receive recommendations, or use app features on the website.

## Add Analytics Later

Analytics can be added later with a static script snippet in each page head or before the closing body tag. Before adding analytics, decide:

- Which provider to use.
- Whether cookie consent is needed.
- Whether IP anonymization or privacy-preserving analytics are required.
- How analytics will be disclosed in the privacy policy.

Do not add analytics keys or third-party scripts until those decisions are made.

## Email Hosting

GitHub Pages does not provide email hosting, inboxes, SMTP, or contact-form processing.

Handle email separately through a provider such as Google Workspace, Microsoft 365, Fastmail, Proton, Zoho, or another business email host. Email hosting is separate from the Google Forms waitlist/contact flow.

For the waitlist/contact flow, create the Google Form and linked private Sheet described in `docs/GOOGLE_FORMS_WAITLIST_SETUP.md`. This website currently uses clearly marked Google Form placeholders instead of a fake form backend.

## Related Docs

- `docs/BRAND_ARCHITECTURE.md`
- `docs/GOOGLE_FORMS_WAITLIST_SETUP.md`
- `docs/WAITLIST_QA_CHECKLIST.md`
- `docs/LAUNCH_CHECKLIST.md`
- `docs/ABACUS_CREATIVE_BRIEF.md`
- `docs/CODEX_BUILD_REPORT.md`
- `docs/GITHUB_PAGES_LAUNCH_REPORT.md`
