import type { KeycloakRef } from "../types/keycloak";

export function getGQLHeaders(
  keycloakRef?: KeycloakRef,
  isAdmin?: boolean,
): Record<string, string> {
  const headers: GraphQLHeaders = {
    accept: "application/json",
    authorization: "",
    "content-type": "application/json",
  };

  const token = keycloakRef?.current?.token;

  if (token) {
    headers["authorization"] = `Bearer ${token}`;
  }

  if (isAdmin) {
    headers["X-Analytics-Context"] = "admin";
  }

  return headers;
}

interface GraphQLHeaders extends Record<string, string> {
  accept: string;
  authorization: string;
  "content-type": string;
}
