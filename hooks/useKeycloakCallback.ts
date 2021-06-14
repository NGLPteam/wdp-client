import { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/ssr";

import type { KeycloakInstance } from "keycloak-js";

export default function useKeycloakCallback(
  name: string,
  callback: () => void
): void {
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  useEffect(() => {
    const originalImplementation = keycloak[name];

    keycloak[name] = () => {
      if (typeof originalImplementation === "function") {
        originalImplementation();
      }

      callback();
    };

    return () => {
      keycloak[name] = originalImplementation;
    };
  }, [name, callback, keycloak, initialized]);
}

export function useOnAuthRefreshSuccess(callback: () => void): void {
  useKeycloakCallback("onAuthRefreshSuccess", callback);
}
