#!/usr/bin/env bash
set -euo pipefail
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
required=(README.md START_HERE.md VERSION apps packages modules config docs site scripts)
for item in "${required[@]}"; do
  [[ -e "$root/$item" ]] || { echo "Missing: $item"; exit 1; }
done
mapfile -d '' files < <(find "$root" -type f \
  \( -name '*.md' -o -name '*.txt' -o -name '*.json' -o -name '*.yml' -o -name '*.yaml' \
     -o -name '*.ps1' -o -name '*.bat' -o -name '*.cmd' -o -name '*.sh' -o -name '*.html' \
     -o -name '*.css' -o -name '*.js' \) \
  ! -name 'SETUP.md' ! -name 'START_HERE.md' ! -name 'Check-SysteadRoot.ps1' ! -name 'validate-root.sh' -print0)
if ((${#files[@]})) && printf '%s\0' "${files[@]}" | xargs -0 grep -IlE 'F:\\Stokknes|MJS_Publishing_Library' | grep -q .; then
  echo 'Blocked private-path marker found.'
  exit 2
fi
echo 'Systead root validation passed.'
