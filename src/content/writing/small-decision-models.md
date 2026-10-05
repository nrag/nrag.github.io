---
title: "Where small decision models earn their place"
description: "Why routing, classification, and judging deserve separate model evaluations."
publishedAt: 2026-10-04
kind: link
minutes: 1
topics: [ai, evaluation]
featured: false
draft: true
---

I find narrow decision models interesting because many software tasks need a choice rather than a long answer.

[Tony Gentilcore's Glean experiments](https://x.com/tonygentilcore/status/2104639390266036251) separate classification, routing, reranking, and citation judging. I like that framing. A model that routes requests well still needs a separate evaluation before it judges citations. Agreement with another model also needs to be distinguished from accuracy against an independent label.

[Elizabeth Hutton's introduction](https://x.com/ehutt_/status/2104674562583748874) points to [Arize's study of Jev as a judge](https://arize.com/blog/jev-llm-judge-consistency/). The part I find useful is using uncertainty to decide where people should review results. The study uses 517 labeled examples across ten binary evaluators. Repeating judgments does not create more independent examples, and the PII dataset cannot establish a false-positive rate.

[Sebastian Raschka's history of text classifiers](https://magazine.sebastianraschka.com/p/classifier-history-and-jev) adds context. Classification has a long history before today's language models. His discussion of proprietary architecture includes educated guesses; I would keep those separate from confirmed details.

My takeaway: evaluate the decision your application needs. Check accuracy, uncertainty, latency, and cost for that task before choosing a model.
