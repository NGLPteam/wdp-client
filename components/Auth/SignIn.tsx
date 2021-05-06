import React, { useCallback } from "react";
import type { KeycloakInstance } from "keycloak-js";
import { useKeycloak } from "@react-keycloak/ssr";
import { useVisibleToUnauthenticated } from "hooks/useIsAuthenticated";

export default function SignIn() {
  const { keycloak } = useKeycloak<KeycloakInstance>();
  const visible = useVisibleToUnauthenticated();

  const signIn = useCallback(() => {
    keycloak.login();
  }, [keycloak]);

  if (!visible) {
    return null;
  }

  return <button onClick={signIn}>Sign In</button>;
}
