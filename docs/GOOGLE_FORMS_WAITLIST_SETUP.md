# Google Forms Waitlist Setup

This guide explains how to connect the static Ash IQ by Pine & Ash website to a public Google Form and private Google Sheet.

The website stays static on GitHub Pages. Visitors interact only with the public Google Form or an embedded public Google Form. The response Sheet is private/internal and must not be published or linked from the website.

## Purpose

The form collects Ash IQ waitlist, early testing, business, partnership, press/media, and general contact submissions.

Joining the waitlist does not create an Ash IQ app account. Full profiles, cigar logs, saved lists, favorites, and recommendations will live inside the future Ash IQ mobile app.

## Required Names

Google Form:

```text
Ash IQ Waitlist & Contact Form
```

Linked Google Sheet:

```text
Ash IQ Waitlist Responses
```

## EZ Estimates Workflow Comparison

The EZ Estimates public site did not use a special Google Forms connector. Its workflow was:

1. Store a Google Apps Script generator in the repo.
2. Open `https://script.google.com` while signed into Gavin's Google account.
3. Paste and run the generator.
4. Approve Google permissions.
5. The script created the Google Form, created the Google Sheet, linked responses with `form.setDestination(...)`, and logged the public responder URL.
6. The public responder URL was copied into the static website config.

EZ files inspected:

```text
tools/google-forms/create-ez-estimates-demo-form.gs
public-launch-site/site-config.js
docs/free-launch/google-form-setup.md
docs/free-launch/demo-request-flow.md
docs/free-launch/internal-demo-lead-tracker.md
```

Ash IQ now has the matching generator:

```text
docs/tools/create_ash_iq_google_form_apps_script.js
```

## Current Automation Status

Created or confirmed:

- Private Google Sheet named `Ash IQ Waitlist Responses`.
- Prepared public website config location: `assets/js/site-config.js`.
- Apps Script generator matching the EZ Estimates workflow.

Not yet completed:

- Google Form named `Ash IQ Waitlist & Contact Form`.
- Form-to-Sheet response destination link.
- Public responder URL.
- Embed URL.
- Test response confirmation.

Evidence from this environment:

- Google Drive connector can search Drive and inspect/create Sheets, Docs, Slides, and folders.
- Google Drive connector does not expose Google Forms creation.
- Google Drive connector does not expose Apps Script create/execute.
- Drive search found `Ash IQ Waitlist Responses`.
- Drive search found no Google Form named `Ash IQ Waitlist & Contact Form`.
- Direct Google Apps Script API probe returned `401 Unauthorized`.
- Direct Google Forms API probe returned `401 Unauthorized`.
- `clasp` works through the bundled Node runtime, but is not logged in.
- `clasp login --no-localhost` produced the Google OAuth authorization URL and then stopped at the required "paste the browser authorization URL/code" prompt.

Conclusion: the same Apps Script workflow used for EZ Estimates is available as an assisted path, but Codex cannot complete the Google permission approval unattended in this environment. Gavin must authorize the Google account or run the prepared script in Apps Script.

## Website Configuration

Public form links live in:

```text
assets/js/site-config.js
```

Current pending configuration:

```js
GOOGLE_FORM_PUBLIC_URL: ""
GOOGLE_FORM_EMBED_URL: ""
GOOGLE_SHEET_PRIVATE_NAME: "Ash IQ Waitlist Responses"
```

Only paste public/published Google Form URLs into the public website. Do not paste Google Form edit links. Do not paste the private Google Sheet URL.

## Preferred Setup: Apps Script

Use this path to reproduce the EZ Estimates workflow.

1. Open `docs/tools/create_ash_iq_google_form_apps_script.js`.
2. Copy the full script.
3. Go to `https://script.google.com`.
4. Create a new Apps Script project.
5. Paste the full script into the editor.
6. Save the project.
7. Run `createAshIqWaitlistAndContactForm`.
8. Approve the requested Google permissions.
9. Open the execution logs.
10. Copy only the `Published responder form URL` into `GOOGLE_FORM_PUBLIC_URL`.
11. Copy only the `Public embed URL` into `GOOGLE_FORM_EMBED_URL` if embedding the form.
12. Do not copy the edit URL or Sheet URL into public website files.

The script creates or reuses the Sheet named `Ash IQ Waitlist Responses`, links the Form response destination to it, creates a `Response Review` tab, and writes internal links into a private `Form Links` tab.

