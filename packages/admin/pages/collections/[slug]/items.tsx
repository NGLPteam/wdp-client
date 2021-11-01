import React from "react";
import { graphql } from "react-relay";
import type { itemsSlugCollectionsPagesQuery as Query } from "__generated__/itemsSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

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
    $order: SimpleOrder!
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
