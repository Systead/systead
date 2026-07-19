# Repository structure

**Status:** Transitional repository map
**Authority date:** 19 July 2026

## Current reality

The public repository combines:

1. public Systead product and brand material at the root; and
2. an implementation bootstrap under `Application/`.

The private Stokknes House / v10 source is not automatically part of public `main` and must follow the intake procedure.

## Authority rule

- `Application/` is the authoritative implementation bootstrap.
- `Application/docs/canonical/` is the authoritative product, architecture, status, safety, naming, ownership, and intake source.
- root `index.html` and `assets/` are the public website layer.
- root `README.md` is the repository front door.
- `profile/` is source for the Systead organisation profile.
- `docs/public/` contains public explanations derived from canonical documentation.

Canonical documentation wins when public copy conflicts.

## Current and target map

```text
/
├── README.md
├── index.html
├── assets/
│   ├── css/
│   │   └── site.css
│   └── img/
│       ├── brand/
│       │   ├── systead-header.*
│       │   ├── systead-compact-logo.*
│       │   ├── systead-emblem.*
│       │   └── systead-icon-*.png
│       └── pre-alpha/
├── docs/
│   └── public/
├── profile/
│   └── README.md
└── Application/
    ├── apps/
    ├── packages/
    ├── modules/
    ├── programs/               target home for specialist Programs
    ├── config/
    ├── docs/
    │   └── canonical/
    ├── scripts/
    ├── tests/
    ├── releases/
    └── archive/
```

The actual repository may not yet contain every target directory. Structural changes require inventory, path analysis, migration, and rollback.

## Private v10 rule

Do not place an untouched private v10 source tree into public `main`.

Use:

- a local protected snapshot;
- a private intake branch or repository;
- inventory and secret scanning;
- behaviour characterization;
- classified extraction;
- synthetic fixtures;
- reviewed commits into Core or Program 01.

See [PRIVATE_V10_INTAKE.md](PRIVATE_V10_INTAKE.md).

## Known duplication risks

- root website and any application-site copy drifting apart;
- profile copies drifting apart;
- multiple roadmap, status, or product-model documents;
- AuthorMachine treated as a final release name in old files;
- old “Systead House” language surviving as a product name;
- archived material appearing active;
- code assuming nested `Application/` paths;
- private machine paths, fixtures, or secrets entering public commits;
- Program 01 records leaking into Core packages.

## Structural discipline

Do not flatten or split merely for visual neatness during active private stress testing.

First establish:

- authoritative source;
- inventory;
- path dependencies;
- private exclusions;
- validation;
- migration plan;
- rollback plan.

## Possible future monorepo shape

```text
apps/
packages/
modules/
programs/
config/
docs/
site/
scripts/
tests/
releases/
```

## Possible future repository split

A split may later be justified by release cadence, licensing, access control, or security:

- `systead` — public front door and canonical public documentation;
- `systead-core` — shared Core implementation;
- `systead-desktop` — House application shell;
- Program 01 repository under its final name;
- private proving-ground repository or local-only workspace.

No split should occur before package boundaries and source authority are understood.

## Required validation

Validation should eventually check:

- required canonical files;
- public status consistency;
- working-name qualifiers;
- forbidden private filenames and data classes;
- secrets;
- screenshot approval or synthetic status;
- link resolution;
- duplicated public sources;
- release package manifests;
- Program/Core dependency direction;
- archive exclusion;
- export and recovery documentation for enabled scope.
