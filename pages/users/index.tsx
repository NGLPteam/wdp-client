import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  usersQuery as Query,
  usersQueryResponse as QueryResponse,
} from "__generated__/usersQuery.graphql";
import UserList from "components/composed/user/UserList";

import type { ExtractsConnection } from "types/graphql-helpers";
type ConnectionType = QueryResponse["users"];
type NodeType = ConnectionType["nodes"][number];

export default function UserListView() {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.users,
    []
  );

  return (
    <UserList<Query, ConnectionType, NodeType>
      defaultOrder="RECENT"
      query={query}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query usersQuery($order: SimpleOrder!, $page: Int!) {
    users(order: $order, page: $page, perPage: 20) {
      nodes {
        email
        globalAdmin
        name
        slug
        createdAt
        updatedAt
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
