@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0Initialize-SysteadGit.ps1"
set "EXITCODE=%ERRORLEVEL%"
echo.
if not "%EXITCODE%"=="0" (
  echo Git initialization failed. Exit code: %EXITCODE%
) else (
  echo Git initialization completed. No remote or push was added.
)
pause
exit /b %EXITCODE%
