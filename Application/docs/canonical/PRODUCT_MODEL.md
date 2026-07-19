# Product model

**Status:** Canonical working model
**Effective:** 19 July 2026
**Maturity:** Pre-alpha; implementation remains under extraction and stress test

## Primary distinction

Systead is the platform, brand, ecosystem, and broader future-company direction.

A House is one operator's configured private environment.

Programs are optional specialist applications inside the House. They are important, but they are not the centre or definition of Systead.

> **Programs solve particular domains. Systead preserves the whole.**

Durability rule:

> **Programs are replaceable. The House is durable. No Program owns the person.**


## 1. Systead

**Systead** is the parent brand, platform, and universal operating architecture.

It is not limited to authors, publishing, one dashboard, one automation tool, or the private Stokknes environment.

Systead defines the common memory, authority, safety, privacy, audit, portability, and recovery contracts on which configured Houses and specialist Programs operate.

Working category:

> **Private continuity system for memory, decisions, responsibility, and long-lived work.**

Systead is not a legal, medical, financial, publishing, or household authority. It is infrastructure for preserving context, supporting judgment, and performing explicitly governed operations.

## 2. Systead Trust Kernel

The **Trust Kernel** is the non-negotiable part of Systead Core.

It governs:

- identity and authority;
- canonical standing;
- provenance;
- decisions and evidence;
- command scope;
- approval;
- privacy boundaries;
- external destinations;
- audit;
- verification;
- recovery;
- portability.

Programs, modules, connectors, and AI assistance may add depth but may not bypass these contracts.

## 3. Systead Core

**Systead Core** is the generic local-first foundation.

Core responsibilities include:

### Canonical records

- stable identifiers;
- typed records and relationships;
- canonical, historical, working, derived, estimated, disputed, and archived standing;
- provenance and source references;
- lifecycle and supersession state;
- conflict and duplicate handling;
- schema versions and migrations;
- history and change attribution.

### Storage and portability

- local storage contracts;
- documented export formats;
- backup manifests;
- restore and recovery behaviour;
- quarantine instead of silent destructive cleanup;
- migration validation;
- attachment and source-file references;
- Exit Kit contracts.

### Knowledge and decisions

- indexing and retrieval;
- source visibility;
- confidence and uncertainty metadata;
- version-aware manuals and decisions;
- conflict reporting;
- evidence links;
- decision review and outcome history.

### Commands and review

- proposal objects;
- declared intent and effects;
- risk classification;
- affected-record previews;
- authority and confirmation requirements;
- execution adapters;
- verification results;
- audit history;
- rollback or corrective-action references.

### Boundaries and permissions

- private, restricted, internal, exportable, and public classifications;
- destination declarations;
- integration permissions;
- model and prompt boundaries;
- Program and module capabilities;
- role or authority contracts where controlled sharing is later introduced.

### Extension contracts

- Program, module, Utility, and Connector registration;
- record types and namespaces;
- commands and declared effects;
- views and review queues;
- migrations;
- import/export interfaces;
- integration adapters;
- shared terminology and design primitives.

Core must not contain assumptions that only make sense for publishing, one author, one company, one country, or the Stokknes House.

## 4. House

A **House** is one operator's configured Systead environment.

A House combines:

- canonical records;
- local terminology and preferences;
- selected Rooms, Desks, modules, Utilities, Connectors, and Programs;
- workflow states and review rules;
- permissions and public/private boundaries;
- local knowledge and source material;
- history, audit, backup, migration, and recovery state.

A House is not merely a theme. Two Houses may share Core while differing substantially in data, vocabulary, Programs, workflows, permissions, and priorities.

A House is also not a mandatory hosted account. Hosted or synchronized deployments may be offered later, but must not redefine the product around cloud captivity.

### Naming rule

Use **House** as the standard environment term.

“Systead House” may be used descriptively when context would otherwise be unclear. It must not be presented as a second parent product.

## 5. Rooms

A **Room** is a broad human-facing area of responsibility.

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

Not every House receives every Room. A Room is a product-facing navigation and responsibility concept, not necessarily one database namespace.

## 6. Desks

A **Desk** is a focused operational surface inside a Room.

Examples may include:

- Contact Desk;
- Project Desk;
- Decision Desk;
- Asset Desk;
- Animal Desk;
- Publishing Desk.

A Desk should display and act on canonical records through defined contracts. It must not quietly own a drifting copy of shared truth.

## 7. Modules and Utilities

A **Module** adds bounded capability without becoming a full specialist Program.

A **Utility** provides a reusable operation such as search, capture, import, export, backup, restore, checksum, conversion, quarantine, or diagnostics.

