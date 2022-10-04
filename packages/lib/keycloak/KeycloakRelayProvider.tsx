import { useMemo } from "react";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance } from "keycloak-js";
import { RelayEnvironmentProvider } from "relay-hooks";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import environment from "../app/environment";
import { useLatest } from "../hooks";

export default function KeycloakRelayProvider({
  children,
  records,
  isAdmin,
}: KeycloakRelayProps & { isAdmin?: boolean }) {
  const { keycloak } = useKeycloak<KeycloakInstance>();

  const keycloakRef = useLatest(keycloak);

  const env = useMemo(() => {
    return environment(keycloakRef, records, isAdmin);
  }, [keycloakRef, records]);

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
