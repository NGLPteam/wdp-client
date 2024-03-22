"use client";

import { useRef, ReactNode, JSX } from "react";
import { RelayEnvironmentProvider as RelayProvider } from "react-relay";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import buildEnvironment from "@wdp/lib/app/initialEnvironment";

export default function RelayEnvironmentProvider(props: {
  children: React.ReactNode;
  initialRecords?: RecordMap;
}): JSX.Element {
  const env = useRef(buildEnvironment());

  return (
    <RelayProvider environment={env?.current}>
      {props.children as ReactNode}
    </RelayProvider>
  );
}
