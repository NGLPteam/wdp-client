import React, { createContext } from "react";
import appData from "fixtures/app.data";

const GlobalContext = createContext<GlobalContextProps | null>(null);

function GlobalContextProvider({ children }: Props) {
  return (
    <GlobalContext.Provider value={{ ...appData }}>
      {children}
    </GlobalContext.Provider>
  );
}

interface GlobalContextProps {
  siteInfo: {
    title?: string;
    description?: string;
    provider?: string;
    institution?: string;
  };
  headerData: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigation: Record<string, string | number | any>;
  };
  footerData: {
    about?: string;
    copyright?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigation: Record<string, string | number | any>;
  };
}

interface Props {
  children: React.ReactNode;
}

export default GlobalContext;

export { GlobalContextProvider };
