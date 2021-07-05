import { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useBreadcrumbsFragment$key } from "__generated__/useBreadcrumbsFragment.graphql";
import { transformBreadcrumbList } from "helpers/transforms";

export type BreadcrumbListType = ReturnType<typeof transformBreadcrumbList>;

// TODO: Property types
export default function useBreadcrumbs(entity): BreadcrumbListType {
  const data = useFragment<useBreadcrumbsFragment$key>(fragment, entity);

  const breadcrumbsData = useMemo(() => {
    if (!entity) return null;

    return transformBreadcrumbList(data.breadcrumbs, entity.title);
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
