<p align="center">
  <picture>
    <source srcset="assets/img/brand/systead-header.webp" type="image/webp">
    <img src="assets/img/brand/systead-header.png" alt="Systead — Local intelligence. Built for home." width="1180">
  </picture>
</p>

<p align="center">
  <strong>A private continuity system for memory, decisions, responsibility, and long-lived work.</strong>
</p>

<p align="center">
  <a href="#what-systead-is">What it is</a> ·
  <a href="#the-product-model">Product model</a> ·
  <a href="#the-three-promises">Core promises</a> ·
  <a href="#program-01-publishing">Program 01</a> ·
  <a href="#current-status">Status</a> ·
  <a href="#repository-map">Repository map</a> ·
  <a href="#documentation">Documentation</a>
</p>

---

> [!WARNING]
> **Systead is in private pre-alpha.** A private flagship build is running under real daily use and stress testing, but there is no supported public installer, migration promise, security guarantee, compatibility contract, or release date yet.

> [!IMPORTANT]
> **AuthorMachine is an internal working name.** It currently identifies Systead's first specialist publishing program and the private v10 line being generalized. The eventual public product name, package boundaries, included features, pricing, licensing, and release identity may change before release.

# Systead

Systead is being built for work that has outgrown scattered files, notes, task lists, chats, dashboards, and human memory.

It creates a private **House**: an operator-owned environment where projects, records, knowledge, decisions, responsibilities, specialist programs, and controlled actions can stay connected over time.

The goal is not to build a larger productivity dashboard.

The goal is to create a system that can answer questions ordinary tools usually leave to the user:

- What is currently true?
- What source supports it?
- What changed?
- Why was this decision made?
- What remains uncertain or contradictory?
- What depends on this record?
- What will happen if it changes?
- What needs human judgment now?
- Can the action be inspected, verified, and undone?
- Can the House survive without Systead itself?

The working north star is:

> **The safest and most coherent private system for long-lived human work.**

AuthorMachine—the current working name for the first publishing program—is the first serious evidence that this wider platform can be built.

## Table of contents

