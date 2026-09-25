@echo off
setlocal
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\preview.ps1"
if errorlevel 1 (
  echo.
  echo The local preview could not start. See the message above.
  pause
)
