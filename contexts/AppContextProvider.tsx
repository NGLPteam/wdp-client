/** This context is for wrapping all app wide contexts */
import React from "react";
import { ViewerContextProvider } from "contexts";

const AppContextProvider = ({ children }: Props) => {
  return <ViewerContextProvider>{children}</ViewerContextProvider>;
};

interface Props {
  children: React.ReactNode;
}

export default AppContextProvider;
