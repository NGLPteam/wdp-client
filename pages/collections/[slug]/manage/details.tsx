import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { detailsManageSlugCollectionsPagesQuery as Query } from "@/relay/detailsManageSlugCollectionsPagesQuery.graphql";
import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import ErrorPage from "next/error";

function CollectionDetails() {
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
          {data?.collection && <CollectionUpdateForm data={data?.collection} />}
        </CollectionLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query detailsManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...CollectionUpdateFormFragment
    }
  }
`;

export default CollectionDetails;
