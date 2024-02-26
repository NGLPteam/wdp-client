/** This context is for wrapping all app wide contexts */

import { graphql } from "relay-runtime";
import { useAuthenticatedQuery } from "@wdp/lib/api/hooks";
import { GlobalContextProvider } from "./GlobalContext";
import { PageContextProvider, ViewerContextProvider } from "contexts";
import { AppContextProviderQuery as Query } from "@/relay/AppContextProviderQuery.graphql";

const AppContextProvider = ({ children }: Props) => {
  const { data } = useAuthenticatedQuery<Query>(query);

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
