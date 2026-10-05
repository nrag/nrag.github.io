---
title: "What agents keep after failure"
description: "Three papers separate learning in model weights from carrying context into the next attempt."
publishedAt: 2026-10-04
kind: link
minutes: 1
topics: [ai, agents]
featured: false
draft: true
---

A failed attempt can help an agent on its next run. These three papers caught my attention because they put that learning in different places.

[RLTL;DR](https://arxiv.org/abs/2609.37633) uses verifier feedback to generate short insights after failures. Those insights guide retries and become part of training. I find the compact teaching signal interesting: a useful lesson may be shorter than the full attempt that produced it.

[Retrospection-Only Fine-Tuning](https://arxiv.org/abs/2609.35741) turns explanations into training data. The title says "without RL," but the model still learns through training and observations from its environment. That distinction matters when comparing methods.

[Thinking Before Thinking](https://arxiv.org/abs/2609.38147) explores inference-time control and persistent artifacts. This interests me for a different reason: an agent can change how it approaches a task without updating its weights during that run.

When someone says an agent learns from failure, I want to know what survives: changed weights, saved notes, or a different plan. Each comes with different costs and limits.
