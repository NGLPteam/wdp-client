import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AppBody } from "..";
import CommunityCondensedNav from "components/composed/community/CommunityCondensedNav";
import CommunityHTMLHead from "components/composed/community/CommunityHTMLHead";
import CommunityName from "components/composed/community/CommunityName";
import CommunityPicker from "components/composed/instance/CommunityPicker";
import { RouteHelper } from "routes";
import { AppLayoutFragment$key } from "@/relay/AppLayoutFragment.graphql";
import { AppLayoutCommunityFragment$key } from "@/relay/AppLayoutCommunityFragment.graphql";

export default function AppLayout({ data, communityData, children }: Props) {
  const appData = useMaybeFragment(fragment, data);

  const community = useMaybeFragment(communityFragment, communityData);

  const activeRoute = RouteHelper.activeRoute();

  const isCommunityRoot = useMemo(() => {
    const routeName = activeRoute?.name;
    return routeName
      ? routeName.includes("community") && !routeName.includes("search")
      : false;
  }, [activeRoute]);

  return appData ? (
    <AppBody
      data={appData}
      nameComponent={community ? <CommunityName data={community} /> : undefined}
      headerNavComponent={
        <CommunityCondensedNav
          data={appData}
          communityData={community}
          isCommunityRoot={isCommunityRoot}
        />
      }
      communityPicker={
        community ? (
          <CommunityPicker data={appData} active={community} />
        ) : (
          <CommunityPicker data={appData} />
        )
      }
    >
      {community && <CommunityHTMLHead data={community} />}
      {children}
    </AppBody>
  ) : null;
}

interface Props {
  data?: AppLayoutFragment$key | null;
  communityData?: AppLayoutCommunityFragment$key | null;
  children: React.ReactNode;
}

const fragment = graphql`
  fragment AppLayoutFragment on Query {
    ...AppBodyFragment
    ...CommunityCondensedNavAppFragment
    ...CommunityPickerFragment
  }
`;

const communityFragment = graphql`
  fragment AppLayoutCommunityFragment on Community {
    ...CommunityHTMLHeadFragment
    ...CommunityNameFragment
    ...CommunityNavBarFragment
    ...CommunityCondensedNavFragment
    ...CommunityPickerActiveFragment
  }
`;
