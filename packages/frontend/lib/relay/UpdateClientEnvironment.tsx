"use client";

import { useContext } from "react";
import { RecordSource } from "relay-runtime";
import { ReactRelayContext } from "react-relay";
import { Environment } from "relay-runtime/lib/store/RelayStoreTypes";

type Props = {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
