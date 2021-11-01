/** This context is for wrapping all app wide contexts */
import React from "react";
import { PageContextProvider, ViewerContextProvider } from "contexts";

const AppContextProvider = ({ children }: Props) => {
  return (
    <ViewerContextProvider>
      <PageContextProvider>{children}</PageContextProvider>
    </ViewerContextProvider>
  );
};

interface Props {
  children: React.ReactNode;
}

export default AppContextProvider;
