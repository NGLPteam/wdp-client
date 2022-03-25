import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { OrderingSlugCommunityQuery as Query } from "@/relay/OrderingSlugCommunityQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import AppLayout from "components/global/AppLayout";

export default function OrderingSlugCommunity() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <AppLayout data={data} communityData={data?.community}>
          <EntityOrderingLayoutFactory data={data?.community} />
        </AppLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query OrderingSlugCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...EntityOrderingLayoutFactoryFragment
      ...AppLayoutCommunityFragment
    }
    ...AppLayoutFragment
  }
`;
