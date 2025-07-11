// See https://github.com/Roshanjossey/nextjs-13-relay
import "regenerator-runtime/runtime";
import {
  Network,
  CacheConfig,
  RequestParameters,
  Variables,
  GraphQLResponse,
} from "relay-runtime";
import { getGQLHeaders } from "./apiHeaders";
import { responseCache } from "./environment";

export function getAPIURL(): string {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  throw new Error("Missing process.env.NEXT_PUBLIC_API_URL.");
}

export async function fetchOperation({
  operation,
  variables,
  sessionToken,
  url,
}: {
  operation: RequestParameters;
  variables: Variables;
  sessionToken?: string;
  url?: string;
}) {
  const headers = getGQLHeaders(sessionToken);

  console.log({ url });

  const apiUrl = url ?? new URL(getAPIURL());

  return fetch(apiUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
}

export async function networkFetch(
  request: RequestParameters,
  variables: Variables,
  sessionToken?: string,
  url?: string
): Promise<GraphQLResponse> {
  const resp = await fetchOperation({
    operation: request,
    variables,
    sessionToken,
    url,
  });
  const json = await resp.json();

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if (Array.isArray(json.errors)) {
    console.error(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${
        request.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors
      )}`
    );
  }

  return json;
}

export function createNetwork({
  sessionToken,
  url,
}: {
  sessionToken?: string;
  url?: string;
}) {
  async function fetchResponse(
    params: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig
  ) {
    const isQuery = params.operationKind === "query";
    const cacheKey = params.id ?? params.cacheID;
    const forceFetch = cacheConfig && cacheConfig.force;

    if (responseCache != null && isQuery && !forceFetch) {
      const fromCache = responseCache.get(cacheKey, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }

    return networkFetch(params, variables, sessionToken, url);
  }

  const network = Network.create(fetchResponse);
  return network;
}
