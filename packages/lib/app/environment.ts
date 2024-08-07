import "regenerator-runtime/runtime";
import { Store, RecordSource, Environment } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware,
} from "react-relay-network-modern";
import type { KeycloakInstance } from "keycloak-js";

interface KeycloakRef {
  current?: KeycloakInstance;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export default function buildEnvironment(
  keycloakRef?: KeycloakRef,
  records?: RecordMap,
  isAdmin?: boolean,
) {
  const source = new RecordSource(records);

  const store = new Store(source, { queryCacheExpirationTime: 5 * 60 * 1000 });

  const network = new RelayNetworkLayer([
    urlMiddleware({
      url: API_URL,
      headers: isAdmin ? { "X-Analytics-Context": "admin" } : {},
    }),
    authMiddleware({
      allowEmptyToken: true,
      token: () => {
        return keycloakRef?.current?.token || "";
      },
      tokenRefreshPromise: async () => {
        await keycloakRef?.current?.updateToken(86400);

        return keycloakRef?.current?.token || "";
      },
    }),
  ]);

  return new Environment({
    network,
    store,
  });
}
