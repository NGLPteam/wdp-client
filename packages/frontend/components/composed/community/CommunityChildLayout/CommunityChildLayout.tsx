import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBody } from "../../../global";
import CommunityName from "../CommunityName";
import CommunityCondensedNav from "../CommunityCondensedNav";
import { CommunityChildLayoutFragment$key } from "@/relay/CommunityChildLayoutFragment.graphql";

export default function CommunityChildLayout({ children, data }: Props) {
  const appData = useMaybeFragment(fragment, data);

  return (
    <AppBody
      data={appData}
      nameComponent={
        appData ? <CommunityName data={appData.community} /> : undefined
      }
      headerNavComponent={
        appData ? <CommunityCondensedNav data={appData} /> : undefined
      }
    >
      {children}
    </AppBody>
  );
}

interface Props {
  children: React.ReactNode;
  data?: CommunityChildLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityChildLayoutFragment on Query {
    community(slug: $slug) {
      ...CommunityNameFragment
    }
    ...CommunityCondensedNavFragment
    ...AppBodyFragment
  }
`;
