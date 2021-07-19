import { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useBreadcrumbsFragment$key } from "@/relay/useBreadcrumbsFragment.graphql";
import { modelMap } from "helpers/routes";

export type BreadcrumbListType =
  | {
      label: string;
      href: string;
    }[]
  | null;

export default function useBreadcrumbs(entity): BreadcrumbListType {
  const data = useFragment<useBreadcrumbsFragment$key>(fragment, entity);

  const breadcrumbsData = useMemo(() => {
    if (!entity) return null;

    return data.breadcrumbs.map((crumb) => {
      const href = `/${modelMap[crumb.kind]}/${crumb.slug}`;

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
