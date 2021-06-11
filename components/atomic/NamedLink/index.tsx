import React from "react";
import Link from "next/link";
import { fuzzyMatchPaths } from "utils/paths";
import { useRouter } from "next/router";
import isFunction from "lodash/isFunction";

// TODO: Route definitions shouldn't live in this component. Where should they live?
// TODO: Make route generation more robust, support query string, anchor, etc.
// TODO: Throw an exception if a named route isn't found.
// TODO: Consider adding a `fuzzy` param instead of assuming active matching is always fuzzy.

const routes = {
  communityList: (params) => `/communities`,
  communityDetail: (params) => `/communities/${params.slug}`,
  collectionList: (params) => `/collections`,
  collectionDetail: (params) => `/collections/${params.slug}`,
  itemList: (params) => `/items`,
  itemDetail: (params) => `/items/${params.slug}`,
};

function NamedLink({ route, params = {}, children, ...linkProps }) {
  const { asPath } = useRouter();
  const href = routes[route](params);
  const active = fuzzyMatchPaths(href, asPath);
  const childIsRenderFunc = isFunction(children);

  return (
    <Link href={href} {...linkProps}>
      {childIsRenderFunc ? children({ active }) : children}
    </Link>
  );
}

export default NamedLink;
