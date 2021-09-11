import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { detailsManageSlugCommunitiesPagesQuery as Query } from "@/relay/detailsManageSlugCommunitiesPagesQuery.graphql";

import CommunityUpdateForm from "components/composed/community/CommunityUpdateForm";
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
          {data?.community && <CommunityUpdateForm data={data?.community} />}
        </CommunityLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query detailsManageSlugCommunitiesPagesQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      ...CommunityUpdateFormFragment
      ...CommunityLayoutFragment
    }
  }
`;

export default CommunityDetails;
