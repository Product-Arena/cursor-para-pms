#!/usr/bin/env bash
# Serves docs/ over HTTP for local preview (apresentação + página).
# Chromium (incl. Cursor Simple Browser) blocks UNSAFE ports (e.g. 5060 = SIP → ERR_UNSAFE_PORT / -312).
# This script only tries safe ports. Prefer Safari or Chrome if preview still fails.

set -euo pipefail
DOCS="$(cd "$(dirname "$0")" && pwd)"
cd "$DOCS"

pick_port() {
  local p="$1"
  if lsof -nP -iTCP:"$p" -sTCP:LISTEN >/dev/null 2>&1; then
    return 1
  fi
  return 0
}

PORT="${PORT:-}"
if [[ -z "$PORT" ]]; then
  for try in 5173 5174 8088 8844 9090; do
    if pick_port "$try"; then
      PORT="$try"
      break
    fi
  done
fi
if [[ -z "$PORT" ]]; then
  echo "No free port in list; set PORT= manually." >&2
  exit 1
fi

echo ""
echo "  Cursor para PMs — apresentacao-3 (cópia de docs/)"
echo "  Slides (HTML):  http://127.0.0.1:${PORT}/"
echo "  Guia (roteiros): http://127.0.0.1:${PORT}/guia/"
echo ""
echo "  Tip: open in Safari or Chrome if Cursor preview shows Error -312."
echo "  Ctrl+C to stop."
echo ""

exec python3 -m http.server "$PORT" --bind 127.0.0.1
