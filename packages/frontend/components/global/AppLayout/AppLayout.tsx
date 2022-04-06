import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { AppBody } from "..";
import CommunityHTMLHead from "components/composed/community/CommunityHTMLHead";
import { RouteHelper } from "routes";
import { AppLayoutCommunityFragment$key } from "@/relay/AppLayoutCommunityFragment.graphql";
import CommunityNavBar from "components/composed/community/CommunityNavBar";
import { LoadingBlock } from "components/atomic";

export default function AppLayout({ communityData, children }: Props) {
  const community = useMaybeFragment(fragment, communityData);

  const { loading } = usePageContext();

  const isCommunityRoot = RouteHelper.isRouteNameFuzzyActive("community");

  return (
    <AppBody communityData={community}>
      <CommunityHTMLHead data={community} />
      {isCommunityRoot && <CommunityNavBar data={community} />}
      {loading ? <LoadingBlock /> : children}
    </AppBody>
  );
}

interface Props {
  communityData?: AppLayoutCommunityFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment AppLayoutCommunityFragment on Community {
    ...CommunityHTMLHeadFragment
    ...CommunityNavBarFragment
    ...AppBodyCommunityFragment
  }
`;
