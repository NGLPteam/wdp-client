import joinURL from "url-join";
import { JWT } from "@auth/core/jwt";
import KeycloakProvider from "next-auth/providers/keycloak";

export const {
  NEXT_KEYCLOAK_URL = "",
  NEXT_KEYCLOAK_CLIENT_ID = "",
  NEXT_KEYCLOAK_CLIENT_SECRET = "",
  NEXT_KEYCLOAK_REALM = "",
} = process.env;

const KEYCLOAK_ISSUER = joinURL(
  NEXT_KEYCLOAK_URL,
  "realms",
  NEXT_KEYCLOAK_REALM
);
const REQUEST_TOKEN_URL = joinURL(
  KEYCLOAK_ISSUER,
  "/protocol/openid-connect/token"
);

interface KeycloakLogoutUrlOptions {
  idToken?: string;
  redirectTo: string;
}

export function keycloakLogoutUrl({
  idToken,
  redirectTo,
}: KeycloakLogoutUrlOptions) {
  const logoutUrl = new URL(NEXT_KEYCLOAK_URL);
  logoutUrl.pathname =
    logoutUrl.pathname +
    `/realms/${NEXT_KEYCLOAK_REALM}/protocol/openid-connect/logout`;
  if (idToken) logoutUrl.searchParams.append("id_token_hint", idToken);
  if (redirectTo)
    logoutUrl.searchParams.append("post_logout_redirect_uri", redirectTo);
  return logoutUrl.href;
}

export function makeKeycloakProvider() {
  console.log({ KEYCLOAK_ISSUER });
  return KeycloakProvider({
    clientId: NEXT_KEYCLOAK_CLIENT_ID,
    clientSecret: NEXT_KEYCLOAK_CLIENT_SECRET,
    issuer: KEYCLOAK_ISSUER,
  });
}

export function refreshTokenBodyFor(token: JWT): string {
  const params = new URLSearchParams({
    client_id: NEXT_KEYCLOAK_CLIENT_ID,
    client_secret: NEXT_KEYCLOAK_CLIENT_SECRET,
    grant_type: "refresh_token",
    refresh_token: (token.refreshToken as string) ?? "",
  });

  return params.toString();
}

export async function refreshAccessToken(token: JWT) {
  try {
    const body = refreshTokenBodyFor(token);

    const response = await fetch(REQUEST_TOKEN_URL, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw responseData;
    }

    return {
      ...token,
      accessToken: responseData.access_token as string,
      accessTokenExpired: Date.now() + responseData.expires_in * 1000,
      refreshToken:
        responseData.refresh_token ?? (token.refreshToken as string),
      refreshTokenExpired: Date.now() + responseData.refresh_expires_in * 1000,
    };
  } catch (error) {
    return {
      ...token,
      accessToken: null,
      accessTokenExpired: null,
      refreshToken: null,
      refreshTokenExpired: null,
      error: "RefreshAccessTokenError",
    };
  }
}
