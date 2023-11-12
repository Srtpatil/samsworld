#!/bin/bash

echo "Removing current deployment Folder"
rm -rf ./deploy

echo "Create deployment folder"
mkdir ./deploy

echo "Clone the srtpatil.github.io website"
cd deploy && git clone https://github.com/Srtpatil/srtpatil.github.io.git && cd ..

echo "Build Resume"
cd ./src/assets && pdflatex samarth_resume.tex && cd ../..

echo "Build Blogs"
npm run build-blog

echo "Build the code and copy to site"
npm run build && cp -r ./dist/* ./deploy/srtpatil.github.io/

echo "Deploying to gh-pages"
cd ./deploy/srtpatil.github.io && git add . && git commit -m "Deploying site" && git push && cd ../..

echo "Removing current deployment Folder"
rm -rf ./deploy
