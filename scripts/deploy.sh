#!/bin/bash
# Deploy promptbiblioteket till bahnhof-prod
# Förutsätter: nginx-config och DNS för prompts.teknikministeriet.se

set -euo pipefail

REMOTE_HOST="bahnhof-prod"
REMOTE_PATH="/var/www/prompts.teknikministeriet.se"
LOCAL_DIST="site/dist/"

echo "=== Promptbiblioteket deploy ==="

# 1. Verifiera prompts
echo "[1/3] Verifierar prompts..."
npm run verify --silent

# 2. Bygga sajt
echo "[2/3] Bygger sajt..."
cd site && npm run build --silent && cd ..

# 3. Synka till server
echo "[3/3] Synkar till $REMOTE_HOST..."
rsync -avz --delete --chmod=a+rX "$LOCAL_DIST" "$REMOTE_HOST:$REMOTE_PATH/"

echo "=== Deploy klar ==="
echo "https://prompts.teknikministeriet.se"
