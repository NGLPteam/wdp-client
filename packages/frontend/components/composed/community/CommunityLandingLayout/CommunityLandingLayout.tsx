import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityHero from "../CommunityHero";
import { CommunityLandingLayoutFragment$key } from "@/relay/CommunityLandingLayoutFragment.graphql";
import FeaturedJournals from "components/composed/journal/FeaturedJournals";
import FeaturedCollectionsGrid from "components/composed/collections/FeaturedCollectionsGrid";
import UnitsList from "components/composed/unit/UnitList";
import FeaturedIssue from "components/composed/journal/FeaturedIssue";

export default function CommunityLayout({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  const slug = useRouteSlug();

  return (
    <>
      <CommunityHero data={community} />
      <FeaturedJournals data={community?.featuredJournals} />
      {community?.featuredSeries && (
        <FeaturedCollectionsGrid
          header="layouts.featured_paper_series_header"
          data={community?.featuredSeries}
          seeAllRoute="community.collections.schema"
          seeAllRouteParams={{ slug: slug || "", schema: "nglp:series" }}
          seeAllText="layouts.see_all_series"
        />
      )}
      {community?.descendants && <UnitsList data={community?.descendants} />}
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
