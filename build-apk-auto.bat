@echo off
setlocal

:: ==== Dátum és idő beállítása fájlnévhez ====
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (
  set YYYY=%%c
  set MM=%%a
  set DD=%%b
)
for /f "tokens=1-2 delims=: " %%a in ('time /t') do (
  set HH=%%a
  set MN=%%b
)
:: Óra formázása 24 órásra (ha kell)
if "%time:~0,2%" lss "10" set HH=0%HH%

set TIMESTAMP=%YYYY%-%MM%-%DD%-%HH%%MN%

echo [1/3] Expo prebuild indul...
call npx expo prebuild --platform android
if %errorlevel% neq 0 (
  echo HIBA az Expo prebuild közben!
  pause
  exit /b %errorlevel%
)

echo [2/3] Gradle build (assembleRelease) indul...
cd android
call gradlew assembleRelease
if %errorlevel% neq 0 (
  echo HIBA a Gradle build közben!
  pause
  exit /b %errorlevel%
)
cd ..

echo [3/3] APK másolás...
set APK=android\app\build\outputs\apk\release\app-release.apk
set OUT=build\output

if not exist %OUT% mkdir %OUT%
if exist %APK% (
  copy /Y %APK% %OUT%\tanulos-app-%TIMESTAMP%.apk
  echo SIKERESEN ELKESZÜLT: %OUT%\tanulos-app-%TIMESTAMP%.apk
) else (
  echo HIBA: Nem található az APK fájl!
)

pause
endlocal
