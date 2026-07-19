@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0Check-SysteadRoot.ps1"
set "EXITCODE=%ERRORLEVEL%"
echo.
if not "%EXITCODE%"=="0" (
  echo Validation failed. Exit code: %EXITCODE%
) else (
  echo Systead root is ready.
)
pause
exit /b %EXITCODE%
