import "regenerator-runtime/runtime";
import { Store, RecordSource, Environment, Network } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

import { getGQLHeaders } from "./apiHeaders";

import type {
  FetchFunction,
  RequestParameters,
  Variables,
} from "relay-runtime";
import type { KeycloakRef } from "../types/keycloak";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export default function buildEnvironment(
  keycloakRef?: KeycloakRef,
  records?: RecordMap,
  isAdmin?: Boolean
) {
  const source = new RecordSource(records);

  const store = new Store(source, { queryCacheExpirationTime: 5 * 60 * 1000 });

  const fetchOperation = async (
    operation: RequestParameters,
    variables: Variables
  ) => {
    const headers = getGQLHeaders(keycloakRef, isAdmin);

    return fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const fetchQuery: FetchFunction = async (operation, variables, _, __) => {
    return fetchOperation(operation, variables).then((response) =>
      response.json()
    );
  };

  const network = Network.create(fetchQuery);

  return new Environment({
    network,
    store,
  });
}
