import { useLazyLoadQuery, GraphQLTaggedNode } from "react-relay";
import useAuthenticatedFetchKey from "./useAuthenticatedFetchKey";
import type {
  CacheConfig,
  FetchPolicy,
  GraphQLResponse,
  OperationType,
  RenderPolicy,
} from "relay-runtime";

export type QueryOptions = {
  fetchPolicy?: FetchPolicy;
  fetchKey?: string | number;
  networkCacheConfig?: CacheConfig;
  skip?: boolean;
  onResponse?: (response: GraphQLResponse) => void;
  onComplete?: (_e: Error | null) => void;
  UNSTABLE_renderPolicy?: RenderPolicy;
};

export default function useAuthenticatedQuery<
  T extends OperationType = OperationType
>(gqlQuery: GraphQLTaggedNode, variables = {}, options?: QueryOptions) {
  const fetchKey = useAuthenticatedFetchKey();

  const proxiedOptions: QueryOptions = { fetchKey, ...options };

  // eslint-disable-next-line relay/generated-flow-types
  return useLazyLoadQuery<T>(gqlQuery, variables, proxiedOptions);
}
