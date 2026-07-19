# Architecture Overview

## Core layers

1. **Storage** — versioned local state, attachments, indexes, exports, and migrations.
2. **Records** — canonical entities and typed links.
3. **Command bus** — declared commands with risk, preflight, confirmation, audit, and rollback.
4. **Review queue** — proposed changes and AI-assisted extraction awaiting human approval.
5. **Knowledge** — current manuals, evidence, decisions, and searchable context.
6. **House shell** — navigation, Today view, settings, privacy, Safe Mode, and module lifecycle.
7. **Modules** — bounded specialist features using public platform interfaces.

## Initial implementation strategy

Reuse proven behaviour from the private AuthorMachine only through explicit reimplementation or reviewed extraction. Do not copy private state or hard-coded private assumptions into the generic repository.
