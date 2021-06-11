// TODO: Should route definitions live here? Where should they live?
// TODO: Make route generation more robust, support query string, anchor, etc.
// TODO: Throw an exception if a named route isn't found.
// TODO: Consider adding a `fuzzy` param instead of assuming active matching is always fuzzy.
import { fuzzyMatchPaths } from "utils/paths";

const routes = {
  communityList: () => `/communities`,
  communityDetail: (params) => `/communities/${params.slug}`,
  collectionList: () => `/collections`,
  collectionDetail: (params) => `/collections/${params.slug}`,
  itemList: () => `/items`,
  itemDetail: (params) => `/items/${params.slug}`,
};

// Gets the current asPath from useRouter
// Returns if route and params match the current path
function isActiveRoute(asPath, route, params = null) {
  const href = routes[route](params);
  return fuzzyMatchPaths(href, asPath);
}

export { routes, isActiveRoute };
