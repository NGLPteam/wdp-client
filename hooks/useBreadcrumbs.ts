import { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useBreadcrumbsFragment$key } from "__generated__/useBreadcrumbsFragment.graphql";
import transformBreadcrumbList from "helpers/transforms/breadcrumbs";

// TODO: Property types
// TODO: Return type
export default function useBreadcrumbs(entity) {
  const { breadcrumbs } = useFragment<useBreadcrumbsFragment$key>(
    fragment,
    entity
  );

  const breadcrumbsData = useMemo(() => {
    if (!entity) return [];

    return transformBreadcrumbList(breadcrumbs, entity.title);
  }, [breadcrumbs, entity]);

  return breadcrumbsData;
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
