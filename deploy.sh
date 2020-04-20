#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:<adamorlowskipoland>/<adamorlowskipoland>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<adamorlowskipoland>/<vue-off-main-thread-architecture>.git master:gh-pages

cd -
