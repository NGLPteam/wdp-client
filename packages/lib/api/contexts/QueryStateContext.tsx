import React from "react";

interface QueryStateContext {
  started: boolean;
  loading: boolean;
  completed: boolean;
  retry: () => void;
}

const QueryStateContext = React.createContext<QueryStateContext>({
  started: false,
  loading: false,
  completed: false,
  retry: () => null,
});

export default QueryStateContext;
