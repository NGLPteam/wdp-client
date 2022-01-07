import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString, useRouteSlug } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import CommunityLayout from "components/composed/community/CommunityLayout";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import { OrderingSlugCollectionQuery as Query } from "@/relay/OrderingSlugCollectionQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";

export default function OrderingSlugCollection() {
  const slug = useRouteSlug();
  const router = useRouter();
  const { ordering, page: pageQuery } = router.query;
  const identifier = routeQueryArrayToString(ordering);
  const page = parseInt(routeQueryArrayToString(pageQuery)) || 1;

  return slug && identifier ? (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ slug, identifier, page }}
    >
      {({ data }) => (
        <CommunityLayout
          data={data}
          communityData={data?.collection?.community}
        >
          <EntityLayoutFactory data={data?.collection}>
            <EntityOrderingLayoutFactory data={data?.collection} />
          </EntityLayoutFactory>
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query OrderingSlugCollectionQuery(
    $slug: Slug!
    $identifier: String!
    $page: Int
  ) {
    collection(slug: $slug) {
      ...EntityLayoutFactoryFragment
      ...EntityOrderingLayoutFactoryFragment @arguments(page: $page)

      community {
        ...CommunityLayoutFragment
      }
    }
    ...CommunityLayoutAppFragment
  }
`;
