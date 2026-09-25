@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is needed for price checks and the build.
  echo You can still use START_PREVIEW.cmd without Node.js.
  pause
  exit /b 1
)
node --test tests\service-model.test.mjs
if errorlevel 1 goto failed
node scripts\build.mjs
if errorlevel 1 goto failed
echo.
echo Checks passed. Website build is in dist\client.
echo Nothing has been uploaded or published.
pause
exit /b 0
:failed
echo.
echo Checks or build failed. Review the output above.
pause
exit /b 1
