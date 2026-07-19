# Command Contract

Every executable command must declare:

- stable command ID;
- owning module;
- purpose;
- risk level;
- prerequisites;
- affected records or files;
- dry-run support;
- backup requirement;
- confirmation wording;
- success and failure result;
- audit event;
- rollback route;
- whether Safe Mode blocks execution.

Buttons must call the command bus. They must not directly launch unregistered scripts or external actions.
