yarn build
echo $DD
rm -r ./assets/*
rm -r ./workbox-*
cp -r ./dist/* ./
cp ./dist/index.html ./
cp ./dist/favicon.png ./assets/
echo "COPIED"
