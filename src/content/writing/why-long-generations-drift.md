---
title: "Why long generations drift"
description: "A question about sampling, long text, and the limits of extending results to coding agents."
publishedAt: 2026-10-04
kind: link
minutes: 1
topics: [ai, sampling]
featured: false
draft: true
---

[Ravid Shwartz Ziv's thread on long-output sampling](https://x.com/ziv_ravid/status/2104276475989921873) caught my attention because the quality of a long generation can change as it continues.

The question I want to understand is how distribution-aware sampling affects degeneration in long text. Choosing each next token is a local decision, but we judge the result as a whole.

I also find the thread's question about long agentic coding runs interesting. A coding agent gets tool results, changes files, and checks its work. Those interactions make it a different setting from generating uninterrupted text. I would want direct experiments before assuming a sampling result transfers.

For now, this is a question worth following. The underlying paper still needs to be identified before I make claims about its method or results.
