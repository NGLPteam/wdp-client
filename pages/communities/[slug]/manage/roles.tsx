import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { detailsManageSlugCommunitiesPagesQuery as Query } from "@/relay/detailsManageSlugCommunitiesPagesQuery.graphql";

import CommunityLayout from "components/composed/community/CommunityLayout";
import ErrorPage from "next/error";

function CommunityDetails() {
  const queryVars = useBaseListQueryVars();
  const communitySlug = useRouteSlug();
  if (!communitySlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, communitySlug }}
    >
      {({ data }) => (
        <CommunityLayout showSidebar data={data?.community}>
          Community Roles
        </CommunityLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query rolesManageSlugCommunitiesPagesQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      ...CommunityLayoutFragment
    }
  }
`;

export default CommunityDetails;
