# Site Validation Workflows

These workflows define the required evidence before publishing the NandLabs
site. Run them against the production build in the listed order:

1. `content-review.md` - accuracy, editorial quality, attribution, and privacy
2. `experience-review.md` - responsiveness, accessibility, and interaction
3. `technical-review.md` - functionality, metadata, performance, and resilience
4. `publish-readiness.md` - evidence reconciliation and release decision

Use `.agents/templates/site-validation-report.md` for every release candidate.
Each finding must include the affected URL or component, reproduction details,
severity, and disposition.

## Decision Vocabulary

- `pass` - required evidence is present and no blocking finding remains
- `changes_required` - a reproducible defect or missing required automation has
  a repository-owned correction
- `blocked` - required evidence depends on unavailable access, credentials, an
  external decision, or a service that cannot currently be verified

Do not use conditional approval. A candidate is publishable only when all four
workflows pass for the same production artifact.

