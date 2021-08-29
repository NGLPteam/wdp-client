import React from "react";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { Page } from "types/page";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug } from "hooks/useRouteSlug";
import { itemsSlugContributorsPagesQuery as Query } from "@/relay/itemsSlugContributorsPagesQuery.graphql";
import ItemContributionList from "components/composed/contributions/ItemContributionList";

const ContributorItemContributions: Page = () => {
  const slug = useRouteSlug();

  // TODO: 404 here.
  if (!slug) {
    return null;
  }

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => {
        if (!data || !data.contributor) return null;
        return (
          <ContributorLayout data={data.contributor}>
            {data.contributor.itemContributions && (
              <ItemContributionList<Query>
                data={data.contributor.itemContributions}
              />
            )}
          </ContributorLayout>
        );
      }}
    </QueryWrapper>
  );
};

export default ContributorItemContributions;

const query = graphql`
  query itemsSlugContributorsPagesQuery($slug: Slug!) {
    contributor(slug: $slug) {
      __typename
      ...ContributorLayoutFragment
      ... on OrganizationContributor {
        itemContributions {
          ...ItemContributionListFragment
        }
      }
      ... on PersonContributor {
        itemContributions {
          ...ItemContributionListFragment
        }
      }
    }
  }
`;
