import React from "react";
import Link from "next/link";
import { normalizePathData, routes } from "helpers/routes";
import { UrlObject } from "url";

const MixedLink = ({
  children,
  href,
  params,
  passHref = false,
  route,
  tabIndex = 0,
  ...props
}: Props) => {
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
      <a href={url} tabIndex={tabIndex} {...props}>
        {children}
      </a>
    );
  } else {
    const pathnameInput = url || "/";
    const { pathname, pathParams } = normalizePathData(pathnameInput);
    const linkObject: UrlObject = {
      pathname: pathname || "",
      query: { ...pathParams, ...params },
    };

    return (
      <Link href={linkObject} passHref={passHref}>
        <a tabIndex={tabIndex} {...props}>
          {children}
        </a>
      </Link>
    );
  }
};

export interface Props {
  children: React.ReactNode;
  href?: string;
  params?: Record<string, string | number>;
  passHref?: boolean;
  route?: string;
  tabIndex?: number;
}

export default MixedLink;
