import { Environment, RecordSource, Store } from "relay-runtime";
import "regenerator-runtime/runtime";
/* eslint-disable @next/next/no-document-import-in-page */
import { DocumentContext } from "next/document";
/* eslint-enable @next/next/no-document-import-in-page */
import {
  authMiddleware,
  RelayNetworkLayer,
  retryMiddleware,
  urlMiddleware,
} from "react-relay-network-modern/node8";
import { SSRCookies } from "@react-keycloak/ssr";
import RelayServerSSR from "react-relay-network-modern-ssr/lib/server";

type TokenPersistor = ReturnType<typeof SSRCookies>;

export default function buildInitialEnvironment(
  relayServerSSR: RelayServerSSR,
  ssrCookies: TokenPersistor,
  ctx: DocumentContext
) {
  const network = new RelayNetworkLayer([
    relayServerSSR.getMiddleware(),
    (next) => async (req) => {
      try {
        return await next(req);
        /* eslint-disable @typescript-eslint/no-explicit-any */
      } catch (err: any) {
        if (err?.res?.status === 401) {
          ctx?.res?.writeHead(302, { Location: "/sign_in" });
          ctx?.res?.end();
          return Promise.reject(Error("Invalid keycloak token."));
        } else {
          throw err;
        }
      }
      /* eslint-enable @typescript-eslint/no-explicit-any */
    },
    urlMiddleware({
      url: process.env.NEXT_PUBLIC_API_URL || "",
    }),
    retryMiddleware({
      statusCodes(statusCode) {
        if (statusCode === 401) {
          return false;
        }

        return statusCode < 200 || statusCode > 400;
      },
    }),
    authMiddleware({
      allowEmptyToken: true,
      token: () => {
        const { token } = ssrCookies.getTokens();

        if (token) {
          return token;
        }

        return "";
      },
      tokenRefreshPromise: async () => "",
    }),
  ]);

  return new Environment({
    network,
    store: new Store(new RecordSource()),
  });
}
