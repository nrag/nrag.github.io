# Site Validation Report

- Candidate revision: `codex/site-rebuild` working tree (uncommitted)
- Production artifact: `dist/`
- Canonical domain: `https://thenandlabs.com`
- Build command: `npm run build`
- Validated by: Codex
- Validation started: 2026-09-01
- Validation completed: 2026-09-01
- Final decision: `changes_required`

## Changed Scope

- Changed pages/content: publication home, format archives, writing pages, projects, about, subscribe, and 404
- Changed layouts/components: Astro layouts, publication header/footer, writing index rows, and newsletter form
- Changed styles/assets: Reader-first Index theme, responsive rules, and replacement social preview image
- Changed routes/redirects: new writing and format routes; legacy redirect inventory remains incomplete
- Changed integrations/configuration: RSS, sitemap, Buttondown form configuration, GitHub validation/deploy workflows

## Content Review

- Decision: `pass`
- Reviewed URLs: `/`, `/writing`, `/essays`, `/notes`, `/links`, `/ideas`, `/writing/what-nandlabs-is-for`, `/work`, `/about`, `/subscribe`, `/404`
- Changed factual claims and sources: career copy is limited to more than two decades in technology; LinkedIn is the source for current employment details
- Attribution/licensing result: external publishing link retains its source URL; no unattributed quotations found
- Privacy/confidentiality result: automated content guard found no employer names, job title, precise resume metrics, or private contact details
- Editorial findings: starter entries are clearly presented as publication content and include format, date, reading time, description, and topics

## Experience Review

- Decision: `pass_with_limitations`
- Viewports tested: `320`, `375`, `768`, `1024`, `1440`
- Browsers tested: current Playwright Chromium and WebKit
- Keyboard result: focus order and visible focus checks passed in both engines
- Screen-reader result: semantic structure and accessible names passed automated inspection; no manual screen-reader session performed
- Zoom/reflow result: 200% reflow-equivalent check passed with no horizontal overflow
- Reduced-motion result: the site contains no animated transitions; smooth scrolling is disabled when reduced motion is requested
- Automated accessibility result: 22 WCAG A/AA checks passed across 11 representative routes in Chromium and WebKit
- Findings: corrected muted-text contrast, small subscribe/RSS targets, date-only timezone rendering, and clipped mobile format navigation

## Technical Review

- Decision: `pass_with_limitations`
- Commands and results: `npm run check` passed; `npm test` passed; `npm run build` passed; `npm run test:a11y` passed 22/22; `npm run test:site` passed 20/20; `npm audit --omit=dev` found 0 vulnerabilities
- Routes and journeys tested: home, all four format archives, writing index, representative article, projects, about, subscribe, RSS, and 404
- Links/assets result: internal browser journeys passed and the production build includes the replacement social image
- Metadata/social/feed result: canonical, Open Graph, Twitter card, RSS, sitemap, robots, and CNAME are present in the production build
- Redirect result: existing public URL inventory and redirects have not yet been completed
- Performance result: static output and minimal client JavaScript confirmed; Lighthouse/Core Web Vitals measurement not yet recorded
- Security/privacy result: no production dependency vulnerabilities; no analytics or tracking added
- Findings: local preview was restarted after a stale content cache; current preview and production artifact show all publication entries

## Finding Ledger

| Severity | Surface/URL | Finding | Reproduction | Disposition | Verification |
| --- | --- | --- | --- | --- | --- |
| Resolved | Global text | Muted small text missed AA contrast | Run `npm run test:a11y` | Darkened the muted color token | 22 accessibility checks pass |
| Resolved | Home sidebar | Subscribe and RSS targets were too small | Run `npm run test:a11y` | Increased target height | 22 accessibility checks pass |
| Resolved | Mobile header | Ideas was clipped at 320px and 375px | Render `/` at narrow widths | Replaced scrolling row with four equal columns | Visual inspection plus 20 responsive checks pass |
| Resolved | Writing dates | Date-only values could render one day early in Pacific time | Render a September 1 entry locally | Format date-only values in UTC | Production artifact shows Sep 01 |
| Blocking | Subscribe | Buttondown account/username has not been verified against the live service | Submit the production form | Verify the account and a real opt-in flow before publish | Pending |
| Blocking | Legacy URLs | Redirect inventory from the previous Jekyll site is incomplete | Compare existing public URLs with the new build | Add and test required redirects | Pending |
| Pre-publish | `/themes` | Design comparison gallery remains available for the current review | Open `/themes` | Remove or explicitly exclude before production publication | Pending |

## Known Limitations

| Limitation | Reader impact | Rationale | Owner/follow-up |
| --- | --- | --- | --- |
| No manual screen-reader session | Some announcement or landmark issues may evade automation | Automated tools cannot prove the complete experience | Run VoiceOver before publish |
| No field Core Web Vitals | Real-device performance is not yet measured | The site has not been deployed | Measure after a preview deployment |
| Newsletter not live-verified | Email subscription may fail | External account state is unknown | Verify Buttondown username and double opt-in |

## Publish Decision

- Content review passed: yes
- Experience review passed: yes, with documented manual-screen-reader limitation
- Technical review passed: yes, with documented pre-publish work
- Candidate unchanged since validation: yes
- Rollback available: yes, Jekyll checkpoint at `a67f16a` on `codex/jekyll-checkpoint`
- Decision: `changes_required`
- Decision rationale: the selected design is ready for local review, but live newsletter verification, legacy redirects, removal of the theme gallery, and post-deploy checks are still required before publication

## Post-Deploy Verification

- Public deployment URL: pending
- HTTPS/custom-domain result: pending
- Representative pages checked: pending
- Redirect result: pending
- Subscription integration result: pending
- Feed/sitemap result: pending
- Console/network result: pending
- Final status: pending
