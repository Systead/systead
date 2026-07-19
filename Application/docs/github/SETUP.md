# GitHub Setup

Organization: `Systead`

## Recommended repositories

### Create now

1. **systead** — private monorepo containing this root.
2. **.github** — public organization profile; copy `github-org-profile-repo` into it.

### Create later

3. **systead-site** — public website when the prelaunch copy is approved.
4. **author-machine** — commercial product repository after the module boundary is stable.
5. **systead-docs** — only if documentation needs an independent release cycle.

Do not split the platform into many repositories during Alpha.

## Organization profile

Suggested description:

> Local-first command systems. Operator-owned, explainable, and reversible.

Suggested website:

> https://systead.com

Suggested topics for the main repository:

`local-first`, `knowledge-management`, `personal-operations`, `privacy`, `self-hosted`, `publishing`, `ai-assist`, `productivity`

## Push the local root

Create an empty private repository named `systead`, then from `F:\Systead`:

```powershell
git init
git branch -M main
git add .
git commit -m "Bootstrap Systead Alpha root"
git remote add origin https://github.com/Systead/systead.git
git push -u origin main
```

The included initialization script performs only the local initialization and first commit. It does not create a remote or push automatically.
