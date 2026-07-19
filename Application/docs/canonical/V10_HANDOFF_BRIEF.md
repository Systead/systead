# Private v10 handoff brief

**Audience:** Developer, coding agent, or reviewer receiving the current Stokknes v10 / AuthorMachine working build
**Authority:** Read this after the root README and canonical documentation index

## Mission

Turn the private v10 system into reusable Systead architecture without reducing Systead to a publishing application and without exposing private House data.

The objective is not to beautify or rename the existing directory first.

The objective is to understand, preserve, classify, test, and extract it safely.

## Product truth

- **Systead** is the parent platform.
- A configured environment is a **House**.
- The first specialist Program serves publishing.
- **AuthorMachine** is the current internal working name, not a locked release name.
- **Stokknes House** is the private proving ground, not public demo data.
- Shared memory, authority, privacy, audit, recovery, and export belong in Core.
- Publishing-specific records and workflows belong in Program 01.

## Do not do these first

- do not upload the untouched source to public main;
- do not delete or reorganize the only source copy;
- do not flatten folders before mapping dependencies;
- do not publish screenshots without privacy review;
- do not treat all visible features as implemented or promised;
- do not rename every AuthorMachine reference before determining whether it identifies code, a feature, a Program boundary, or private configuration;
- do not move generic capabilities into the publishing Program merely because they were first discovered there;
- do not move publishing-specific assumptions into Core.

## First-pass outputs

Produce these before major refactoring:

1. `V10_INVENTORY.md`
2. `V10_STARTUP_AND_RUNTIME.md`
3. `V10_DATA_MAP.md`
4. `V10_EXTERNAL_EFFECTS.md`
5. `V10_PRIVATE_EXCLUSIONS.md`
6. `V10_GENERALIZATION_MAP.md`
7. `V10_KNOWN_FAILURES.md`
8. checksum manifest
9. component maturity table
10. proposed extraction sequence

## Component classification

Every meaningful component should be classified as one of:

- Trust Kernel/Core;
- House shell;
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
- discard candidate requiring human review.

## Feature maturity labels

Use one label:

- working-private;
- characterized;
- generalizing;
- synthetic-demo;
- closed-pre-alpha;
- alpha-candidate;
- deferred;
- retired.

Code presence does not equal release readiness.

## Required safety questions

For every state-changing path:

- What is the intended effect?
- What source or rule triggered it?
- Which records and files are affected?
- Does anything leave the House?
- What authority is required?
- Is the operation reversible?
- How is success verified?
- What remains after partial failure?
- What recovery path exists?

## Generic-versus-Program test

Ask:

1. Would this capability make sense for a non-author House?
2. Does it protect trust, authority, privacy, recovery, or portability?
3. Does it depend on publishing records or vocabulary?
4. Can it be tested with synthetic fixtures?

Typical results:

- generic decision history → Core;
- canon and continuity → Program 01;
- generic Person/Contact identity → Core/shared House;
- ARC workflow → Program 01;
- command review → Core;
- KDP adapter → Program 01 Connector;
- personal manuscript data → private House only.

## Definition of a good first extraction

A good first extraction is small and proves the process:

- one bounded capability;
- private data removed;
- actual behaviour characterized;
- records and dependencies documented;
- synthetic fixture added;
- command and authority described;
- export/removal behaviour known;
- tests passing;
- no accidental Program-to-Core contamination.

## Read next

1. [Product north star](PRODUCT_NORTH_STAR.md)
2. [Systead constitution](SYSTEAD_CONSTITUTION.md)
3. [Product model](PRODUCT_MODEL.md)
4. [Platform and Program architecture](PLATFORM_AND_PROGRAM_ARCHITECTURE.md)
5. [Program 01](PROGRAM_01_PUBLISHING.md)
6. [Private v10 intake](PRIVATE_V10_INTAKE.md)
7. [Public/private boundaries](PUBLIC_PRIVATE_BOUNDARIES.md)
8. [Stress-test protocol](STRESS_TEST_PROTOCOL.md)
