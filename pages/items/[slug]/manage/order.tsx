import React from "react";
import { graphql } from "react-relay";
import type { ordersManageSlugItemsQuery as Query } from "@/relay/ordersManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";

function ManageOrder({ data: dataIgnored }: Props) {
  return <div>Item Orders</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
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
    }
  }
`;
