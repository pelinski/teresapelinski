nvm use v21.7.3
echo "cleaning .parcel-cace and dist/" && rm -r .parcel-cache dist
echo "build..." && yarn run build
echo "deploy..." && yarn surge dist teresapelinski.surge.sh