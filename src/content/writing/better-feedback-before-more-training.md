---
title: "Better feedback before more training"
description: "Two approaches that make the teaching signal worth examining."
publishedAt: 2026-10-04
kind: link
minutes: 1
topics: [ai, training]
featured: false
draft: true
---

These links made me think about the feedback we give models before asking them to improve.

[Aran Komatsuzaki's introduction](https://x.com/arankomatsuzaki/status/2104413129799274526) points to [research on recursive self-improvement through distillation](https://arxiv.org/abs/2609.30652). The work combines a stronger teaching signal with shorter, correctness-filtered rewrites. I find the filtering interesting: which examples survive can matter as much as how many we collect. Access to gold answers is part of the setup. Average@12 measures mean sampled accuracy, not whether any of twelve attempts succeeds.

[Jason Weston's introduction](https://x.com/jaseweston/status/2104564368792854860) links to [Meta's work on RL-XAR](https://facebookresearch.github.io/RAM/blogs/unslop/). The approach teaches a judge to recognize expert writing before using it to optimize the writer. That order interests me. If the judge rewards weak writing, more optimization can reinforce it.

The writing experiments and human studies are bounded. They do not show that the approach fixes every kind of poor AI writing.

These are different training methods, but they leave me with the same question: what does the teaching signal actually reward?
