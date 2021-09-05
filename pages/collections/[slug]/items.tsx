import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { itemsSlugCollectionsPagesQuery as Query } from "__generated__/itemsSlugCollectionsPagesQuery.graphql";

import CollectionLayout from "components/composed/collection/CollectionLayout";
import ItemList from "components/composed/item/ItemList";
import ErrorPage from "next/error";

function CollectionChildItems() {
  const queryVars = useBaseListQueryVars();
  const collectionSlug = useRouteSlug();
  if (!collectionSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, collectionSlug }}
    >
      {({ data }) => (
        <CollectionLayout data={data?.collection}>
          <ItemList<Query> data={data?.collection?.items} />
        </CollectionLayout>
      )}
    </QueryWrapper>
  );
}

export default CollectionChildItems;

const query = graphql`
  query itemsSlugCollectionsPagesQuery(
    $order: SimpleOrder!
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
    }
  }
`;
