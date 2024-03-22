"use client";

/** This context is for wrapping all app wide contexts */
import { useMemo } from "react";
import { Provider as ReakitSSRProvider } from "reakit";
import { PageContextProvider } from "@wdp/lib/api/contexts/PageContext";
import { ThemeProvider } from "styled-components";
import { graphql } from "react-relay";
import { useAuthenticatedQuery } from "@wdp/lib/api/hooks";
import { AppContextProviderQuery as Query } from "@/relay/AppContextProviderQuery.graphql";
import { ViewerContextProvider } from "./ViewerContext";
import { GlobalContextProvider } from "./GlobalContext";

/** Wraps the app with all necessary providers
 * ReakitSSRProvider - Reakit SSR support
 * ViewerContextProvider - Information about the logged in user
 * PageContextProvider - page loading states, etc
 */
const AppContextProvider = ({ children }: Props) => {
  const data = useAuthenticatedQuery<Query>(query);

  const theme = useMemo(() => data?.globalConfiguration?.theme, [data]);

  return (
    <>
      <ThemeProvider
        theme={{
          fontStyle: theme?.font,
          colorStyle: theme?.color,
        }}
      >
        <ReakitSSRProvider>
          <GlobalContextProvider data={data}>
            <ViewerContextProvider>
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
