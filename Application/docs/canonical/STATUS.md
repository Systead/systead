# Current status

**Status date:** 19 July 2026
**Development label:** Running private pre-alpha
**Active phase:** First-week stress test
**Public testing:** Closed

## One-sentence public status

> Systead is a running private pre-alpha currently being stress-tested under real daily workload; it is not yet available as a supported tester build.

## What exists

A private Systead environment is running in the flagship proving ground and is being used as an operational system rather than only a static concept or website mock-up.

Current work includes, at varying levels of completeness:

- a configurable House and command-centre direction;
- local records and linked operational data;
- searchable knowledge and source material;
- proposals and review queues;
- command declarations and safety concepts;
- audit, backup, recovery, and portability foundations;
- shared desks and modules;
- AuthorMachine publishing workflows;
- a public repository and public-safe documentation layer;
- a static public website describing the product honestly.

This list describes active product territory. It does not claim every item is complete, stable, tested, or enforced across all paths.

## What is happening now

The private build is in its first week of stress testing under normal daily workload.

The purpose is to find:

- broken assumptions that only worked in a demo flow;
- duplicate or contradictory records;
- confusing labels and states;
- fragile startup, migration, indexing, and restoration behavior;
- commands that cannot explain their effects or recovery path;
- partial failures that leave system state ambiguous;
- unsafe private/public boundary crossings;
- external effects without clear destinations or authority;
- generic infrastructure contaminated by publishing-specific or Stokknes-specific assumptions;
- interfaces that show information but fail to support the next safe decision.

## What does not exist yet

There is currently no claim of:

- a public tester package;
- a supported installer or uninstaller;
- a stable upgrade and migration path for outside users;
- stable public APIs or schemas;
- production-grade security hardening;
- a completed threat model or independent security review;
- hardened multi-user, team, or enterprise isolation;
- complete accessibility validation;
- cross-platform compatibility guarantees;
- support response commitments;
- final pricing or licensing;
- a public release date.

## Why the label is pre-alpha

“Pre-alpha” is accurate because the system exists and runs, but the product contract around installation, migration, recovery, compatibility, privacy, security, support, and public onboarding has not yet been proven.

“Alpha foundation in preparation” understates the current reality because a live private build is already being used.

“Alpha,” “beta,” “early access,” or “ready for testers” would overstate readiness because outside-user recovery, installation, documentation, and safety gates have not been passed.

## Public claim rules

Public material may say:

- a private build exists;
- it is used under real daily workload;
- first-week stress testing is active;
- AuthorMachine is the first specialist product;
- public-safe images use synthetic or sanitized data;
- interfaces and feature boundaries remain provisional.

Public material must not say, without new evidence:

- “secure,” “fully private,” or “production-ready” as an unqualified guarantee;
- “autonomous” in a way that implies independent authority;
- “tested” without defining the test and result;
- “stable” for outside users;
- “coming soon” with an implied date;
- “open source” unless the licensing decision is explicitly changed;
- “zero data leaves your device” if optional external integrations are enabled;
- performance, reliability, accuracy, or recovery percentages without a documented measurement method.

## Next status transition

The next credible public label is **private alpha candidate** or **closed technical alpha** only after the relevant readiness gates in [RELEASE_READINESS.md](RELEASE_READINESS.md) are satisfied and documented.
