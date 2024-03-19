import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { RouteHelper } from "routes";
import CommunityNavBar from "components/composed/community/CommunityNavBar";
import { AppLayoutCommunityFragment$key } from "@/relay/AppLayoutCommunityFragment.graphql";
import { AppLayoutEntityFragment$key } from "@/relay/AppLayoutEntityFragment.graphql";
import { AppBody } from "..";

export default function AppLayout({
  communityData,
  entityData,
  children,
}: Props) {
  const community = useMaybeFragment(fragment, communityData);

  const entity = useMaybeFragment(entityFragment, entityData);

  const isCommunityRoot = RouteHelper.isRouteNameFuzzyActive("community");

  return (
    <AppBody communityData={community} entityData={entity}>
      {isCommunityRoot && (
        <CommunityNavBar data={community} entityData={entity} />
      )}
      {children}
    </AppBody>
  );
}

interface Props {
  communityData?: AppLayoutCommunityFragment$key | null;
  entityData?: AppLayoutEntityFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment AppLayoutCommunityFragment on Community {
    ...CommunityNavBarFragment
    ...AppBodyCommunityFragment
  }
`;

const entityFragment = graphql`
  fragment AppLayoutEntityFragment on Entity {
    ...CommunityNavBarEntityFragment
    ...AppBodyEntityFragment
  }
`;
