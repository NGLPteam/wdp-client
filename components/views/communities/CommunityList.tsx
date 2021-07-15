import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  CommunityListQuery as Query,
  CommunityListQueryResponse as QueryResponse,
} from "__generated__/CommunityListQuery.graphql";

import CommunityList from "components/composed/community/CommunityList";

import type { ExtractsConnection } from "types/graphql-helpers";

type ConnectionType = QueryResponse["communities"];

export default function CommunityListView() {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.communities,
    []
  );

  return (
    <CommunityList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query CommunityListQuery($order: SimpleOrder!, $page: Int!) {
    communities(order: $order, page: $page, perPage: 10) {
      edges {
        node {
          key: slug
          slug
          name
          updatedAt
          createdAt
        }
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
`;
