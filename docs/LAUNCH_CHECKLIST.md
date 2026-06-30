# Ash IQ Public Website Launch Checklist

Use this checklist before publishing the public GitHub Pages website for Ash IQ by Pine & Ash.

## GitHub Pages Setup

- Confirm `index.html`, `about.html`, `app.html`, and `contact.html` exist at the repository root.
- Confirm assets load from `assets/css/`, `assets/js/`, and `assets/img/`.
- In GitHub repository settings, enable GitHub Pages.
- Set the Pages source to the branch and root folder containing the static site.
- Wait for the Pages build to finish.
- Visit the published GitHub Pages URL and test each page.
- Confirm no build step or backend service is required.

## Brand Architecture Checklist

- Confirm Ash IQ is the app name and the main product signal.
- Confirm Pine & Ash appears as the source/parent brand, not as the app name.
- Confirm `Ash IQ by Pine & Ash` appears naturally where brand context is needed.
- Confirm `Know Your Smoke.` is the primary tagline.
- Confirm no page says `the Pine & Ash app`.

## Custom Domain Checklist

- Decide whether the launch domain will be an apex domain, subdomain, or both.
- Add the custom domain in GitHub Pages settings.
- Add a root-level `CNAME` file only when the final domain is known.
- Enable HTTPS after DNS resolves.
- Update canonical and Open Graph URLs to use the final absolute domain.
- Confirm the domain does not imply sales, marketplace, or where-to-buy behavior.

## DNS Checklist

- Add GitHub Pages DNS records through the domain registrar or DNS host.
- Confirm apex domain records point to GitHub Pages IPs if using the root domain.
- Confirm `www` uses a CNAME if using `www`.
- Verify DNS propagation with the final domain.
- Confirm HTTPS certificate issuance in GitHub Pages.
- Document who controls registrar access and DNS access.

## Email Hosting Checklist

- Choose a business email provider separately from GitHub Pages.
- Configure MX, SPF, DKIM, and DMARC records.
- Create the public contact inbox, such as `hello@pineandash.app`.
- Test sending and receiving from the contact inbox.
- Update `contact.html` after the inbox is real.
- Decide whether press, support, and waitlist should use separate inboxes.

## Contact/Waitlist Form Decision

- Run `docs/tools/create_ash_iq_google_form_apps_script.js` through Google Apps Script, or create the Google Form named `Ash IQ Waitlist & Contact Form` by hand if the script cannot be run.
- Link responses to the private Google Sheet named `Ash IQ Waitlist Responses`.
- Confirm the existing prepared Sheet is used, or document if Google Forms creates a new response tab/file.
- Confirm the Form accepts public responses.
- Confirm one test response appears in the linked Sheet.
- Paste only the public responder URL and optional embed URL into `assets/js/site-config.js`.
- Confirm spam protection, privacy terms, export format, and notification routing.
- Do not add a fake form action.
- Do not publish the response Sheet URL.
- Do not commit Google Form edit links.
- Do not collect account passwords, profile data, cigar reviews, saved lists, or app-only data through the website.
- Run `docs/WAITLIST_QA_CHECKLIST.md` before launch.

## Analytics Decision

- Choose whether analytics are needed at launch.
- Prefer privacy-conscious analytics if possible.
- Document the analytics provider, owner account, and retention policy.
- Add cookie/privacy disclosure if required.
- Confirm analytics do not collect app credentials, personal cigar notes, or protected mobile app data.

## Social Preview Checklist

- Replace `assets/img/social-preview.svg` if a final branded image is ready.
- Confirm every page has title, description, Open Graph, and Twitter metadata.
- Update Open Graph image URLs to absolute final-domain URLs before public social sharing.
- Test links in social preview validators after the site is live.
- Confirm preview copy says Ash IQ is coming soon and does not imply website accounts are available.

## Mobile QA Checklist

- Test Home, About, App, and Contact on a narrow phone viewport.
- Confirm the mobile menu opens, closes, and links correctly.
- Confirm text does not overlap or overflow.
- Confirm hero image crops acceptably.
- Confirm focus states are visible with keyboard navigation.
- Confirm tap targets are comfortable.
- Confirm page weight is acceptable on mobile data.

## Final Pre-Launch Review Checklist

- Read `PROJECT_NORTH_STAR.md` and confirm the site does not conflict.
- Read `docs/BRAND_ARCHITECTURE.md` and confirm naming is consistent.
- Confirm private internal tooling is not exposed or linked.
- Confirm there is no login button, account creation, user profile UI, database logic, internal tooling, or backend service.
- Confirm there are no sales, checkout, affiliate links, coupons, retailer ordering, delivery, pickup, or where-to-buy flows.
- Confirm waitlist/contact pending states are labeled clearly.
- Confirm all internal links work.
- Confirm the favicon loads.
- Confirm image alt text is present where needed.
- Confirm footer copy is consistent.
- Confirm final email, domain, analytics, and social decisions are documented.
