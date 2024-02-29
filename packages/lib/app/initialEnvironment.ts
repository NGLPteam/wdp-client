import { useMemo } from "react";
import { RecordSource } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { Environment } from "react-relay";
import buildEnvironment from "./buildEnvironment";

import type { KeycloakRef } from "../types/keycloak";

let relayEnvironment: Environment;

export default function initEnvironment(
  keycloakRef?: KeycloakRef,
  initialRecords?: RecordMap,
  isAdmin?: boolean,
) {
  // Create a network layer from the fetch function
  const environment =
    relayEnvironment ?? buildEnvironment(keycloakRef, initialRecords, isAdmin);

  // If your page has Next.js data fetching methods that use Relay, the initial records
  // will get hydrated here
  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords));
  }
  // For SSG and SSR always create a new Relay environment
  if (typeof window === "undefined") return environment;
  // Create the Relay environment once in the client
  if (!relayEnvironment) relayEnvironment = environment;

  return relayEnvironment;
}

export function useEnvironment(
  keycloakRef?: KeycloakRef,
  initialRecords?: RecordMap,
  isAdmin?: boolean,
) {
  const store = useMemo(
    () => initEnvironment(keycloakRef, initialRecords, isAdmin),
    [keycloakRef, initialRecords, isAdmin],
  );
  return store;
}
