# Site Validation Report

- Candidate base: `69f510967bf85db4f156cbd726b86aea06098e7c` (current production master).
- Candidate: release commit containing this report, on `codex/publish-october-4-17`.
- Production artifact: `dist/`, built with `PUBLIC_BUTTONDOWN_USERNAME=nrag npm run build`.
- Post HTML SHA256: `697e52e9269b8ab2ee4b9ded3c20edfa45e70ab8552784d3a4283c141344e997`.
- Canonical domain: `https://thenandlabs.com`.
- Validated by: Codex, October 17, 2026.
- Final decision: `publish`, after required remote CI passes for this revision.

## Changed Scope

Publish the owner-reviewed Links: October 4-17 post, retaining all 102 original
URLs and eight added primary-source URLs in 81 annotated entries. Remove the
Hello introduction and redirect its durable URL to About. Update the regular
page inventories and add explicit post/redirect browser coverage. Preserve the
newer production pages; exclude unrelated local changes and unpublished drafts.
No layouts, styles, subscription code, dependencies, or assets changed.

## Content Review

- Decision: pass.
- Post body exactly matches the approved local preview; only `draft` changes to false. `showSubtitle: false` remains set.
- Approved personal introduction retained; no invented first-person opinions or new personal data.
- The ten previously unidentified links were read in the browser and assigned to their actual topics. Relevant primary abstracts or author documentation support the short explanations. Access-limited sources are described only at the supported scope.
- Preserve attribution, alternate formats, and social introductions; all link destinations use HTTPS.
- 1,776 visible body words, including headings and labels. Owner explicitly requested every link plus one-line explanations; this overrides the normal 500-word ceiling for this roundup.
- Only this approved roundup and the existing Memorii post exist in the release content collection. No private editorial queue or source inventory is added to the public branch.
- No new images, quotations, employer information, or confidential material.

## Experience Review

- Decision: pass with justified limits listed below.
- Eight representative pages at 320, 375, 768, 1024, and 1440 pixels in Chromium and WebKit: 80 checks passed without horizontal overflow.
- Post-specific viewport tests, link bounds, all 81 entries/110 links/ten headings, keyboard skip link, visible focus, reduced motion, text-spacing overrides, and 200%-zoom-equivalent reflow passed in both engines.
- Automated WCAG A/AA checks passed for all eleven regular pages; the post has its own passing audit in both engines.
- Manually inspected rendered mobile/desktop post screenshots and accessibility trees for homepage, article, navigation, and subscription page. Heading hierarchy, labeled email input, and list structure are exposed correctly. Post remains readable without JavaScript.
- No layout, typography, form behavior, or browser API implementation changed; Firefox testing is not required for this content-only release.

## Technical Review

- Decision: pass.
- `npm ci`: locked dependencies installed successfully.
- `npm run check`: zero Astro diagnostics; content validation passed.
- `npm test`: two unit tests passed.
- `PUBLIC_BUTTONDOWN_USERNAME=nrag npm run build`: passed.
- `PUBLIC_BUTTONDOWN_USERNAME=nrag npm run test:a11y`: 22 tests passed.
- `PUBLIC_BUTTONDOWN_USERNAME=nrag npm run test:site`: 44 tests passed.
- Local links, asset paths, and fragment targets checked against the complete static output: passed.
- Generated HTML/XML/CSS/JS scan: no private filesystem paths, development origins, or private-key markers. No unpublished content in output.
- Canonical, Open Graph article type/title, description, RSS and sitemap inclusion verified for the post. The removed intro is absent from listings, RSS, and sitemap, and its old URL reaches About.
- Production subscription variable is `nrag`. Both browsers verify the correct Buttondown action and reject malformed email input; no subscription or newsletter sent.
- Mobile local LCP: home 172ms, post 136ms. Desktop local LCP: home 168ms, post 140ms. CLS 0 in all four samples. These are local lab observations, not field Core Web Vitals. Details in `roundup-release-metrics-2026-10-17.json`.

## Finding Ledger

| Surface | Finding | Disposition | Verification |
| --- | --- | --- | --- |
| Retired URL | Generic audits raced the static intro redirect. | Resolved: ordinary audits use real pages; dedicated redirect test retains coverage. | Both browser suites pass. |
| Draft isolation | The original checkout is behind production and contains unpublished drafts and unrelated edits. | Resolved: release starts at current master and copies only approved changes. | Scoped diff and collection/output scan. |
| Dependency audit | Existing lockfile reports seven vulnerable build dependencies. | Non-blocking for this static content release: no dependency changes, no server runtime or browser JavaScript from these packages deployed, trusted source inputs only. Track toolchain maintenance separately. | Static build/output inspection. |

CI initially reached WebKit's 32,767-pixel screenshot limit for the long 320px
post at device resolution. Captures now use CSS-pixel resolution while
retaining full-page content and all layout assertions. Remote CI must pass
on this correction before merge. No public artifact content changed.

## Known Limitations

| Limitation | Reader impact | Rationale / follow-up |
| --- | --- | --- |
| Native screen-reader session unavailable | No detected new semantics or keyboard defect; actual assistive-technology behavior not directly exercised. | Existing unchanged semantic template, manual accessibility-tree review, keyboard tests, and both-engine axe checks provide the available evidence. Do not claim a native screen-reader pass. |
| Browser zoom tested by reflow equivalent | Literal browser zoom not driven. | 320px and 640px reflow plus text-spacing overrides pass on unchanged styles. |
| INP / field performance | Not measurable from this static local sample. | No new client-side interactions/scripts; report LCP/CLS lab observations only. |
| Provider-managed subscription outcomes | Successful, duplicate, and provider-error responses not exercised against real subscribers. | Subscription integration is unchanged. Verify destination and native validation without sending real addresses; remote outcomes remain Buttondown-managed. |
| Paywalls and automated-fetch restrictions | Some linked sources require a browser or subscription. | Preserve originals; annotations stay within readable source material. No paywall bypass or invented result. |

## Publish Decision

- Content review passed: yes.
- Experience review passed: yes, with the explicit justified limitations above and no detected blocker.
- Technical review passed: yes; remote CI remains the final release check.
- Candidate unchanged since validation: public source frozen; this report and metrics do not alter the static artifact.
- Rollback available: previous master `69f510967bf85db4f156cbd726b86aea06098e7c` and its successful Pages deployment.
- Decision: publish after remote CI succeeds; human authorization is the request to publish in this chat.

## Post-Deploy Verification

Pending deployment. Verify HTTPS, post body/subtitle, home/archive/feed/sitemap,
intro redirect, metadata/social fields, assets, subscription destination, and
browser console before announcing completion. Record actual deployment and
verification in the local follow-up report.
