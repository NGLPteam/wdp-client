import type { KeycloakInstance } from "keycloak-js";

export interface KeycloakRef {
  current?: KeycloakInstance;
}
