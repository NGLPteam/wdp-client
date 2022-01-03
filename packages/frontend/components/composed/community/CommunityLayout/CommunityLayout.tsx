import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBody } from "../../../global";
import CommunityName from "../CommunityName";
import CommunityNav from "../CommunityNavBar";
import CommunityHTMLHead from "../CommunityHTMLHead";
import CommunityCondensedNav from "../CommunityCondensedNav";
import { RouteHelper } from "routes";
import { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { CommunityLayoutAppFragment$key } from "@/relay/CommunityLayoutAppFragment.graphql";

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
      <AppBody
        data={appData}
        nameComponent={
          community ? <CommunityName data={community} /> : undefined
        }
        headerNavComponent={
          <CommunityCondensedNav
            data={appData}
            communityData={community}
            isCommunityRoot={isCommunityRoot}
          />
        }
        footerBackground={isCommunityRoot ? "custom10" : "custom20"}
      >
        {community && <CommunityHTMLHead data={community} />}
        {community && isCommunityRoot && <CommunityNav data={community} />}
        {children}
      </AppBody>
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
    ...CommunityNameFragment
    ...CommunityNavBarFragment
    ...CommunityCondensedNavFragment
  }
`;

const appFragment = graphql`
  fragment CommunityLayoutAppFragment on Query {
    ...AppBodyFragment
    ...CommunityCondensedNavAppFragment
  }
`;
