import React from "react";

interface QueryStateContext {
  started: boolean;
  loading: boolean;
  completed: boolean;
}

const QueryStateContext = React.createContext<QueryStateContext>({
  started: false,
  loading: false,
  completed: false,
});

export default QueryStateContext;
