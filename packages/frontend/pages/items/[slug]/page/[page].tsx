import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRoutePageSlug, useRouteSlug } from "@wdp/lib/routes";
import AppLayout from "components/global/AppLayout";
import { PageSlugItemQuery as Query } from "@/relay/PageSlugItemQuery.graphql";
import EntityPageLayoutFactory from "components/factories/EntityPageLayoutFactory";

export default function ItemPage() {
  const slug = useRouteSlug();
  const pageSlug = useRoutePageSlug();

  return slug && pageSlug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug, pageSlug }}>
      {({ data }) => (
        <AppLayout data={data} communityData={data?.item?.community}>
          <EntityPageLayoutFactory data={data?.item} />
        </AppLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query PageSlugItemQuery($slug: Slug!, $pageSlug: String!) {
    item(slug: $slug) {
      ...EntityPageLayoutFactoryFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
    ...AppLayoutFragment
  }
`;
