import React from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString, useRouteSlug } from "@wdp/lib/routes";
import CommunityChildLayout from "components/composed/community/CommunityChildLayout";
import { PageCommunityQuery as Query } from "@/relay/PageCommunityQuery.graphql";

export default function CommunityAboutPage() {
  const slug = useRouteSlug();
  const router = useRouter();
  const pageSlug = routeQueryArrayToString(router.query.page);

  return slug && pageSlug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug, pageSlug }}>
      {({ data }) => (
        <CommunityChildLayout data={data} communityData={data?.community}>
          {data?.community?.page && (
            <div className="a-bg-custom10">
              <div className="l-container-wide">
                <h1>{data.community.page.title}</h1>
              </div>
            </div>
          )}
        </CommunityChildLayout>
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
        title
      }
      ...CommunityChildLayoutFragment
    }
    ...CommunityChildLayoutAppFragment
  }
`;
