import React from "react";
import { graphql } from "react-relay";
import type { itemsSlugContributorsPagesQuery as Query } from "@/relay/itemsSlugContributorsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

import ContributorLayoutQuery from "components/composed/contributor/ContributorLayoutQuery";
import ItemContributionList from "components/composed/contribution/ItemContributionList";

function ContributorItemContributions({ data }: Props) {
  return (
    <ItemContributionList<Query>
      data={data?.contributor?.itemContributions}
      headerStyle="secondary"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <ContributorLayoutQuery<Query, Props> query={query} {...props} />;
};
ContributorItemContributions.getLayout = getLayout;

export default ContributorItemContributions;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query itemsSlugContributorsPagesQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
      __typename
      ...ContributorLayoutQueryFragment
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
