import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { contributionsManageSlugItemsQuery as Query } from "@/relay/contributionsManageSlugItemsQuery.graphql";

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
      refetchTags={["contributions"]}
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
