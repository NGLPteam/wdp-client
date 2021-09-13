import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { collectionsManageSlugCollectionsPagesQuery as Query } from "__generated__/collectionsManageSlugCollectionsPagesQuery.graphql";

import CollectionLayout from "components/composed/collection/CollectionLayout";
import CollectionList from "components/composed/collection/CollectionList";
import ErrorPage from "next/error";

function CollectionChildCollections() {
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
          <CollectionList<Query> data={data?.collection?.collections} subHead />
        </CollectionLayout>
      )}
    </QueryWrapper>
  );
}

export default CollectionChildCollections;

const query = graphql`
  query collectionsManageSlugCollectionsPagesQuery(
    $order: SimpleOrder!
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
    }
  }
`;
