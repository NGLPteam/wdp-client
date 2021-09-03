import React from "react";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { Page } from "types/page";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug } from "hooks/useRouteSlug";
import { itemsSlugContributorsPagesQuery as Query } from "@/relay/itemsSlugContributorsPagesQuery.graphql";
import ItemContributionList from "components/composed/contribution/ItemContributionList";

const ContributorItemContributions: Page = () => {
  const slug = useRouteSlug();

  // TODO: 404 here.
  if (!slug) {
    return null;
  }

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => {
        return (
          <ContributorLayout data={data?.contributor || undefined}>
            <ItemContributionList<Query>
              data={data?.contributor?.itemContributions || undefined}
            />
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
