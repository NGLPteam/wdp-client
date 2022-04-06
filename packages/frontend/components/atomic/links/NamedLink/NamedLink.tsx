import React, { forwardRef } from "react";
import Link from "next/link";
import { RouteHelper } from "routes";
import { useViewerContext } from "hooks";
type LinkProps = React.ComponentProps<typeof Link>;

/**
 * This component takes a route name and passes the route's full href value.
 */
const NamedLink = forwardRef(
  (
    {
      route: routeName,
      routeParams,
      query,
      children,
      passHref,
      ...props
    }: Props,
    ref
  ) => {
    // Find the route
    const route = RouteHelper.findRouteByName(routeName);

    const { allowedActions } = useViewerContext();

    const isAuthorized = route?.actions
      ? route.actions.some((action) => allowedActions.includes(action))
      : true;

    // If the route doesn't exist, warn dev in the console
    if (!route) {
      console.warn(`Route ${routeName} not found`, RouteHelper.routes);
      return null;
    }

    // next/link takes both route params and search params and rolls them into 'query'
    const nextQuery = { ...routeParams, ...query };

    // If the route redirects to another route, link to the redirect path.
    const path = route.redirect ? route.redirect : route.path;

    return isAuthorized ? (
      <Link
        href={{ pathname: path, query: nextQuery }}
        passHref={passHref}
        {...props}
      >
        {React.isValidElement(children)
          ? React.cloneElement(children, { ref, ...props })
          : children}
      </Link>
    ) : null;
  }
);
export interface Props extends Omit<LinkProps, "href"> {
  /** The named route */
  route: string;
  /** Route parameters */
  routeParams?: Record<string, string | number>;
  /** Query parameters */
  query?: { [key: string]: string | string[] | number | undefined };
  /** Pass href to child component */
  passHref?: boolean;
}

export default NamedLink;
