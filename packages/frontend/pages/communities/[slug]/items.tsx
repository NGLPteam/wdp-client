import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { itemsQuery as Query } from "@/relay/itemsQuery.graphql";

export default function CommunitiesPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.community}>
          <></>
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query itemsQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityLayoutFragment
    }
    ...CommunityLayoutAppFragment
  }
`;
