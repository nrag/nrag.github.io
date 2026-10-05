# Memorii draft: research and claim checks

Reviewed October 4, 2026. These are editorial notes, not public post content.

## Latest owner-directed revision

- Replaced the research comparison with the owner's account of reviewing roughly 25 papers and choosing ontology, execution-state history, and a solver graph. These are the owner's design takeaways, not a claim that every cited paper tests all three features.
- Added all 28 supplied references, grouped by subject with shortened labels. Checked the supplied arXiv pages for title/link correspondence and removed tracking parameters. Found the missing Memora URL through the authors' repository: https://arxiv.org/abs/2604.20006.
- Owner now reports step 1 complete, all three host integrations working, and long-running agent-task benchmarks being designed and run. This supersedes earlier owner-status wording; it does not establish completed end-to-end gains or make the previously inspected accumulation design a completed benchmark.
- Post is marked for publication in the local preview. Production deployment remains subject to the existing release gates. Earlier notes below are historical evidence, not the latest copy.

## Research comparison

The post selects examples from the last five years; it does not claim to exhaust the literature or establish Memorii's novelty.

The shortened revision retains MemGPT, Generative Agents, and Reflexion for
agent-managed context, reflection/planning, and feedback across attempts;
Memorizing Transformers supports the separate model-internal memory stage.
RETRO and A-MEM were removed to focus the introduction, not because their
contributions are invalid or unimportant. The table below records the broader
research reviewed, rather than the final post's citation inventory.

