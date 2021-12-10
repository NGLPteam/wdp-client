import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import CommunityHero from "../CommunityHero";
import { CommunityLandingLayoutFragment$key } from "@/relay/CommunityLandingLayoutFragment.graphql";
import FeaturedJournals from "components/composed/journal/FeaturedJournals";

export default function CommunityLayout({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  return (
    <>
      <CommunityHero data={community} />
      <FeaturedJournals
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
    collections(schema: "nglp:journal", order: RECENT, page: 1, perPage: 5) {
      ...FeaturedJournalsFragment
    }
  }
`;
