# Repository structure

**Status:** Transitional repository map
**Authority date:** 19 July 2026

## Current reality

The public repository currently combines:

1. the public Systead website and brand material at the repository root; and
2. the implementation bootstrap under `Application/`.

This is transitional. It is acceptable during pre-alpha only if the authority of each location remains clear and duplicated sources do not silently diverge.

## Authority rule

- `Application/` is the authoritative implementation bootstrap.
- `Application/docs/canonical/` is the authoritative product, architecture, status, safety, and naming source.
- root `index.html` and `assets/` are the public website layer.
- root `README.md` is the repository front door.
- `profile/` is source material intended for the Systead organization profile repository.
- `docs/public/` contains public walkthroughs and explanations derived from canonical documentation.

If public copy conflicts with canonical documentation, canonical documentation wins and the public copy must be corrected.

## Current map

```text
/
├── README.md
├── CNAME
├── index.html
├── brand-lab.html
├── assets/
│   ├── css/
│   │   └── site.css
│   └── img/
│       ├── current logo candidates
│       └── pre-alpha/
│           ├── house-command-centre.png
│           ├── command-review.png
│           └── authormachine-cockpit.png
├── docs/
│   └── public/
│       ├── PRE_ALPHA_WALKTHROUGH.md
│       ├── SCREENSHOTS.md
│       └── FAQ.md
├── profile/
│   └── README.md
└── Application/
    ├── .github/
    ├── apps/
    ├── archive/
    ├── config/
    ├── docs/
    │   └── canonical/
    ├── github-org-profile-repo/
    ├── modules/
    ├── packages/
    ├── releases/
    ├── scripts/
    ├── site/
    ├── tests/
    └── top-level project and policy files
```

## Duplication risks

Known structural risks include:

- root website and `Application/site/` drifting apart;
- root profile and `Application/github-org-profile-repo/` drifting apart;
- multiple roadmap, vision, status, or product-model documents with different claims;
- old terminology such as “Systead House” surviving in lower-level files;
- archived material remaining discoverable as though it were active;
- application code assuming paths relative to the nested `Application/` root;
- future CI workflows running from the wrong repository level.

These conflicts should be detected by validation scripts where practical.

## Pre-alpha rule

Do not perform a large repository flattening merely for visual neatness during the first stress-test week.

Structural moves can break paths, scripts, imports, installers, release manifests, GitHub Pages, and documentation links. First establish:

- authoritative sources;
- validation;
- inventory;
- path dependencies;
- migration plan;
- rollback plan.

Then flatten or split deliberately.

## Preferred future options

### Option A — Flatten the application into this repository

Use when Systead Core, the desktop application, public docs, and website are intended to remain one coordinated monorepo.

Possible shape:

```text
apps/
packages/
modules/
config/
docs/
site/
scripts/
tests/
releases/
```

### Option B — Split public site and product implementation

Use when release cadence, licensing, access control, or security boundaries require separation.

Possible repositories:

- `systead` — public front door and canonical public documentation;
- `systead-core` — reusable Core implementation;
- `systead-desktop` — application shell;
- `authormachine` — specialist product;
- private proving-ground repository or local-only workspace.

No split should occur before package boundaries and source authority are understood.

## Required validation

Repository validation should eventually check:

- required canonical files exist;
- public status wording matches `STATUS.md`;
- forbidden private filenames and extensions are absent;
- secrets are not committed;
- public screenshots are synthetic or approved;
- links resolve;
- duplicated website/profile sources match or identify one generated source;
- old product names are flagged;
- release packages contain only declared files;
- archive content is not imported by application code.

## Archive rule

`archive/` contains retired or superseded material.

Archived content:

- is not canonical;
- must not be loaded by the running product;
- must not be used as current public copy;
- should retain enough context to explain why it was retired;
- may still contain sensitive material and must follow private/public rules.
