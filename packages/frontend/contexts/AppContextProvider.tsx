/** This context is for wrapping all app wide contexts */
import React from "react";
import { Provider as ReakitSSRProvider } from "reakit";
import { PageContextProvider } from "@wdp/lib/api/contexts/PageContext";
import { ViewerContextProvider } from "./ViewerContext";

/** Wraps the app with all necessary providers
 * ReakitSSRProvider - Reakit SSR support
 * ViewerContextProvider - Information about the logged in user
 * PageContextProvider - page loading states, etc
 */
const AppContextProvider = ({ children }: Props) => {
  return (
    <ReakitSSRProvider>
      <ViewerContextProvider>
        <PageContextProvider>{children}</PageContextProvider>
      </ViewerContextProvider>
    </ReakitSSRProvider>
  );
};

interface Props {
  children: React.ReactNode;
}

export default AppContextProvider;
