import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { itemsSlugContributorsPagesQuery as Query } from "@/relay/itemsSlugContributorsPagesQuery.graphql";

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
  query itemsSlugContributorsPagesQuery(
    $contributorSlug: Slug!
    $order: ContributionOrder
    $page: Int!
  ) {
    contributor(slug: $contributorSlug) {
      __typename
      ...ContributorLayoutQueryFragment
      ... on OrganizationContributor {
        itemContributions(page: $page, perPage: 20, order: $order) {
          ...ItemContributionListFragment
        }
      }
      ... on PersonContributor {
        itemContributions(page: $page, perPage: 20, order: $order) {
          ...ItemContributionListFragment
        }
      }
    }
  }
`;
