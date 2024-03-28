"use client";

import { useContext } from "react";
import { RecordSource } from "relay-runtime";
import { ReactRelayContext } from "react-relay";
import { Environment } from "relay-runtime/lib/store/RelayStoreTypes";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  children: React.ReactNode;
  records: Record<string, any>;
};

export default function UpdateClientEnvironment({ children, records }: Props) {
  const value = useContext(ReactRelayContext) ?? {};

  const { environment } = value as { environment: Environment };

  const source = new RecordSource(records);

  if (environment) {
    const store = environment.getStore();

    store.publish(source);
  }
  return <>{children}</>;
}
