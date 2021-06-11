import { QueryOptions, useQuery } from "relay-hooks";

import useAuthenticatedFetchKey from "./useAuthenticatedFetchKey";
import type { GraphQLTaggedNode, OperationType } from "relay-runtime";

export default function useAuthenticatedQuery<
  T extends OperationType = OperationType
>(
  gqlQuery: GraphQLTaggedNode,
  variables?: T["variables"],
  options?: QueryOptions
) {
  const fetchKey = useAuthenticatedFetchKey();

  const proxiedOptions: QueryOptions = { fetchKey, ...options };

  return useQuery<T>(gqlQuery, variables, proxiedOptions);
}
