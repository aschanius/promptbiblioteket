#!/bin/bash
# Deploy promptbiblioteket till bahnhof-prod
# Förutsätter: nginx-config och DNS för prompts.teknikministeriet.se

set -euo pipefail

REMOTE_HOST="bahnhof-prod"
REMOTE_PATH="/var/www/prompts.teknikministeriet.se"
LOCAL_DIST="site/dist/"

echo "=== Promptbiblioteket deploy ==="

# 1. Verifiera prompts
echo "[1/4] Verifierar prompts..."
npm run verify --silent

# 2. Bygga sajt
echo "[2/4] Bygger sajt..."
cd site && npm run build --silent && cd ..

# 3. Synka till server
echo "[3/4] Synkar till $REMOTE_HOST..."
rsync -avz --delete --chmod=a+rX "$LOCAL_DIST" "$REMOTE_HOST:$REMOTE_PATH/"

# 4. Smoketest: root + kritiska sidor/assets måste svara 200
echo "[4/4] Smoketest..."
BASE="https://prompts.teknikministeriet.se"
for path in / /og-image.png /forsaljning/; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "$BASE$path" 2>/dev/null || echo "000")
  if [ "$STATUS" != "200" ]; then
    echo "FAIL: $BASE$path → $STATUS"
    exit 1
  fi
  echo "  OK: $path → 200"
done

echo "=== Deploy klar ==="
echo "https://prompts.teknikministeriet.se"
