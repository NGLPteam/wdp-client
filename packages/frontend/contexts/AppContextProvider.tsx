/** This context is for wrapping all app wide contexts */
import React, { useMemo } from "react";
import { Provider as ReakitSSRProvider } from "reakit";
import { PageContextProvider } from "@wdp/lib/api/contexts/PageContext";
import { ThemeProvider } from "styled-components";
import { graphql } from "react-relay";
import { useAuthenticatedQuery } from "@wdp/lib/api/hooks";
import { ViewerContextProvider } from "./ViewerContext";
import { GlobalContextProvider } from "./GlobalContext";
import GlobalStyles from "theme";
import { AppContextProviderQuery as Query } from "@/relay/AppContextProviderQuery.graphql";
import { AppContextProviderViewerQuery as ViewerQuery } from "@/relay/AppContextProviderViewerQuery.graphql";
import { LoadingPage } from "components/atomic";

/** Wraps the app with all necessary providers
 * ReakitSSRProvider - Reakit SSR support
 * ViewerContextProvider - Information about the logged in user
 * PageContextProvider - page loading states, etc
 */
const AppContextProvider = ({ children }: Props) => {
  const { data, isLoading } = useAuthenticatedQuery<Query>(query);

  const { data: viewerData } = useAuthenticatedQuery<ViewerQuery>(viewerQuery);

  const theme = useMemo(() => data?.globalConfiguration?.theme, [data]);

  return (
    <>
      {isLoading && <LoadingPage />}
      <ThemeProvider
        theme={{
          fontStyle: theme?.font,
          colorStyle: theme?.color,
        }}
      >
        <GlobalStyles />
        <ReakitSSRProvider>
          <GlobalContextProvider data={data}>
            <ViewerContextProvider data={viewerData}>
              <PageContextProvider>{children}</PageContextProvider>
            </ViewerContextProvider>
          </GlobalContextProvider>
        </ReakitSSRProvider>
      </ThemeProvider>
    </>
  );
};

interface Props {
  children: React.ReactNode;
}

export default AppContextProvider;

const query = graphql`
  query AppContextProviderQuery {
    ...GlobalContextFragment
    globalConfiguration {
      theme {
        color
        font
      }
    }
  }
`;

// If the user isn't logged in, this query will return an error
const viewerQuery = graphql`
  query AppContextProviderViewerQuery {
    ...ViewerContextFragment
  }
`;
