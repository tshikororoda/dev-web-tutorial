@ECHO OFF

:: set title
title \\ QUICK CREATE HDS

:: set Color
color 0a

:: version
ver

:: Print current date
echo %DATE%

::
echo Created by Tshikororo Dakalo
echo Last modified: 2020/12/31
echo.
echo Type ^> What is your name?
set /p name= "Type > : "
echo.

echo Type ^> %name%, Where should your website live on your computer?
echo Type ^> Location. E.g: C:\Users\Administrator\Desktop
echo.
set /p location= "Type > : "
echo.
echo Type ^> Location %location%
cd %location%

echo Type ^> Inside your chosen location, type in websites projects directory name.
echo         This is where all your website projects will live.
echo         E.g: workspace (or similar). 
set /p workspacedirname= " Type > : "
mkdir %workspacedirname%
cd %workspacedirname%
echo.

echo Type ^> Inside this folder, type in project name.
echo         This is where we stored all our website files.
echo         E.g: dev-personal-site (or similar). 
set /p rootdir= "Type > : dev-"

mkdir dev-%rootdir%
cd dev-%rootdir%

:: Create a file called README.md.

> README.md (
	echo "# %name% personal website "
)

:: Make dev-%rootdir% directory a Git Repository

echo.
git init
echo.
:: Create a subdirectory of dev-%rootdir% directory
:: called assets and it's subdirectory which are
:: css, js and img

mkdir assets
cd assets
mkdir css js img
cd ../

:: Create a file called index.html, about.html,
:: skills.html, portfolio.html and contact.html

echo > index.html
echo > about.html
echo > skills.html
echo > portfolio.html
echo > contact.html

:: Add html code on index file

> index.html (
echo ^<!--/@tshikororoda
echo Folder: hds/hds.index.html
echo Document head and body with their related tags
echo.
echo --^>
echo.
echo ^<!DOCTYPE html^> ^<!-- HTML5 document version declaration --^>
echo ^<html dir="ltr" lang="en"^>
echo 	^<head^>
echo.
echo ^<!--____________________________________________
echo [ Document header related tags here ]
echo --^>
echo.
echo   		^<meta charset		="utf-8" /^>
echo   		^<meta http-equiv	="X-UA-Compatible"	content="IE=edge" /^>
echo   		^<meta       name	="viewport"        	content="content="width=device-width; initial-scale=1.0" /^>
echo        ^<meta       name   ="author"           content="Dakalo Tshikororo"/^>
echo.
echo   		^<title^> Document Appropriate Skeleton^&#33;^</title^>
echo.
echo 	^</head^>
echo 	^<body^>
echo.
echo ^<!--____________________________________________
echo  [ Document body related tags here ]
echo --^>
echo.
echo 		^<h1^> ^&#39;Document Appropriate Skelton^&#33;^&#39; ^</h1^>
echo 		^<p^> This is the document structure^&#33;. ^</p^>
echo.
echo 	^</body^>
echo ^</html^>
)

:: Create version file
echo Type ^> Create version file
git add .
git commit -m " First commit: create an empty version of all html files "
echo.

:: Creating a new branch
echo Type ^> Creating a new branch
git branch home
git branch about
git branch skill
git branch portfolio
git branch contact

echo        branch home
echo        branch about
echo        branch skill
echo        branch portfolio
echo        branch contact

:: Switching branches

echo.
echo Type ^> Switch to home branch
git checkout home
echo.

:: Open
start notepad++ index.html
start "" "%PROGRAMFILES%\Git\bin\sh.exe" --login

:: List all iterms in the current directory

dir

echo.
echo.
echo -------------------------------------------------------------------------

:: This prevent cmd to close automaticaly
cmd /k
