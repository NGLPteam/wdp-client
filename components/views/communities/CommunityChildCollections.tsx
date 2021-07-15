import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  CommunityChildCollectionsQuery as Query,
  CommunityChildCollectionsQueryResponse as QueryResponse,
} from "__generated__/CommunityChildCollectionsQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";

import type { ExtractsConnection } from "types/graphql-helpers";

type ConnectionType = QueryResponse["community"]["collections"];

export default function CommunityChildCollections({ community }) {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.community?.collections,
    []
  );

  return (
    <CollectionList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      queryVars={{ communitySlug: community.slug }}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query CommunityChildCollectionsQuery(
    $order: SimpleOrder!
    $page: Int!
    $communitySlug: Slug!
  ) {
    community(slug: $communitySlug) {
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
