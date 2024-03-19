import { useKeycloak } from "@react-keycloak/ssr";
import { RelayEnvironmentProvider } from "react-relay";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import useEnvironment from "../app/initialEnvironment";
import { useLatest } from "../hooks";
import type { KeycloakInstance } from "keycloak-js";

export default function KeycloakRelayProvider({
  children,
  records,
  isAdmin,
}: KeycloakRelayProps & { isAdmin?: boolean }) {
  const { keycloak } = useKeycloak<KeycloakInstance>();

  const keycloakRef = useLatest(keycloak);

  const env = useEnvironment(keycloakRef, records, isAdmin);

  return (
    <RelayEnvironmentProvider environment={env}>
      {children}
    </RelayEnvironmentProvider>
  );
}

interface KeycloakRelayProps {
  children: React.ReactNode;
  records?: RecordMap;
}
