import React from "react";

interface QueryStateContextType {
  started: boolean;
  loading: boolean;
}

const QueryStateContext = React.createContext<QueryStateContextType>({
  started: false,
  loading: false,
});

export default QueryStateContext;
