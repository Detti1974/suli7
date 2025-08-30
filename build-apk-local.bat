@echo off
setlocal ENABLEDELAYEDEXPANSION

echo ==============================================
echo   SULI7 - ANDROID APK AUTO BUILD (RELEASE)
echo ==============================================
cd /d %~dp0

rem ---- 1) Expo prebuild (android/ frissitese) ----
echo [1/4] Expo prebuild...
npx expo prebuild --platform android
if %ERRORLEVEL% NEQ 0 (
  echo HIBA: Expo prebuild sikertelen.
  goto :end
)

rem ---- 2) Gradle release build ----
echo.
echo [2/4] Gradle assembleRelease...
cd android
call gradlew.bat assembleRelease
if %ERRORLEVEL% NEQ 0 (
  echo HIBA: Gradle build sikertelen.
  cd ..
  goto :end
)
cd ..

rem ---- 3) APK kikeresese ----
set APK_PATH=android\app\build\outputs\apk\release\app-release.apk
if not exist "%APK_PATH%" (
  echo HIBA: Nem talalom az APK-t itt: %APK_PATH%
  goto :end
)

rem ---- 4) Masolas a dist/ mappaba datumozott nevvel ----
if not exist dist mkdir dist
for /f "tokens=1-3 delims=/- " %%a in ("%date%") do (set Y=%%c&set M=%%a&set D=%%b)
for /f "tokens=1-2 delims=:." %%h in ("%time%") do (set H=%%h&set MIN=%%i)
set H=%H: =0%&set M=%M: =0%&set D=%D: =0%&set MIN=%MIN: =0%
set OUT_APK=dist\suli7-%Y%%M%%D%_%H%%MIN%-release.apk

copy /Y "%APK_PATH%" "%OUT_APK%" >NUL

echo.
echo [KESZ] APK elerheto:
echo   1) %APK_PATH%
echo   2) %OUT_APK%
echo Masold at a telefonodra es telepitsd (Ismeretlen forras engedelyezese).

:end
echo.
pause
