import React, { createContext } from "react";
import { getStaticGlobalContextDataQueryResponse } from "@/relay/getStaticGlobalContextDataQuery.graphql";
import { getStaticEntityDataFragment$data } from "@/relay/getStaticEntityDataFragment.graphql";

export type GlobalStaticData = getStaticGlobalContextDataQueryResponse;

type GlobalEntityData = { entityData?: getStaticEntityDataFragment$data };

type GlobalStaticValue = Partial<GlobalStaticData> & GlobalEntityData;

const GlobalStaticContext = createContext<GlobalStaticValue>({});

function GlobalStaticContextProvider({ children, staticData }: Props) {
  return (
    <GlobalStaticContext.Provider value={staticData || {}}>
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
