/** This context is for wrapping all app wide contexts */

import { graphql } from "react-relay";
import { useAuthenticatedQuery } from "@wdp/lib/api/hooks";
import { PageContextProvider, ViewerContextProvider } from "contexts";
import { AppContextProviderQuery as Query } from "@/relay/AppContextProviderQuery.graphql";
import { GlobalContextProvider } from "./GlobalContext";

const AppContextProvider = ({ children }: Props) => {
  const data = useAuthenticatedQuery<Query>(query);

  return (
    <GlobalContextProvider data={data}>
      <ViewerContextProvider data={data}>
        <PageContextProvider>{children}</PageContextProvider>
      </ViewerContextProvider>
    </GlobalContextProvider>
  );
};

interface Props {
  children: React.ReactNode;
}

export default AppContextProvider;

const query = graphql`
  query AppContextProviderQuery {
    ...GlobalContextFragment
    ...ViewerContextFragment
  }
`;
