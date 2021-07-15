/** This context is for wrapping all app wide contexts */
import React from "react";
import {
  RouterContextProvider,
  ViewerContextProvider,
  GlobalContextProvider,
} from "contexts";

const AppContextProvider = ({ children }: Props) => {
  return (
    <GlobalContextProvider>
      <RouterContextProvider>
        <ViewerContextProvider>{children}</ViewerContextProvider>
      </RouterContextProvider>
    </GlobalContextProvider>
  );
};

interface Props {
  children: React.ReactNode;
}

export default AppContextProvider;
