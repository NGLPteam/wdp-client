"use client";

import { createContext } from "react";
import { graphql, useFragment } from "react-relay";
import {
  GlobalContextFragment$data,
  GlobalContextFragment$key,
} from "@/relay/GlobalContextFragment.graphql";

const GlobalContext = createContext<
  GlobalContextFragment$data | undefined | null
>(null);

function GlobalContextProvider({ children, data }: Props) {
  const siteData = useFragment(fragment, data);

  return (
    <GlobalContext.Provider value={siteData}>{children}</GlobalContext.Provider>
  );
}

interface Props {
  children: React.ReactNode;
  data?: GlobalContextFragment$key | null;
}

export default GlobalContext;

export { GlobalContextProvider };

const fragment = graphql`
  fragment GlobalContextFragment on Query {
    globalConfiguration {
      ...InstallationNameFragment
      ...BreadcrumbsBarGlobalFragment
    }
    ...CommunityPickerFragment
    ...AppHeaderFragment
    ...AppFooterFragment
  }
`;
