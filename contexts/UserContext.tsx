import React, { createContext, useMemo } from "react";
import { graphql } from "react-relay";
import { UserContextQuery } from "__generated__/UserContextQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";

const initialState = {
  allowedActions: null,
};

const UserContext = createContext<UserContextProps | null>(null);

function UserContextProvider({ children }: Props) {
  const { data } = useAuthenticatedQuery<UserContextQuery>(query);

  const viewer = useMemo(() => (data?.viewer ? data?.viewer : initialState), [
    data,
  ]);

  return (
    <UserContext.Provider value={{ ...viewer }}>
      {children}
    </UserContext.Provider>
  );
}

interface UserContextProps {
  allowedActions: readonly string[] | null;
}

interface Props {
  children: React.ReactNode;
}

export default UserContext;

export { UserContextProvider };

const query = graphql`
  query UserContextQuery {
    viewer {
      name
      allowedActions
    }
  }
`;
