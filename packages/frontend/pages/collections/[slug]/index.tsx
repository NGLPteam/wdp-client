import React from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString, useRouteSlug } from "@wdp/lib/routes";
import AppLayout from "components/global/AppLayout";
import EntityContentLayoutFactory from "components/factories/EntityContentLayoutFactory";
import { SlugCollectionQuery as Query } from "@/relay/SlugCollectionQuery.graphql";

export default function CommunityPage() {
  const slug = useRouteSlug();

  const router = useRouter();

  const page = parseInt(routeQueryArrayToString(router.query.page));

  return slug ? (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ slug, page: page || 1 }}
    >
      {({ data }) => (
        <AppLayout communityData={data?.collection?.community}>
          <EntityContentLayoutFactory data={data?.collection} />
        </AppLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query SlugCollectionQuery($slug: Slug!, $page: Int) {
    collection(slug: $slug) {
      ...EntityContentLayoutFactoryFragment @arguments(page: $page)
      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
