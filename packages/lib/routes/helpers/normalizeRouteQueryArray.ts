import isArray from "lodash/isArray";

export default function normalizeRouteQueryArray(
  item?: string | string[],
): string[] {
  if (!item) return [];
  return isArray(item) ? item : [item];
}
