yarn release
cd dist
git init
git add -A
git commit -m "Release"
git checkout -b gh-pages
git remote add origin git@github.com:ktsn/vue-ast-explorer.git
git push -f origin gh-pages
