/** This context is for wrapping all app wide contexts */
import React from "react";
import { RouterContextProvider, ViewerContextProvider } from "contexts";

const AppContextProvider = ({ children }: Props) => {
  return (
    <RouterContextProvider>
      <ViewerContextProvider>{children}</ViewerContextProvider>
    </RouterContextProvider>
  );
};

interface Props {
  children: React.ReactNode;
}

export default AppContextProvider;
