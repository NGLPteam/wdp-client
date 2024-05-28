#!/usr/bin/env bash

set -uE

unscramble_env() {
  local scrambled="${1?'Provide a scrambled value'}"
  local actual="${2?'Provide an actual value'}"

  echo "Trying to unscramble ${actual}..."

  test -n "${!actual}"

  echo "value: ${!actual}"

  find /app/packages/${WDP_APP}/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s|${scrambled}|${!actual}|g"
}

echo "Unscrambling runtime env vars"

unscramble_env "NP--KC--REALM" NEXT_PUBLIC_KEYCLOAK_REALM
unscramble_env "NP--KC--CLIENT_ID" NEXT_PUBLIC_KEYCLOAK_CLIENT_ID
unscramble_env "NP--KC--URL" NEXT_PUBLIC_KEYCLOAK_URL
unscramble_env "NP--API--URL" NEXT_PUBLIC_API_URL
unscramble_env "NP--TUS--URL" NEXT_PUBLIC_TUS_URL
unscramble_env "NP--FE--URL" NEXT_PUBLIC_FE_URL
unscramble_env "NP--ADMIN--URL" NEXT_PUBLIC_ADMIN_URL

exec "$@"