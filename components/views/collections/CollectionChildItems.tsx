import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  CollectionChildItemsQuery as Query,
  CollectionChildItemsQueryResponse as QueryResponse,
} from "__generated__/CollectionChildItemsQuery.graphql";
import ItemList from "components/composed/item/ItemList";

import type { ExtractsConnection } from "types/graphql-helpers";

type ConnectionType = QueryResponse["collection"]["items"];

export default function CollectionChildItems({ collection }) {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.collection?.items,
    []
  );

  return (
    <ItemList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      queryVars={{ collectionSlug: collection.slug }}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query CollectionChildItemsQuery(
    $order: SimpleOrder!
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      items(order: $order, page: $page, perPage: 10) {
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
