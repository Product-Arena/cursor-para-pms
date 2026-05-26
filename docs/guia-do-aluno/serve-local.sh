#!/usr/bin/env bash
# Local static server for Guia do Aluno (IPv4 loopback only).
# Usage:
#   ./serve-local.sh              # port 8844
#   ./serve-local.sh --open       # macOS: opens Safari/Chrome after start
#   PORT=9000 ./serve-local.sh
#
# Browser error -102 usually means nothing is listening: run this script first
# and keep the terminal open. Avoid Cursor Simple Browser for localhost; use
# Safari or Chrome, or run with --open on macOS.

set -euo pipefail
cd "$(dirname "$0")"
PORT="${PORT:-8844}"
OPEN_BROWSER=0
for arg in "$@"; do
  case "$arg" in
    --open) OPEN_BROWSER=1 ;;
  esac
done

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 not found. Install Python 3 or use: npx --yes serve -l ${PORT} ." >&2
  exit 1
fi

if command -v lsof >/dev/null 2>&1 && lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Port ${PORT} is already in use. Try: PORT=$((PORT + 1)) $0 $*" >&2
  exit 1
fi

echo "Guia do Aluno — preview local"
echo "Serving: $(pwd)"
echo "URL:     http://127.0.0.1:${PORT}/"
echo "Stop:    Ctrl+C"

python3 -m http.server "$PORT" --bind 127.0.0.1 &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

# Wait until the socket accepts connections (avoids race when opening browser)
for _ in $(seq 1 50); do
  if curl -sf -o /dev/null "http://127.0.0.1:${PORT}/" 2>/dev/null; then
    break
  fi
  sleep 0.1
done

if [[ "$OPEN_BROWSER" -eq 1 ]]; then
  if [[ "$(uname -s)" == "Darwin" ]] && command -v open >/dev/null 2>&1; then
    open "http://127.0.0.1:${PORT}/"
    echo "Opened default browser (macOS)."
  else
    echo "Use --open on macOS only; elsewhere open http://127.0.0.1:${PORT}/ manually." >&2
  fi
fi

echo "Server PID ${SERVER_PID} — leave this window running."
wait "$SERVER_PID"
