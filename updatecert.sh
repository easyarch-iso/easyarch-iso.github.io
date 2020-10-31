#!/bin/bash
# Install latest certbot first then issue the following command -
#
# sudo certbot certonly --manual -d easyarch-iso.com -d www.easyarch-iso.com
#

read -p 'Enter challenge file name: ' FILENAME
read -p 'Enter challenge response: ' RESPONSE

rm -fv ./html/.well-known/acme-challenge/*
echo "$RESPONSE" > "./html/.well-known/acme-challenge/$FILENAME.html"
npm run build
git add .
git commit -m "certbot response update"
git push -u origin master
echo "Certbot response updated. Wait for CI/CD job to finish."
