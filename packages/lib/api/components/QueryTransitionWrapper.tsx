import { Suspense, useCallback, useEffect, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  PreloadedQuery,
  PreloadFetchPolicy,
  useQueryLoader,
  GraphQLTaggedNode,
} from "react-relay";
import { usePreloadOnMount } from "../hooks";
import { QueryOptions } from "../hooks/useAuthenticatedQuery";
import { QueryStateContext, RelayRecordSubscribeProvider } from "../contexts";
import ErrorFallback from "./ErrorFallback";
import type { OperationType } from "relay-runtime";

interface Props<T extends OperationType> {
  query: OperationType | GraphQLTaggedNode;
  variables?: T["variables"];
  children: PreloadQueryRenderer<T>;
  options?: QueryOptions;
  initialQueryRef?: PreloadedQuery<T> | null;
  /** Shows when child components are suspended */
  loadingFallback?: React.ReactNode;
  /** Subscribe to relay records, for invalidating cached records */
  subscribeIds?: string[];
}

export default function QueryLoaderWrapper<T extends OperationType>({
  children,
  variables,
  loadingFallback,
  query,
  initialQueryRef,
  subscribeIds,
}: Props<T>) {
  /** Initialize query loader */
  const [queryRef, loadQuery] = useQueryLoader<T>(query, initialQueryRef);

  const [isPending, startTransition] = useTransition();

  /** Preload data */
  usePreloadOnMount<T>(queryRef, loadQuery, variables ?? {});

  /** Reload query callback */
  const refetchQuery = useCallback(
    (props?: ReloadQueryProps) => {
      loadQuery(
        { ...variables },
        { fetchPolicy: "store-and-network", ...props?.options },
      );
    },
    [loadQuery, variables],
  );

  /** Reload the query on variable changes */
  useEffect(() => {
    startTransition(refetchQuery);
  }, [variables, refetchQuery]);

  const renderChildren = () => {
    return children({ queryRef, variables, refetchQuery });
  };

  return (
    <ErrorBoundary
      fallbackRender={({ error }) => <ErrorFallback error={error} />}
    >
      <Suspense fallback={loadingFallback}>
        <QueryStateContext.Provider
          value={{
            started: true,
            loading: isPending,
            completed: !isPending,
          }}
        >
          {subscribeIds ? (
            <RelayRecordSubscribeProvider
              subscribeIds={subscribeIds}
              refetchQuery={refetchQuery}
            >
              {renderChildren()}
            </RelayRecordSubscribeProvider>
          ) : (
            renderChildren()
          )}
        </QueryStateContext.Provider>
      </Suspense>
    </ErrorBoundary>
  );
}

interface ReloadQueryProps {
  options?: { fetchPolicy: PreloadFetchPolicy };
}

interface PreloadQueryRenderProps<T extends OperationType> {
  queryRef?: PreloadedQuery<T> | null;
  variables?: T["variables"];
  refetchQuery: (props?: ReloadQueryProps) => void;
}

export type PreloadQueryRenderer<T extends OperationType> = (
  props: PreloadQueryRenderProps<T>,
) => React.JSX.Element | null | undefined;
