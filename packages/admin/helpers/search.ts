import { SearchPredicateInput } from "types/graphql-schema";

/**
 * Returns an array of predicate objects in the format:
 * {
 *   operator: { // equals, dateGTE, etc
 *     path, // predicate path name,
 *     value
 *   }
 * }
 */
export function getPredicates(
  filters: Record<string, string>
): [SearchPredicateInput] | undefined {
  const predicates: [SearchPredicateInput?] = [];

  Object.keys(filters).forEach((key) => {
    const pairs = key.split("--");

    if (!pairs || pairs.length !== 2) return;

    const operator = pairs[1];
    const path = pairs[0].replace("-", ".");
    const value = filters[key];

    predicates.push({
      [operator]: { path, value },
    });
  });

  return predicates ? (predicates as [SearchPredicateInput]) : undefined;
}

/**
 * Returns an array of predicate objects in the format:
 * {
 *   path, // predicate path name
 *   value,
 *   operator, // equals, dateGTE, etc
 * }
 */
export function getPredicatesTwo(
  filters: Record<string, string>
): Record<string, string>[] {
  const predicates: Record<string, string>[] = [];

  Object.keys(filters).forEach((key) => {
    const pairs = key.split("--");

    if (!pairs || pairs.length !== 2) return;

    const operator = pairs[1];
    const path = pairs[0].replace("-", ".");
    const value = filters[key];

    predicates.push({ path, value, operator });
  });

  return predicates;
}
