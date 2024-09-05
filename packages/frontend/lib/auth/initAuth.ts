import NextAuth from "next-auth";
import {
  refreshAccessToken,
  makeKeycloakProvider,
  NEXT_PUBLIC_KEYCLOAK_URL,
} from "./keycloak";
import type { NextAuthConfig, Session } from "next-auth";
import type { JWT } from "@auth/core/jwt";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [makeKeycloakProvider()],
  callbacks: {
    // Declared types can likely be removed here once we're past next-auth v5 beta 4.
    // See https://github.com/nextauthjs/next-auth/issues/9633
    session: ({ session, token }: { session: Session; token?: JWT }) => {
      return {
        ...session,
        accessToken: token?.accessToken as string,
        refreshToken: token?.refreshToken as string,
        idToken: token?.idToken as string,
        error: token?.error as string,
      };
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }

      // Add access_token, refresh_token and expirations to the token right after sign-in
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpired = (account.expires_at || 0) * 1000;
        token.refreshTokenExpired =
          Date.now() +
          parseInt(account.refresh_expires_in as string, 10) * 1000;
        token.idToken = account.id_token;
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < parseInt(token.accessTokenExpired as string, 10)) {
        return token;
      }

      // Access token has expired, try to update it
      return await refreshAccessToken(token);
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;

      // Allows callback URLs on the same origin or keycloak origin
      const urlOrigin = new URL(url).origin;
      if (urlOrigin === baseUrl || urlOrigin === NEXT_PUBLIC_KEYCLOAK_URL)
        return url;

      return baseUrl;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
