# Ash IQ Public Website Launch Report

## Launch Summary

- Launch date: June 29, 2026
- Repository: `MCCreations2026/ash-iq-site`
- Repository URL: `https://github.com/MCCreations2026/ash-iq-site`
- Repository visibility: public
- Live GitHub Pages URL: `https://mccreations2026.github.io/ash-iq-site/`
- Branch: `main`
- Pages source: repository root `/`
- Build command: none
- GitHub Pages status: built

Published site commit validated before this report commit:

```text
522636f4785f45903028b60d87942bbfd7d9f4ef
```

The final launch-report commit hash is reported in the final Codex response because a commit cannot contain its own final SHA.

## Google Form Status

- Public Google Form URL configured: no
- Public Google Form embed URL configured: no
- Private response Sheet exposed publicly: no
- Google Form edit URL exposed publicly: no
- Fake submission behavior: no

The contact page now shows a safe pending form state. It does not pretend a submission happened and it does not expose private Google URLs. The public Google Form can be wired later by filling the blank values in `assets/js/site-config.js`.

## Files Changed For Launch

- `.gitignore`
- `README.md`
- `assets/css/styles.css`
- `assets/img/favicon.svg`
- `assets/img/social-preview.svg`
- `assets/js/main.js`
- `assets/js/site-config.js`
- `contact.html`
- `docs/ABACUS_CREATIVE_BRIEF.md`
- `docs/CODEX_BUILD_REPORT.md`
- `docs/GITHUB_PAGES_LAUNCH_REPORT.md`
- `docs/GOOGLE_FORMS_WAITLIST_SETUP.md`
- `docs/LAUNCH_CHECKLIST.md`
- `docs/LAUNCH_REPORT.md`
- `docs/WAITLIST_QA_CHECKLIST.md`

## Validation Results

- Local repository branch is `main`: passed.
- Local tracked files are launch-safe public site files only: passed.
- Local public pages and assets exist: passed.
- Local internal links resolve: passed.
- Local tracked-file scan for Windows paths, loopback URLs, private Google edit URLs, tokens, API keys, and sentinel strings: passed.
- No backend, mobile, runtime, command-center, private config, secrets, or non-public files are tracked: passed.
- No fake form submission behavior exists: passed.
- GitHub repository created and public: passed.
- `main` pushed to `origin`: passed.
- GitHub Pages enabled from `main` and `/`: passed.
- GitHub Pages API reports `status: built`: passed.
- Live Home, About, App, and Contact pages return HTTP 200: passed.
- Live CSS, JS, favicon, social preview, and hero image assets return HTTP 200: passed.
- Live rendered source scan for local paths and private Google edit URLs: passed.
- Headless Chrome mobile and desktop screenshots generated: passed.

## Commands Used

```powershell
git status --short
git branch --show-current
git rev-parse HEAD
git log --oneline -5
git remote -v
git ls-files
rg sensitive-pattern scan over tracked public files
git grep sensitive-pattern scan over tracked public files
winget install --id GitHub.cli -e --accept-source-agreements --accept-package-agreements --silent
gh auth status
gh auth login --hostname github.com --git-protocol https --web --clipboard
gh repo view MCCreations2026/ash-iq-site --json nameWithOwner,isPrivate,defaultBranchRef,url
gh repo create ash-iq-site --public --description 'Public website for Ash IQ by Pine & Ash.' --source . --remote origin --push
'{"source":{"branch":"main","path":"/"}}' | gh api --method POST repos/MCCreations2026/ash-iq-site/pages --input -
gh api repos/MCCreations2026/ash-iq-site/pages
gh api repos/MCCreations2026/ash-iq-site/pages/builds/latest
Invoke-WebRequest -Uri 'https://mccreations2026.github.io/ash-iq-site/' -UseBasicParsing
chrome --headless=new --disable-gpu --hide-scrollbars --window-size=390,844 --screenshot=<temp>/ash-iq-site-mobile.png 'https://mccreations2026.github.io/ash-iq-site/'
chrome --headless=new --disable-gpu --hide-scrollbars --window-size=1440,1000 --screenshot=<temp>/ash-iq-site-desktop.png 'https://mccreations2026.github.io/ash-iq-site/contact.html'
```

Commands are normalized in this public report to avoid committing local machine paths or sensitive scan literals. No secrets, tokens, OAuth values, private Sheet URLs, or private Form edit URLs were committed or written into this report.

## Remaining Non-Launch-Blocking Items

- Create and connect the live public Google Form.
- Add final contact inbox and privacy policy.
- Decide on a custom domain.
- Add analytics only after privacy and provider decisions are made.
