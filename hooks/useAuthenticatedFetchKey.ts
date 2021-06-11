import { useMemo } from "react";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance } from "keycloak-js";

/**
 * Used to refetch queries when auth state changes
 *
 * @returns
 */
export default function useAuthenticatedFetchKey(): string | null {
  const { keycloak } = useKeycloak<KeycloakInstance>();

  return useMemo(() => keycloak.idToken, [keycloak.idToken]);
}
