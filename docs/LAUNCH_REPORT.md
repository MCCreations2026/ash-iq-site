# Ash IQ Site Launch Report

## Repository

- Repository URL: https://github.com/MCCreations2026/ash-iq-site
- Visibility: Public
- Branch: `main`
- Pages source: `main` branch, repository root `/`
- Build command: none
- Live GitHub Pages URL: https://mccreations2026.github.io/ash-iq-site/

## Commit State

- Expected historical local commit: `fd2c548fee03d4089002cb25b062ff2a71296271`
- Validated launch-content commit before this report: `465ff327e654f2d624e5e46886df43e45d0efab4`
- Note: this report is committed after the launch-content validation, so the final pushed commit is the commit that adds this file.

## Google Pages Configuration

GitHub Pages is enabled with:

- Source: deploy from branch
- Branch: `main`
- Folder: `/`
- HTTPS enforced: yes

## Validation Results

Passed:

- Local branch is `main`.
- Working tree was clean before launch-report creation.
- Tracked files are static public website files and launch documentation only.
- No backend, mobile app, runtime logs, command-center source, private config, secrets, local paths, or non-public app files are tracked.
- Every public HTML page exists.
- Internal relative links resolve.
- CSS, JavaScript, favicon, social preview image, and hero image load by relative paths.
- No private Google Sheet edit URLs are present.
- No private Google Form edit URLs are present.
- No secrets, tokens, credentials, API keys, or private endpoints were found.
- Live homepage returns HTTP 200.
- Live About, App, and Contact pages return HTTP 200.
- Live CSS, JS, favicon, social preview, and hero image return HTTP 200.
- Browser validation passed in desktop and mobile viewports.
- Browser console showed no release-blocking errors.
- No failed browser requests were detected.
- No horizontal overflow was detected in desktop or mobile viewport checks.

## Google Form Status

The public Google Form is not wired yet.

Current safe behavior:

- `assets/js/site-config.js` leaves the public Form URL values blank.
- Contact and waitlist buttons show a clear pending state.
- The site does not pretend a form submission happened.
- No private Google Form edit URL is exposed.
- No private Google Sheet edit URL is exposed.

Remaining non-launch-blocking item:

- Gavin should create the public Google Form response URL and optional embed URL, then add those public URLs to `assets/js/site-config.js`.

## Files Changed For This Launch Pass

- `docs/ABACUS_CREATIVE_BRIEF.md`
- `docs/CODEX_BUILD_REPORT.md`
- `docs/GITHUB_PAGES_LAUNCH_REPORT.md`
- `docs/GOOGLE_FORMS_WAITLIST_SETUP.md`
- `docs/LAUNCH_CHECKLIST.md`
- `docs/WAITLIST_QA_CHECKLIST.md`
- `docs/LAUNCH_REPORT.md`

## Commands Used

Commands were run with the local Git and GitHub CLI tools available on this machine. Secrets and tokens are omitted.

```bash
git status --short
git branch --show-current
git rev-parse HEAD
git log --oneline -5
git remote -v
git ls-files
rg -n -I "<forbidden launch patterns>" .
python <static validation script>
gh auth status
gh repo view MCCreations2026/ash-iq-site --json nameWithOwner,visibility,isPrivate,defaultBranchRef,url
git ls-remote https://github.com/MCCreations2026/ash-iq-site.git
git push -u origin main
gh api repos/MCCreations2026/ash-iq-site/pages
python <live source validation script>
pnpm dlx --package @playwright/test playwright test runtime-pages-check.spec.js --reporter=line
```

## Remaining Follow-Up Items

- Wire the final public Google Form response URL.
- Add a custom domain if desired.
- Add final support/privacy links when available.
- Replace preview social artwork later if a final branded image is produced.
