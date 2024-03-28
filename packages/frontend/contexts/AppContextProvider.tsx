/** This context is for wrapping all app wide contexts */
import { Suspense } from "react";
import { graphql } from "relay-runtime";
import fetchQuery from "@/lib/relay/fetchQuery";
import { AppContextProviderQuery as Query } from "@/relay/AppContextProviderQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { GlobalContextProvider } from "./GlobalContext";

/** Wraps the app with all necessary providers
 * ReakitSSRProvider - Reakit SSR support
 * ViewerContextProvider - Information about the logged in user
 * PageContextProvider - page loading states, etc
 */
const AppContextProvider = async ({ children }: Props) => {
  const { data, records } = await fetchQuery<Query>(query, {});

  const theme = data?.globalConfiguration?.theme;

  // console.log("app context");
  // console.log({ data });
  //
  // console.log(data.globalConfiguration.__fragmentOwner);

  return data ? (
    <>
      <GlobalContextProvider data={data}>
        {/*<ViewerContextProvider data={data?.viewer}>*/}
        <UpdateClientEnvironment records={records}>
          <Suspense>{children}</Suspense>
        </UpdateClientEnvironment>
        {/*</ViewerContextProvider>*/}
      </GlobalContextProvider>
    </>
  ) : null;
};

interface Props {
  children: React.ReactNode;
}

export default AppContextProvider;

const query = graphql`
  query AppContextProviderQuery {
    communities {
      nodes {
        title
      }
    }
    ...GlobalContextFragment
    ...CommunityPickerFragment
    ...AppHeaderFragment
    ...AppFooterFragment
    globalConfiguration {
      ...InstallationNameFragment
      ...BreadcrumbsBarGlobalFragment
      theme {
        color
        font
      }
    }
  }
`;
