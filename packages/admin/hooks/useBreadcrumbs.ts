import { UrlObject } from "url";
import { useMemo } from "react";
import { graphql } from "react-relay";
import { RouteHelper } from "routes";
import { useMaybeFragment } from "hooks";
import { useBreadcrumbsFragment$key } from "@/relay/useBreadcrumbsFragment.graphql";

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
  entity?: useBreadcrumbsFragment$key | null,
): BreadcrumbListType {
  const data = useMaybeFragment<useBreadcrumbsFragment$key>(fragment, entity);

  const breadcrumbsData = useMemo(() => {
    if (!data) return null;

    const currentRoute = RouteHelper.findRouteByName(
      data.__typename.toLowerCase(),
    );
    const currentPageCrumb = {
      label: data.title,
      href: { pathname: currentRoute?.path, query: { slug: data.slug } },
    };

    const breadcrumbs = data.breadcrumbs.map((crumb) => {
      const routeName = kindMap[crumb.kind];

      if (!routeName) {
        throw new Error(
          `Unable to find route for "${routeName} in useBreadcrumbs`,
        );
      }

      const route = RouteHelper.findRouteByName(routeName);

      if (!route) {
        throw new Error(
          `Unable to find route for "${routeName} in useBreadcrumbs`,
        );
      }

      const nextQuery = { slug: crumb.slug };
      const href = { pathname: route.path, query: nextQuery };

      return {
        label: crumb.label,
        href: href,
      };
    });

    return [...breadcrumbs, currentPageCrumb];
  }, [data]);

  return breadcrumbsData || null;
}

export const fragment = graphql`
  fragment useBreadcrumbsFragment on Entity {
    __typename
    title
    breadcrumbs {
      depth
      label
      kind
      slug
    }
    ... on Sluggable {
      slug
    }
  }
`;
