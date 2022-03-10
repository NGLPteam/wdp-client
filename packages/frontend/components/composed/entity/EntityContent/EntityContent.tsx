import React, { useEffect } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { useMaybeFragment, usePageContext } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import { RouteHelper } from "routes";
import { EntityContentFragment$key } from "@/relay/EntityContentFragment.graphql";
import { getRouteByEntityType } from "helpers";

export default function EntityContent({ data, children }: Props) {
  const { t } = useTranslation();

  const entity = useMaybeFragment(fragment, data);

  const { loading } = usePageContext();

  const router = useRouter();

  const typeRoute = getRouteByEntityType(entity?.__typename);

  const orderRoute = RouteHelper.findRouteByName(`${typeRoute}.browse`);

  const pageRoute = RouteHelper.findRouteByName(`${typeRoute}.page`);

  useEffect(() => {
    if (!entity) return;

    const activeOrderings = entity
      ? entity.orderings.edges.filter(
          ({ node }) => node.children?.pageInfo?.totalCount
        )
      : [];

    const pages = entity?.pages?.nodes;

    const type = entity?.__typename;

    // Redirect to entity collection ordering
    if (activeOrderings?.[0]?.node && orderRoute && type !== "Item") {
      router.replace({
        pathname: orderRoute.path,
        query: {
          ...router.query,
          ordering: activeOrderings[0].node.identifier,
        },
      });
      // If there are no orderings or children, redirect to first page
    } else if (pages?.length > 0 && pageRoute && !children) {
      router.replace({
        pathname: pageRoute.path,
        query: {
          ...router.query,
          page: pages[0].slug,
        },
      });
    }
  }, [router, entity, orderRoute, pageRoute, children]);

  return (
    <>{children}</> || (
      <div className="l-container-wide">
        {!loading && t("common.no_content")}
      </div>
    )
  );
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
    pages {
      nodes {
        slug
      }
    }
  }
`;
