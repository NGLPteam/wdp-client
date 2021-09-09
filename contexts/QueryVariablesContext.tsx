import React, { createContext } from "react";
import type { OperationType } from "relay-runtime";

interface VariablesContextType {
  queryVariables?: OperationType["variables"];
  setQueryVariables?: React.Dispatch<
    React.SetStateAction<OperationType["variables"]>
  >;
}

const QueryVariablesContext = createContext<VariablesContextType>({});

export default QueryVariablesContext;
