import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { manageSlugCommunitiesPagesQuery as Query } from "@/relay/manageSlugCommunitiesPagesQuery.graphql";

import CommunityLayout from "components/composed/community/CommunityLayout";
import ErrorPage from "next/error";

function ManageCollection() {
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
          Manage Community
        </CommunityLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query manageSlugCommunitiesPagesQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      ...CommunityLayoutFragment
    }
  }
`;

export default ManageCollection;
