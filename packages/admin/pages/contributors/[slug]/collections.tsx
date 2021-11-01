import React from "react";
import { graphql } from "react-relay";
import type { collectionsSlugContributorsPagesQuery as Query } from "@/relay/collectionsSlugContributorsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import ContributorLayoutQuery from "components/composed/contributor/ContributorLayoutQuery";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";

function ContributorCollectionContributions({ data }: Props) {
  return (
    <CollectionContributionList<Query>
      data={data?.contributor?.collectionContributions}
      headerStyle="secondary"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <ContributorLayoutQuery<Query, Props> query={query} {...props} />;
};
ContributorCollectionContributions.getLayout = getLayout;

export default ContributorCollectionContributions;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query collectionsSlugContributorsPagesQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
      __typename
      ...ContributorLayoutQueryFragment
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
