"use client";

import React, { createContext } from "react";
import { getStaticGlobalContextDataQuery$data } from "@/relay/getStaticGlobalContextDataQuery.graphql";
import { getStaticEntityDataFragment$data } from "@/relay/getStaticEntityDataFragment.graphql";

export type GlobalStaticData = getStaticGlobalContextDataQuery$data;

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
