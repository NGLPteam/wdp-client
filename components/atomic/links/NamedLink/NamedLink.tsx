import React, { forwardRef } from "react";
import Link from "next/link";
import { routes } from "helpers";
type LinkProps = React.ComponentProps<typeof Link>;

/**
 * This component takes a route name and passes the route's full href value.
 */
const NamedLink = forwardRef(
  ({ route, routeParams, query, children, passHref, ...props }: Props, ref) => {
    // If the route can't be found, fallback to the original value
    const pathname = routes[route] ? routes[route](routeParams) : route;

    // Pass all other props to Link
    return (
      <Link href={{ pathname, query }} passHref={passHref} {...props}>
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
  query?: Record<string, string | number>;
  /** Pass href to child component */
  passHref?: boolean;
}

export default NamedLink;
