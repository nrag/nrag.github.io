# Site Validation Report

- Candidate revision: pending commit on `codex/site-rebuild`, parent `8cd65fe`; this report changes no production source.
- Production artifact: `dist/`, SHA-256 `5a2a982bce932b8245178741dc14d9dada5808c1c0d4d65cd2c5f5cf95e66642`
- Lockfile SHA-256: `3228b3b8dc2a0dddbc574e63373e6593d1e1ed0c9efb5b46218ebd5c6925cfd2`
- Canonical domain: `https://thenandlabs.com`
- Build command: `npm run build`
- Validated by: Codex
- Validation started/completed: October 4, 2026
- Final decision: `blocked` for production merge; commit/push permitted.

## Changed Scope

- Changed pages/content: 15 private drafts, editorial queue/research/validation records.
- Changed layouts/components: shared footer adds user-supplied email and Calendly link.
- Changed styles/assets: footer link wrapping.
- Changed routes/redirects: none in this writing change; branch also contains the earlier Astro rebuild relative to default branch.
- Changed integrations/configuration: no new embeds; existing hosting migration remains unresolved.
- Repository guidance: reusable blog-writing workflow and references from AGENTS.md and workflow index.

## Content Review

- Decision: pass for contact-link additions and keeping drafts private; publication of drafts not approved.
- Reviewed URLs: all generated HTML pages for contact destinations; draft sources recorded in separate research notes.
- Changed factual claims and sources: email and booking URL supplied by user; project claims remain in drafts.
- Attribution/licensing result: source links retained; no imported images or copied passages added.
- Privacy/confidentiality result: all drafts excluded from public routes; no local paths in generated HTML. User-approved email intentionally public.
- Editorial findings: source/access/readiness questions in draft notes remain unresolved but private. User's own intro edit retained.

## Experience Review

- Decision: automated checks pass; required manual review remains unverified for publication.
- Viewports tested: `320`, `375`, `768`, `1024`, `1440` on the homepage.
- Browsers tested: Chromium and WebKit.
- Keyboard result: existing navigation check passed; no full manual footer journey or screen-reader session performed.
- Screen-reader result: automated accessible-name/landmark checks only.
- Zoom/reflow result: suite's 200-percent equivalent passed.
- Reduced-motion result: existing CSS respects reduced motion; no new motion added.
- Automated accessibility result: 22 checks passed across 11 routes.
- Findings: no detected WCAG A/AA violations; full manual gate not claimed.

## Technical Review

- Decision: automated checks pass; release migration blockers remain.
- Commands and results: `git diff --check` passed; `npm run check` passed with zero diagnostics; `npm test` passed 2 tests; `npm run build` passed; `npx playwright test tests/a11y tests/site` passed all 42 tests against that artifact.
- Routes/journeys tested: primary internal journeys, required homepage width matrix, representative layout routes in accessibility suite.
- Links/assets result: supplied footer destinations present on all 13 generated HTML pages; no draft routes. Calendly completion not tested.
- Metadata/social/feed result: no metadata changes; draft exclusions preserved.
- Redirect result: inherited Jekyll URLs need mapping, including `aboutus.html`, `stepmatch/`, `yapper/`, and `yapper/privacy.html`.
- Performance result: no new scripts/embeds; full measurements outstanding.
- Security/privacy result: no tracking added. GitHub Pages API reports legacy branch-source hosting and HTTPS enforcement disabled.
- Findings: user confirmed `master` as the merge target; deployment workflow targets `master`; GitHub Pages remains configured for legacy source publishing rather than the Astro Actions artifact.

## Finding Ledger

| Severity | Surface/URL | Finding | Reproduction | Disposition | Verification |
| --- | --- | --- | --- | --- | --- |
| Resolved | Target branch | Repository default is master | GitHub refs/default-branch check | User confirmed master | October 4 reply |
| Blocking | Hosting | Legacy branch-source Pages configuration does not match Astro Actions delivery | GitHub Pages API | Verify/configure intended hosting before production merge | Unresolved |
| Blocking | Newsletter | Live Buttondown account and subscription behavior unverified | Prior validation report; current form | Validate service and opt-in flow | Unresolved |
| Blocking | Legacy URLs | Durable routes have no completed redirect inventory | Compare origin/master tree with dist | Implement and verify URL preservation | Unresolved |
| Pre-publish | /themes | Review gallery still generated | Production build | Remove or explicitly exclude from publication | Unresolved |
| Pre-publish | Experience/performance | Required manual evidence and performance measurements incomplete | Review prior/current reports | Complete publication gates | Unverified |

## Known Limitations

- Browser checks needed local-server permission; granted and tests passed.
- Editorial drafts are not approved public content.
- Passing automation is not publication approval.

## Publish Decision

- Content review passed: contact change only; drafts private.
- Experience review passed: automated evidence only.
- Technical review passed: automation only; migration blockers unresolved.
- Candidate unchanged since validation: production source unchanged after build/tests.
- Rollback available: existing origin/master and Jekyll checkpoint preserved.
- Decision: `blocked` for production merge.
- Decision rationale: user confirmed master; merging the rebuild into the production branch would cross unresolved release gates.

## Post-Deploy Verification

- No deployment or production merge performed during this validation.
- Domain, HTTPS, redirects, newsletter, feeds, and social previews need verification after an approved deployment.
