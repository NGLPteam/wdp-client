import isArray from "lodash/isArray";

// eslint-disable-next-line
export function normalizeArray(item: any) {
  return isArray(item) ? item : [item];
}
