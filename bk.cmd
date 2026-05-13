@echo off
cd  C:\dev\mp4\nodeUtil\nodeUtil
robocopy \dev\mp4\node\   C:\dev\mp4\nodeUtil\nodeUtil /e
robocopy \dev\docker   C:\dev\mp4\nodeUtil\nodeUtil\docker /e
rem https://www.youtube.com/playlist?list=PLAqh-nBcCnGVuzpXX8s_kS7kk5UViZ0k7
git add .
git commit -m bk
git push