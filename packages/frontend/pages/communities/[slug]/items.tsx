import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityChildLayout from "components/composed/community/CommunityChildLayout";
import { itemsQuery as Query } from "@/relay/itemsQuery.graphql";

export default function CommunitiesPage() {
  const slug = useRouteSlug();

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityChildLayout data={data} communityData={data?.community}>
          <></>
        </CommunityChildLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query itemsQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityChildLayoutFragment
    }
    ...CommunityChildLayoutAppFragment
  }
`;
