import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import CommunityNav from "../CommunityNavBar";
import CommunityHTMLHead from "../CommunityHTMLHead";
import { RouteHelper } from "routes";
import { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { CommunityLayoutAppFragment$key } from "@/relay/CommunityLayoutAppFragment.graphql";
import AppLayout from "components/global/AppLayout";

export default function CommunityLayout({
  children,
  data,
  communityData,
}: Props) {
  const appData = useMaybeFragment(appFragment, data);
  const community = useMaybeFragment(fragment, communityData);
  const activeRoute = RouteHelper.activeRoute();

  const isCommunityRoot = useMemo(() => {
    const routeName = activeRoute?.name;
    return routeName
      ? routeName.includes("community") && !routeName.includes("search")
      : false;
  }, [activeRoute]);

  return appData ? (
    <>
      <AppLayout data={appData} communityData={community}>
        {community && <CommunityHTMLHead data={community} />}
        {community && isCommunityRoot && <CommunityNav data={community} />}
        {children}
      </AppLayout>
    </>
  ) : null;
}

interface Props {
  children: React.ReactNode;
  data?: CommunityLayoutAppFragment$key | null;
  communityData?: CommunityLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityLayoutFragment on Community {
    ...CommunityHTMLHeadFragment
    ...CommunityNavBarFragment
    ...AppLayoutCommunityFragment
  }
`;

const appFragment = graphql`
  fragment CommunityLayoutAppFragment on Query {
    ...AppLayoutFragment
  }
`;
