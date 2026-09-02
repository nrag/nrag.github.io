# Content Review Workflow

## Purpose

Verify that public content is accurate, useful, appropriately sourced, safe to
publish, and consistent with the NandLabs voice.

## Inputs

- the exact production candidate;
- all changed content and metadata;
- user-approved sources such as the resume, LinkedIn profile, and prior posts;
- the site's content schema, navigation, and redirect inventory; and
- the previous production version when content or URLs are being migrated.

## Review Steps

### 1. Reconstruct The Claim Inventory

List every new or materially changed claim about employment, products, users,
revenue, reliability, scale, dates, awards, or third parties. For each claim,
record its source and whether the user supplied or approved it.

Fail the review when a consequential claim is unsupported, misleading through
missing context, confidential, or inconsistent with another page.

### 2. Review Editorial Quality

Check every changed page for:

- a clear purpose and intended reader;
- an accurate title, summary, publication date, and author;
- useful structure, headings, and descriptive link text;
- concise language without generic thought-leadership filler;
- consistent spelling of names, products, and organizations;
- readable code, diagrams, captions, quotations, and footnotes; and
- a conclusion or next action appropriate to the content type.

Essays should make a defensible argument. Annotated links must add context or
analysis beyond restating the source. Project stories must explain the problem,
decisions, outcome, and learning rather than functioning as feature lists.

### 3. Check Attribution And Rights

- Link to original sources whenever practical.
- Identify co-authors prominently.
- Mark quotations and keep them within reasonable excerpt limits.
- Confirm images, screenshots, diagrams, and fonts may be published.
- Add meaningful captions and credit where needed.

### 4. Check Privacy And Employer Boundaries

Search the candidate and generated output for secrets, tokens, private URLs,
email threads, unpublished employer material, personal phone numbers, addresses,
and accidental document metadata.

Confirm that Microsoft and other employer experience is framed as public career
history and does not imply employer endorsement of NandLabs or its opinions.

### 5. Check Navigation And Discoverability

- Every published item appears in the correct stream, archive, topic, and feed.
- Drafts and future-dated posts do not appear in production.
- Tags and series use consistent names and do not create empty pages.
- The homepage distinguishes recent work from selected highlights.
- Old public URLs either remain valid or redirect to the intended replacement.

### 6. Proofread The Rendered Candidate

Review the rendered page, not only the source file. Check headings, punctuation,
typographic characters, code wrapping, orphaned labels, captions, and truncation
on both narrow and wide layouts.

## Required Evidence

- claim/source inventory for changed factual claims;
- list of reviewed URLs and content types;
- privacy and confidential-information scan result;
- link and attribution findings; and
- final decision: `pass`, `changes_required`, or `blocked`.

## Exit Criteria

Pass only when every changed public page has been rendered and reviewed, every
material claim is sourced or user-approved, attribution is intact, and no
privacy or confidentiality blocker remains.

