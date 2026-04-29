@echo off
cd  C:\dev\mp4\nodeUtil\nodeUtil
robocopy \dev\mp4\node\   C:\dev\mp4\nodeUtil\nodeUtil /e
git add .
git commit -m bk
git push