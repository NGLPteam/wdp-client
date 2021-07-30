import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  itemsCollectionChildQuery as Query,
  itemsCollectionChildQueryResponse as QueryResponse,
} from "__generated__/itemsCollectionChildQuery.graphql";
import ItemList from "components/composed/item/ItemList";
import CollectionLayout from "components/composed/collection/CollectionLayout";

import { Page } from "types/page";
import type { ExtractsConnection } from "types/graphql-helpers";
import { useRouter } from "next/router";
import { routeQueryArrayToString } from "routes";

type ConnectionType = NonNullable<QueryResponse["collection"]>["items"];

const CollectionChildItems: Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.collection?.items || null,
    []
  );

  return (
    <ItemList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      queryVars={{ collectionSlug: routeQueryArrayToString(slug) }}
      toConnection={toConnection}
    />
  );
};

CollectionChildItems.getLayout = (page) => {
  return <CollectionLayout>{page}</CollectionLayout>;
};

export default CollectionChildItems;

const query = graphql`
  query itemsCollectionChildQuery(
    $order: SimpleOrder!
    $page: Int!
    $collectionSlug: Slug!
  ) {
    collection(slug: $collectionSlug) {
      items(order: $order, page: $page, perPage: 20) {
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
