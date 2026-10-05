# Site Validation Report

- Candidate revision: production preview prepared on `codex/site-rebuild`, parent `b19f172`; pending commit of this report and the tested changes.
- Production artifact: `dist/`, SHA-256 `c89d2c8d341af346f21f1b3f4a78b6f70f10bcde214bca135a50d4af54ce9cb0`
- Canonical domain: `https://thenandlabs.com`
- Build command: `npm run build`
- Validated by: Codex
- Validation started/completed: October 4, 2026
- Final decision: preview available; production publication remains blocked.

## Changed Scope

- Changed pages/content: intro and Memorii marked for publication at owner's request. Remaining 13 link posts stay private. Subscribe and homepage copy no longer promises an unavailable email flow.
- Changed layouts/components: Newsletter renders a form only with an explicit configured username; otherwise renders RSS and contact options.
- Changed styles/assets: no new style changes.
- Changed routes/redirects: `/writing/hello` and `/writing/memorii` are generated; `/themes` removed. Design source retained as non-executable text in `editorial/design/`.
- Changed integrations/configuration: GitHub Pages `build_type` changed from `legacy` to `workflow`; domain preserved. Empty default newsletter configuration documented.

## Content Review

- Decision: user-requested opening posts ready for preview; owner review remains pending.
- Reviewed URLs: `/writing/hello`, `/writing/memorii`, `/subscribe`, homepage, feed and sitemap.
- Changed factual claims and sources: autobiographical copy and first-release status supplied by owner; cited research recorded in `memorii-research-notes.md`. Owner explicitly requested the intro career wording, superseding the general career-copy restriction for this post.
- Attribution/licensing result: original research links retained; no copied media added.
- Privacy/confidentiality result: only owner-supplied public contact info and approved career copy added; no draft routes exposed.
- Editorial findings: release compatibility and component results are owner-supplied status reports, not independently reproduced. Preserve research-note evidence distinction.

## Experience Review

- Decision: automated checks passed; manual screen-reader/visual review not claimed.
- Viewports tested: `320`, `375`, `768`, `1024`, `1440` for the homepage.
- Browsers tested: Chromium and WebKit.
- Keyboard result: existing keyboard navigation suite passed.
- Screen-reader result: automated accessible-name/landmark checks passed; manual session outstanding.
- Zoom/reflow result: 200-percent equivalent passed.
- Reduced-motion result: no new motion; existing reduced-motion rules retained.
- Automated accessibility result: 26 checks passed across 13 representative routes, including both opening posts.
- Findings: no detected WCAG A/AA violations; remaining manual evidence unchanged.

## Technical Review

- Decision: production-preview checks passed; public-domain verification blocked.
- Commands and results: type/content validation zero diagnostics; 2 unit tests passed; final production build passed; combined Playwright suite passed 46/46 (26 accessibility, 20 site checks).
- Routes and journeys tested: both opening posts return 200; gallery returns 404; remaining drafts generate no routes; primary internal journeys passed.
- Links/assets result: contact links retained; production previews verified over HTTP on localhost.
- Metadata/social/feed result: canonical remains thenandlabs.com; opening posts included in feeds/listings; no gallery output or unconfigured subscription form.
- Redirect result: prior legacy URL-preservation work remains outstanding.
- Performance result: no third-party embed added; full production performance measurements remain outstanding.
- Security/privacy result: HTTPS request to thenandlabs.com failed hostname validation. DNS A record is `192.30.252.153`; nameservers are `ns47.domaincontrol.com` and `ns48.domaincontrol.com`. HTTPS enforcement remains false until DNS/certificate corrected.
- Findings: hosting workflow mode configured and read back successfully; production not deployed. Configured Buttondown URL `https://buttondown.com/thenandlabs` returned 404. Signup is absent from the preview until a verified account is supplied.

## Finding Ledger

| Severity | Surface/URL | Finding | Reproduction | Disposition | Verification |
| --- | --- | --- | --- | --- | --- |
| Resolved | Hosting mode | Legacy delivery incompatible with Astro artifact | GitHub Pages API | Set build_type=workflow | Readback confirmed domain retained |
| Resolved | /themes | Review gallery in production | Preview request | Removed route, archived source | 404 and no dist/themes |
| Resolved for RSS-only release | Newsletter | Default username points to missing account | Public URL returns 404 | Remove implicit default; show RSS/contact until configured | No form in production preview |
| Blocking | Domain HTTPS | DNS uses old GitHub endpoint; certificate doesn't match | dig and HTTPS request | Owner must provide DNS access or update website records | Pending |
| Blocking | Legacy URLs | Durable route migration incomplete | Prior inventory | Preserve/redirect existing routes | Pending |
| Pre-publish | Manual/performance review | Required evidence incomplete | Prior/current reports | Review production preview and complete remaining checks | Pending |

## Known Limitations

- Preview is local on the owner's computer: `http://127.0.0.1:4322`.
- No subscription, confirmation email, newsletter send, or test appointment performed.
- Email subscriptions require a valid account URL plus owner-selected test address and verification of submit, confirmation, duplicate, unsubscribe, and failure behavior.

## Publish Decision

- Content review passed: user-directed changes prepared; rendered owner review pending.
- Experience review passed: automated portion only.
- Technical review passed: local preview only; domain HTTPS and legacy preservation pending.
- Candidate unchanged since validation: production source frozen after final build; subsequent docs/example-env changes do not affect current artifact.
- Rollback available: existing production master and checkpoint preserved.
- Decision: `blocked` for public deployment; ready to inspect as a production preview.
- Decision rationale: preview is complete but DNS/access and existing release gates still need resolution. No production merge performed.

## Post-Deploy Verification

- No production deployment in this turn.
- After DNS correction and approved deployment, verify HTTPS, custom domain, legacy URLs, post routes, social metadata, RSS/sitemap, and configured subscription mode.

## DNS Follow-Up

Per GitHub's current [custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), replace the old apex website A record with four A records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Point `www` directly to `nrag.github.io` with a CNAME. Preserve all email/MX/TXT records. Recheck propagation and certificate issuance, then enable HTTPS enforcement.
