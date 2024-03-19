import React, { createContext, useCallback, useContext } from "react";
import { useSubscribeToInvalidationState } from "react-relay";
import { RecordSourceSelectorProxy } from "relay-runtime";

interface RelayRecordSubscribeContextProps {
  subscribeIds?: string[];
  invalidateRecords: (store: RecordSourceSelectorProxy) => void;
}

const initialState = {
  subscribeIds: [],
  invalidateRecords: () => null,
};

const RelayRecordSubscribeContext =
  createContext<RelayRecordSubscribeContextProps>(initialState);

export default RelayRecordSubscribeContext;

interface Props {
  children: React.ReactNode;
  subscribeIds: string[];
  refetchQuery: () => void;
}

export function RelayRecordSubscribeProvider({
  children,
  subscribeIds,
  refetchQuery,
}: Props) {
  useSubscribeToInvalidationState(subscribeIds, () => {
    refetchQuery();
  });

  /** Update the store */
  const invalidateRecords = useCallback(
    (store: RecordSourceSelectorProxy) => {
      if (!subscribeIds || subscribeIds.length === 0) return;
      subscribeIds.forEach((id: string) => {
        const record = store.get(id);
        if (record) record.invalidateRecord();
      });
    },
    [subscribeIds],
  );

  return (
    <RelayRecordSubscribeContext.Provider
      value={{ subscribeIds, invalidateRecords }}
    >
      {children}
    </RelayRecordSubscribeContext.Provider>
  );
}

/**
 * Access the subscribe context
 *
 * @returns RelayRecordSubscribeContext state
 */
export const useRelayRecordSubscribeContext = () => {
  const state = useContext(RelayRecordSubscribeContext);
  return state;
};
