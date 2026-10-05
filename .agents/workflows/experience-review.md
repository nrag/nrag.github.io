# Experience Review Workflow

## Purpose

Verify that the production site is responsive, accessible, understandable, and
fully operable for keyboard, touch, screen-reader, zoom, and reduced-motion use.

Target WCAG 2.2 AA. Automated checks supplement rather than replace manual
review.

## Inputs

- the exact production build served through its production-like server;
- representative pages for every layout and content type;
- the primary subscribe and connect journeys; and
- automated accessibility and browser-test results.

## Representative Page Set

Include at least:

- homepage;
- writing index and one long essay;
- one note or annotated-link page;
- work index and one project story;
- About page;
- subscribe experience, including validation and failure states;
- search and empty-results state when search exists; and
- 404 page.

## Review Steps

### 1. Responsive Layout

Exercise every representative page at 320, 375, 768, 1024, and 1440 CSS pixels.
At each size verify:

- no unintended horizontal scrolling;
- readable line length and type size;
- navigation remains reachable and understandable;
- headings, metadata, code, tables, images, and callouts do not clip or overlap;
- touch targets have adequate size and spacing;
- content order remains logical when columns collapse; and
- subscription and search controls remain usable with the on-screen keyboard.

Test portrait and landscape when the layout changes materially between them.

### 2. Keyboard And Focus

Starting at the address bar, operate the entire page without a pointer:

- skip link reaches the main content;
- focus order matches visual and reading order;
- every control has a visible focus indicator;
- menus, dialogs, search, and forms follow expected keyboard conventions;
- focus is contained and restored correctly for modal interfaces; and
- no keyboard trap exists.

### 3. Semantics And Screen Reader

- One descriptive page-level heading identifies the content.
- Heading levels form a logical outline.
- Header, navigation, main, article, complementary, and footer landmarks are
  used appropriately.
- Controls expose accurate accessible names, roles, values, and states.
- Images have meaningful alternative text or are correctly decorative.
- Link text makes sense out of context.
- Dates, code, abbreviations, and tables remain understandable.
- Form instructions, required fields, errors, and success messages are
  programmatically associated and announced.

Manually inspect the accessibility tree for each distinct layout. Use a screen
reader for the homepage, a representative article, navigation, and subscribe
journey.

### 4. Visual Accessibility

- Text and essential non-text elements meet WCAG AA contrast.
- Meaning is not conveyed by color alone.
- The page remains usable at 200% zoom.
- At 400% zoom or a 320px reflow viewport, content reflows without loss of
  information except where two-dimensional scrolling is essential.
- Text spacing overrides do not clip or hide content.
- Light, dark, hover, focus, selected, error, and disabled states remain clear.

### 5. Motion And Media

- Respect `prefers-reduced-motion`.
- Avoid autoplaying sound or distracting continuous motion.
- Pause controls exist for any non-essential moving content.
- Animations do not block reading or interaction.
- Videos include captions and audio-first material includes a transcript when
  either format is introduced.

### 6. Automated Checks

Run the repository accessibility suite on the complete representative page set.
Automated critical or serious violations fail the review. Investigate moderate
and minor findings rather than suppressing them broadly.

## Required Evidence

- viewport/browser matrix with pass or finding per page;
- keyboard journey results;
- screen-reader and accessibility-tree notes;
- zoom, reflow, contrast, and reduced-motion results;
- automated accessibility report; and
- final decision: `pass`, `changes_required`, or `blocked`.

## Exit Criteria

Pass only when all primary content and actions work across the required viewport
matrix, WCAG 2.2 AA blockers are resolved, and both automated and manual evidence
apply to the same production artifact.

