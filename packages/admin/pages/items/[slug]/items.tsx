import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { itemsSlugItemsPagesQuery as Query } from "__generated__/itemsSlugItemsPagesQuery.graphql";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import ItemList from "components/composed/item/ItemList";

function ItemChildItems({ data }: Props) {
  return data?.item?.search ? (
    <ItemList<Query>
      searchData={data?.item?.search?.results}
      headerStyle="secondary"
      hideHeader
    />
  ) : (
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
    $order: EntityOrder
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
    $itemSlug: Slug!
  ) {
    item(slug: $itemSlug) {
      ...ItemLayoutQueryFragment
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
      search @include(if: $hasQuery) {
        results(
          query: $query
          page: $page
          perPage: 20
          predicates: $predicates
          order: $order
          scope: ITEM
        ) {
          ...ItemListSearchFragment
        }
      }
    }
  }
`;
