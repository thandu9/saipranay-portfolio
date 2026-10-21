#!/bin/sh
set -eu
cd "$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
if command -v node >/dev/null 2>&1; then
  runtime_node=$(command -v node)
else
  runtime_node=/Users/guest1/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node
fi
if [ ! -x "$runtime_node" ]; then
  echo 'Node.js 22 or newer is required. Install Node, then use npm install and npm run dev.' >&2
  exit 1
fi
export PATH="$(dirname "$runtime_node"):$PATH"
export NEXT_TELEMETRY_DISABLED=1
case "${1:-dev}" in
  dev) exec "$runtime_node" node_modules/next/dist/bin/next dev --hostname 127.0.0.1 ;;
  start) exec "$runtime_node" node_modules/next/dist/bin/next start --hostname 127.0.0.1 ;;
  build) exec "$runtime_node" node_modules/next/dist/bin/next build ;;
  lint) exec "$runtime_node" node_modules/eslint/bin/eslint.js . ;;
  test) exec "$runtime_node" node_modules/tsx/dist/cli.mjs --test tests/data.test.ts ;;
  typecheck) exec "$runtime_node" node_modules/typescript/bin/tsc --noEmit ;;
  e2e) exec "$runtime_node" node_modules/@playwright/test/cli.js test --project=chromium --project=webkit ;;
  *) echo 'Usage: ./run-local.sh [dev|start|build|lint|test|typecheck|e2e]' >&2; exit 1 ;;
esac
