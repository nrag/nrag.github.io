# Blog Writing And Revision

Apply this workflow to every NandLabs blog draft and revision. It records
Nanda's writing preferences and complements the required content review.

## Three Competing Requirements

1. Readers must understand the post. Default to software developers and
   researchers for technical posts; explain unfamiliar terms only as needed.
2. Keep it as short as possible, always below 500 body words. Treat every
   retained word as costing $1,000. The limit is a ceiling, not a target.
3. Preserve Nanda's voice: simple, direct, active, personal when grounded in
   supplied experience. Use accepted drafts and corrections as style evidence.

Accuracy and necessary context must survive compression. Shorter wording is
not better if it changes the mechanism or hides an important limitation.

## Draft

- Store unpublished prose and its editorial queue outside public branches. A
  public Git branch is not private, and `draft: true` only excludes site output.
  For this checkout, `codex/editorial-drafts` is a local-only branch; do not push
  it. Copy only the approved post into a release branch when publishing.
  Previously committed copies remain in public history until a separately
  authorized history cleanup; never describe source deletion as erasure.
- Start with enough concrete context that the opening makes sense. For a
  project story, establish the experience and problem before introducing it.
- Use a short, descriptive title. Keep the description concise too.
- Write thoughts and project content in canonical Markdown, not components.
- Use plain language. Avoid flowery copy, marketing, rhetorical question
  sequences, and generic promises to explain lessons or why links matter.
- A source link must support the nearby claim and have a clear reason for
  inclusion. State its specific contribution; avoid repeating "I find this
  interesting" when the contribution already explains the interest.
- Distinguish existing capabilities, current experiments, and future plans.
- Use Nanda R for introductions unless Nanda requests another form. Do not
  expand to the full name in blog copy automatically.
- The intended cadence is weekly; this does not authorize scheduling or
  automatic publication. Keep drafts private until publication review.

## Critical Research Pass

- Read original papers or author documentation for technical claims. Check
  the relevant method/results sections when claims exceed the abstract.
- Choose references for direct relevance and established research context,
  not just recency. Check original venues and surveys or follow-on work when
  assessing influence. Never promise universal agreement or 100% certainty.
- A short post is not an exhaustive survey. Do not imply a selected list is
  the definitive ranking of influential work or omit prior art to imply novelty.
- Compare mechanisms fairly. Keep agent memory, retrieved text, internal
  representations, model weights, and inference KV caching distinct.
- Do not claim better performance than a named system without matched
  comparative evidence. Explain the chosen emphasis without strawmen.
- Separate component tests, simulated workloads, live model tests, and
  end-to-end agent outcomes. A benchmark design is not a completed result.
- Preserve the smallest necessary qualifier: tested scope, simulated time,
  implementation status, or unchanged weights when material to the claim.
- Record source conflicts and missing evidence in editorial notes. Ask a
  focused question while completing independent writing work; do not invent
  results or treat the absence of a reply as confirmation.

## $1,000-Per-Word Edit

For each paragraph, identify the new fact, explanation, or personal context
it supplies. Delete paragraphs that only restate intent or earlier material.
For each sentence, ask whether removing it loses meaning. For each phrase,
replace abstract wording with a concrete verb or example where shorter.
Remove repeated caveats while preserving the qualification at the claim.
Avoid adding features, side explanations, or calls to action without a reader
need. Stop when further cutting would harm clarity, accuracy, or voice.

## Verify

- Count body words; require fewer than 500 and report the count.
- Review the complete post for flow, source support, and Nanda's style.
- Run the content check for prose-only changes. Broaden checks for schema,
  rendering, route, or publication changes as required by the repository.
- Keep unresolved research and release claims visible in editorial notes.
- Complete the four pre-publish workflows before publishing; a writing pass
  or successful build is not publication approval.
