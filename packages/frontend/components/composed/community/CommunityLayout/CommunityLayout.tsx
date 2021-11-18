import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBody } from "../../../global";
import CommunityName from "../CommunityName";
import CommunityNav from "../CommunityNav";
import { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";

export default function CommunityLayout({ children, data }: Props) {
  const appData = useMaybeFragment(fragment, data);

  return (
    <AppBody
      data={appData}
      nameComponent={
        appData ? <CommunityName data={appData.community} /> : undefined
      }
    >
      {appData && <CommunityNav data={appData.community} />}
      {children}
    </AppBody>
  );
}

interface Props {
  children: React.ReactNode;
  data?: CommunityLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityLayoutFragment on Query {
    community(slug: $slug) {
      ...CommunityNameFragment
      ...CommunityNavFragment
    }
    ...AppBodyFragment
  }
`;
