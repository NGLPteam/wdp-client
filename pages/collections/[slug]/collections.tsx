import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  CollectionChildCollectionsQuery as Query,
  CollectionChildCollectionsQueryResponse as QueryResponse,
} from "__generated__/CollectionChildCollectionsQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";
import CollectionLayout from "components/composed/collection/CollectionLayout";

import type { ExtractsConnection } from "types/graphql-helpers";
import { useRouter } from "next/router";

type ConnectionType = QueryResponse["collection"]["collections"];

export default function Collections() {
  const router = useRouter();
  const { slug } = router.query;

  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.collection?.collections,
    []
  );

  return (
    <CollectionList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      queryVars={{ collectionSlug: slug }}
      toConnection={toConnection}
    />
  );
}

Collections.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};

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