- [What Systead is](#what-systead-is)
- [Why it exists](#why-it-exists)
- [The three promises](#the-three-promises)
- [The product model](#the-product-model)
- [What a House should feel like](#what-a-house-should-feel-like)
- [Signature interactions](#signature-interactions)
- [House Steward](#house-steward)
- [Program 01: publishing](#program-01-publishing)
- [The private v10 proving ground](#the-private-v10-proving-ground)
- [Safety and authority](#safety-and-authority)
- [Memory and canonical truth](#memory-and-canonical-truth)
- [Portability and exit](#portability-and-exit)
- [Current status](#current-status)
- [Development direction](#development-direction)
- [Repository map](#repository-map)
- [Bringing the private v10 build into Systead](#bringing-the-private-v10-build-into-systead)
- [Public and private boundaries](#public-and-private-boundaries)
- [Documentation](#documentation)
- [Brand, ownership, and working names](#brand-ownership-and-working-names)

# What Systead is

Systead is a **local-first continuity and operations platform**.

Its purpose is to help an individual, household, independent professional, creator, or small owner-operated organisation preserve operational memory and act with more control.

At full maturity, a House may bring together:

- active work and projects;
- files and source material;
- people and practical relationships;
- decisions and their evidence;
- commitments, obligations, and review dates;
- assets, services, and recurring responsibilities;
- knowledge, manuals, research, and previous conclusions;
- specialist programs for domains that need deeper workflows;
- local intelligence that can observe, explain, propose, and prepare actions;
- exports, backups, recovery points, and audit history.

Systead is not intended to become one enormous screen where every part of life is visible at once.

The visible product should remain calm. Complexity should appear only when the work requires it.

## What Systead is not

Systead is not simply:

- a notes application;
- a wiki;
- a task manager;
- a writing program;
- a database builder;
- an AI chat wrapper;
- a cloud dashboard;
- a replacement for professional legal, medical, financial, or publishing judgment;
- a promise that every possible domain will become a built-in room.

It may contain or connect capabilities found in those categories, but its defining job is different:

> **Preserve continuity between memory, evidence, decisions, responsibility, and action.**

# Why it exists

The problem is not a shortage of software. The problem is fragmentation.

A task manager may know what is due but not why the work exists. A folder may contain the file but not the decision that made it current. A chat may contain the explanation but not the lasting record. A specialist application may understand one domain but lose context at its boundary. An AI may produce a result without preserving exactly what it changed, why, or how to recover.

The user becomes the integration layer.

Systead is built around a different assumption:

> **The work should be able to remember itself.**

A serious record should be able to retain its source, standing, history, uncertainty, dependencies, decisions, and available next actions rather than forcing the user to reconstruct the entire situation each time.

# The three promises

## 1. Memory

The House should remember more than text.

It should retain:

- what the current record is;
- where it came from;
- what replaced an older version;
- which evidence supports it;
- which claims remain uncertain;
- which records disagree;
- which decisions changed its standing;
- when it was last reviewed or verified;
- what depends on it.

A note remembers what someone wrote.

Systead should remember **what the House currently believes, why it believes it, and where doubt remains**.

## 2. Safety

Important operations should never hide behind vague buttons or invisible automation.

Material actions should declare:

- intended outcome;
- source and reasoning;
- scope;
- affected records;
- outside destinations;
- risk;
- approval requirement;
- verification method;
- reversibility or recovery path.

Safety is not a warning dialog added at the end. It is part of the architecture.

## 3. Control

The operator remains the authority.

Systead may observe, explain, detect, compare, recommend, draft, and prepare. It must not quietly turn uncertainty into truth, publish private material, delete canonical sources, change obligations, or represent approval that was never given.

Control also means exit:

- inspectable records;
- understandable exports;
- portable files;
- documented manifests;
- tested restore paths;
- no mandatory cloud account as the owner of the House.

# The product model

```text
Systead
├── Trust Kernel / Core
│   ├── identity and permissions
│   ├── canonical records and provenance
│   ├── decisions and evidence
│   ├── commands and approval
│   ├── audit, verification, and recovery
│   ├── privacy and boundary controls
│   └── export and portability contracts
├── House
│   ├── calm starting surfaces
│   ├── rooms and desks
│   ├── operator configuration
│   ├── local knowledge and records
│   ├── selected programs and utilities
│   └── declared connectors
├── House Steward
│   ├── observe
│   ├── explain
│   ├── detect
│   ├── reconstruct
│   ├── propose
│   ├── stage
│   └── verify approved actions
├── Programs
│   └── Program 01: publishing
│       └── current internal working name: AuthorMachine
└── Private proving grounds
    └── Stokknes House / private v10 build
```

## Systead Core

Core is the generic foundation shared by every House and specialist program.

Its responsibilities include:

- stable identifiers and typed records;
- canonical standing and lifecycle state;
- provenance and source references;
- duplicate and conflict handling;
- decisions, evidence, and review state;
- command proposals and authority checks;
- execution adapters and verification;
- audit and recovery references;
- privacy classifications and destination controls;
- local storage and migration contracts;
- backup, export, restore, and exit manifests;
- program, module, and connector boundaries.

Core must not assume that the operator is an author, publisher, Norwegian, Spanish resident, one-person business, or the owner of the private Stokknes environment.

## House

A **House** is the operator's configured Systead environment.

It is not a second parent product. It is not merely a visual theme. It is the lived system created from Core, selected rooms, local records, permissions, programs, workflows, and preferences.

Two Houses can share Systead Core while looking and behaving differently because their responsibilities are different.

## Rooms

A **Room** is a broad area of responsibility.

Possible examples include:

- Today;
- Work;
- Projects;
- Knowledge;
- Files;
- Contacts;
- Household;
- Assets;
- Administration;
- Finance;
- Health;
- Archive.

These are possible product categories, not a promise that every House starts with all of them.

## Desks

A **Desk** is a focused working surface inside a Room.

Examples may include Contact Desk, Project Desk, Asset Desk, Animal Desk, Decision Desk, or Publishing Desk.

A Desk should display and act on shared canonical records. It should not create a private copy of truth that drifts away from the rest of the House.

## Programs

A **Program** is a deep specialist application built on the same Core.

Programs may add:

- domain records;
- specialist terminology;
- dedicated cockpits;
- production pipelines;
- domain-specific checks;
- specialist imports and exports;
- scoped intelligence;
- domain integrations.

A Program does not own the person or replace the House. It cooperates through shared contracts.

## Utilities

Utilities provide reusable capabilities such as search, capture, export, backup, restore, indexing, conversion, or controlled publication.

## Connectors

Connectors provide explicit access to outside services. They must declare what they can read, what they can write, what leaves the House, and what happens when the service is unavailable.

# What a House should feel like

The private build may be dense because it contains years of accumulated reality. The public product cannot begin there.

A new House should open with a small, calm surface:

- what changed;
- what needs attention;
- what is active;
- what is waiting for judgment;
- quick capture;
- search;
- selected rooms.

Depth should appear progressively.

## Layer 1: calm surface

The person sees what matters now without being asked to understand schemas, provenance graphs, command contracts, or recovery manifests.

## Layer 2: working rooms

When entering a Room or Program, the person can reach records, timelines, files, dependencies, decisions, open questions, and useful tools.

## Layer 3: machinery

Advanced and sensitive surfaces expose:

- canonical standing;
- provenance;
- conflict resolution;
- automation rules;
- command previews;
- permissions;
- connectors;
- audit history;
- recovery;
- indexing and system health.

Nothing important is hidden forever. It is revealed when it becomes relevant.

# Signature interactions

Systead should be known for a small number of unusually useful interactions rather than an enormous checklist of generic features.

## Bring me back

> I have not touched this project in six weeks. Reconstruct where I was, what changed, what remains unresolved, and what I should read first.

The House should use project history, decisions, files, changes, open questions, and recent dependencies to rebuild context without pretending certainty where records are incomplete.

## Why is this true?

> Show the source, decision history, confidence, contradictions, and most recent verification.

The answer should not be a confident paragraph without evidence.

## What changes if I do this?

> Show every affected record, workflow, commitment, edition, and automation before I approve the change.

This is consequence awareness rather than a generic confirmation dialog.

## Resolve this safely

> Prepare the correction, preserve the current state, show the plan, execute the approved operation, and verify the result.

The House should not collapse preparation, authority, execution, and verification into one opaque click.

## What needs me?

The starting briefing should surface:

- blocked responsibilities;
- expiring commitments;
- unresolved contradictions;
- decisions waiting for human judgment;
- safe actions already prepared;
- significant changes since the last visit.

It should not merely reproduce every task in a longer list.

# House Steward

**House Steward** is the working name for Systead's intelligence and assistance layer.

It should behave less like a chatbot and more like a careful private steward that can show its work.

Its authority ladder is:

1. **Observe** — read within granted scope without changing state.
2. **Explain** — summarize findings with sources and uncertainty.
3. **Detect** — surface conflicts, missing evidence, drift, risk, or neglected work.
4. **Reconstruct** — rebuild context from House history.
5. **Propose** — recommend a change and explain why.
6. **Stage** — prepare the full operation for review.
7. **Execute safely** — perform only approved, scoped, reversible actions.
8. **Verify** — check the expected result and report mismatches.

Higher-risk operations require stronger, fresher authority.

A useful Steward says:

> Three files appear to be duplicate editions. Here is the evidence. I recommend keeping this one as canonical and moving the exact duplicates to quarantine. Nothing has been changed.

It should not say:

> I cleaned your files.

# Program 01: publishing

Systead's first deep specialist Program is for authors and publishing operations.

The current internal working name is **AuthorMachine**. This name is not yet locked as the final public release identity.

Until release naming is decided, repository documentation may refer to it as:

- **Program 01: Publishing** when describing its architectural role;
- **AuthorMachine** when referring to the current private/internal code line, interface, or v10 heritage;
- **the publishing Program** in general public prose.

## Why publishing is the first Program

Publishing is an unusually demanding proof domain because it combines:

- long-lived creative projects;
- many files and versions;
- canon and continuity;
- research and evidence;
- creative and commercial decisions;
- editions and formats;
- rights and metadata;
- production pipelines;
- collaborators and contacts;
- release operations;
- post-release corrections.

A serious publishing Program can pressure-test memory, canonical truth, decisions, workflows, controlled automation, and recovery without defining the limits of Systead.

## Current intended areas

The current private build and product direction include or explore:

- project and book cockpits;
- manuscript and revision state;
- canon, continuity, timelines, characters, locations, objects, and rules;
- style bibles and project constraints;
- decision, contradiction, plot-hole, and proofing registers;
- edition-specific production state;
- formats, metadata, pricing, rights, catalogue, and release state;
- launch, ARC, reviewer, contact, and outreach operations;
- publishing knowledge and source evidence;
- reviewable AI assistance;
- approved exports and declared publishing destinations.

This list describes the current direction, not a final release contract. Individual features may move into Core, remain private experiments, be renamed, be removed, or ship later.

## Architectural rule

When the publishing Program reveals a capability useful outside publishing, the generic contract should move into Systead Core.

Examples:

- generic decision history belongs in Core;
- publishing canon rules belong in the Program;
- generic Contact records belong in Core or a shared Room;
- ARC and reviewer workflows belong in the Program;
- generic command review belongs in Core;
- KDP-specific publication adapters belong in the Program or a connector.

# The private v10 proving ground

The working Stokknes v10 environment is the private flagship and proving ground from which Systead is being generalized.

It is valuable because it is not a clean demo. It contains enough real complexity to expose weak assumptions:

- old and new files;
- duplicated and conflicting information;
- many project types;
- private records;
- publishing operations;
- personal and household domains;
- real workflows and interruptions;
- imperfect historical structure.

That makes it useful for stress testing.

It also makes it dangerous to publish directly.

The private v10 build is **not**:

- the default public House;
- a public seed database;
- a promise that every private feature will ship;
- proof that every visible control is implemented safely;
- permission to upload private records, manuscripts, credentials, logs, or personal configuration to this public repository.

Reusable capabilities must be extracted from private data, generalized, documented, and tested with synthetic fixtures.

# Safety and authority

Systead uses a staged action model for material operations.

```text
Observe → Explain → Propose → Preview → Approve → Execute → Verify → Audit → Recover
```

Not every action requires every stage. Risk determines the required depth.

## Example authority levels

| Level | Typical behavior |
|---|---|
| Observe | Read records and detect changes within granted scope. |
| Explain | Summarize or compare without modifying state. |
| Propose | Recommend a change and show evidence. |
| Stage | Prepare exact files, records, destinations, and effects. |
| Execute | Perform an approved reversible operation. |
| Sensitive execution | Require explicit fresh confirmation, stronger verification, and a recovery plan. |

## Sensitive operations

Examples include:

- deletion of canonical records or sources;
- publication or external sending;
- payment or account changes;
- permissions and credentials;
- legal, medical, financial, or contractual commitments;
- identity merges;
- rights changes;
- release-state changes;
- operations whose rollback is incomplete or impossible.

No Program or connector should bypass Core authority rules merely because it has domain-specific logic.

# Memory and canonical truth

A House should distinguish between:

- canonical record;
- source file;
- historical snapshot;
- working draft;
- imported claim;
- derived value;
- interpretation;
- estimate;
- unresolved conflict;
- archived or superseded state.

The purpose is not to pretend the system has one perfect truth.

The purpose is to prevent different kinds of information from becoming indistinguishable.

## Decision continuity

A serious decision record may include:

- the question;
- options considered;
- evidence;
- constraints;
- rejected alternatives;
- expected consequences;
- responsible person;
- resulting actions;
- review date;
- later evidence about whether it worked.

The House should preserve why a decision made sense at the time, not only the final sentence.

## Time-aware reconstruction

Long-term direction includes the ability to ask:

- What did the House consider current on a given date?
- What changed since the last working session?
- When did two records begin to conflict?
- Which file was canonical before the present edition?
- Which decisions were still open before a project stalled?

This is closer to operational continuity than ordinary version history.

# Portability and exit

Systead should be designed as though the software may eventually disappear.

A complete House export should aim to be:

- human-readable;
- machine-readable;
- documented;
- checksummed;
- internally linked;
- restorable;
- understandable without a mandatory hosted account;
- usable as ordinary files where practical.

Expected baseline formats may include Markdown, JSON, CSV, ordinary folders, manifests, calendar and contact standards, and specialist formats where relevant.

Program-specific import/export may include publishing and knowledge tools, but no particular integration is promised until implemented and tested.

The trust question is:

> Can the important meaning of this House be recovered years later without trusting the original cloud service, AI provider, or developer?

# Current status

**Maturity:** private pre-alpha
**Public access:** closed
**Active work:** private flagship stress test, architecture extraction, documentation, and product separation
**Release date:** not announced

| Area | Current position |
|---|---|
| Running build | A private flagship House is operating under real daily workload. |
| Stress test | Early testing focuses on failure discovery, duplicate truth, confusing states, broken paths, migrations, boundaries, and recovery. |
| Public installer | Not available. |
| Onboarding | Not ready for outside users. |
| Security | No production-grade guarantee or completed independent audit is claimed. |
| Public examples | Synthetic or deliberately sanitized only. |
| Product naming | Systead is the platform brand. AuthorMachine remains an internal working name for Program 01. |
| Feature list | Directional, not contractual. |
| Licensing | No blanket public software licence unless a component explicitly states otherwise. |
| Support | No public support commitment yet. |

## Current stress-test priorities

- abrupt shutdown during writes;
- partial or corrupt files;
- renamed and moved directories;
- duplicate and near-duplicate sources;
- failed indexing and AI processes;
- unavailable network services;
- invalid imports;
- large libraries;
- deleted or missing source references;
- restore onto another machine;
- command reversal and correction;
- schema migration without data loss;
- export that remains understandable outside Systead.

Pre-alpha software is allowed to be unfinished. It is not allowed to quietly destroy or misrepresent important information.

# Development direction

## Phase 0 — Private proving ground

- Run the existing House under real workload.
- Find data-integrity and recovery failures.
- Document actual behavior rather than imagined behavior.
- Separate private facts from reusable architecture.

## Phase 1 — Core extraction

- Remove Stokknes-specific assumptions.
- Establish generic records and boundaries.
- Define House, Room, Desk, Program, Utility, and Connector contracts.
- Replace private fixtures with synthetic examples.
- Establish canonical migration and export tests.

## Phase 2 — Calm product shell

- Today surface;
- search;
- capture;
- guided House setup;
- understandable empty states;
- progressive disclosure;
- visible system health;
- basic recovery and export.

## Phase 3 — Program 01 extraction

- Separate publishing-specific records and workflows;
- package the current v10 heritage behind Program contracts;
- establish import paths;
- create safe synthetic starter projects;
- document which features are implemented, experimental, or planned;
- decide final release naming later.

## Phase 4 — Closed pre-alpha

- very small number of outside users;
- assisted installation and onboarding;
- issue capture and local diagnostics;
- no broad availability promise;
- migration and recovery drills.

## Phase 5 — Alpha readiness

- repeatable installer;
- upgrade and rollback path;
- tested export and restore;
- public manual;
- accessibility baseline;
- security scope and threat model;
- support and compatibility boundaries.

## Later directions

- companion mobile surfaces;
- controlled shared rooms or read-only views;
- plugin and Program SDK;
- additional specialist Programs;
- encrypted self-hosted synchronization;
- broader import and exit tooling.

These are directions, not release promises.

# Repository map

The repository is transitional while the private working system is generalized.

```text
/
├── README.md                         Main public and technical introduction
├── index.html                        Public Systead product page
├── assets/
│   ├── css/                          Public site styling
│   └── img/
│       ├── brand/                    Header, compact mark, and icon assets
│       └── pre-alpha/                Public-safe synthetic interface studies
├── profile/                          GitHub organization profile source
├── docs/
│   └── public/                       Public explanations, status, screenshots, FAQ
└── Application/                      Authoritative implementation bootstrap
    ├── apps/                         User-facing application shells
    ├── packages/                     Shared Core packages
    ├── modules/                      Optional capabilities
    ├── programs/                     Specialist Program direction and packages
    ├── config/                       Local and synthetic configuration templates
    ├── docs/
    │   └── canonical/                Product, architecture, safety, status, and decisions
    ├── scripts/                      Validation and bootstrap helpers
    ├── tests/                        Automated and acceptance-test scaffolding
    ├── releases/                     Future release manifests and packages
    └── archive/                      Retired material not loaded by the product
```

The actual repository may not yet contain every planned directory. The canonical repository structure document controls deliberate restructuring rather than letting uploads define architecture by accident.

# Bringing the private v10 build into Systead

Do **not** upload the private v10 directory directly to public `main` without an intake pass.

The safe sequence is:

1. Create a protected local snapshot and checksum manifest.
2. Identify secrets, credentials, tokens, private logs, contacts, manuscripts, financial/legal/medical records, and personal configuration.
3. Keep the untouched source snapshot outside the public repository.
4. Create an extraction branch or private staging repository.
5. Classify each component as Core, House surface, shared module, publishing Program, connector, private configuration, fixture, or archive.
6. Replace private records with synthetic fixtures.
7. Remove machine-specific paths and hidden dependencies.
8. Document startup, persistence, migrations, external effects, and recovery.
9. Add tests around discovered behavior before refactoring it.
10. Merge generalized components deliberately rather than preserving the accidental private folder layout.

See:

- [Private v10 Intake and Generalization](Application/docs/canonical/PRIVATE_V10_INTAKE.md)
- [Platform and Program Architecture](Application/docs/canonical/PLATFORM_AND_PROGRAM_ARCHITECTURE.md)
- [Public and Private Boundaries](Application/docs/canonical/PUBLIC_PRIVATE_BOUNDARIES.md)

# Public and private boundaries

Public repository material may contain:

- architecture;
- product documentation;
- generic schemas;
- synthetic fixtures;
- sanitized interface studies;
- public brand assets;
- non-sensitive test data;
- public release tooling.

It must not contain by default:

- private House databases;
- real contacts or relationship history;
- credentials, tokens, cookies, or secrets;
- unpublished manuscripts unless explicitly intended for publication;
- financial, legal, medical, or private administrative records;
- private messages or mail exports;
- raw private logs;
- personal machine paths that reveal sensitive structure;
- Stokknes House configuration presented as a universal default.

Access to data does not equal permission to publish it.

# Documentation

## Start here

1. [Canonical Documentation Index](Application/docs/canonical/README.md)
2. [Product North Star](Application/docs/canonical/PRODUCT_NORTH_STAR.md)
3. [Systead Constitution](Application/docs/canonical/SYSTEAD_CONSTITUTION.md)
4. [Product Model](Application/docs/canonical/PRODUCT_MODEL.md)
5. [Platform and Program Architecture](Application/docs/canonical/PLATFORM_AND_PROGRAM_ARCHITECTURE.md)
6. [House Steward](Application/docs/canonical/HOUSE_STEWARD.md)
7. [Program 01: Publishing](Application/docs/canonical/PROGRAM_01_PUBLISHING.md)
8. [Working Names and Release Identity](Application/docs/canonical/WORKING_NAMES_AND_RELEASE_IDENTITY.md)
9. [Private v10 Intake](Application/docs/canonical/PRIVATE_V10_INTAKE.md)
10. [Private v10 Handoff Brief](Application/docs/canonical/V10_HANDOFF_BRIEF.md)
11. [Operating Principles](Application/docs/canonical/OPERATING_PRINCIPLES.md)
12. [System Architecture](Application/docs/canonical/SYSTEM_ARCHITECTURE.md)
13. [Stress-test Protocol](Application/docs/canonical/STRESS_TEST_PROTOCOL.md)
14. [Release Readiness](Application/docs/canonical/RELEASE_READINESS.md)
15. [Roadmap](Application/docs/canonical/ROADMAP.md)
16. [Ownership and IP](Application/docs/canonical/OWNERSHIP_AND_IP.md)

## Public explanations

- [What is Systead?](docs/public/WHAT_IS_SYSTEAD.md)
- [Programs and the Publishing Program](docs/public/PROGRAMS.md)
- [Status and Scope](docs/public/STATUS_AND_SCOPE.md)
- [Pre-alpha Walkthrough](docs/public/PRE_ALPHA_WALKTHROUGH.md)
- [Screenshot Notes](docs/public/SCREENSHOTS.md)
- [FAQ](docs/public/FAQ.md)

# Brand, ownership, and working names

**Systead** is the active parent platform and brand.

The public brand assets in this repository include:

- a wide flagship header;
- a compact wordmark;
- an emblem and icon set.

Use the flagship header for major introductions and the compact mark for navigation, app surfaces, repository identity, and profiles. See [Brand Asset Usage](Application/docs/canonical/BRAND_ASSET_USAGE.md).

## Current legal position

Until a separate company legally exists and receives the relevant rights through written documentation, copyrightable Systead work created personally remains held personally, subject to third-party rights and licences.

Current public footer form:

> © 2026 Marius Johan Stokknes. Systead is the product and brand name.

The intended future platform company is **Systead Systems S.L.U.** Stokknes Publishing is intended for publishing operations and should not accidentally become the owner of the general Systead platform merely because publishing is the first proving domain.

See [Ownership and IP](Application/docs/canonical/OWNERSHIP_AND_IP.md).

---

- Website: [systead.com](https://systead.com)
- GitHub: [github.com/Systead](https://github.com/Systead)

Copyright © 2026 Marius Johan Stokknes. Systead is the product and brand name.

No blanket public software licence has been granted unless a specific file or component explicitly states otherwise.
