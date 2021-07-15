import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  CollectionChildCollectionsQuery as Query,
  CollectionChildCollectionsQueryResponse as QueryResponse,
} from "__generated__/CollectionChildCollectionsQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";

import type { ExtractsConnection } from "types/graphql-helpers";

type ConnectionType = QueryResponse["collection"]["collections"];

export default function CollectionChildCollections({ collection }) {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.collection?.collections,
    []
  );

  return (
    <CollectionList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      queryVars={{ collectionSlug: collection.slug }}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query CollectionChildCollectionsQuery(
    $order: SimpleOrder!
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      collections(order: $order, page: $page, perPage: 10) {
        nodes {
          __typename
          id
          identifier
          createdAt
          updatedAt
          title
          slug
          allowedActions
          hierarchicalDepth
        }
        pageInfo {
          page
          perPage
          pageCount
          hasNextPage
          hasPreviousPage
          totalCount
          totalUnfilteredCount
        }
      }
    }
  }
`;
