import React, { createContext } from "react";
import { getStaticGlobalContextDataQueryResponse } from "@/relay/getStaticGlobalContextDataQuery.graphql";

export type GlobalStaticData = getStaticGlobalContextDataQueryResponse;

type GlobalStaticValue = GlobalStaticData | undefined;

const GlobalStaticContext = createContext<GlobalStaticValue>(undefined);

function GlobalStaticContextProvider({ children, staticData }: Props) {
  console.info("global data", staticData);

  return (
    <GlobalStaticContext.Provider value={staticData}>
      {children}
    </GlobalStaticContext.Provider>
  );
}

interface Props {
  children: React.ReactNode;
  staticData?: GlobalStaticData;
}

export default GlobalStaticContext;

export { GlobalStaticContextProvider };
