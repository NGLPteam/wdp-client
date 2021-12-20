import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { SlugItemQuery as Query } from "@/relay/SlugItemQuery.graphql";
import EntityContentLayoutFactory from "components/factories/EntityContentLayoutFactory";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.item?.community}>
          <EntityContentLayoutFactory data={data?.item} />
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query SlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityContentLayoutFactoryFragment
      community {
        ...CommunityLayoutFragment
      }
    }
    ...CommunityLayoutAppFragment
  }
`;
