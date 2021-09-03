import React from "react";
import { graphql } from "react-relay";
import { collectionsCollectionChildQuery as Query } from "__generated__/collectionsCollectionChildQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";

function CollectionChildCollections() {
  const queryVars = useBaseListQueryVars();

  const collectionSlug = useRouteSlug();
  // TODO: This should 404 instead of returning null.
  if (!collectionSlug) return null;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, collectionSlug }}
    >
      {({ data }) => (
        <CollectionList<Query> data={data?.collection?.collections} />
      )}
    </QueryWrapper>
  );
}

CollectionChildCollections.getLayout = (page: React.ReactNode) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};

export default CollectionChildCollections;

const query = graphql`
  query collectionsCollectionChildQuery(
    $order: SimpleOrder!
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
    }
  }
`;
