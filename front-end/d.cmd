@ECHO OFF
cd dist
rd/s/q .git
git init
git remote add origin https://git.dev.tencent.com/zsh1937/auxyin.git
git add "."
git commit -m "update"
git push origin master:coding-pages -f --set-upstream