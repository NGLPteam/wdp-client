import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { collectionsManageSlugCollectionsPagesQuery as Query } from "__generated__/collectionsManageSlugCollectionsPagesQuery.graphql";

import CollectionList from "components/composed/collection/CollectionList";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";

function CollectionChildCollections({ data }: Props) {
  return data?.collection?.search ? (
    <CollectionList<Query>
      searchData={data?.collection?.search?.results}
      headerStyle="secondary"
      hideHeader
    />
  ) : (
    <CollectionList<Query>
      data={data?.collection?.collections}
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
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
      search @include(if: $hasQuery) {
        results(
          query: $query
          page: $page
          perPage: 20
          predicates: $predicates
          order: $order
          scope: COLLECTION
        ) {
          ...CollectionListSearchFragment
        }
      }
    }
  }
`;
