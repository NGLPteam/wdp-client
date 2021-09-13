import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import { collectionsSlugCommunitiesPagesQuery as Query } from "__generated__/collectionsSlugCommunitiesPagesQuery.graphql";

import CollectionList from "components/composed/collection/CollectionList";
import CommunityLayout from "components/composed/community/CommunityLayout";
import ErrorPage from "next/error";

function CommunityChildCollections() {
  const queryVars = useBaseListQueryVars();
  const communitySlug = useRouteSlug();
  if (!communitySlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, communitySlug }}
    >
      {({ data }) => (
        <CommunityLayout data={data?.community}>
          <CollectionList<Query> data={data?.community?.collections} subHead />
        </CommunityLayout>
      )}
    </QueryWrapper>
  );
}

export default CommunityChildCollections;

const query = graphql`
  query collectionsSlugCommunitiesPagesQuery(
    $order: SimpleOrder!
    $page: Int!
    $communitySlug: Slug!
  ) {
    community(slug: $communitySlug) {
      ...CommunityLayoutFragment
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
    }
  }
`;
