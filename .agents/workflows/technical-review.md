# Technical Review Workflow

## Purpose

Verify that the production artifact functions correctly, loads quickly, exposes
complete metadata, protects reader privacy, and fails gracefully.

## Inputs

- the exact production build;
- deployment and redirect configuration;
- route, feed, asset, and third-party integration inventories; and
- current automated check results.

## Review Steps

### 1. Build And Artifact Integrity

- Install dependencies from the lockfile using the repository's package manager.
- Run formatting, type, schema, content, test, and production-build commands.
- Treat warnings that indicate broken content, invalid HTML, missing assets, or
  deprecated production behavior as failures.
- Confirm generated output contains no drafts, source maps with private content,
  secrets, local paths, or development-only endpoints.

### 2. Functional Journeys

Verify:

- navigation, menus, topic filters, pagination, and breadcrumbs;
- internal and external links;
- search, including no-result behavior;
- RSS/Atom feeds and feed item URLs;
- subscription success, validation, duplicate, offline, and provider-error
  states without submitting real users during routine tests;
- copy, share, code, and media controls when present;
- redirects from known legacy URLs; and
- a useful 404 response with a route back to current content.

### 3. Metadata And Syndication

For the homepage and every representative detail page, verify:

- unique title and description;
- canonical URL on `https://thenandlabs.com`;
- Open Graph and social-card fields matching the rendered content;
- correct article author, publication time, and modification time;
- appropriate structured data when used;
- sitemap and robots behavior;
- feed discovery links; and
- favicon, manifest, and theme metadata.

Validate that detail pages do not accidentally inherit unrelated homepage
images or descriptions.

### 4. Performance And Resilience

Measure a production build on representative mobile and desktop pages. Target:

- LCP at or below 2.5 seconds;
- CLS at or below 0.1;
- INP at or below 200 milliseconds where measurable; and
- no avoidable render-blocking third-party dependency.

Inspect image dimensions and formats, font loading, cache behavior, unused
JavaScript, and third-party cost. The primary reading experience must remain
available when analytics, newsletter, font, or social scripts are blocked.

### 5. Security And Privacy

- Scan source and output for credentials and private data.
- Confirm HTTPS-only canonical URLs and no mixed content.
- Use safe external-link behavior without breaking expected navigation.
- Keep forms protected against accidental duplicate submission and abusive
  automation according to provider capabilities.
- Load analytics only when intentionally configured and document collected data.
- Avoid unnecessary cookies, fingerprinting, and third-party embeds.
- Define an appropriate Content Security Policy and security headers when the
  host supports them.

### 6. Browser Compatibility

Run the primary journeys in current Chromium and WebKit/Safari equivalents.
Use Firefox for layout, typography, forms, and browser APIs with known engine
variation. Record any intentional degradation.

## Required Evidence

- exact commands and results;
- tested production artifact identity;
- functional route and journey matrix;
- broken-link and missing-asset report;
- metadata/feed/redirect checks;
- performance measurements;
- privacy and secret-scan result;
- browser matrix; and
- final decision: `pass`, `changes_required`, or `blocked`.

## Exit Criteria

Pass only when the production artifact builds reproducibly, required journeys
work, public metadata is correct, privacy checks are clean, and performance has
no unresolved regression or reader-blocking dependency.

