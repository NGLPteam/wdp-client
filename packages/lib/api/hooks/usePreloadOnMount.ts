import { useEffect } from "react";
import { PreloadedQuery, PreloadFetchPolicy } from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryOptions } from "./useAuthenticatedQuery";

type PreloadQueryOptions = Omit<QueryOptions, "fetchPolicy"> & {
  fetchPolicy?: PreloadFetchPolicy | null;
};

export default function usePreloadOnMount<T extends OperationType>(
  queryRef: PreloadedQuery<T, Record<string, unknown>> | undefined | null,
  loadQuery: (variables: T["variables"], options?: PreloadQueryOptions) => void,
  variables: T["variables"],
  options?: PreloadQueryOptions,
) {
  useEffect(() => {
    if (!queryRef && loadQuery) loadQuery(variables, options);
  }, [queryRef, loadQuery, variables, options]);
}
