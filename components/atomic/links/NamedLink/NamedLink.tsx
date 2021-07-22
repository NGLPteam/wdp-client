import React, { forwardRef } from "react";
import Link from "next/link";
import { RouteHelper } from "helpers";
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

    // If the route doesn't exist, warn dev in the console
    if (!route) {
      // console.warn(`Route ${routeName} not found`, RouteHelper.routes);
      return null;
    }

    // next/link takes both route params and search params and rolls them into 'query'
    const nextQuery = { ...routeParams, ...query };

    return (
      <Link
        href={{ pathname: route.path, query: nextQuery }}
        passHref={passHref}
        {...props}
      >
        {React.isValidElement(children)
          ? React.cloneElement(children, { ref, ...props })
          : children}
      </Link>
    );
  }
);
export interface Props extends Omit<LinkProps, "href"> {
  /** The named route */
  route: string;
  /** Route parameters */
  routeParams?: Record<string, string | number>;
  /** Query parameters */
  query?: { [key: string]: string | string[] | number };
  /** Pass href to child component */
  passHref?: boolean;
}

export default NamedLink;
