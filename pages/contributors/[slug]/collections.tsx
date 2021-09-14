import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { collectionsSlugContributorsPagesQuery as Query } from "@/relay/collectionsSlugContributorsPagesQuery.graphql";

import ContributorLayout from "components/composed/contributor/ContributorLayout";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import ErrorPage from "next/error";

function ContributorCollectionContributions() {
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
          <CollectionContributionList<Query>
            hideHeader={true}
            data={data?.contributor?.collectionContributions}
            headerStyle="secondary"
          />
        </ContributorLayout>
      )}
    </QueryWrapper>
  );
}

export default ContributorCollectionContributions;

const query = graphql`
  query collectionsSlugContributorsPagesQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
      __typename
      ...ContributorLayoutFragment
      ... on OrganizationContributor {
        collectionContributions {
          ...CollectionContributionListFragment
        }
      }
      ... on PersonContributor {
        collectionContributions {
          ...CollectionContributionListFragment
        }
      }
    }
  }
`;
