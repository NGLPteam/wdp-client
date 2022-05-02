import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { collectionsManageSlugCollectionsPagesQuery as Query } from "__generated__/collectionsManageSlugCollectionsPagesQuery.graphql";

import CollectionList from "components/composed/collection/CollectionList";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";

function CollectionChildCollections({ data }: Props) {
  return (
    <CollectionList<Query>
      data={data?.collection?.collections}
      searchData={data?.collection?.search}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <CollectionLayoutQuery<Query, Props> query={query} {...props} />;
};
CollectionChildCollections.getLayout = getLayout;

export default CollectionChildCollections;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query collectionsManageSlugCollectionsPagesQuery(
    $order: EntityOrder
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
    $collectionSlug: Slug!
    $schema: [String!]
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
      search(visibility: ALL, maxDepth: 1) {
        ...CollectionListSearchFragment
          @arguments(
            query: $query
            page: $page
            predicates: $predicates
            order: $order
            hasQuery: $hasQuery
            schema: $schema
          )
      }
    }
  }
`;
