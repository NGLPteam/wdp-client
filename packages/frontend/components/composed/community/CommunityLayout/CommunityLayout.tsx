import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBody } from "../../../global";
import CommunityName from "../CommunityName";
import CommunityNav from "../CommunityNavBar";
import { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { CommunityLayoutAppFragment$key } from "@/relay/CommunityLayoutAppFragment.graphql";

export default function CommunityLayout({
  children,
  data,
  communityData,
}: Props) {
  const appData = useMaybeFragment(appFragment, data);
  const community = useMaybeFragment(fragment, communityData);

  return appData ? (
    <AppBody
      data={appData}
      nameComponent={community ? <CommunityName data={community} /> : undefined}
    >
      {community && <CommunityNav data={community} />}
      {children}
    </AppBody>
  ) : null;
}

interface Props {
  children: React.ReactNode;
  data?: CommunityLayoutAppFragment$key | null;
  communityData?: CommunityLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityLayoutFragment on Community {
    ...CommunityNameFragment
    ...CommunityNavBarFragment
  }
`;

const appFragment = graphql`
  fragment CommunityLayoutAppFragment on Query {
    ...AppBodyFragment
  }
`;
