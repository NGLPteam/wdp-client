import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBody } from "../../../global";
import CommunityName from "../CommunityName";
import CommunityCondensedNav from "../CommunityCondensedNav";
import { CommunityChildLayoutFragment$key } from "@/relay/CommunityChildLayoutFragment.graphql";
import { CommunityChildLayoutAppFragment$key } from "@/relay/CommunityChildLayoutAppFragment.graphql";

export default function CommunityChildLayout({
  children,
  data,
  communityData,
}: Props) {
  const app = useMaybeFragment(appFragment, data);
  const community = useMaybeFragment(fragment, communityData);

  return (
    <AppBody
      data={app}
      nameComponent={community ? <CommunityName data={community} /> : undefined}
      headerNavComponent={
        app ? (
          <CommunityCondensedNav data={app} communityData={community} />
        ) : undefined
      }
    >
      {children}
    </AppBody>
  );
}

interface Props {
  children: React.ReactNode;
  data?: CommunityChildLayoutAppFragment$key | null;
  communityData?: CommunityChildLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityChildLayoutFragment on Community {
    ...CommunityNameFragment
    ...CommunityCondensedNavFragment
  }
`;

const appFragment = graphql`
  fragment CommunityChildLayoutAppFragment on Query {
    ...CommunityCondensedNavAppFragment
    ...AppBodyFragment
  }
`;
