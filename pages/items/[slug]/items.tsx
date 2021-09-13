import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useBaseListQueryVars, useRouteSlug } from "hooks";
import type { itemsSlugItemsPagesQuery as Query } from "__generated__/itemsSlugItemsPagesQuery.graphql";

import ItemLayout from "components/composed/item/ItemLayout";
import ItemList from "components/composed/item/ItemList";
import ErrorPage from "next/error";

function ItemChildItems() {
  const queryVars = useBaseListQueryVars();
  const itemSlug = useRouteSlug();
  if (!itemSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, itemSlug }}
    >
      {({ data }) => (
        <ItemLayout data={data?.item}>
          <ItemList<Query> data={data?.item?.items} subHead />
        </ItemLayout>
      )}
    </QueryWrapper>
  );
}

export default ItemChildItems;

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
