import React, { useEffect, useMemo } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { RouteHelper } from "routes";
import { IssueContentFragment$key } from "@/relay/IssueContentFragment.graphql";

export default function IssueContent({ data }: Props) {
  const content = useMaybeFragment(fragment, data);

  const router = useRouter();

  const orderingRoute = RouteHelper.findRouteByName("collection.browse");

  // Get the first order in orderings as a default option
  const firstOrder = useMemo(
    () => content?.orderings?.edges[0]?.node.identifier,
    [content]
  );

  // If an ordering is found, reroute
  useEffect(() => {
    if (firstOrder && orderingRoute) {
      router.replace({
        pathname: orderingRoute.path,
        query: { ...router.query, page: 1, ordering: firstOrder },
      });
    }
  }, [firstOrder, orderingRoute, router]);

  return <></>;
}

interface Props {
  data?: IssueContentFragment$key | null;
}

const fragment = graphql`
  fragment IssueContentFragment on Collection {
    orderings {
      edges {
        node {
          identifier
        }
      }
    }
  }
`;
