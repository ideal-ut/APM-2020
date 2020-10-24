cd docs/sec-a
for i in *.md; do pandoc "$i" -o ../../static/"${i%.md}".pdf; echo "$i"; done;

cd ../sec-b
for i in *.md; do pandoc "$i" -o ../../static/"${i%.md}".pdf; echo "$i"; done;

cd ../../

git add .
git commit -m "WIP"

GIT_USER=somnathrakshit \
  CURRENT_BRANCH=master \
  DEPLOYMENT_BRANCH=gh-pages \
  USE_SSH=false \
  yarn run deploy # or `npm run publish-gh-pages`

git checkout master
git push origin master 