echo "cleaning .parcel-cace and dist/" && rm -r .parcel-cache dist
echo "build..." && yarn run build
echo "deploy..." && yarn surge dist teresapelinski.com