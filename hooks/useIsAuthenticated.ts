import { useEffect, useState } from "react";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance } from "keycloak-js";

export function useVisibleToAuthenticated(): boolean {
  const [visible, setVisible] = useState<boolean>(false);

  const isAuthenticated = useIsAuthenticated();

  useEffect(
    function () {
      setVisible(isAuthenticated === true);
    },
    [isAuthenticated]
  );

  return visible;
}

export function useVisibleToUnauthenticated(): boolean {
  const [visible, setVisible] = useState<boolean>(false);

  const isAuthenticated = useIsAuthenticated();

  useEffect(
    function () {
      setVisible(isAuthenticated === false);
    },
    [isAuthenticated]
  );

  return visible;
}

export default function useIsAuthenticated(): boolean | null {
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  if (!initialized) {
    // In SSR / loading states we treat null as a specific case
    return null;
  }

  return keycloak.authenticated;
}
