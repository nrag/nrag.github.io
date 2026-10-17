---
title: "Links: October 4-17"
description: "Two weeks of links on agents, models, systems, research, mathematics, and the economics of AI."
showSubtitle: false
publishedAt: 2026-10-17
kind: link
minutes: 8
topics: [ai, agents, research, systems]
draft: false
featured: false
---

I promised to post every week, but personal and work commitments kept me from posting last week. I'm making up for it with a huge tranche of links I came across over the last couple of weeks. I've grouped them by topic so they're easier to browse.

## Agents learning from experience

- [Agent Plasticity](https://arxiv.org/abs/2610.08902) - Tests whether an agent carries useful lessons into fresh runs, and what those lessons cost.
- [RLTL;DR](https://arxiv.org/abs/2609.37633) ([Kirchhof](https://x.com/mkirchhof_/status/2105292268340916228?s=12)) - Turns failed attempts into short lessons, then trains the model on those lessons.
- [Harness Learning](https://arxiv.org/abs/2609.35738) - Trains a model to improve the code around another model; adaptation happens in the harness at test time.
- [Memento 3](https://arxiv.org/abs/2610.11794) - An agent revises a rulebook and turns it into executable code while its language model stays frozen.
- [SPADE](https://arxiv.org/abs/2608.19197) - One model builds executable training environments and learns to solve them.
- [AutoEnvScaling](https://simonucl.github.io/blog/2026/autoenvscaling/) ([Yu](https://x.com/simon_ycl/status/2110355692892913797?s=12)) - A proposer studies the solver's attempts and builds new training environments around what it struggles with.
- [Terminal-RSI](https://arxiv.org/abs/2610.22192) - Combines rewriting past attempts with further policy training for terminal agents.

## Context, search, and coordination

- [Fork-and-Flush](https://arxiv.org/abs/2610.07447) ([Cai](https://x.com/jackcai1206/status/2109101112988950691?s=12)) - Keeps the workspace, clears the conversation, and branches the search into fresh attempts.
- [Scaling Discovery Requires Forgetting](https://arxiv.org/abs/2610.20563) - Restarts from the best candidate while dropping search history that may be holding the agents back.
- [An Empirical Study of Harness Design for Coding Agents](https://arxiv.org/abs/2609.20804) - Tests how planning, tools, and context management affect coding agents across different models and budgets.
- [HERMES and its modular Dev-Primitives](https://arxiv.org/abs/2610.07832) - Gives repository components their own agents, with execution failures guiding which components need work.
- [Alex Zhang's compositional-generalization essay](https://alexzhang13.github.io/blog/2026/harness/) - Explains how a harness can break an unfamiliar task into smaller tasks the model already handles.
- [Gemini-agent Minecraft run](https://arxiv.org/abs/2610.22319) - Four agents beat Minecraft after more than a day of coding and recovery in one Easy-difficulty run.
- [HERMES and Dev-Primitives](https://academy.dair.ai/papers/harness-engineering-for-software-engineering-via-modular-executable-dev-primitiv-2610.07832) - A discussion page for the same HERMES paper, with its modular approach to repository work.
- [Harness-design study PDF](https://arxiv.org/pdf/2609.20804) - The full harness-design paper, including the experiments behind the planning and context-management comparisons.
- [Forgetting paper commentary](https://arxivb.org/abs/2610.20563) - Independent commentary on the forgetting paper; the original paper is linked above.
- [DAIR.AI on Harness^2](https://x.com/dair_ai/status/2110755132548038788?s=12) ([Harness^2 paper](https://arxiv.org/abs/2610.14224)) - Harness^2 revises the current harness, then carries lessons from those edits into future tasks.

## Self-report and interpretability

- [Can LLMs Introspect? A Reality Check](https://arxiv.org/abs/2605.26242) - Asks whether models report their internal state or simply pick up clues in the prompt.
- [Identifying Introspection From the Inside](https://arxiv.org/abs/2610.07186) ([Atkinson](https://x.com/diatkinson/status/2107280696809304180?s=12)) ([Bau](https://x.com/davidbau/status/2107398671323295968?s=12)) - Studies whether learned preferences and reports of those preferences share internal mechanisms in a controlled experiment.
- [Verbalized and Internal Probabilities Are Coupled](https://arxiv.org/abs/2610.00827) ([Williamson](https://x.com/sineadwilliamso/status/2107160250839371808?s=12)) - Tests how a model's stated confidence relates to the probabilities it assigns to answers.
- [Training Agents to Self-Report Misbehavior](https://brucewlee.com/self-incrimination/) ([Lee](https://x.com/brucewlee2/status/2026712698981880092?s=12)) - Trains agents to report their own misbehavior and studies how that works alongside external monitoring.
- [Grafting model beliefs across checkpoints](https://arxiv.org/abs/2610.00767) ([Feng](https://x.com/ihsgnef/status/2107295306161299467?s=12)) - Learns a weight update on a base model, then transfers it to a post-trained checkpoint.
- [Neural Networks Are Already Clean](https://already-clean.goodfire.com/) ([Cammarata](https://x.com/nickcammarata/status/2110757819427574056?s=12)) - Argues that native neurons and circuits may be easier to interpret than we assumed; presented as a working hypothesis.
- [Complete or Sparse](https://arxiv.org/abs/2610.20851) - Works out conditions under which a learned representation can recover the variables that generated the data.

## Models and training

- [Base Models Can Reason By Taking a Cue From Training Data](https://arxiv.org/abs/2610.06851) - Studies how the first few response tokens can trigger reasoning patterns learned during pretraining.
- [The Implicit Curriculum Hypothesis](https://arxiv.org/abs/2604.08510) - Tracks when models learn individual skills and when they learn to combine them on designed tasks.
- [LLMs Learn Better In-Context from Rules than from Examples](https://arxiv.org/abs/2609.03213) ([Fu](https://x.com/xiangfu/status/2107116494991642872?s=12)) - Compares rules with examples across five learning tasks; rules generally work better in those tests.
- [Queen](https://arxiv.org/abs/2610.03695) ([Bhaskar](https://x.com/adithyanlp/status/2107123924828049691?s=12)) - Connects a chess expert to a language model so it can explain moves as well as play them.
- [Loop, Think, & Generalize](https://arxiv.org/abs/2604.07822) ([Yao](https://x.com/yuekun_yao/status/2044229171627639004?s=12)) - Studies whether repeatedly using the same transformer layers helps models combine knowledge across more reasoning steps.
- [LOOM](https://arxiv.org/abs/2610.01153) ([Liu](https://x.com/shiwei_liu66/status/2106980239238901881?s=12)) - Addresses unstable hidden states and repeated expert choices when looping mixture-of-experts models.
- [Dust](https://qlabs.sh/research/dust) ([Samip](https://x.com/industriaalist/status/2107194534501433804?s=12)) - Trains through activation perturbations instead of backpropagation, though the compute cost still needs substantial work.
- [Lilian Weng's Scaling Laws, Carefully](https://lilianweng.github.io/posts/2026-06-24-scaling-laws/) - Shows how training choices and measurement details can change what a scaling curve seems to tell us.
- [Kolibri](https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/) ([Aleph Alpha](https://x.com/aleph__alpha/status/2106306840657297814?s=12)) - An English-German model released with open weights under Apache 2.0.
- [Mistral Large 4](https://mistral.ai/news/mistral-large-4/) ([Mistral](https://x.com/mistralai/status/2107457414387622310?s=12)) - Mistral's new large model, available as an API preview with weights promised later in October.
- [Sasha Malysheva on latent communication](https://x.com/aimalysheva/status/2106870226306650594?s=12) ([Full-bandwidth transformer](https://arxiv.org/abs/2608.08888), [Latent Planning](https://arxiv.org/abs/2604.12493)) - Two papers on latent computation: feeding hidden states back into a model and finding plans before they appear in text.

## Systems and tools

- [KV-streams](https://arxiv.org/abs/2609.35750) ([Penaloza](https://x.com/emilianopp_/status/2105335748916335027?s=12)) - Carries the KV cache through context compaction instead of rebuilding it each time.
- [RaReCache](https://arxiv.org/abs/2610.11358) - Reuses a smaller model's KV cache in a larger model, recomputing selected positions to correct transfer errors.
- [Processing in Memory primer](https://arxiv.org/abs/2012.03112) - An older primer on moving computation closer to memory to reduce the cost of moving data.
- [Modal's serving case study](https://modal.com/blog/trillion-tokens-trillion-parameters) - A serving case study covering parallelism, speculative decoding, cache tiers, and routing for coding-agent workloads.
- [ScaleDown](https://github.com/scaledown-team/SLM_Agent) - Tools for finding AI calls that could move to task-specific small models and testing the migration.
- [Simon Willison's Decisions plugin](https://simonwillison.net/2026/Oct/6/llm-openai-decisions/) - A command-line plugin for asking models constrained questions: yes/no, choices, and scores.
- [AgentRun](https://github.com/Parcha-ai/agentrun) ([Rios Berrios](https://x.com/miguelriosen/status/2101029313906987422?s=12)) - Mixes code, typed decisions, and agent calls in workflows you can inspect and rerun.
- [REA](https://github.com/morluto/rea) - Gives agents tools to inspect application behavior and reverse-engineer native binaries.
- [Danielle Morrill's credential setup](https://daniellemorrill.com/blog/how-my-agents-use-my-passwords) - A practical account of scoped credential access for agents, including where that protection stops.
- [The people holding up the internet](https://sheets.works/data-viz/holding-up-the-internet) - Shows how much widely used software depends on the work of a small number of maintainers.
- [Processing in Memory PDF](https://arxiv.org/pdf/2012.03112) - The full processing-in-memory survey, covering the hardware and software needed to make it useful.
- [ScaleDown homepage](https://scaledown.ai/) - The product site for the task-specific small models used by the migration tools.
- [Internet maintainers](https://sheets.works/data-viz/holding-up-the-internet?utm_content=468762334&utm_medium=social&utm_source=twitter&hss_channel=tw-15300187) - The original shared URL for the same visualization of open-source maintenance work.

## Research and evaluation

- [Priced Guidance](https://arxiv.org/abs/2610.04976) ([Wen](https://x.com/wen_kaiyue/status/2107501385059381556?s=12)) - Measures how much help a model needs to reconstruct a research idea by charging for each hint.
- [Epiplexity](https://arxiv.org/abs/2601.03220) ([Fein](https://x.com/danielfein7/status/2108701225722274227?s=12)) - Defines useful information in terms of what an observer with limited compute can learn.
- [Kernaut](https://arxiv.org/abs/2610.10394) ([Suwandi](https://x.com/richardcsuwandi/status/2107854175677898996?s=12)) - Lets coding agents search for new kernel programs while construction rules enforce mathematical validity.
- [LLM-as-a-Verifier](https://github.com/llm-as-a-verifier/llm-as-a-verifier) - Uses finer scores and repeated evaluation to give agents feedback; these scores are judgments, not proofs.
- [Crosby's evaluation account](https://crosby.ai/blog/how-we-do-evals-at-crosby) - Combines deterministic document checks with lawyer comparisons to evaluate work on actual contracts.
- [John Langford's Research at AI speed](https://hunch.net/~jl/Research_at_AI_Speed.pdf) - John Langford on the pipelines, experiment capacity, and review needed to do research at AI speed.
- [Jo Jiao's MATS and Redwood lessons](https://www.lesswrong.com/posts/Q4rcvgjbgjTwmn8Xa/research-lessons-i-learned-at-mats-and-redwood) - Practical research advice: make predictions, run experiments that test them, and update your understanding.
- [Learning what to investigate next](https://x.com/anirudhg9119/status/2110079314607886771?s=12) ([MIRA paper](https://arxiv.org/abs/2610.02525)) - Separates choosing the next research question from executing it, so learning can target those decisions.

## Learning and working

- [Oguzhan Olguncu's learning essay](https://ogzhanolguncu.com/blog/how-to-keep-learning-in-the-age-of-llms/) - Keep doing the work that teaches you; let the model handle the surrounding setup.
- [Felix Rieseberg's ambition essay](https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/) - Push beyond doing the same tasks faster, with better tools and checks outside the model.
- [Seeing Theory](https://seeing-theory.brown.edu/index.html) - An interactive introduction to probability and statistics, now archived for reference.
- [Scott Aaronson's AI Alignment Theory course](https://scottaaronson.blog/?p=10125) - A course on AI alignment theory that leaves room for disagreement about its foundations.
- [Sonia Baschez on household assistance](https://x.com/soniabaschez/status/2107267198091997211?s=12) - Asks for an assistant that remembers and coordinates household work without waiting for every instruction.
- [Baschez interview](https://www.businessinsider.com/ai-agent-wife-not-executive-assistant-2026-10) - An interview expanding on Baschez's request for help with the household mental load.
- [Ethan Mollick on class attendance](https://x.com/emollick/status/1660689315159068673?s=12) ([study](https://researchconnect.suny.edu/en/publications/class-attendance-in-college-a-meta-analytic-review-of-the-relatio/)) - A 2023 post on a 2010 meta-analysis linking class attendance with grades; correlation is not causation.

## AI and mathematics

- [Raghu Meka on barriers of perception](https://terrytao.wordpress.com/2026/10/07/the-barriers-of-perception/) - Raghu Meka on how beliefs about what is possible can stop us from attempting worthwhile problems.
- [The collected mathematicians' reactions](https://proofsandprompts.com/2026/10/08/100-reactions-to-100-solutions/) - Collects mathematicians' reactions to announced AI results, including questions about proofs, credit, and training.
- [Bill Gasarch's reflections](https://blog.computationalcomplexity.org/2026/10/conjecture-that-i-thought-would-not-be.html?m=1) - Bill Gasarch discusses surprising announced results and the gap between formalization and human understanding.
- [Derek Thompson's essay](https://www.derekthompson.org/p/i-know-why-the-mathematicians-weep) - On mathematical work, identity, and the grief that can accompany automation; the full interview is paywalled.
- [Gautam Kamath on 3SUM and shortest paths](https://x.com/thegautamkamath/status/2107310065229205811?s=12) ([paper](https://arxiv.org/abs/2610.06783v1)) - Points to a paper claiming faster algorithms for 3SUM and all-pairs shortest paths.

## Economics, institutions, and risk

- [Some Simple Economics of AGI](https://arxiv.org/html/2602.20946v2) - Models an economy where execution gets cheap but verification and responsibility remain scarce.
- [The Acemoglu-Gans exchange](https://joshuagans.substack.com/p/the-acemoglu-gans-exchange-on-ai) - A debate about how AI affects growth, with worker complementarity and new tasks central to the disagreement.
- [Michael Jordan's 2018 essay](https://medium.com/@mijordan3/artificial-intelligence-the-revolution-hasnt-happened-yet-5e1d5812e1e7) - Michael Jordan's 2018 argument for building AI infrastructure around people and institutions.
- [Michael Jordan interview and preface](https://www.di.ens.fr/~fbach/MJordan_ITW_Liberation_English.html) - Jordan on AI and society; read his preface explaining what the headline misses.
- [Timothy Gowers's reflection on extinction risk](https://gowers.wordpress.com/2026/10/16/how-worried-should-we-be-about-extinction-risk-from-ai/) - Gowers explains his growing concern about AI extinction risk without treating catastrophe as inevitable.
- [Acemoglu-Gans exchange](https://joshuagans.substack.com/p/the-acemoglu-gans-exchange-on-ai?r=oc6a&utm_campaign=post&utm_medium=web) - The original shared URL for the same exchange on AI, workers, and economic growth.
- [AGI economics PDF](https://arxiv.org/pdf/2602.20946v2) - The PDF of the same economics paper, including its model of verification and apprenticeship.
- [The Mathematics of the State](https://rewiregov.substack.com/p/the-mathematics-of-the-state) - Frames government decisions as optimization problems, while making the political choices in their objectives explicit.
- [Anna Stansbury on truck safety](https://x.com/annastansbury/status/2107877085280883086?s=12) - Asks whether electronic logging requirements actually made trucking safer, rather than just easier to monitor.
- [An Anatomy of Asset Returns](https://x.com/ptrpomorski/status/2109313827657679276?s=12) ([paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7481778)) - A paper separating gradual price movements from jumps to study patterns hidden in aggregate returns.

## Biology and neural circuits

- [Symmetries and continuous attractors in disordered neural circuits](https://www.nature.com/articles/s41593-026-02452-4) - Models built from head-direction cell data show how apparently disordered circuits can still have structured dynamics.
- [How biological synapses self-assemble gradient learning](https://x.com/neurovium/status/2108900669453107226?s=12) ([paper abstract](https://pubmed.ncbi.nlm.nih.gov/42853665/)) - A model of how local synaptic rules could assemble circuits that learn.
- [A re-look at The Selfish Gene after 50 years](https://rosa.uniroma1.it/rosa04/organisms/article/view/19646) - Vidyanand Nanjundiah revisits The Selfish Gene, questioning its account of cooperation and its gene-centered framing.
