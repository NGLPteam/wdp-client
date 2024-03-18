import React from "react";

interface QueryStateContextType {
  completed: boolean;
  loading: boolean;
}

const QueryStateContext = React.createContext<QueryStateContextType>({
  completed: false,
  loading: false,
});

export default QueryStateContext;
