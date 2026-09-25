# Work from the SD card

This folder is the editable Systead website and the existing Git repository. Its origin is `https://github.com/Systead/systead.git`. Keep it on the card and open the same folder from either Windows computer. The preview resolves its own location, including a different drive letter or a folder name containing spaces.

## Preview and edit

Double-click `START_PREVIEW.cmd`, or `START_SYSTEAD_WEBSITE.cmd` in the parent Systead folder. Windows PowerShell starts a local web server on an available loopback port and opens the homepage. Node.js and internet access are not needed for previewing. The launcher applies execution policy only to that PowerShell process; it does not change the computer's saved policy.

Keep the console open. Save edits in your editor and refresh the browser. Use the **Estimate** navigation item for the calculator. Opening `estimate.html` directly as a file will not reliably load its JavaScript modules; use the preview launcher.

| Edit | File |
|---|---|
| Homepage | `index.html` |
| Service explanation | `services.html` |
| Calculator page | `estimate.html` |
| Prices and scope rules | `assets/service/model.js` |
| Calculator behaviour | `assets/service/calculator.js` |
| Service/calculator appearance | `assets/service/studio.css` |
| Shared brand styling | `assets/css/site.css`, `assets/css/positioning.css` |

All prices remain working hypotheses from existing Systead planning. Changing the public source is a deliberate rate change. Private per-project overrides in Stokknes House do not automatically change these files, and changes here do not automatically update that installed House module.

## Check and build

On a computer with Node.js installed, double-click `CHECK_AND_BUILD.cmd`. It runs the existing pricing checks, including 432 configurations, then produces the website in `dist/client`. There are no package dependencies to install for this static website.

Equivalent terminal commands from this folder:

```sh
npm test
npm run build
```

## Review and upload when ready

Use an installed Git client or GitHub Desktop to open this existing folder. Review the changed files, commit, and push when you intend to update the remote. Hosting connected to that repository may deploy after a push.

The equivalent manual terminal flow is:

```sh
git status
git diff
# After reviewing, stage only the public website files you intend to upload:
git add <chosen-files>
git diff --cached
git commit -m "Update Systead website"
git push origin HEAD
```

The launchers and checks never commit, push, buy anything or publish. If the remote has changed elsewhere, fetch and reconcile it in your Git client before pushing. Do not force-push to resolve a disagreement.

## Keep private business material beside the repo

The outer Systead folder also contains private planning, reviews, backups and the earlier alpha demo. Keep those outside this public repository. Stokknes House owns its own private business records; those are not website content.

The website build copies `assets`, `Application`, `profile`, `docs`, and root HTML/Markdown/text files. Anything placed there can become public. Put private notes, exports, credentials, client records and backups outside this folder. Local `work/`, build output and common secret files are ignored by Git, but `.gitignore` is not an access-control system.

Close the preview window and editor writes before safely ejecting the SD card. GitHub preserves pushed source; the SD card's uncommitted edits and private records need their own backup.
