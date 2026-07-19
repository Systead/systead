param(
    [string]$Root = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = 'Stop'
$required = @(
    'README.md',
    'START_HERE.md',
    'VERSION',
    'apps',
    'packages',
    'modules',
    'config',
    'docs',
    'site',
    'scripts'
)

$missing = @()
foreach ($item in $required) {
    if (-not (Test-Path (Join-Path $Root $item))) {
        $missing += $item
    }
}

if ($missing.Count -gt 0) {
    Write-Host '[FAIL] Missing required root items:' -ForegroundColor Red
    $missing | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
    exit 1
}

$blockedPatterns = @(
    'F:\\Stokknes',
    'MJS_Publishing_Library'
)

$extensions = @('*.md','*.txt','*.json','*.yml','*.yaml','*.ps1','*.bat','*.cmd','*.sh','*.html','*.css','*.js')
$files = @()
foreach ($extension in $extensions) {
    $files += Get-ChildItem -Path $Root -Recurse -File -Filter $extension -ErrorAction SilentlyContinue
}

$hits = @()
foreach ($file in ($files | Sort-Object FullName -Unique)) {
    $relative = $file.FullName.Substring($Root.Length).TrimStart('\')
    if ($relative -like 'docs\github\SETUP.md' -or $relative -like 'START_HERE.md' -or $relative -like 'scripts\Check-SysteadRoot.ps1' -or $relative -like 'scripts\validate-root.sh') {
        continue
    }
    $content = Get-Content -LiteralPath $file.FullName -Raw -ErrorAction SilentlyContinue
    foreach ($pattern in $blockedPatterns) {
        if ($content -match $pattern) {
            $hits += "$relative -> $pattern"
        }
    }
}

if ($hits.Count -gt 0) {
    Write-Host '[FAIL] Product-boundary markers found:' -ForegroundColor Red
    $hits | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
    exit 2
}

Write-Host '[OK] Systead root structure passed.' -ForegroundColor Green
Write-Host '[OK] No blocked private-path markers found in product files.' -ForegroundColor Green
exit 0
