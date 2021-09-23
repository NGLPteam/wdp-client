import React from "react";
import { graphql } from "react-relay";
import type { ordersManageSlugItemsQuery as Query } from "@/relay/ordersManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import EntityOrderingList from "components/composed/ordering/EntityOrderingList";

function ManageOrder({ data }: Props) {
  return (
    <EntityOrderingList<Query>
      data={data?.item?.orderings}
      headerStyle="secondary"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      {...props}
    />
  );
};
ManageOrder.getLayout = getLayout;

export default ManageOrder;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query ordersManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      orderings {
        ...EntityOrderingListFragment
      }
    }
  }
`;
