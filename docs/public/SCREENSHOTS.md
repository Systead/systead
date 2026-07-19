# Pre-alpha image notes

The images in `assets/img/pre-alpha/` are **public-safe interface studies**.

## What they are

- visual explanations of the current Systead product direction;
- reconstructed from the canonical architecture and private-build operating model;
- created with synthetic data;
- suitable for the public repository and website;
- deliberately labelled pre-alpha and subject to change.

## What they are not

- release screenshots;
- proof that every visible control is implemented;
- proof of production readiness;
- reliability or performance evidence;
- copies of the private flagship House;
- public disclosure of actual stress-test records or telemetry.

## Website display rules

The studies are wide application interfaces. They should not be allowed to expand endlessly across a large browser window.

Public pages should:

- place them inside a clearly bounded product frame;
- cap the featured image near `1040px` wide;
- cap image height and use `object-fit: contain`;
- use a two-column layout for secondary views on larger screens;
- stack them cleanly on mobile;
- avoid wrapping the entire image in a raw full-size link;
- keep captions separate and readable;
- preserve enough surrounding space that the page does not feel like a screenshot dump.

The current website implementation follows these rules in `assets/css/site.css`.

## Included images

### `house-command-centre.png`

Shows a representative House overview:

- daily brief;
- current work;
- House signals;
- review queue;
- local and external-effect state;
- current stress-test status.

### `command-review.png`

Shows the intended review-before-action model:

- declared intent;
- reason and source;
- affected records;
- deletion and external-effect visibility;
- risk;
- backup and rollback;
- approval bound to the proposal;
- verification and recovery.

### `authormachine-cockpit.png`

The filename and visible label use the internal working name. They do not lock the public release name.

Shows Program 01 with fictional publishing data. The frame uses the current internal working name, AuthorMachine:

- project state;
- canon signals;
- edition control;
- production pipeline;
- project knowledge;
- release controls;
- Core-versus-specialist boundary.

## Required caption language

When reused publicly, include a caption or nearby statement equivalent to:

> Public-safe pre-alpha interface study using synthetic data. It is not a release screenshot, and the interface may change during stress testing.

## Replacement with real screenshots

A later real-build screenshot may replace a study only after review for:

- personal names and aliases;
- private project or book titles;
- manuscript text;
- contacts;
- dates and amounts;
- paths, usernames, and device names;
- tokens and identifiers;
- notifications and browser chrome;
- metadata in the exported image;
- combinations of information that reveal private history.

Real screenshots should identify the build version and remain accurate after meaningful UI changes.


## Private v10 screenshots

Private working-build screenshots may later be added only when they are deliberately sanitized and clearly labelled as **internal working-build evidence**, not release screenshots. They must state that the release name, layout, feature package, and individual capabilities remain subject to change.
