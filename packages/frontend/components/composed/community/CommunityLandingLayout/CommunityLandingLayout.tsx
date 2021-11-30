import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import CommunityHero from "../CommunityHero";
import { CommunityLandingLayoutFragment$key } from "@/relay/CommunityLandingLayoutFragment.graphql";
import FeaturedCollections from "components/composed/collection/FeaturedCollections";

export default function CommunityLayout({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  return (
    <>
      <CommunityHero data={community} />
      <FeaturedCollections
        data={community?.collections}
        headerText="Featured Journals"
        buttonText="See All Journals"
        buttonRoute="collection" /* TODO: Update route to collection list */
      />
    </>
  );
}

interface Props {
  data?: CommunityLandingLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityLandingLayoutFragment on Community {
    ...CommunityHeroFragment
    collections(order: RECENT, perPage: 5) {
      ...FeaturedCollectionsFragment
    }
  }
`;
