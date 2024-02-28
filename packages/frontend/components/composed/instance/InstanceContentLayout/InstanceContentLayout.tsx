import React, { useEffect, useMemo } from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useRouter } from "next/router";
import InstanceCommunities from "components/composed/instance/InstanceCommunities";
import InstanceHero from "components/composed/instance/InstanceHero";
import { RouteHelper } from "routes";
import { InstanceContentLayoutQuery } from "@/relay/InstanceContentLayoutQuery.graphql";

export default function InstanceContentLayout({ queryRef }: Props) {
  const instance = usePreloadedQuery<InstanceContentLayoutQuery>(
    query,
    queryRef,
  );

  const total = useMemo(
    () => instance?.communities?.pageInfo?.totalCount || 0,
    [instance],
  );

  const firstSlug = useMemo(
    () => instance?.communities?.edges[0]?.node?.slug || null,
    [instance],
  );

  const router = useRouter();

  // If there's only one community, redirect to that community
  useEffect(() => {
    const redirectRoute = RouteHelper.findRouteByName("community");

    if (total === 1 && firstSlug && redirectRoute) {
      router.replace({
        pathname: redirectRoute.path,
        query: { slug: firstSlug },
      });
    }
  }, [total, firstSlug, router]);

  // If there's more than one community, show instance landing page
  return instance && total > 1 ? (
    <>
      <InstanceHero data={instance} />
      <InstanceCommunities data={instance.communities} />
    </>
  ) : null;
}

type Props = {
  queryRef: PreloadedQuery<InstanceContentLayoutQuery>;
};

export const query = graphql`
  query InstanceContentLayoutQuery {
    communities(order: POSITION_ASCENDING) {
      edges {
        node {
          slug
        }
      }
      pageInfo {
        totalCount
      }
      ...InstanceCommunitiesFragment
    }
    ...InstanceHeroFragment
  }
`;
