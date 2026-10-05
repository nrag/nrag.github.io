---
title: "Memorii - a memory system for agents"
description: "Repeatedly forgotten facts led me to build Memorii, starting with evidence, changing memories, and unfinished work."
publishedAt: 2026-10-04
kind: note
minutes: 2
topics: [projects, memorii]
featured: false
draft: false
---

I've been playing around with OpenClaw and Hermes since they were released. By May, I was frustrated: they kept forgetting basic facts and rules I'd repeated many times. I thought they needed a better memory system.

That became [Memorii](https://github.com/nrag/Memorii).

Agent memory already has useful precedents. [MemGPT (2023)](https://arxiv.org/abs/2310.08560) lets an LLM manage information across memory tiers. [Generative Agents (2023)](https://arxiv.org/abs/2304.03442) uses retrieved experiences and reflections to plan simulated behavior. [Reflexion (2023)](https://arxiv.org/abs/2303.11366) stores feedback to improve subsequent attempts without updating model weights. These show why saving conversation history alone isn't the whole problem.

Memorii builds an ontology of entities and relationships, tracks changing facts, and preserves their evidence. It maintains execution state for ongoing work and a solver graph for hypotheses, observations, and decisions. These stay separate so an untested guess doesn't become a remembered fact.

I'm building this in stages:

1. Build the memory system: ontology, execution state, and solver graph.
2. Make LLMs manage the memory.
3. Explore periodic self-reflection as a learning signal for LLMs, including [training on their own retrospections](https://arxiv.org/abs/2609.35741).
4. Build a system to update the KV cache at every layer using memory stored in Memorii.

The later stages are ML research goals, with mechanisms and gains still to establish. Updating per-layer KV caches requires model/runtime access.

Memorii is ready for its first release, working with OpenClaw, Hermes, and Pi. Component benchmarks look encouraging; long-running agent-task gains remain unproven. I've designed, but haven't implemented, an accumulation benchmark for revised facts, interleaved users/projects, growing stores, and restarts across sessions. It uses simulated time. Multi-session Q&A comparisons and agent-task evaluations follow.

I'll keep sharing updates periodically as I make progress.
