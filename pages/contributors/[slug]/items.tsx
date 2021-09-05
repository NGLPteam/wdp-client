import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { itemsSlugContributorsPagesQuery as Query } from "@/relay/itemsSlugContributorsPagesQuery.graphql";

import ContributorLayout from "components/composed/contributor/ContributorLayout";
import ItemContributionList from "components/composed/contribution/ItemContributionList";
import ErrorPage from "next/error";

function ContributorItemContributions() {
  const queryVars = useBaseListQueryVars();
  const contributorSlug = useRouteSlug();
  if (!contributorSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, contributorSlug }}
    >
      {({ data }) => (
        <ContributorLayout data={data?.contributor}>
          <ItemContributionList<Query>
            data={data?.contributor?.itemContributions}
          />
        </ContributorLayout>
      )}
    </QueryWrapper>
  );
}

export default ContributorItemContributions;

const query = graphql`
  query itemsSlugContributorsPagesQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
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
