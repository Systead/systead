# Public and private boundaries

**Status:** Canonical safety boundary
**Applies to:** repositories, websites, screenshots, demos, fixtures, logs, exports, integrations, model prompts, support material, and releases

## 1. Principle

Technical access is not publication authority.

A component, developer tool, model, module, or integration may be able to read private House material. That capability does not grant permission to place the material in a repository, website, issue, screenshot, public model prompt, analytics service, email, demo, fixture, release package, or support transcript.

## 2. Default classifications

Systead should support explicit classifications such as:

| Classification | Meaning |
|---|---|
| **Private** | Restricted to the owning House unless a specific operation is approved. |
| **Restricted** | Sensitive material requiring narrower access or stronger approval. |
| **Internal** | May be used within development or operations but is not approved for public distribution. |
| **Exportable** | May leave the House for a declared purpose and destination after review. |
| **Public** | Deliberately approved for public use. |
| **Synthetic** | Artificial data designed for tests, examples, screenshots, or demos. |

Absence of a classification does not mean public. Unclassified imported material should default to private or review-required.

## 3. Public repository allowance

A public repository may contain:

- architecture and product documentation;
- generic schemas and contracts;
- source code that has passed boundary review;
- synthetic fixtures;
- sanitized interface studies;
- public brand assets;
- generic configuration templates;
- test cases without private source material;
- public issue templates;
- release notes that do not expose private history.

A public repository must not contain:

- credentials, tokens, cookies, private keys, or secrets;
- real private contacts or communications;
- unpublished manuscripts or private publishing files;
- personal financial, legal, medical, household, or identity records;
- private analytics or account data;
- private addresses, paths, device names, usernames, or identifiers where they expose the operator;
- private model prompts or outputs containing source material;
- screenshots showing private records;
- raw logs containing sensitive content;
- backups, databases, exports, indexes, or caches from Stokknes House;
- private configuration presented as a generic default;
- proprietary third-party material without redistribution authority.

## 4. Stokknes House boundary

Stokknes House is the private flagship and proving ground.

It may reveal reusable product requirements, but its records are never automatically reusable fixtures.

Extraction from Stokknes House requires:

1. identifying the generic capability;
2. creating a clean interface or contract;
3. removing personal and publishing-specific assumptions where the capability belongs in Core;
4. replacing real records with synthetic fixtures;
5. reviewing filenames, paths, metadata, screenshots, logs, and historical references;
6. testing the generic capability in a clean House;
7. recording the extraction decision.

## 5. Screenshot boundary

Before a screenshot leaves a private environment, review:

- names and aliases;
- avatars and photographs;
- messages and notes;
- filenames and folder paths;
- dates and timelines;
- amounts and account balances;
- locations and addresses;
- contact details;
- book titles and manuscript text;
- project names and internal codes;
- browser tabs, notifications, and taskbar content;
- system usernames and device names;
- API keys, tokens, QR codes, and identifiers;
- metadata that may survive in the image file.

Cropping a screenshot is not sufficient if the visible combination remains identifying.

The public pre-alpha images in this repository are reconstructed with synthetic data rather than captured from the private House.

## 6. Synthetic-data standard

Synthetic fixtures should:

- avoid real names, titles, amounts, addresses, identifiers, and timelines;
- avoid near-copies that are trivially linked back to private sources;
- cover realistic structures and edge cases;
- declare that they are synthetic;
- remain safe if indexed by search engines;
- avoid copyrighted source text beyond what is permitted;
- be reviewed when generated from real examples.

A changed name alone does not make data synthetic. Relationships, dates, amounts, descriptions, and unique event combinations may still identify the source.

## 7. Model and prompt boundary

Before content is sent to an external model or service, the operation should declare:

- provider and destination;
- content categories sent;
- whether attachments or full source files are included;
- retention or training settings where known;
- required redaction or minimization;
- authority for the transfer;
- the local audit record.

Local model use may reduce external disclosure but does not automatically make the output safe, accurate, canonical, or public.

## 8. Integration boundary

Every external integration should classify:

- data read;
- data written;
- credentials used;
- destinations;
- external effects;
- logs retained;
- retry behavior;
- disconnect behavior;
- deletion or revocation limits.

Examples requiring explicit review include:

- email;
- social publishing;
- website deployment;
- KDP or other publishing systems;
- payments or banking;
- cloud storage;
- analytics;
- external AI;
- calendar and contacts;
- messaging systems;
- government or authority portals.

## 9. Export boundary

An export must be treated as a boundary crossing even when it remains on the same device.

The export should declare:

- purpose;
- intended audience;
- included records and files;
- excluded secrets;
- classification;
- destination;
- format;
- expiration or retention where relevant;
- whether the export may be published or redistributed.

## 10. Logs and telemetry

Logs should minimize sensitive payloads and use identifiers or redacted summaries where sufficient.

Public issue reports should not include raw private logs by default.

Telemetry, if introduced, must be:

- opt-in or otherwise explicitly disclosed and justified;
- documented;
- minimized;
- separable from essential local use;
- bounded by retention and destination rules.

“No forced telemetry” is a current product principle.

## 11. Public claim review

A public statement is also a boundary decision because it may expose implementation details, private history, security posture, or unsupported guarantees.

Before publishing a claim, verify:

- the claim is current;
- evidence exists;
- limitations are stated;
- private proving-ground details are not used as proof without approval;
- screenshots and metrics are safe;
- no release or security guarantee is implied accidentally.

## 12. Incident response

If private material enters a public destination:

1. stop further propagation;
2. remove or revoke access where possible;
3. rotate exposed credentials immediately;
4. preserve a minimal internal incident record;
5. identify all mirrors, caches, forks, logs, prompts, and derived artifacts;
6. assess whether affected people or services must be notified;
7. replace public fixtures or assets;
8. record the cause and add a prevention control;
9. do not assume deletion from the original destination removes all copies.

## 13. Boundary review checklist

Before public release, ask:

- Is every included item deliberately public or synthetic?
- Can combinations of details reconstruct private identity or history?
- Are credentials, paths, metadata, and logs clean?
- Are third-party rights respected?
- Does the artifact reveal unverified security claims?
- Could this public default accidentally write into a real private destination?
- Has the artifact been tested outside Stokknes House?
