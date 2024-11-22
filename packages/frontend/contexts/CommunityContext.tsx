"use client";

import { createContext, type PropsWithChildren } from "react";
import { graphql, useFragment } from "react-relay";
import {
  CommunityContextFragment$key,
  CommunityContextFragment$data,
} from "@/relay/CommunityContextFragment.graphql";

export const CommunityContext = createContext<
  CommunityContextFragment$data | undefined | null
>(null);

export const CommunityContextProvider = ({
  children,
  data,
}: PropsWithChildren & { data?: CommunityContextFragment$key | null }) => {
  const community = useFragment(fragment, data);
  return (
    <CommunityContext.Provider value={community}>
      {children}
    </CommunityContext.Provider>
  );
};

const fragment = graphql`
  fragment CommunityContextFragment on Community {
    ...CommunityNameFragment
    ...CommunityNavListFragment
    ...CommunityPickerCommunityNameFragment
  }
`;
