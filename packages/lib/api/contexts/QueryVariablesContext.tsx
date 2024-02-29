import React, { createContext, useState } from "react";
import type { OperationType, Variables } from "relay-runtime";

interface VariablesContextType {
  queryVariables?: OperationType["variables"];
  setQueryVariables?: React.Dispatch<
    React.SetStateAction<OperationType["variables"]>
  >;
}

const QueryVariablesContext = createContext<VariablesContextType>({});

export default QueryVariablesContext;

export const QueryVariablesContextProvider = ({
  children,
  initialVariables,
}: {
  children: React.ReactNode;
  initialVariables: Variables;
}) => {
  const [queryVariables, setQueryVariables] = useState<Variables>(
    initialVariables ?? {}
  );

  return (
    <QueryVariablesContext.Provider
      value={{ queryVariables, setQueryVariables }}
    >
      {children}
    </QueryVariablesContext.Provider>
  );
};
