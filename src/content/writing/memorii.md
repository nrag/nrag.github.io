---
title: "Memorii - a memory system for agents"
description: "Repeatedly forgotten facts led me to build Memorii, starting with evidence, changing memories, and unfinished work."
showSubtitle: false
publishedAt: 2026-10-04
kind: note
minutes: 2
topics: [projects, memorii]
featured: false
draft: false
---

I've been playing around with OpenClaw and Hermes since they were released. By May, I was frustrated: they kept forgetting basic facts and rules I'd repeated many times. I thought they needed a better memory system.

That became [Memorii](https://github.com/nrag/Memorii).

Before I jumped in, I went through about 25 papers on memory systems from the last few years (see references below). A few things stood out to me: having an ontology helps, keeping an execution state history helps, and maintaining a solver graph helps as the LLM searches for a solution.

This is exactly what I'm doing with Memorii. I'm building it in four stages.

1. Build the memory system: ontology, execution state, and solver graph.
2. Make LLMs manage the memory.
3. Explore periodic self-reflection as a learning signal for LLMs, including [training on their own retrospections](https://arxiv.org/abs/2609.35741).
4. Build a system to update the KV cache at every layer using memory stored in Memorii.

I've completed step 1. Memorii now works with OpenClaw, Hermes, and Pi and tracks ontology, execution state, and a solver graph. Component-level benchmarks look encouraging. I'm still designing and running long-running agent-task benchmarks. I'll share more with examples of how Memorii helps my agentic workflows.

## References

These informed how I think about memory, task state, model integration, and evaluation.

### Agent memory and experience

- [Generative Agents (2023)](https://arxiv.org/abs/2304.03442)
- [MemGPT (2023)](https://arxiv.org/abs/2310.08560)
- [Reflexion (2023)](https://arxiv.org/abs/2303.11366)
- [Voyager (2023)](https://arxiv.org/abs/2305.16291)
- [Zep (2025)](https://arxiv.org/abs/2501.13956)
- [Mem0 (2025)](https://arxiv.org/abs/2504.19413)
- [Hindsight Is 20/20 (2025)](https://arxiv.org/abs/2512.12818)
- [General Agentic Memory via Deep Research (2025)](https://arxiv.org/abs/2511.18423)
- [Remember When It Matters (2026)](https://arxiv.org/abs/2607.08716)

### Harnesses and task state

- [StateM (2026)](https://arxiv.org/abs/2608.15089)
- [Harness-1 (2026)](https://arxiv.org/abs/2606.02373)
- [MemoHarness (2026)](https://arxiv.org/abs/2607.14159)
- [Rethinking the Evaluation of Harness Evolution for Agents (2026)](https://arxiv.org/abs/2607.12227)
- [Harness-Bench (2026)](https://arxiv.org/abs/2605.27922)
- [Agentic Harness Engineering (2026)](https://arxiv.org/abs/2604.25850)
- [Self-Harness (2026)](https://arxiv.org/abs/2606.09498)

### Model memory and KV caching

- [Memorizing Transformers (2022)](https://arxiv.org/abs/2203.08913)
- [Prefix-Tuning (2021)](https://arxiv.org/abs/2101.00190)
- [RETRO (2021)](https://arxiv.org/abs/2112.04426)
- [P-Tuning v2 (2021)](https://arxiv.org/abs/2110.07602)
- [Infini-attention (2024)](https://arxiv.org/abs/2404.07143)
- [CacheBlend (2024)](https://arxiv.org/abs/2405.16444)
- [KVLink (2025)](https://arxiv.org/abs/2502.16002)
- [KV Packet (2026)](https://arxiv.org/abs/2604.13226)

### Memory evaluation

- [LongMemEval (2024)](https://arxiv.org/abs/2410.10813)
- [LoCoMo (2024)](https://arxiv.org/abs/2402.17753)
- [Locomo-Plus (2026)](https://arxiv.org/abs/2602.10715)
- [Memora: From Recall to Forgetting (2026)](https://arxiv.org/abs/2604.20006)
