import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  CollectionListQuery as Query,
  CollectionListQueryResponse as QueryResponse,
} from "__generated__/CollectionListQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";

import type { ExtractsConnection } from "types/graphql-helpers";

type ConnectionType = QueryResponse["viewer"]["collections"];

export default function CollectionListView() {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.viewer?.collections,
    []
  );

  return (
    <CollectionList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query CollectionListQuery($order: SimpleOrder!, $page: Int!) {
    viewer {
      collections(access: READ_ONLY, order: $order, page: $page, perPage: 10) {
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
