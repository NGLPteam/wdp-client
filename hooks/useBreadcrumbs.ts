import { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useBreadcrumbsFragment$key } from "@/relay/useBreadcrumbsFragment.graphql";
import { RouteHelper } from "routes";
import { UrlObject } from "url";
declare type Url = string | UrlObject;

const kindMap = {
  COMMUNITY: "community",
  COLLECTION: "collection",
  ITEM: "item",
  "%future added value": null,
};

export type BreadcrumbListType =
  | {
      label: string;
      href: Url;
    }[]
  | null;

export default function useBreadcrumbs(
  entity: useBreadcrumbsFragment$key | null
): BreadcrumbListType {
  const data = useFragment<useBreadcrumbsFragment$key>(fragment, entity);

  const breadcrumbsData = useMemo(() => {
    if (!entity) return null;

    return data?.breadcrumbs.map((crumb) => {
      const routeName = kindMap[crumb.kind];

      if (!routeName) {
        throw new Error(
          `Unable to find route for "${routeName} in useBreadcrumbs`
        );
      }

      const route = RouteHelper.findRouteByName(routeName);

      if (!route) {
        throw new Error(
          `Unable to find route for "${routeName} in useBreadcrumbs`
        );
      }

      const nextQuery = { slug: crumb.slug };
      const href = { pathname: route.path, query: nextQuery };

      return {
        label: crumb.label,
        href: href,
      };
    });
  }, [data, entity]);

  return breadcrumbsData || null;
}

export const fragment = graphql`
  fragment useBreadcrumbsFragment on Entity {
    breadcrumbs {
      depth
      label
      kind
      slug
    }
  }
`;
