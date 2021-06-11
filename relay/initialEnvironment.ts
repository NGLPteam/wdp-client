import { Store, RecordSource, Environment } from "relay-runtime";
import "regenerator-runtime/runtime";
import { DocumentContext } from "next/document";
import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware,
  retryMiddleware,
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
        const response = await next(req);

        return response;
      } catch (err) {
        if (err?.res?.status === 401) {
          ctx.res.writeHead(302, { Location: "/sign_in" });
          ctx.res.end();
        } else {
          throw err;
        }
      }
    },
    urlMiddleware({
      url: process.env.NEXT_PUBLIC_API_URL,
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
      token: (req) => {
        const { token } = ssrCookies.getTokens();

        if (token) {
          return token;
        }

        return null;
      },
      tokenRefreshPromise: async (req) => null,
    }),
  ]);

  return new Environment({
    network,
    store: new Store(new RecordSource()),
  });
}