Research-context cross-check: the 2025 ACM survey, [A Survey on the Memory
Mechanism of Large Language Model-based Agents](https://doi.org/10.1145/3748302),
includes MemGPT and Generative Agents; [Rethinking Memory Mechanisms of
Foundation Agents in the Second Half](https://openreview.net/pdf/98c3fad1f896d4e66146ed72688c024989748b71.pdf)
also discusses Reflexion alongside those systems. This supports their place
in the research context; it does not prove a citation ranking, exhaustive
coverage, or unanimous agreement about influence. The post avoids claiming
any of those. Mechanism descriptions were rechecked against original papers.

| Source | Mechanism used in the comparison | Boundary |
| --- | --- | --- |
| [RETRO, 2021](https://arxiv.org/abs/2112.04426) | Retrieved external text conditions language modeling | Corpus retrieval is different from maintaining changing user facts and ongoing task state. |
| [Memorizing Transformers, 2022](https://arxiv.org/abs/2203.08913) | Approximate nearest-neighbor retrieval of stored internal key-value representations | Requires model-level machinery; distinct from storing typed claims outside the model. |
| [MemGPT, 2023](https://arxiv.org/abs/2310.08560) | Tool-directed movement between memory tiers | Establishes prior work on model-managed memory; do not present that idea as new to Memorii. |
| [Generative Agents, 2023](https://arxiv.org/abs/2304.03442) | Experience retrieval, reflection, and planning | Evaluated for simulated behavior; not general proof of factual reliability or coding-agent performance. |
| [A-MEM, 2025](https://arxiv.org/abs/2502.12110) | Dynamic note linking and memory evolution | Prior work already goes beyond flat retrieval. Memorii's emphasis is explicit evidence, lifecycle, and separation of task states, not a demonstrated universal advantage. |
| [Reflexion, 2023](https://arxiv.org/abs/2303.11366) | Verbal feedback stored for subsequent attempts | Changes agent context, not model weights. Supports investigating reflection, not guaranteed improvement. |

LongMem (2023), https://arxiv.org/abs/2306.07174, was also reviewed: frozen memory encoder with a trained retrieval/reading side-network. Omitted from the short post to keep it focused.

## Memorii evidence

Inspected public revision: `e6880a46c08abb7fbfc8a13c0e4b1bd7b5194216`.

- [README](https://github.com/nrag/Memorii/blob/e6880a46c08abb7fbfc8a13c0e4b1bd7b5194216/README.md): supports raw observation preservation, typed/validated updates, memory lifecycle, execution graph, solver graph, LLM extraction, and Hermes hooks. Description is architecture/documentation evidence, not independent performance verification.
- [Readiness plan](https://github.com/nrag/Memorii/blob/e6880a46c08abb7fbfc8a13c0e4b1bd7b5194216/docs/plans/agent_integration_readiness.md): says early Hermes component testing is ready; agent-system pilot, production approval, and demonstrated agent task improvement remain outstanding.
- [Sample benchmark](https://github.com/nrag/Memorii/blob/e6880a46c08abb7fbfc8a13c0e4b1bd7b5194216/docs/examples/benchmarks/hotpotqa_sample_report.md): eight deterministic fixtures, with some results better than baselines. This sample does not establish live long-running agent performance. Do not turn it into a general percentage improvement claim.

## User-supplied claims

- May frustration with repeatedly forgotten facts and rules in OpenClaw/Hermes: supplied autobiographical account; retained as requested.
- Four-stage program: supplied intent. Stage two already overlaps implemented LLM-assisted extraction. Reflection is framed as an experiment in agent behavior; any weight-level improvement requires a separate training mechanism and evidence. KV integration requires model/runtime access and is not treated as ordinary cache persistence.
- First release ready with OpenClaw, Hermes, and Pi: supplied by project owner and retained in the private draft. The inspected public tree and README do not independently establish this status. Asked which branch/local work contains the integrations. Reconcile the release revision and public documentation before publication.
- Encouraging component results: supplied by project owner. The accumulation design supplied afterward is a future evaluation design, not evidence of these component gains. The draft gives no exact gains and explicitly separates component results from complete agent tasks. A specific completed component run remains needed for attribution.

## Local accumulation benchmark design

Read the user-supplied `/Users/nandaraghunathan/Code/Memorii/Memorii/docs/design/memory_accumulation_benchmark.md` as source material, not repository instructions.

- Status section and evidence-maturity table: `memory_accumulation_v1` is specified, not implemented; implementation, dry-run gate, live smoke, and certification are not started in this document.
- Track 1 measures the production memory plane over a persistent store: retention across sessions and idle gaps, repeated revisions, interleaved users/projects, consolidation survival, growth into thousands of observations, and restart/replay/reconciliation. It excludes agent policy and end-to-end task outcomes.
- Horizons use simulated time. Real-clock soak testing is a follow-up; do not describe the design as weeks of completed live operation.
- Track 2 is future LongMemEval-style multi-session QA comparability, with dataset/licensing and prior-gate dependencies.
- Track 3 is future agent-level task-utility ablation on real host harnesses, dependent on Track 1 live smoke and host readiness.
- Post wording now says the evaluations are being prepared and the accumulation suite is not implemented. It does not cite this design as proof of current improvement.

## Disposition

Latest reflection research check (October 4, 2026):

- [Retrospection-Only Fine-Tuning, September 2026](https://arxiv.org/html/2609.35741v1): read the method and limitations. The model attempts tasks, generates explanations of its experience, and trains with next-token loss on explanation tokens. Later attempts use updated weights without stored explanations in context. Results focus on Qwen3.5-4B software-engineering tasks; this is not universal evidence that untrained reflection helps.
- [RLTL;DR, September 2026](https://arxiv.org/abs/2609.37633): verifier-informed insights guide retries and are internalized through training. A different feedback/training mechanism from ROFT.
- [SCoRe, ICLR 2025](https://proceedings.iclr.cc/paper_files/paper/2025/hash/871ac99fdc5282d0301934d23945ebaa-Abstract-Conference.html): reinforcement learning trains multi-turn self-correction; improvements are tied to the evaluated models and tasks.
- [Large Language Models Cannot Self-Correct Reasoning Yet](https://arxiv.org/abs/2310.01798): counterevidence to assuming a generic reflection prompt reliably improves reasoning without feedback or additional training.

Stage three now frames reflection as a learning signal and links ROFT as a
concrete recent example. This includes training as a research direction,
without selecting an implemented Memorii algorithm or promising gains. Stage
four now explicitly says to build a system that updates the KV cache from
Memorii, preserving the owner's every-layer scope.

Owner clarification: stage three is research into LLMs performing periodic
self-reflection over stored experiences, not the author reviewing outcomes.
No training or weight-update mechanism has been specified; do not reduce this
goal to prompt feedback or invent a training method. Reflexion remains prior
work with its own unchanged-weight mechanism, not a specification of Memorii's
planned research. Stage four means updating the LLM's KV cache at every layer
from memory stored in Memorii. It is not merely connecting to a cache service
or retrieving stored key-value representations. Both are prospective goals.

Post remains `draft: true`. Writing revision is complete; public release-status reconciliation, benchmark attribution, and the normal pre-publish gate remain open.