Modules and Utilities must declare:

- namespace;
- dependencies;
- records and migrations where applicable;
- commands and effects;
- required permissions;
- public/private behaviour;
- export and removal behaviour.

Removal must not silently destroy canonical records or make the remaining House impossible to inspect.

## 8. Connectors

A **Connector** crosses the House boundary to an outside service or system.

A Connector must declare:

- external system and destination;
- read and write capability;
- data classes involved;
- authorization model;
- synchronization and conflict behaviour;
- offline behaviour;
- audit output;
- revocation and removal behaviour.

## 9. House Steward

**House Steward** is the current working name for Systead's intelligence and assistance layer.

It may:

- observe;
- explain;
- detect;
- reconstruct;
- propose;
- stage;
- execute approved actions within authority;
- verify results.

The name and interface may change before release. The authority model is more important than the label.

## 10. Specialist Programs

A **Program** is a purpose-built specialist application using Systead Core and operating inside a House.

A Program may add:

- domain records;
- domain terminology;
- dedicated cockpits and Desks;
- production pipelines;
- domain knowledge;
- review and approval rules;
- specialist imports, exports, and integrations.

It must reuse common canonical-record, safety, audit, privacy, portability, and recovery contracts where applicable.

Programs cooperate inside a House. No Program owns the entire operator or becomes the final authority over shared identity and records.

## 11. Program 01: Publishing

Systead's first specialist Program serves authors and publishing operations.

**Current internal working name:** AuthorMachine
**Final public release name:** Undecided

Its current intended domain includes:

- author and publishing command centres;
- book and project cockpits;
- manuscript, chapter, scene, revision, and edition control;
- canon, continuity, characters, locations, timelines, objects, and rules;
- style bibles and project constraints;
- decision logs;
- contradiction, plot-hole, and proofing registers;
- edition-specific production pipelines;
- catalogue, rights, formats, metadata, pricing, and release state;
- launch, ARC, reviewer, contact, and outreach workflows;
- publishing knowledge and source evidence;
- reviewable AI assistance;
- approved export and synchronization to declared external destinations.

This list describes current direction and private-build evidence. It is not a final release contract.

When Program 01 reveals a capability that applies across domains—such as generic decision logs, source-aware knowledge, review queues, commands, contact identity, backup, or recovery—the generic contract should move into Core. Publishing-specific rules remain in Program 01.

## 12. Stokknes House and private v10

**Stokknes House** is the private flagship environment and proving ground.

The current private v10 line includes the working AuthorMachine heritage and broader House capabilities under real daily use.

It may contain private personal, household, publishing, financial, legal, medical, contact, animal, project, manuscript, analytics, and historical information.

It is not:

- a public product name;
- a public demo database;
- a seed bundle;
- a release feature contract;
- a source that may be copied into public `main` merely because it works privately.

Reusable architecture may be extracted only after:

1. the capability is separated from private data;
2. private terminology and assumptions are removed or made configurable;
3. synthetic fixtures replace real records;
4. permissions, migrations, export, and recovery are defined;
5. actual behaviour is characterized and tested;
6. maturity is labelled honestly.

## 13. Relationship between the parts

```text
Systead
├── Trust Kernel / Systead Core
│   ├── identity and authority
│   ├── canonical records and provenance
│   ├── decisions and evidence
│   ├── commands and review
│   ├── audit, verification, and recovery
│   ├── privacy and destination control
│   └── export and extension contracts
├── House
│   ├── calm human surfaces
│   ├── Rooms and Desks
│   ├── local records and knowledge
│   ├── modules, Utilities, and Connectors
│   ├── House Steward
│   └── Programs
│       └── Program 01: Publishing
│           └── working name: AuthorMachine
└── Private proving ground
    └── Stokknes House / private v10 (not distributed)
```

## 14. Product-boundary test

When deciding where a capability belongs, ask:

1. Does it protect trust, identity, authority, privacy, recovery, or portability?
2. Does it make sense for a non-publishing House?
3. Does it depend on specialist domain records?
4. Is it a broad responsibility area or a focused surface?
5. Does it cross an external boundary?
6. Can it be removed without losing inspectability?
7. Can it be tested with synthetic fixtures?

Expected result:

- trust and shared continuity → **Trust Kernel/Core**;
- configured operator environment → **House**;
- broad human domain → **Room**;
- focused operational surface → **Desk**;
- bounded reusable capability → **Module or Utility**;
- outside-service boundary → **Connector**;
- deep domain product → **Program**;
- personal data and configuration → **private House only**.
