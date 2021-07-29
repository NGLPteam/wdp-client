import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  communitiesQuery as Query,
  communitiesQueryResponse as QueryResponse,
} from "__generated__/communitiesQuery.graphql";
import CommunityList from "components/composed/community/CommunityList";

import type { ExtractsConnection } from "types/graphql-helpers";

type ConnectionType = QueryResponse["communities"];
type NodeType = ConnectionType["edges"][number]["node"];

export default function CommunityListView() {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.communities,
    []
  );

  return (
    <CommunityList<Query, ConnectionType, NodeType>
      defaultOrder="RECENT"
      query={query}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query communitiesQuery($order: SimpleOrder!, $page: Int!) {
    communities(order: $order, page: $page, perPage: 20) {
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
