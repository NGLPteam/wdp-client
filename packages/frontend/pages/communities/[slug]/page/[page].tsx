import React from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString, useRouteSlug } from "@wdp/lib/routes";
import AppLayout from "components/global/AppLayout";
import CommunityPageLayout from "components/composed/community/CommunityPageLayout";
import { PageCommunityQuery as Query } from "@/relay/PageCommunityQuery.graphql";

export default function CommunityAboutPage() {
  const slug = useRouteSlug();
  const router = useRouter();
  const pageSlug = routeQueryArrayToString(router.query.page);

  return slug && pageSlug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug, pageSlug }}>
      {({ data }) => (
        <AppLayout communityData={data?.community}>
          <CommunityPageLayout data={data?.community?.page} />
        </AppLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query PageCommunityQuery($slug: Slug!, $pageSlug: String!) {
    community(slug: $slug) {
      page(slug: $pageSlug) {
        ...CommunityPageLayoutFragment
      }
      ...AppLayoutCommunityFragment
    }
  }
`;
