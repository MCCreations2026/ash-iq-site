# Waitlist QA Checklist

Use this checklist after the Google Form public URL and optional embed URL are configured.

## Apps Script Creation Check

- Confirm `docs/tools/create_ash_iq_google_form_apps_script.js` was run from Gavin/Pine & Ash's Google account.
- Confirm the Form title is `Ash IQ Waitlist & Contact Form`.
- Confirm the linked Sheet is named `Ash IQ Waitlist Responses`.
- Confirm the Form response destination is the linked Sheet.
- Confirm the script logs included a published responder URL.
- Confirm the script logs included a public embed URL or a responder URL with `embedded=true`.
- Confirm the Form edit URL and private Sheet URL were not pasted into website files.

## CTA Clicks

- Click the Home page `Join the Waitlist` button.
- Click the Home page final waitlist CTA.
- Click the App page `Join the Ash IQ Waitlist` button.
- Click the App page final waitlist CTA.
- Click the Contact page `Open Google Form` or embedded form.
- Click the Contact page `Contact Us` button.

## Google Form Submission

- Submit a test response using a real test email address.
- Confirm all required fields are enforced.
- Confirm the consent checkbox is required.
- Confirm optional fields can be left blank.
- Confirm the form does not imply an Ash IQ app account has been created.

## Google Sheet Verification

- Confirm the test response appears in `Ash IQ Waitlist Responses`.
- Confirm the Sheet is private and not publicly shared.
- Confirm Sheet is private.
- Confirm the response destination is linked to the prepared `Responses` tab or to the correct Google Forms-generated response tab in the same private Sheet.
- Confirm no Sheet URL is present in public HTML, JavaScript, or docs intended for launch pages.
- Confirm internal columns exist:
  - Source Page
  - Status
  - Notes
  - Follow-Up Owner
  - Follow-Up Date
- Confirm status values are available or documented:
  - New
  - Reviewed
  - Early Access Candidate
  - Partnership Lead
  - Press/Media
  - Not a Fit
  - Contacted

## Public Form Verification

- Confirm the Google Form is public/respondable.
- Confirm the responder URL does not require editor access.
- Confirm the embedded form works on desktop and mobile if embedding is enabled.
- Confirm buttons open in a new tab when using the public form link.

## Mobile Layout

- Test `index.html`, `app.html`, and `contact.html` on a narrow viewport.
- Confirm the Contact page waitlist section is readable.
- Confirm the iframe or pending form state does not overflow.
- Confirm tap targets are comfortable.
- Confirm the mobile menu still opens and closes.

## Copy Guardrails

- Confirm no fake account/profile language appears.
- Confirm no login or authentication language appears.
- Confirm no command-center/admin references appear publicly.
- Confirm no Google Sheet URL appears publicly.
- Confirm no Google Form edit URL appears publicly.
- Confirm Ash IQ is named as the app and Pine & Ash as the source brand.
- Confirm the website clearly says it is not the mobile app.
