import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityChildLayout from "components/composed/community/CommunityChildLayout";
import { SlugCollectionQuery as Query } from "@/relay/SlugCollectionQuery.graphql";

export default function CommunityPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityChildLayout
          data={data}
          communityData={data?.collection?.community}
        >
          <></>
        </CommunityChildLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query SlugCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      community {
        ...CommunityHeroFragment
        ...CommunityChildLayoutFragment
      }
    }
    ...CommunityChildLayoutAppFragment
  }
`;
