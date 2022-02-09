import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { AppBody } from "..";
import CommunityHTMLHead from "components/composed/community/CommunityHTMLHead";
import { RouteHelper } from "routes";
import { AppLayoutFragment$key } from "@/relay/AppLayoutFragment.graphql";
import { AppLayoutCommunityFragment$key } from "@/relay/AppLayoutCommunityFragment.graphql";
import CommunityNavBar from "components/composed/community/CommunityNavBar";
import { LoadingBlock } from "components/atomic";

export default function AppLayout({ data, communityData, children }: Props) {
  const appData = useMaybeFragment(fragment, data);

  const community = useMaybeFragment(communityFragment, communityData);

  const { loading } = usePageContext();

  const isCommunityRoot = RouteHelper.isRouteNameFuzzyActive("community");

  return (
    <AppBody data={appData} communityData={community}>
      <CommunityHTMLHead data={community} />
      {isCommunityRoot && <CommunityNavBar data={community} />}
      {loading ? <LoadingBlock /> : children}
    </AppBody>
  );
}

interface Props {
  data?: AppLayoutFragment$key | null;
  communityData?: AppLayoutCommunityFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment AppLayoutFragment on Query {
    ...AppBodyFragment
    ...CommunityPickerFragment
  }
`;

const communityFragment = graphql`
  fragment AppLayoutCommunityFragment on Community {
    ...CommunityHTMLHeadFragment
    ...CommunityNavBarFragment
    ...AppBodyCommunityFragment
  }
`;
