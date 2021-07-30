import React, { useCallback } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import {
  collectionsCommunityChildQuery as Query,
  collectionsCommunityChildQueryResponse as QueryResponse,
} from "__generated__/collectionsCommunityChildQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";
import CommunityLayout from "components/composed/community/CommunityLayout";

import { Page } from "types/page";
import type { ExtractsConnection } from "types/graphql-helpers";
import { routeQueryArrayToString } from "routes";

type ConnectionType = NonNullable<QueryResponse["community"]>["collections"];

const CommunityChildCollections: Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data.community?.collections || null,
    []
  );

  return (
    <CollectionList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      queryVars={{ communitySlug: routeQueryArrayToString(slug) }}
      toConnection={toConnection}
    />
  );
};

CommunityChildCollections.getLayout = (page) => {
  return <CommunityLayout>{page}</CommunityLayout>;
};

export default CommunityChildCollections;

const query = graphql`
  query collectionsCommunityChildQuery(
    $order: SimpleOrder!
    $page: Int!
    $communitySlug: Slug!
  ) {
    community(slug: $communitySlug) {
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
