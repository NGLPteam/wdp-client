import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { accessManageSlugCollectionsPagesQuery as Query } from "@/relay/accessManageSlugCollectionsPagesQuery.graphql";

import CollectionLayout from "components/composed/collection/CollectionLayout";
import ErrorPage from "next/error";

function CollectionAccess() {
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
          Collection Access
        </CollectionLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query accessManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
    }
  }
`;

export default CollectionAccess;
