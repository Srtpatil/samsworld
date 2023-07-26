#!/bin/bash

echo "Removing current deployment by deleting the gh-pages branch"
git push origin --delete gh-pages

echo "Building code"
npm run build
git add dist -f
git commit -m "Adding dist"

echo "Create new gh-pages branch from the master for only dist"
git subtree push --prefix dist origin gh-pages

echo "Deploying to gh-pages"
npm run deploy
