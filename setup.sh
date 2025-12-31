#!/bin/bash

# For Execute
# sed -i 's/\r$//' setup.sh && bash setup.sh

echo "[setup.sh] Start to execute..."

echo "--> Setup NVM..."
export NVM_DIR="$HOME/.nvm"
source $NVM_DIR/nvm.sh

nvm install 22.16.0
nvm use 22.16.0

echo "--> Git sync..."
git fetch origin
git checkout production
git pull origin production

echo "--> Clear build cache..."
rm -rf node_modules/.bin/next
rm -rf .next

echo "--> Setting default permissions..."
sudo chown -R www:www . 2>/dev/null || true
sudo find . -type d -exec chmod 755 {} \; 2>/dev/null || true
sudo find . -type f -exec chmod 644 {} \; 2>/dev/null || true

echo "--> Install dependencies..."
npm ci

echo "--> Build application..."
npm run build

echo "--> Run application..."
npm run pm2:restart || npm run pm2:start
pm2 startup
pm2 save

echo "--> Securing credentials files..."
sudo chmod 600 .env .env.local .env.production .well-known .git Makefile setup.sh 2>/dev/null

echo "[setup.sh] Script has been executed successfully..."
