/* eslint-disable camelcase */
import { useKeycloak } from "@react-keycloak/ssr";

import type { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js";

type ParsedToken = KeycloakTokenParsed & {
  email?: string;

  preferred_username?: string;

  given_name?: string;

  family_name?: string;
};

export default function useHasRole(role: string): boolean | null {
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const parsedToken: ParsedToken | undefined = keycloak?.tokenParsed;

  if (!initialized || typeof keycloak?.hasRealmRole !== "function") {
    return null;
  }

  return keycloak?.hasRealmRole(role);
}

export function useIsAdmin() {
  return useHasRole("global_admin");
}
