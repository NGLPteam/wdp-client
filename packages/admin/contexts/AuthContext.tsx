import React, { createContext } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "hooks";
import { AuthContextFragment$key } from "@/relay/AuthContextFragment.graphql";

const initialState: AuthContextProps = {
  allowedActions: [],
};

const AuthContext = createContext<AuthContextProps>(initialState);

function AuthContextProvider({ children, data }: Props) {
  const authData = useMaybeFragment(fragment, data);

  return (
    <AuthContext.Provider value={{ ...authData }}>
      {children}
    </AuthContext.Provider>
  );
}

interface AuthContextProps {
  allowedActions?: readonly string[];
}

interface Props {
  children: React.ReactNode;
  data?: AuthContextFragment$key | null;
}

export default AuthContext;

export { AuthContextProvider };

const fragment = graphql`
  fragment AuthContextFragment on Entity {
    allowedActions
  }
`;
