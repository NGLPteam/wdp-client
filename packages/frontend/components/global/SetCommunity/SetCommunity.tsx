"use client";

import { PropsWithChildren, useContext, useEffect } from "react";
import { graphql, useFragment } from "react-relay";
import { SetCommunityFragment$key } from "@/relay/SetCommunityFragment.graphql";
import { SetCommunityContext } from "@/contexts/CommunityContext";

type Props = PropsWithChildren & {
  data?: SetCommunityFragment$key | null;
};

export default function SetCommunity({ data, children }: Props) {
  const community = useFragment(fragment, data);
  const setCommunity = useContext(SetCommunityContext);

  useEffect(() => {
    if (setCommunity) setCommunity(community ?? null);
  }, [community, setCommunity]);

  return children;
}

const fragment = graphql`
  fragment SetCommunityFragment on Community {
    ...CommunityContextFragment
  }
`;
