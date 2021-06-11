import React, { useCallback } from "react";
import type { KeycloakInstance } from "keycloak-js";
import { useKeycloak } from "@react-keycloak/ssr";
import { useVisibleToAuthenticated } from "hooks/useIsAuthenticated";

export default function SignOut() {
  const { keycloak } = useKeycloak<KeycloakInstance>();

  const visible = useVisibleToAuthenticated();

  const signOut = useCallback(() => keycloak.logout(), [keycloak]);

  if (!visible) {
    return null;
  }

  return <button color="inherit" onClick={signOut}>Sign Out</button>;
}