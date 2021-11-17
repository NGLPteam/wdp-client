/** This context is for wrapping all app wide contexts */
import React from "react";
import { Provider as ReakitSSRProvider } from "reakit";
import { PageContextProvider } from "@wdp/lib/api/contexts/PageContext";
import { RouterContextProvider } from "@wdp/lib/routes";
import { ViewerContextProvider } from "contexts";
import { baseRoutes } from "routes/baseRoutes";

/** Wraps the app with all necessary providers
 * ReakitSSRProvider - Reakit SSR support
 * ViewerContextProvider - Information about the logged in user
 * RouterContextProvider - base routes, active route, etc
 * PageContextProvider - page loading states, etc
 */
const AppContextProvider = ({ children }: Props) => {
  return (
    <ReakitSSRProvider>
      <ViewerContextProvider>
        <RouterContextProvider baseRoutes={baseRoutes}>
          <PageContextProvider>{children}</PageContextProvider>
        </RouterContextProvider>
      </ViewerContextProvider>
    </ReakitSSRProvider>
  );
};

interface Props {
  children: React.ReactNode;
}

export default AppContextProvider;
