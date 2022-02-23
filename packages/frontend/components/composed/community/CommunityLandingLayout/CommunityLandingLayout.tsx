import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import CommunityHero from "../CommunityHero";
import { CommunityLandingLayoutFragment$key } from "@/relay/CommunityLandingLayoutFragment.graphql";
import FeaturedJournals from "components/composed/journal/FeaturedJournals";
import FeaturedCollectionsGrid from "components/composed/collections/FeaturedCollectionsGrid";
import ResearchUnitsList from "components/composed/unit/UnitList";
import FeaturedIssue from "components/composed/journal/FeaturedIssue";

export default function CommunityLayout({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  return (
    <>
      <CommunityHero data={community} />
      <FeaturedJournals data={community?.featuredJournals} />
      {community?.featuredSeries && (
        <FeaturedCollectionsGrid data={community?.featuredSeries} />
      )}
      {community?.descendants && (
        <ResearchUnitsList data={community?.descendants} />
      )}
      {community?.featuredIssue && (
        <FeaturedIssue data={community.featuredIssue.entity} />
      )}
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

    featuredSeries: schemaProperty(fullPath: "featured.series") {
      ...FeaturedCollectionsGridFragment
    }

    featuredIssue: schemaProperty(fullPath: "featured.issue") {
      ... on EntityProperty {
        entity {
          ...FeaturedIssueFragment
        }
      }
    }

    descendants(schema: "nglp:unit", order: TITLE_ASCENDING) {
      ...UnitListFragment
    }
  }
`;
