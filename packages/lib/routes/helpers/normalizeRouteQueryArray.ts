import isArray from "lodash/isArray";

export default function normalizeRouteQueryArray(
  item?: string | string[] | null,
): string[] {
  if (!item) return [];
  return isArray(item) ? item : [item];
}
