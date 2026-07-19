param(
    [string]$Root = (Split-Path -Parent $PSScriptRoot),
    [switch]$Commit
)

$ErrorActionPreference = 'Stop'

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host '[FAIL] Git is not installed or not available in PATH.' -ForegroundColor Red
    exit 1
}

& (Join-Path $PSScriptRoot 'Check-SysteadRoot.ps1') -Root $Root
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

Push-Location $Root
try {
    if (-not (Test-Path (Join-Path $Root '.git'))) {
        git init | Out-Host
    }
    git branch -M main | Out-Host
    git add . | Out-Host
    if ($Commit) {
        git commit -m 'Bootstrap Systead Alpha root' | Out-Host
    } else {
        Write-Host '[OK] Git initialized and files staged. No commit or push performed.' -ForegroundColor Green
    }
} finally {
    Pop-Location
}
