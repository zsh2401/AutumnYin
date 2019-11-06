npm run build
Set-Location dist
Remove-Item -Recurse -Force .git
git init
git remote add origin git@git.dev.tencent.com:zsh1937/auxyin.git
git add "."
git commit -m "update"
git push origin master:coding-pages -f --set-upstream
Set-Location ..