# Systead pre-alpha walkthrough

**Public status:** Running private pre-alpha; first-week stress test; not open for public testing.

This walkthrough explains the basic operating model shown in the public-safe interface studies. It is not user documentation for an installable release.

## 1. Start in the House Command Centre

A House Command Centre is intended to summarize operational state rather than merely display attractive metrics.

It should answer:

- What changed since the previous review?
- What is currently canonical?
- What requires human judgment?
- What is blocked, and why?
- Which actions are local only?
- Which actions could affect an external system?
- Is backup and recovery state healthy enough for the next risky operation?

The pre-alpha study shows four kinds of information:

### Daily brief

A compact list of material changes and review needs, each linked to its evidence or records.

### Current work

The active workstream and the next judgment required. Progress is not intended to imply a release date.

### House signals

Operational conditions such as active workstreams, unapproved external effects, and recovery tasks.

### Review queue

Proposals that cannot become canonical or execute until the operator accepts, revises, rejects, or resolves them.

## 2. Open a proposal rather than accepting a summary

A review item should not say only “duplicate found” or “AI recommends this.”

The command-review study shows:

- the exact intent;
- why the proposal exists;
- the source or rule;
- affected records;
- whether files are deleted;
- whether external effects occur;
- risk classification;
- backup requirement;
- rollback availability;
- verification state;
- approval controls.

Approval applies to the exact declared command. If scope changes after preview, new approval should be required.

## 3. Execute through a controlled lifecycle

The intended lifecycle is:

1. propose;
2. validate and preview;
3. approve or reject;
4. create a snapshot where required;
5. execute through a declared adapter;
6. verify the result;
7. write audit history;
8. close, rollback, or require corrective action.

This model applies to local record changes and becomes more strict for publishing, sending, payment, deletion, synchronization, account, permission, or public-posting effects.

## 4. Enter a specialist system without losing the common safety model

AuthorMachine by Systead is the first specialist product.

The public book-cockpit study demonstrates domain-specific information:

- manuscript and revision state;
- canon and continuity signals;
- edition control;
- production pipeline;
- style bible and decision history;
- contradiction register;
- release controls.

AuthorMachine does not replace Core. It uses shared records, review, audit, recovery, contact, knowledge, and command contracts while adding publishing-specific logic.

## 5. Keep public output separate from private work

The private flagship contains real operational material. It is not used as a public demo database.

The images in the repository are reconstructed with:

- fictional project names;
- synthetic records;
- illustrative counts;
- no private manuscript text;
- no real contacts, amounts, addresses, accounts, or logs;
- no claim that the exact layout is the current live build.

## 6. Understand the current limit

The presence of a running private build does not mean a safe outside-user package exists.

Before public or closed testing, Systead still needs evidence around:

- clean installation or bootstrap;
- migrations;
- backup and restore;
- removal;
- diagnostics;
- privacy boundaries;
- security baseline;
- supported platform scope;
- update and rollback behavior;
- documentation and support capacity.

See the canonical [Release Readiness Gates](../../Application/docs/canonical/RELEASE_READINESS.md).
