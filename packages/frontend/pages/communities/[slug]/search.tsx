import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "components/composed/community/CommunityLayout";
import SearchLayout from "components/composed/search/SearchLayout";
import { searchCommunityQuery as Query } from "@/relay/searchCommunityQuery.graphql";

export default function SearchPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.community}>
          <SearchLayout />
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query searchCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityLayoutFragment
    }
    ...CommunityLayoutAppFragment
  }
`;
