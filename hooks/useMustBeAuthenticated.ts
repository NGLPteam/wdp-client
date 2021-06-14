import { useEffect } from "react";
import { useRouter } from "next/router";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance } from "keycloak-js";

export default function useMustBeAuthenticated() {
  const { keycloak, initialized } = useKeycloak<KeycloakInstance>();

  const router = useRouter();

  useEffect(
    function () {
      if (initialized && !keycloak.authenticated) {
        router.push("/sign_in");
      }
    },
    [initialized, keycloak, router]
  );
}
