import { RouteHelper } from "./RouteHelper";
import { baseRoutes } from "./baseRoutes";
import isArray from "lodash/isArray";

function routeQueryArrayToString(item: string | string[]): string {
  return isArray(item) ? item[0] : item;
}

export { RouteHelper, baseRoutes, routeQueryArrayToString };
