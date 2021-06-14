import { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/ssr";
import { useRouter } from "next/router";
import { useSetActiveEntity } from "hooks/useGlobalData";

import type { KeycloakInstance } from "keycloak-js";

export default function SignInPage() {
  useSetActiveEntity();
  const { initialized, keycloak } = useKeycloak<KeycloakInstance>();
  const router = useRouter();

  useEffect(
    function () {
      if (!initialized || typeof window === "undefined") {
        return;
      }

      if (keycloak.authenticated) {
        router.push("/");

        return;
      }

      keycloak.login();
    },
    [initialized, keycloak, router]
  );

  return null;
}
