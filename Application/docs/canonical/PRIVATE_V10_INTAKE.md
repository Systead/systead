# Private v10 intake and generalization

**Status:** Required intake procedure
**Scope:** The private Stokknes v10 / AuthorMachine working build before public-repository integration

## Objective

Bring useful implementation, records, workflows, and discovered architecture into Systead without:

- exposing private data;
- preserving accidental private architecture as public design;
- importing secrets or machine-specific paths;
- promising every visible feature;
- losing the untouched source snapshot;
- erasing behaviour before it is understood and tested.

## Non-negotiable rule

Do not upload the full private v10 directory directly to public `main`.

Use a local or private staging environment first.

## Stage 1 — Preserve source truth

- create a read-only source snapshot;
- record date, machine, version label, and known launch method;
- generate file checksums;
- preserve existing documentation and screenshots;
- do not reorganize the only copy before intake.

## Stage 2 — Secret and privacy scan

Identify and remove from public candidates:

- API keys;
- tokens;
- cookies;
- passwords;
- `.env` files;
- account identifiers;
- real contact records;
- private messages;
- manuscripts not intended for publication;
- legal, medical, financial, and personal records;
- raw logs containing private content;
- private paths and filenames that expose sensitive information;
- backups and database dumps.

A renamed file is not sanitized merely because the person's name was removed.

## Stage 3 — Inventory

For each component, record:

- path;
- purpose;
- startup role;
- data sources;
- output or external effects;
- dependencies;
- persistence behavior;
- known users;
- maturity;
- privacy class;
- proposed destination.

## Stage 4 — Classification

Classify each component as:

- Core;
- Trust Kernel;
- House surface;
- Room;
- Desk;
- shared module;
- Utility;
- Connector;
- Program 01;
- private Stokknes configuration;
- synthetic fixture candidate;
- documentation;
- test;
- archive;
- discard candidate requiring review.

## Stage 5 — Behaviour capture

Before refactoring important behaviour:

- document how it currently works;
- capture screenshots or recordings with approved/synthetic data;
- add characterization tests where possible;
- record known defects;
- identify hidden state and machine assumptions.

## Stage 6 — Generalization

- replace hard-coded Stokknes terminology;
- move reusable contracts into Core;
- keep publishing rules in Program 01;
- create generic identifiers and migrations;
- replace private fixtures;
- create clear configuration boundaries;
- declare external destinations and commands;
- add export and removal behaviour.

## Stage 7 — Repository integration

Recommended flow:

```text
untouched private snapshot
        ↓
private intake branch or repository
        ↓
classified extraction work
        ↓
synthetic fixtures + tests
        ↓
reviewed Core / Program commits
        ↓
public main only after privacy and boundary review
```

## Required intake documents

The first private v10 transfer should produce:

- `V10_INVENTORY.md`;
- `V10_STARTUP_AND_RUNTIME.md`;
- `V10_DATA_MAP.md`;
- `V10_EXTERNAL_EFFECTS.md`;
- `V10_PRIVATE_EXCLUSIONS.md`;
- `V10_GENERALIZATION_MAP.md`;
- `V10_KNOWN_FAILURES.md`;
- checksum manifest;
- extraction decision log.

## Feature maturity labels

Each extracted feature should use one label:

- **working-private**;
- **characterized**;
- **generalizing**;
- **synthetic-demo**;
- **closed-pre-alpha**;
- **alpha-candidate**;
- **deferred**;
- **retired**.

These labels prevent screenshots and code presence from being mistaken for release readiness.
