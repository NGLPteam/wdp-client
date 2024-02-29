import React from "react";

interface QueryStateContextType {
  started: boolean;
  loading: boolean;
  completed: boolean;
}

const QueryStateContext = React.createContext<QueryStateContextType>({
  started: false,
  loading: false,
  completed: false,
});

export default QueryStateContext;
