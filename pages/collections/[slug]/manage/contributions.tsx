import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { contributionsManageSlugCollectionsPagesQuery as Query } from "@/relay/contributionsManageSlugCollectionsPagesQuery.graphql";

import CollectionLayout from "components/composed/collection/CollectionLayout";
import ErrorPage from "next/error";

function CollectionContributions() {
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
          Collection Contributions
        </CollectionLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query contributionsManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
    }
  }
`;

export default CollectionContributions;
