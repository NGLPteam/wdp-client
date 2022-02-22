import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import CommunityHero from "../CommunityHero";
import { CommunityLandingLayoutFragment$key } from "@/relay/CommunityLandingLayoutFragment.graphql";
import FeaturedJournals from "components/composed/journal/FeaturedJournals";
import FeaturedCollectionsList from "components/composed/collections/FeaturedCollectionsList";
import FeaturedCollectionsGrid from "components/composed/collections/FeaturedCollectionsGrid";
import ResearchUnitsList from "components/composed/unit/UnitList";

export default function CommunityLayout({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  const totalCount = useMemo(
    () => community?.collections?.pageInfo?.totalCount || 0,
    [community]
  );

  return (
    <>
      <CommunityHero data={community} />
      <FeaturedJournals data={community?.featuredJournals} />
      {totalCount > 3 ? (
        <FeaturedCollectionsList data={community?.collections} />
      ) : (
        <FeaturedCollectionsGrid data={community?.collections} />
      )}
      <ResearchUnitsList data={community?.descendants} />
    </>
  );
}

interface Props {
  data?: CommunityLandingLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityLandingLayoutFragment on Community {
    ...CommunityHeroFragment

    featuredJournals: schemaProperty(fullPath: "featured.journals") {
      ...FeaturedJournalsFragment
    }

    collections(
      schema: "default:collection"
      order: RECENT
      page: 1
      perPage: 8
    ) {
      ...FeaturedCollectionsListFragment
      ...FeaturedCollectionsGridFragment
      pageInfo {
        totalCount
      }
    }

    descendants(schema: "nglp:unit", order: TITLE_ASCENDING) {
      ...UnitListFragment
    }
  }
`;
