import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { SlugCommunityQuery as Query } from "@/relay/SlugCommunityQuery.graphql";
import CommunityLandingLayout from "components/composed/community/CommunityLandingLayout";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

export default function CommunityPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityLayoutQuery data={data}>
          {data?.community && <CommunityLandingLayout data={data.community} />}
        </CommunityLayoutQuery>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query SlugCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityLandingLayoutFragment
    }
    ...CommunityLayoutQueryFragment @arguments(slug: $slug)
  }
`;
