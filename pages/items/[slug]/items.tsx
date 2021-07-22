import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  itemsItemChildQuery as Query,
  itemsItemChildQueryResponse as QueryResponse,
} from "__generated__/itemsItemChildQuery.graphql";
import ItemList from "components/composed/item/ItemList";
import ItemLayout from "components/composed/item/ItemLayout";

import type { ExtractsConnection } from "types/graphql-helpers";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "helpers";

type ConnectionType = QueryResponse["item"]["items"];

export default function ItemChildItems() {
  const router = useRouter();
  const { slug } = router.query;

  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.item?.items,
    []
  );

  return (
    <ItemList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      queryVars={{ itemSlug: routeQueryArrayToString(slug) }}
      toConnection={toConnection}
    />
  );
}

ItemChildItems.getLayout = (page) => {
  return <ItemLayout>{page}</ItemLayout>;
};

const query = graphql`
  query itemsItemChildQuery(
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
