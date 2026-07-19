# Systead

**Keep complicated work together. Keep yourself in charge.**

Systead is being built for the point where folders, notes, messages, dashboards, documents, and memory stop being enough.

It creates a private **House**: one place where work can keep its context, show what changed, surface what needs judgment, and help prepare the next move without quietly making the decision for you.

> **Current status:** A private pre-alpha build is running under real daily use. The first-week stress test is deliberately trying to expose broken assumptions, confusing states, fragile boundaries, and recovery gaps before outside testing begins.

<p align="center">
  <img src="assets/img/pre-alpha/house-command-centre.png" alt="Public-safe Systead House pre-alpha interface study" width="920">
</p>

<p align="center"><em>Public-safe pre-alpha interface study using synthetic data. Not a release screenshot.</em></p>

## Why Systead exists

The problem is not a lack of tools. It is that each tool knows only one part of the situation.

- A task app knows what is due, but not why the work exists.
- A folder has the file, but not the decision that made it current.
- A chat contains the explanation, but not the lasting record.
- An AI can produce a result, but often cannot show exactly what it changed or how to undo it.
- Your own memory is expected to connect everything.

Systead is built around a simpler idea: **the work should be able to remember itself.**

The source, current state, important history, unresolved question, and next safe action should remain connected instead of being reconstructed every time.

## What lives inside a House

A House is one person’s or team’s configured Systead environment. It can remain small or grow into a serious working system.

| Area | What it helps with |
|---|---|
| **Today** | Recent changes, active work, waiting judgments, risks, and safe next actions. |
| **Work** | Projects, obligations, files, decisions, dependencies, and completion evidence. |
| **Knowledge** | Notes, manuals, research, source material, history, and previous choices. |
| **Practical life** | Contacts, assets, services, recurring responsibilities, and maintenance. |
| **Specialist products** | Deeper tools for work that needs its own records and workflows. AuthorMachine is the first. |

A House is not a fixed template and it is not a separate parent product. **Systead is the platform; a House is the configured environment.**

## AuthorMachine by Systead

A book stops being “one document” almost immediately.

There are drafts, edits, canon decisions, characters, research, covers, editions, proofs, metadata, prices, launch work, reviewers, storefronts, corrections, and the uncomfortable question of which file is actually current.

AuthorMachine is the first specialist product built on Systead. Its intended scope includes:

- book and project cockpits;
- manuscript and revision state;
- canon, continuity, timelines, characters, locations, and style decisions;
- contradiction, plot-hole, proofing, and decision registers;
- separate edition, format, metadata, pricing, and release states;
- catalogue, rights, contacts, ARC, reviewer, and launch operations;
- approved exports and declared external publishing destinations;
- reviewable AI assistance that does not silently overwrite canon or publish work.

Publishing-specific depth stays inside AuthorMachine. Capabilities useful beyond publishing are extracted into Systead Core.

## Public pre-alpha views

The repository currently includes three public-safe interface studies:

- **House overview** — recent change, current work, waiting judgment, and early warning signals.
- **Review before action** — intent, evidence, scope, risk, approval, verification, and recovery.
- **AuthorMachine book cockpit** — project state, canon, editions, production, knowledge, and release control.

They use synthetic data and are not proof that every visible control is implemented. See [Pre-alpha Image Notes](docs/public/SCREENSHOTS.md).

## Under the floorboards

The public product should feel calm. The architecture underneath is intentionally strict.

### Systead Core

The shared foundation for:

- canonical records and relationships;
- local-first storage and indexing;
- knowledge with sources and provenance;
- proposals, commands, approval, verification, and audit;
- privacy and publication boundaries;
- declared integration contracts;
- export, backup, restore, rollback, and recovery;
- specialist module contracts.

### Material action lifecycle

Important actions should move through a visible lifecycle:

1. **Propose** — state the intended change and why.
2. **Preview** — show scope, effects, destinations, and affected records.
3. **Approve** — bind authority to the exact proposal.
4. **Execute** — perform only the approved operation.
5. **Verify** — check the expected result and report mismatch.
6. **Audit** — leave a trace of what changed, when, why, and under whose authority.
7. **Recover** — rollback, restore, quarantine, or correct safely.

The goal is not less automation. It is automation that remains legible, limited, and recoverable.

## Honest pre-alpha status

| Area | Current status |
|---|---|
| Running build | A private flagship House is operating under real daily workload. |
| Stress test | Week one is focused on failure discovery, duplicate truth, confusing states, fragile migrations, boundaries, and recovery. |
| Public testing | Closed. No supported tester build, installer, onboarding, or compatibility promise. |
| Public examples | Synthetic or deliberately sanitized only. Private House data is not demo content. |
| Security | No production-grade security guarantee or completed independent audit is claimed. |
| Licensing | No blanket public software licence unless a component explicitly states otherwise. |
| Release date | Not announced. Readiness gates matter more than an invented deadline. |

## Repository shape

The repository is still transitional:

```text
/
├── index.html                     Public product website
├── assets/                        Public visual and website assets
├── profile/                       GitHub organization-profile source
├── docs/public/                   Public walkthroughs, FAQ, and image notes
└── Application/                   Authoritative implementation bootstrap
    ├── apps/                      User-facing application shells
    ├── packages/                  Shared platform packages
    ├── modules/                   Optional and specialist modules
    ├── config/                    Local and synthetic configuration templates
    ├── docs/canonical/            Product, architecture, safety, status, and ownership truth
    ├── scripts/                   Validation and local bootstrap helpers
    ├── tests/                     Automated and acceptance-test scaffolding
    ├── releases/                  Future release manifests and packages
    └── archive/                   Retired material not loaded by the product
```

Until a deliberate flattening or split occurs, `Application/` is the authoritative implementation bootstrap. The root is the public presentation and navigation layer.

## Start here

1. [Product Model](Application/docs/canonical/PRODUCT_MODEL.md)
2. [Public Presentation](Application/docs/canonical/PUBLIC_PRESENTATION.md)
3. [Operating Principles](Application/docs/canonical/OPERATING_PRINCIPLES.md)
4. [System Architecture](Application/docs/canonical/SYSTEM_ARCHITECTURE.md)
5. [Public and Private Boundaries](Application/docs/canonical/PUBLIC_PRIVATE_BOUNDARIES.md)
6. [Ownership and IP](Application/docs/canonical/OWNERSHIP_AND_IP.md)
7. [Pre-alpha Program](Application/docs/canonical/PRE_ALPHA_PROGRAM.md)
8. [Stress-test Protocol](Application/docs/canonical/STRESS_TEST_PROTOCOL.md)
9. [Release Readiness](Application/docs/canonical/RELEASE_READINESS.md)
10. [Roadmap](Application/docs/canonical/ROADMAP.md)

## Public boundaries

Public material may contain architecture, generic schemas, synthetic examples, deliberately sanitized interface studies, public brand material, and non-sensitive fixtures.

It must not contain private House data, real contacts, credentials, manuscripts, financial records, medical or legal records, private communications, raw private logs, access tokens, or personal proving-ground configuration presented as a product default.

## Website and organization

- Website: [systead.com](https://systead.com)
- GitHub organization: [github.com/Systead](https://github.com/Systead)

Copyright © 2026 Marius Johan Stokknes. **Systead** is the product and brand name.

The intended future platform company is **Systead Systems S.L.U.** Once that company legally exists, any transfer or exclusive licence of pre-incorporation IP must be documented in writing. Until then, copyrightable work created personally for Systead remains held personally, subject to third-party rights, licences, and the legal protectability of each asset.

No public software licence has been granted unless a specific file or component explicitly states otherwise.
