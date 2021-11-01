import React from "react";
import { graphql } from "react-relay";
import type { contributionsManageSlugItemsQuery as Query } from "@/relay/contributionsManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import ItemContributionList from "components/composed/contribution/ItemContributionList";

function ManageContributions({ data }: Props) {
  return (
    <ItemContributionList<Query>
      nameColumn="contributor"
      data={data?.item?.contributions}
      headerStyle="secondary"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      useRouteHeader={false}
      showSidebar
      query={query}
      {...props}
    />
  );
};
ManageContributions.getLayout = getLayout;

export default ManageContributions;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query contributionsManageSlugItemsQuery($itemSlug: Slug!, $page: Int!) {
    item(slug: $itemSlug) {
      ...ItemLayoutQueryFragment
      contributions(page: $page, perPage: 20) {
        ...ItemContributionListFragment
      }
    }
  }
`;
