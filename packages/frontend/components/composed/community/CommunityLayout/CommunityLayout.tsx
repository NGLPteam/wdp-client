import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBody } from "../../../global";
import CommunityName from "../CommunityName";
import CommunityNav from "../CommunityNavBar";
import CommunityHTMLHead from "../CommunityHTMLHead";
import CommunityCondensedNav from "../CommunityCondensedNav";
import { CommunityLayoutFragment$key } from "@/relay/CommunityLayoutFragment.graphql";
import { CommunityLayoutAppFragment$key } from "@/relay/CommunityLayoutAppFragment.graphql";
import { RouteHelper } from "routes";

export default function CommunityLayout({
  children,
  data,
  communityData,
}: Props) {
  const appData = useMaybeFragment(appFragment, data);
  const community = useMaybeFragment(fragment, communityData);
  const activeRoute = RouteHelper.activeRoute();

  const isCommunityRoot = useMemo(
    () => activeRoute?.name.includes("community"),
    [activeRoute]
  );

  return appData ? (
    <>
      <AppBody
        data={appData}
        nameComponent={
          community ? <CommunityName data={community} /> : undefined
        }
        headerNavComponent={
          appData ? (
            <CommunityCondensedNav
              data={appData}
              communityData={community}
              isCommunityRoot={isCommunityRoot}
            />
          ) : undefined
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
