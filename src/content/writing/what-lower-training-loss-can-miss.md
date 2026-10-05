---
title: "What a lower training loss can miss"
description: "Why I want evaluations of the behavior a model is meant to provide."
publishedAt: 2026-10-04
kind: link
minutes: 1
topics: [ai, evaluation]
featured: false
draft: true
---

A lower training loss is useful information. I still want to know what the model can do at that checkpoint.

[Generalization Dynamics of LM Pre-training](https://arxiv.org/abs/2609.33150), also [discussed on AlphaXiv](https://www.alphaxiv.org/abs/2609.33150), examines cases where task performance reverses during training. I find it interesting because it makes checkpoint selection an evaluation problem. The observations come from selected models and tasks; the proposed explanation should not be treated as a universal rule.

[Weihang's introduction](https://x.com/Weihang404/status/2106040442600988995) points to [Scaling Video Generation for Reasoning](https://arxiv.org/abs/2609.36599). It asks how well video generation tracks the state needed to solve a problem. Matching visible sequences and tracking hidden state are different requirements. The compute comparison comes from a controlled 2x2x2-cube benchmark, so I would be careful about extending it to reasoning in general.

Both links interest me for the same engineering reason: we need to measure the behavior we intend to use. A training curve alone cannot tell us whether that behavior improved.
