import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { itemsSlugCollectionsPagesQuery as Query } from "__generated__/itemsSlugCollectionsPagesQuery.graphql";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import ItemList from "components/composed/item/ItemList";

function CollectionChildItems({ data }: Props) {
  return (
    <ItemList<Query>
      data={data?.collection?.items}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <CollectionLayoutQuery<Query, Props> query={query} {...props} />;
};
CollectionChildItems.getLayout = getLayout;

export default CollectionChildItems;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query itemsSlugCollectionsPagesQuery(
    $order: EntityOrder
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
    }
  }
`;
