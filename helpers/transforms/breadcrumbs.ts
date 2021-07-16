import { modelMap } from "helpers/routes";
import { useBreadcrumbsFragment } from "@/relay/useBreadcrumbsFragment.graphql";
import { EntityBreadcrumb } from "types/graphql-schema";

const transformBreadcrumbList = (
  breadcrumbs: EntityBreadcrumb[] | useBreadcrumbsFragment["breadcrumbs"],
  currentLabel: string
): Record<string, string>[] => {
  const breadcrumbsData = breadcrumbs.map((crumb) => {
    const href = `/${modelMap[crumb.kind]}/${crumb.slug}`;

    return {
      label: crumb.label,
      href: href,
    };
  });
  // Now add the current id as active crumb
  // since it currently doesn't come from the data breadcrumbs
  breadcrumbsData.push({ label: currentLabel, href: "#" });

  return breadcrumbsData;
};

export default transformBreadcrumbList;
