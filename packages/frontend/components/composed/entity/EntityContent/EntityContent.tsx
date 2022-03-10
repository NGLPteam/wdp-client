import React, { useEffect } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { RouteHelper } from "routes";
import { EntityContentFragment$key } from "@/relay/EntityContentFragment.graphql";

export default function EntityContent({ data, children }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const router = useRouter();

  const route = RouteHelper.findRouteByName("collection.browse");

  useEffect(() => {
    if (!entity) return;

    const activeOrderings = entity
      ? entity.orderings.edges.filter(
          ({ node }) => node.children?.pageInfo?.totalCount
        )
      : [];

    const type = entity?.__typename;

    // Redirect to entity collection ordering
    if (activeOrderings?.[0]?.node && route && type !== "Item") {
      router.replace({
        pathname: route.path,
        query: {
          ...router.query,
          ordering: activeOrderings[0].node.identifier,
        },
      });
    }
  }, [router, entity, route]);

  return <>{children}</>;
}

interface Props {
  data?: EntityContentFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityContentFragment on Entity {
    __typename
    orderings {
      edges {
        node {
          identifier
          children {
            pageInfo {
              totalCount
            }
          }
        }
      }
    }
  }
`;
