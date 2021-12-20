import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRoutePageSlug, useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { PageSlugCollectionQuery as Query } from "@/relay/PageSlugCollectionQuery.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import EntityPageLayout from "components/composed/entity/EntityPageLayout";

export default function CommunityPage() {
  const slug = useRouteSlug();
  const pageSlug = useRoutePageSlug();

  return slug && pageSlug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug, pageSlug }}>
      {({ data }) => (
        <CommunityLayout
          data={data}
          communityData={data?.collection?.community}
        >
          <EntityLayoutFactory data={data?.collection}>
            <EntityPageLayout data={data?.collection?.page} />
          </EntityLayoutFactory>
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query PageSlugCollectionQuery($slug: Slug!, $pageSlug: String!) {
    collection(slug: $slug) {
      ...EntityLayoutFactoryFragment
      community {
        ...CommunityLayoutFragment
      }
      page(slug: $pageSlug) {
        ...EntityPageLayoutFragment
      }
    }
    ...CommunityLayoutAppFragment
  }
`;
