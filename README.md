# NandLabs

The source for [thenandlabs.com](https://thenandlabs.com): Nanda Raghunathan's publication and selected-work site.

## Write

Create a Markdown file in `src/content/writing/`. Every entry uses this frontmatter:

```yaml
---
title: "A useful title"
description: "A concise description for the archive, search, feeds, and social sharing."
publishedAt: 2026-09-01
kind: essay # essay, note, link, or idea
minutes: 8
topics: [systems, engineering]
featured: false
draft: true
---
```

Set `draft: false` only after completing the content-review workflow. For a curated link, add an attributed `externalUrl`.

## Develop

```sh
npm install
npm run dev
```

The site uses Astro with local Markdown content. `thenandlabs.com` remains the canonical domain regardless of where the static build is hosted.

## Validate

```sh
npm run check
npm test
npm run build
npm run test:a11y
npm run test:site
```

Before publishing, complete the workflows in `.agents/workflows/` and record the result with `.agents/templates/site-validation-report.md`. The deployment workflow runs the same automated gates before GitHub Pages can publish the production artifact.

## Newsletter

The subscription form uses Buttondown only when `PUBLIC_BUTTONDOWN_USERNAME` is explicitly configured. Copy `.env.example` to `.env` and set it to a verified live publication name, then confirm the signup and double-opt-in flow. Without that setting, the page offers RSS and contact links instead of a signup form. RSS is always available at `/rss.xml`.
