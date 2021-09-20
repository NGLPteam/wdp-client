import React from "react";
import { graphql } from "react-relay";
import type { itemsSlugItemsPagesQuery as Query } from "__generated__/itemsSlugItemsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import ItemList from "components/composed/item/ItemList";

function ItemChildItems({ data }: Props) {
  return (
    <ItemList<Query>
      data={data?.item?.items}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> query={query} {...props} />;
};
ItemChildItems.getLayout = getLayout;

export default ItemChildItems;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query itemsSlugItemsPagesQuery(
    $order: SimpleOrder!
    $page: Int!
    $itemSlug: Slug!
  ) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
    }
  }
`;
