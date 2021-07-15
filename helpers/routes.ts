// TODO: Should route definitions live here? Where should they live?
// TODO: Make route generation more robust, support query string, anchor, etc.
// TODO: Throw an exception if a named route isn't found.
// TODO: Consider adding a `fuzzy` param instead of assuming active matching is always fuzzy.
import { fuzzyMatchPaths } from "utils/paths";

type Params = {
  id?: string;
};

type RouteProps = (params?: Params) => string;
interface RoutesMap {
  [key: string]: RouteProps;
}

export const entityMap = {
  COMMUNITY: "communities",
  COLLECTION: "collections",
  ITEM: "items",
  USER: "users",
  CONTRIBUTOR: "contributors",
};

export const routes: RoutesMap = {
  communityList: (): string => `/communities`,
  communityDetail: (params?: Params): string => `/communities/${params?.id}`,
  collectionList: (): string => `/collections`,
  collectionDetail: (params?: Params): string => `/collections/${params?.id}`,
  itemList: (): string => `/items`,
  itemDetail: (params?: Params): string => `/items/${params?.id}`,
  userList: (): string => `/users`,
  userDetail: (params?: Params): string => `/users/${params?.id}`,
  contributorList: (): string => `/contributors`,
  contributorDetail: (params?: Params): string => `/contributors/${params?.id}`,
};

// Gets the current asPath from useRouter
// Returns if route and params match the current path
export function isActiveRoute(asPath: string, route: string, params?: Params) {
  const href = routes[route](params);
  return fuzzyMatchPaths(href, asPath);
}

export const normalizePathData = (pathnameInput: string) => {
  // In Next, params should come in as an object, { key: "value" }
  // however, if there is a querystring in the asPath, we must split them
  // so they are ready to be like this in the Next Link component:
  // const href = {
  //   pathname: simplePathname,
  //   query: { ...pathParams, ...params },
  // };
  if (!pathnameInput) return { pathParams: {} };

  const pathnameArray = pathnameInput.split("?");
  const simplePathname = pathnameArray.shift();
  const pathname = simplePathname?.startsWith("/")
    ? simplePathname
    : "/" + simplePathname;
  const urlParams = new URLSearchParams(pathnameArray.shift());
  const pathParams = Object.fromEntries(urlParams);

  return { pathname, pathParams } as const;
};
