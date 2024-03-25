"use client";

import { graphql } from "react-relay";
import { usePathname } from "next/navigation";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import CommunityNavBar from "components/composed/community/CommunityNavBar";
import { updateI18n } from "i18n";
import { AppLayoutCommunityFragment$key } from "@/relay/AppLayoutCommunityFragment.graphql";
import { AppLayoutEntityFragment$key } from "@/relay/AppLayoutEntityFragment.graphql";
import { AppBody } from "..";

export default function AppLayout({
  communityData,
  entityData,
  children,
}: Props) {
  updateI18n("en");

  const community = useMaybeFragment(fragment, communityData);

  const entity = useMaybeFragment(entityFragment, entityData);

  const pathRegEx = /^\/communities\/[A-Za-z0-9]{32}$/;

  const isCommunityRoot = pathRegEx.test(usePathname());

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
