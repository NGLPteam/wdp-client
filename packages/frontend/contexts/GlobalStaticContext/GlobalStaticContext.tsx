import React, { createContext } from "react";
import { getStaticGlobalContextDataQueryResponse } from "@/relay/getStaticGlobalContextDataQuery.graphql";
import { getStaticEntityDataFragment$data } from "@/relay/getStaticEntityDataFragment.graphql";

export type GlobalStaticData = getStaticGlobalContextDataQueryResponse;

type GlobalEntityData = {
  entityData?: getStaticEntityDataFragment$data;
};

type GlobalStaticValue = Partial<GlobalStaticData> & GlobalEntityData;

const GlobalStaticContext = createContext<GlobalStaticValue>({});

function GlobalStaticContextProvider({ children, globalData }: Props) {
  return (
    <GlobalStaticContext.Provider value={globalData || {}}>
      {children}
    </GlobalStaticContext.Provider>
  );
}

interface Props {
  children: React.ReactNode;
  globalData?: GlobalStaticData;
}

export default GlobalStaticContext;

export { GlobalStaticContextProvider };
