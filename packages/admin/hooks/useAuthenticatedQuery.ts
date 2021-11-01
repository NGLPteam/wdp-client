import { QueryOptions, useQuery } from "relay-hooks";

import type { GraphQLTaggedNode, OperationType } from "relay-runtime";
import useAuthenticatedFetchKey from "./useAuthenticatedFetchKey";

export default function useAuthenticatedQuery<
  T extends OperationType = OperationType
>(
  gqlQuery: GraphQLTaggedNode,
  variables?: T["variables"],
  options?: QueryOptions
) {
  const fetchKey = useAuthenticatedFetchKey();

  const proxiedOptions: QueryOptions = { fetchKey, ...options };

  // eslint-disable-next-line relay/generated-flow-types
  return useQuery<T>(gqlQuery, variables, proxiedOptions);
}
