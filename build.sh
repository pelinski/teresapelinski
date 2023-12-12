echo "cleaning .parcel-cace and dist/" && rm -r .parcel-cache dist
echo "build..." && yarn run build
echo "adding 200.html and 404.html..." && cp dist/index.html dist/200.html && cp dist/index.html dist/404.html
echo "deploy..." && yarn surge dist teresapelinski.com