"use client";

import { useRef, ReactNode } from "react";
import { useLatest } from "@castiron/hooks";
import { useSession } from "next-auth/react";
import { RelayEnvironmentProvider as RelayProvider } from "react-relay";
import {
  RecordMap,
  Environment,
} from "relay-runtime/lib/store/RelayStoreTypes";
import { getCurrentEnvironment } from "./environment";

export default function RelayEnvironmentProvider(props: {
  children: React.ReactNode;
  initialRecords?: RecordMap;
  // eslint-disable-next-line no-undef
}): JSX.Element {
  const session = useSession();

  const sessionRef = useLatest(session?.data || undefined);

  const env = useRef<Environment>(
    getCurrentEnvironment({
      sessionToken: sessionRef.current?.accessToken,
    }),
  );

  return (
    <RelayProvider environment={env?.current}>
      {props.children as ReactNode}
    </RelayProvider>
  );
}