## Optional CLI Setup With Clasp

This path needs Gavin's Google OAuth approval.

```powershell
pnpm dlx @google/clasp login --no-localhost
```

If `node` or `pnpm` is not on PATH, add the local Codex-bundled Node and pnpm directories to PATH first. When `clasp` prints the Google authorization URL, open it in the browser, approve the requested permissions, and paste the returned browser URL/code into the terminal prompt. After login, a temporary Apps Script project can be created and the generator can be pushed/run.

Do not commit `.clasprc.json`, OAuth tokens, temporary `.clasp.json` files, credentials, Form edit URLs, or private Sheet URLs.

## Form Fields

Create these fields in Google Forms. The Apps Script generator creates them automatically.

### 1. Full Name

- Type: Short answer
- Required: Yes

### 2. Email Address

- Type: Short answer
- Required: Yes
- Validation: Text is email address

### 3. Phone Number

- Type: Short answer
- Required: No

### 4. City / State

- Type: Short answer
- Required: No

### 5. What best describes you?

- Type: Multiple choice
- Required: Yes
- Options:
  - Casual cigar smoker
  - Regular cigar smoker
  - New to cigars
  - Cigar lounge/customer
  - Retailer/lounge owner
  - Media/partnership inquiry
  - Other

### 6. What are you interested in?

- Type: Checkboxes
- Required: Yes
- Options:
  - Joining the Ash IQ waitlist
  - Testing the app early
  - Following launch updates
  - Business or partnership inquiry
  - Press/media inquiry
  - General contact

### 7. What cigar features matter most to you?

- Type: Checkboxes
- Required: No
- Options:
  - Strength
  - Flavor notes
  - Wrapper
  - Size/vitola
  - Price
  - Brand
  - Country/region
  - Pairings
  - Personal ratings/reviews
  - Recommendations

`Price` is included only as waitlist research input. Do not turn it into price-shopping, retailer, coupon, checkout, or where-to-buy functionality.

### 8. Message

- Type: Paragraph
- Required: No

### 9. Consent

- Type: Checkboxes
- Required: Yes
- Text:

```text
I agree to be contacted by Pine & Ash about Ash IQ updates, waitlist access, and related launch information.
```

## Recommended Response Sheet Columns

Google Forms creates a response tab automatically from the form questions. The Apps Script generator also creates a private `Response Review` tab with these internal follow-up columns:

- Timestamp
- Full Name
- Email Address
- Phone Number
- City / State
- User Type
- Interest
- Cigar Features
- Message
- Consent
- Source Page
- Status
- Notes
- Follow-Up Owner
- Follow-Up Date

Recommended internal status values:

- New
- Reviewed
- Early Access Candidate
- Partnership Lead
- Press/Media
- Not a Fit
- Contacted

`Source Page` can be left blank initially because the current website routes all public CTAs through `contact.html#waitlist`.

## Public Website Behavior

- Home page CTAs route to `contact.html#waitlist`.
- App page CTAs route to `contact.html#waitlist`.
- Contact page shows the dedicated waitlist/contact section.
- If `GOOGLE_FORM_EMBED_URL` is configured, the Contact page embeds the form.
- If only `GOOGLE_FORM_PUBLIC_URL` is configured, Contact page buttons open the public form in a new tab.
- If neither URL is configured, the Contact page shows a setup-pending form state.

## Do Not Publish

- Do not publish the response Sheet URL.
- Do not publish Google Form edit links.
- Do not commit `.clasprc.json`, OAuth tokens, credentials, API keys, or private sharing links.
- Do not add a custom backend for this flow.
- Do not add website login, profile, or app-account behavior.

## Final Test Checklist

- Open the public responder URL.
- Confirm the Form title is `Ash IQ Waitlist & Contact Form`.
- Confirm the Form accepts responses.
- Submit a test response.
- Confirm the response appears in `Ash IQ Waitlist Responses`.
- Confirm the Sheet is private.
- Paste the public responder URL into `GOOGLE_FORM_PUBLIC_URL`.
- Paste the public embed URL into `GOOGLE_FORM_EMBED_URL` if embedding.
- Preview the site locally or on GitHub Pages.
- Click Home page `Join the Waitlist`.
- Click App page `Join the Ash IQ Waitlist`.
- Open Contact page `Join the Ash IQ Waitlist`.
- Confirm no private edit links or Sheet URLs are visible in page source.
