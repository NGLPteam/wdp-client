import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityChildLayout from "components/composed/community/CommunityChildLayout";
import EntityHero from "components/composed/entity/EntityHero";
import { SlugItemQuery as Query } from "@/relay/SlugItemQuery.graphql";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityChildLayout data={data} communityData={data?.item?.community}>
          <EntityHero data={data?.item} />
        </CommunityChildLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query SlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityHeroFragment
      community {
        ...CommunityHeroFragment
        ...CommunityChildLayoutFragment
      }
    }
    ...CommunityChildLayoutAppFragment
  }
`;
