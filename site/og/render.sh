#!/usr/bin/env bash
# Renderar OG-kortet (site/og/og-image.html) till site/public/og-image.png, 1200x630.
# Kräver Google Chrome och nätverk (fonter hämtas från Google Fonts vid rendering).
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
UT="$DIR/../public/og-image.png"

[ -x "$CHROME" ] || { echo "FEL: hittar inte Google Chrome på $CHROME"; exit 1; }

"$CHROME" \
  --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --virtual-time-budget=5000 \
  --window-size=1200,630 \
  --screenshot="$UT" \
  "file://$DIR/og-image.html" >/dev/null 2>&1

# Verifiera att bilden blev 1200x630, annars är kortet trasigt som social card
DIM=$(python3 -c "from PIL import Image; im=Image.open('$UT'); print('%dx%d' % im.size)")
[ "$DIM" = "1200x630" ] || { echo "FEL: fel dimensioner ($DIM), förväntade 1200x630"; exit 1; }

echo "OK: $UT ($DIM, $(wc -c < "$UT" | tr -d ' ') bytes)"
