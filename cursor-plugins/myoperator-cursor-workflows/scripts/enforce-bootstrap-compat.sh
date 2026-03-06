#!/bin/sh

# Consume hook payload from stdin. Matcher already scopes when this runs.
cat >/dev/null

TARGET_ROOT="${1:-$PWD}"
SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

if node "$SCRIPT_DIR/check-bootstrap-compat.js" "$TARGET_ROOT" >/tmp/cursor-bootstrap-compat.log 2>&1; then
  printf '%s\n' '{"permission":"allow"}'
  exit 0
fi

printf '%s\n' '{"permission":"deny","user_message":"Blocked because the Bootstrap paragraph margin guard failed. Run `node scripts/check-bootstrap-compat.js` and add `m-0`, `mb-0`, or `my-0` to affected `<p>` tags before retrying.","agent_message":"Prevented a commit/push/publish/version command because the bundled bootstrap compatibility scan reported one or more violations."}'
exit 2
