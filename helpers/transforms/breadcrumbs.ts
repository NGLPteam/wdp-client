import { entityMap } from "helpers/routes";

const transformBreadcrumbList = (
  breadcrumbs,
  currentLabel
): Record<string, string>[] => {
  const breadcrumbsData = breadcrumbs.map((crumb) => {
    const href = `/${entityMap[crumb.kind]}/${crumb.slug}`;

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
