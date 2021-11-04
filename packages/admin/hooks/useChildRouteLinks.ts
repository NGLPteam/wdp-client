import { useMemo } from "react";
import { RouteHelper } from "../routes";
import type { Props as NamedLinkProps } from "components/atomic/links/NamedLink/NamedLink";

interface Link extends NamedLinkProps {
  label?: string;
}

export function useChildRouteLinks(
  parentRoute: string,
  query: { [key: string]: string | number | string[] | undefined }
): Link[] {
  const mainRoute = RouteHelper.findRouteByName(parentRoute);

  const childRoutes = useMemo(() => {
    if (!mainRoute || !mainRoute.routes) return [];
    return mainRoute.routes;
  }, [mainRoute]);

  const links = useMemo(
    () =>
      childRoutes.map((childRoute) => ({
        label: childRoute.label,
        route: childRoute.name,
        query: query,
      })),
    [childRoutes, query]
  );

  return links;
}

export default useChildRouteLinks;
