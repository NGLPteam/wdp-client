import React, { useCallback } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import {
  collectionsCollectionChildQuery as Query,
  collectionsCollectionChildQueryResponse as QueryResponse,
} from "__generated__/collectionsCollectionChildQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";
import CollectionLayout from "components/composed/collection/CollectionLayout";

import type { ExtractsConnection } from "types/graphql-helpers";
import { routeQueryArrayToString } from "routes";

type ConnectionType = QueryResponse["collection"]["collections"];

export default function CollectionChildCollections() {
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
      queryVars={{ collectionSlug: routeQueryArrayToString(slug) }}
      toConnection={toConnection}
    />
  );
}

CollectionChildCollections.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};

const query = graphql`
  query collectionsCollectionChildQuery(
    $order: SimpleOrder!
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      collections(order: $order, page: $page, perPage: 20) {
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
          thumbnail {
            image: medium {
              png {
                url
                height
                width
                alt
              }
            }
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
  }
`;
