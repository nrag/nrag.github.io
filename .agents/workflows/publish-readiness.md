# Publish Readiness Workflow

## Purpose

Make one evidence-based decision for a single immutable production candidate.
This workflow coordinates prior reviews; it does not replace them.

## Inputs

- candidate revision and production artifact identity;
- completed content, experience, and technical review results;
- `.agents/templates/site-validation-report.md` populated for the candidate;
- known legacy URL inventory; and
- resolved hosting target and access level.

## Steps

### 1. Freeze The Candidate

Record the source revision, lockfile identity, build command, artifact location,
canonical domain, and validation timestamp. Any source, dependency, content,
configuration, or generated-asset change creates a new candidate and invalidates
prior approval.

### 2. Reconcile Findings

Every finding must be one of:

- resolved and verified on this candidate;
- accepted non-blocking limitation with rationale and owner;
- `changes_required`; or
- `blocked` by an external dependency or decision.

Do not downgrade accessibility, confidentiality, broken navigation, incorrect
claims, subscription failure, missing canonical metadata, or lost durable URLs
to non-blocking solely to meet a publication date.

### 3. Confirm Gate Completion

Require:

- content review passed;
- experience review passed;
- technical review passed;
- production build passed from the lockfile;
- representative pages were checked from the production artifact;
- no unresolved critical or high-severity defect;
- no unresolved WCAG 2.2 AA blocker;
- no exposed secret or unnecessary personal data; and
- rollback or last-known-good restoration is available.

### 4. Publish And Verify

After publication, verify on the public origin:

- `thenandlabs.com` resolves over HTTPS to the intended release;
- homepage and representative detail pages render correctly;
- canonical and social metadata use the public domain;
- redirects preserve known legacy URLs;
- subscription reaches the configured provider and exposes clear success/failure
  feedback;
- feeds and sitemap use public URLs; and
- no deployment-only console, asset, CSP, or mixed-content failure appears.

Do not subscribe test addresses, send newsletters, or publish public content as
part of automated verification without the user's explicit authorization.

### 5. Decide

Choose exactly one:

- `publish` - every required gate passes for this candidate;
- `changes_required` - repository-owned corrections remain; or
- `blocked` - required external evidence, access, or a user decision is missing.

## Exit Criteria

The workflow is complete only when the decision, evidence, remaining limitations,
and post-deploy verification are recorded for the exact published candidate.

