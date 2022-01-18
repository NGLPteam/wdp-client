import React, { useEffect, useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import InstanceCommunities from "components/composed/instance/InstanceCommunities";
import InstanceHero from "components/composed/instance/InstanceHero";
import { InstanceContentLayoutFragment$key } from "@/relay/InstanceContentLayoutFragment.graphql";
import { RouteHelper } from "routes";
import { useRouter } from "next/router";

export default function InstanceContentLayout({ data }: Props) {
  const instance = useMaybeFragment(fragment, data);

  const total = useMemo(
    () => instance?.communities?.pageInfo?.totalCount || 0,
    [instance]
  );

  const firstSlug = useMemo(
    () => instance?.communities?.edges[0]?.node?.slug || null,
    [instance]
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
      <InstanceHero />
      <InstanceCommunities data={instance.communities} />
    </>
  ) : null;
}

type Props = {
  data?: InstanceContentLayoutFragment$key | null;
};

const fragment = graphql`
  fragment InstanceContentLayoutFragment on Query {
    communities {
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
  }
`;
