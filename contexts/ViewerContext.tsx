import React, { createContext, useMemo } from "react";
import { graphql } from "react-relay";
import { ViewerContextQuery } from "__generated__/ViewerContextQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";

const initialState = {
  allowedActions: [],
};

const ViewerContext = createContext<ViewerContextProps>(initialState);

function ViewerContextProvider({ children }: Props) {
  const { data } = useAuthenticatedQuery<ViewerContextQuery>(query);

  const viewer = useMemo(() => (data?.viewer ? data?.viewer : initialState), [
    data,
  ]);

  return (
    <ViewerContext.Provider value={{ ...viewer }}>
      {children}
    </ViewerContext.Provider>
  );
}

interface ViewerContextProps {
  name?: string;
  allowedActions: readonly string[];
}

interface Props {
  children: React.ReactNode;
}

export default ViewerContext;

export { ViewerContextProvider };

const query = graphql`
  query ViewerContextQuery {
    viewer {
      name
      allowedActions
    }
  }
`;
