git add .
git commit -m "WIP"

GIT_USER=somnathrakshit \
  CURRENT_BRANCH=master \
  DEPLOYMENT_BRANCH=gh-pages \
  USE_SSH=false \
  yarn run deploy # or `npm run publish-gh-pages`