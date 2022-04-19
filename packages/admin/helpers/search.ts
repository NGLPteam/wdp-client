import { SearchPredicateInput } from "types/graphql-schema";

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
