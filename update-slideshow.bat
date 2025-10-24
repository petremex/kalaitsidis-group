@echo off
cd /d "%~dp0"
setlocal enabledelayedexpansion

echo // Slideshow images configuration > slideshow-images.js
echo // This file was auto-generated. To update, double-click update-slideshow.bat >> slideshow-images.js
echo const slideshowImages = [ >> slideshow-images.js

set count=0
for %%f in ("photos\slideshow\*.jpg" "photos\slideshow\*.jpeg" "photos\slideshow\*.png" "photos\slideshow\*.gif" "photos\slideshow\*.webp") do (
    if exist "%%f" (
        echo     '%%~nxf', >> slideshow-images.js
        set /a count+=1
    )
)

echo ]; >> slideshow-images.js

echo.
echo ===================================
echo   Slideshow Updated Successfully!
echo ===================================
echo Found %count% image(s)
echo.
echo Refresh your browser to see changes
echo.
pause
