import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { orderManageSlugCollectionsPagesQuery as Query } from "@/relay/orderManageSlugCollectionsPagesQuery.graphql";

import CollectionLayout from "components/composed/collection/CollectionLayout";
import ErrorPage from "next/error";

function CollectionOrder() {
  const queryVars = useBaseListQueryVars();
  const collectionSlug = useRouteSlug();
  if (!collectionSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, collectionSlug }}
    >
      {({ data }) => (
        <CollectionLayout showSidebar data={data?.collection}>
          Collection Order
        </CollectionLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query orderManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
    }
  }
`;

export default CollectionOrder;
