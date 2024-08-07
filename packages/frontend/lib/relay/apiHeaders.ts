import { getToken } from "@/lib/auth/token";

type TokenContext = "SERVER" | "LOCAL";

// Treat calls with expired tokens as anonymous sessions,
// regardless if we're on the server or client.
const TOKEN_CONTEXT = "SERVER";

export function getGQLHeaders(sessionToken?: string): Record<string, string> {
  const headers: GraphQLHeadersWithAuth = {
    accept: "application/json",
    authorization: "",
    "content-type": "application/json",
    "x-token-context": TOKEN_CONTEXT,
  };

  // We don't want to create a new environment between the server and the client,
  // so we need a way to get the access token after the environment is created.
  let localToken = getToken();

  const token = sessionToken ?? localToken;

  if (token) {
    headers["authorization"] = `Bearer ${token}`;
  }

  return headers;
}

interface GraphQLHeaders extends Record<string, string> {
  accept: string;
  "content-type": string;
}

interface GraphQLHeadersWithAuth extends GraphQLHeaders {
  authorization: string;
  "x-token-context": TokenContext;
}
