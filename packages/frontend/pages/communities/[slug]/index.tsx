import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "components/composed/community/CommunityLayout";
import CommunityHero from "components/composed/community/CommunityHero";
import { SlugCommunityQuery as Query } from "@/relay/SlugCommunityQuery.graphql";

export default function CommunityPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.community}>
          {data?.community && <CommunityHero data={data.community} />}
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query SlugCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityHeroFragment
      ...CommunityLayoutFragment
    }
    ...CommunityLayoutAppFragment
  }
`;
