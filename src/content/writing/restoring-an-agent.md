---
title: "Restoring an agent does not restore the world"
description: "Why saved execution state needs a separate plan for external effects."
publishedAt: 2026-10-04
kind: link
minutes: 1
topics: [ai, agents, infrastructure]
featured: false
draft: true
---

[NVX](https://github.com/microsoft/nvx) and [Agent Substrate](https://github.com/agent-substrate/substrate) interest me because they address different parts of running agents.

NVX provides a lightweight microVM sandbox with hardware-enforced isolation. I find it useful to examine as an execution building block: where does untrusted code run, and what boundary contains it?

Agent Substrate manages stateful actors, including suspension, resumption, and assignment to workers. I find that interesting for agents that spend time waiting but need to retain their working state. The project is pre-1.0, and its APIs can change. Resource authorization remains an area to review before deployment.

The application still needs to account for actions outside the saved environment. Restoring a snapshot cannot undo an email already sent or a payment already accepted.

For an agent that resumes work, I would want durable records of external actions, retry-safe operations, and a clear rule for what happens when an action's outcome is unknown. Saving execution state is one part of that design.
