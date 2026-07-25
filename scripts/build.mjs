import { copyFile, cp, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = join(projectRoot, "dist");
const clientRoot = join(distRoot, "client");
const serverRoot = join(distRoot, "server");

await rm(distRoot, { recursive: true, force: true });
await mkdir(clientRoot, { recursive: true });
await mkdir(serverRoot, { recursive: true });

for (const directory of ["assets", "Application", "profile", "docs"]) {
  await cp(join(projectRoot, directory), join(clientRoot, directory), {
    recursive: true,
  });
}

const rootFiles = await readdir(projectRoot, { withFileTypes: true });
for (const entry of rootFiles) {
  if (!entry.isFile()) continue;
  if (
    entry.name === "CNAME" ||
    [".html", ".md", ".txt"].includes(extname(entry.name).toLowerCase())
  ) {
    await copyFile(join(projectRoot, entry.name), join(clientRoot, entry.name));
  }
}

await copyFile(
  join(projectRoot, "worker", "index.js"),
  join(serverRoot, "index.js"),
);
