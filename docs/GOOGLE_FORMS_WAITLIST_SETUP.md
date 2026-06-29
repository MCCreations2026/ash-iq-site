# Google Forms Waitlist Setup

This guide explains how to connect the static Ash IQ by Pine & Ash website to a public Google Form and private Google Sheet.

## Purpose

The form collects Ash IQ waitlist, early testing, business, partnership, press/media, and general contact submissions.

The website stays static on GitHub Pages. Visitors interact only with the public Google Form or an embedded public Google Form. The response Sheet is private/internal and must not be published or linked from the website.

## Required Names

Google Form name:

```text
Ash IQ Waitlist & Contact Form
```

Linked Google Sheet name:

```text
Ash IQ Waitlist Responses
```

## Current Automation Status

Codex attempted automated creation in this environment.

Created:

- Private Google Sheet named `Ash IQ Waitlist Responses`.
- Sheet tab named `Responses`.
- Header row with the recommended columns.
- Status dropdown values for internal follow-up.

Not created:

- Google Form named `Ash IQ Waitlist & Contact Form`.
- Form-to-Sheet response destination link.
- Public responder URL.
- Embed URL.

Why the Form is not created here:

- Google Drive connector is available and can create Sheets, Docs, Slides, folders, and edit spreadsheet content.
- No Google Forms connector action is available.
- No Google Apps Script connector action is available.
- Direct Google Forms API probe returned `401 Unauthorized`.
- Direct Google Apps Script API probe returned `401 Unauthorized`.
- No local `gcloud` credentials, `clasp` credentials, Apps Script CLI, or browser binary were available.
- Google AI/tool discovery did not expose a Google Forms or Apps Script creation tool.

The remaining step is to create the Form manually in Google Forms and link it to the existing private Sheet by name.

## Website Configuration Placeholders

Public form links live in:

```text
assets/js/site-config.js
```

Placeholders:

```js
GOOGLE_FORM_PUBLIC_URL: "GOOGLE_FORM_PUBLIC_URL"
GOOGLE_FORM_EMBED_URL: "GOOGLE_FORM_EMBED_URL"
GOOGLE_SHEET_PRIVATE_NAME: "Ash IQ Waitlist Responses"
```

Only paste public/published Google Form URLs into the public website. Do not paste Google Form edit links. Do not paste the private Google Sheet URL.

## Form Fields

Create these fields in Google Forms.

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
- Required: Recommended
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
- Required: Recommended
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

Note: `Price` is included only as waitlist research input. Do not turn it into price-shopping, retailer, coupon, checkout, or where-to-buy functionality.

### 8. Message

- Type: Paragraph
- Required: No

### 9. Consent checkbox

- Type: Checkboxes
- Required: Yes
- Text:

```text
I agree to be contacted by Pine & Ash about Ash IQ updates, waitlist access, and related launch information.
```

## Recommended Response Sheet Columns

Google Forms will create most response columns automatically from the form questions. Add internal-only workflow columns in the linked Sheet after the response columns.

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

`Source Page` can be left blank initially because the current website routes all public CTAs through `contact.html#waitlist`. If future direct public Form links are added from multiple pages, use Google Forms prefilled links or internal notes to track source.

## Manual Google Form Setup

1. Open Google Forms while signed into the Pine & Ash/Gavin Google account.
2. Create a blank form.
3. Name it `Ash IQ Waitlist & Contact Form`.
4. Add the fields listed above.
5. Enable email validation on `Email Address`.
6. Make the consent checkbox required.
7. In Settings, confirm the form accepts responses.
8. Do not require Google sign-in unless that is an intentional launch decision.
9. Do not collect app passwords or imply this creates an Ash IQ account.

## Link Responses To Google Sheets

1. Open the Google Form.
2. Go to the `Responses` tab.
3. Click `Link to Sheets`.
4. Select the existing spreadsheet named `Ash IQ Waitlist Responses` if Google Forms offers it. If not, create a new spreadsheet with that exact name.
5. Confirm responses appear in the Sheet.
6. Confirm internal columns exist for `Source Page`, `Status`, `Notes`, `Follow-Up Owner`, and `Follow-Up Date`. Codex already added these to the prepared Sheet.
7. Keep the Sheet private to Gavin/Pine & Ash.

## Get The Public Form Link

1. Open the Google Form.
2. Click `Send`.
3. Choose the link icon.
4. Copy the public responder link.
5. Paste it into `assets/js/site-config.js`:

```js
GOOGLE_FORM_PUBLIC_URL: "https://docs.google.com/forms/d/e/.../viewform"
```

Do not paste an edit URL containing `/edit`.

## Get The Embed URL

1. Open the Google Form.
2. Click `Send`.
3. Choose the embed icon.
4. Copy the iframe `src` value only.
5. Paste that URL into `assets/js/site-config.js`:

```js
GOOGLE_FORM_EMBED_URL: "https://docs.google.com/forms/d/e/.../viewform?embedded=true"
```

Do not paste the entire iframe HTML into the site. The existing Contact page iframe will load the configured URL.

## Public Website Behavior

- Home page CTAs route to `contact.html#waitlist`.
- App page CTAs route to `contact.html#waitlist`.
- Contact page shows the dedicated waitlist/contact section.
- If `GOOGLE_FORM_EMBED_URL` is configured, the Contact page embeds the form.
- If only `GOOGLE_FORM_PUBLIC_URL` is configured, Contact page buttons open the public form in a new tab.
- If neither URL is configured, the Contact page shows a setup-pending placeholder.

## Do Not Publish

- Do not publish the response Sheet URL.
- Do not publish Google Form edit links.
- Do not commit private Google account credentials.
- Do not add a custom backend for this flow.
- Do not add website login, profile, or app-account behavior.

## Final Test Checklist

- Open the site locally or on GitHub Pages.
- Click Home page `Join the Waitlist`.
- Click App page `Join the Ash IQ Waitlist`.
- Open Contact page `Join the Ash IQ Waitlist`.
- If embedded, confirm the Google Form loads.
- If using button-only, confirm the public Form opens in a new tab.
- Submit a test response.
- Confirm the response appears in `Ash IQ Waitlist Responses`.
- Confirm the Sheet is private.
- Confirm the Form is public/respondable.
- Confirm no private edit links or Sheet URLs are visible in page source.
