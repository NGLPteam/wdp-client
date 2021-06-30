import React, { forwardRef } from "react";
import Link from "next/link";
import { normalizePathData, routes } from "helpers/routes";
import { UrlObject } from "url";

/**
 * This component does a couple things:
 *
 * 1. Checks if the href passed in is external or internal
 * 2. If a route is provided, it finds and passes the route's full href value to the child link
 * 3. If the child element is a React component, it passes the link props to the child component
 * 4. Forwards ref value down to the child component
 */
const MixedLink = forwardRef(
  (
    { children, href, params, passHref = false, route, ...props }: Props,
    ref
  ) => {
    // make sure we're not working with an internal url -- TODO: expand this with the production domain when ready
    let url = href?.replace(
      /((https:\/\/|http:\/\/)(\w|\.|-)*nglp(\.\w+)*\/)/,
      ""
    );
    if (route) {
      url = routes[route](params);
    }

    // external links don't go through next/link
    if (url?.startsWith("http") || url?.startsWith("//")) {
      return (
        <Link href={url} passHref={true} {...props}>
          {React.isValidElement(children)
            ? React.cloneElement(children, { ref, ...props })
            : children}
        </Link>
      );
    } else {
      const pathnameInput = url || "/";
      const { pathname, pathParams } = normalizePathData(pathnameInput);
      const linkObject: UrlObject = {
        pathname: pathname || "",
        query: { ...pathParams, ...params },
      };

      return (
        <Link href={linkObject} passHref={passHref} {...props}>
          {React.isValidElement(children)
            ? React.cloneElement(children, { ref, ...props })
            : children}
        </Link>
      );
    }
  }
);
export interface Props {
  children: React.ReactNode;
  href?: string;
  /** Query parameters */
  params?: Record<string, string | number>;
  /** Pass the href to the child component */
  passHref?: boolean;
  route?: string;
}

export default MixedLink;
