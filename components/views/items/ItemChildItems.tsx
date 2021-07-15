import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  ItemChildItemsQuery as Query,
  ItemChildItemsQueryResponse as QueryResponse,
} from "__generated__/ItemChildItemsQuery.graphql";
import ItemList from "components/composed/item/ItemList";

import type { ExtractsConnection } from "types/graphql-helpers";

type ConnectionType = QueryResponse["item"]["items"];

export default function ItemChildItems({ item }) {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.item?.items,
    []
  );

  return (
    <ItemList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      queryVars={{ itemSlug: item.slug }}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query ItemChildItemsQuery(
    $order: SimpleOrder!
    $page: Int!
    $itemSlug: Slug!
  ) {
    item(slug: $itemSlug) {
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
