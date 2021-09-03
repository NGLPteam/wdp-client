import React from "react";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { Page } from "types/page";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug } from "hooks/useRouteSlug";
import { collectionsSlugContributorsPagesQuery as Query } from "@/relay/collectionsSlugContributorsPagesQuery.graphql";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";

const ContributorCollectionContributions: Page = () => {
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
            <CollectionContributionList<Query>
              data={data?.contributor?.collectionContributions}
            />
          </ContributorLayout>
        );
      }}
    </QueryWrapper>
  );
};

export default ContributorCollectionContributions;

const query = graphql`
  query collectionsSlugContributorsPagesQuery($slug: Slug!) {
    contributor(slug: $slug) {
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
