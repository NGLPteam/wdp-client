import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useTransition,
} from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  PreloadedQuery,
  PreloadFetchPolicy,
  useQueryLoader,
  GraphQLTaggedNode,
} from "react-relay";
import intersection from "lodash/intersection";
import isEqual from "lodash/isEqual";
import { usePageContext } from "../hooks";
import { QueryOptions } from "../hooks/useAuthenticatedQuery";
import { QueryStateContext, RelayRecordSubscribeProvider } from "../contexts";
import { usePrevious } from "../../hooks";
import ErrorFallback from "./ErrorFallback";
import type { OperationType } from "relay-runtime";

interface Props<T extends OperationType> {
  query: GraphQLTaggedNode;
  variables?: T["variables"];
  children: PreloadQueryRenderer<T>;
  options?: QueryOptions;
  initialQueryRef?: PreloadedQuery<T> | null;
  /** Shows when child components are suspended */
  loadingFallback?: React.ReactNode;
  /** Subscribe to relay records, for invalidating cached records */
  subscribeIds?: string[];
  /** Maintain the old mechanism for refetching that syncs with MutationForm */
  refetchTags?: string[];
}

type Module = {
  default: {
    operation: {
      name: string;
    };
  };
};

export default function QueryLoaderWrapper<T extends OperationType>({
  children,
  variables,
  loadingFallback,
  query,
  initialQueryRef,
  subscribeIds,
  refetchTags,
}: Props<T>) {
  /** Initialize query loader */
  const [queryRef, loadQuery] = useQueryLoader<T>(query, initialQueryRef);

  const [isPending, startTransition] = useTransition();

  const varRef = useRef<string | null>(null);

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

  const match = useMemo(() => {
    const {
      default: { operation },
    } = query as unknown as Module;

    return operation.name === queryRef?.name;
  }, [query, queryRef]);

  /** Reload the query on variable changes */
  useEffect(() => {
    if (!match || varRef.current !== JSON.stringify(variables)) {
      if (!isPending) {
        startTransition(refetchQuery);
        varRef.current = JSON.stringify(variables);
      }
    }
  }, [variables, refetchQuery, match, isPending]);

  // The refetch tags mechanism below is copied from the old relay-hooks QueryWrapper.
  const { triggeredRefetchTags } = usePageContext();

  const previousRefetchTags = usePrevious(refetchTags);
  const previoustriggeredRefetchTags = usePrevious(triggeredRefetchTags);

  // If a mutation triggers a refetch tag, the query should refetch the data with its
  // retry function. See the MutationForm component for the other side of this mechanism.
  useEffect(() => {
    // If one or more of the refetchTags associated with this query are present in the
    // triggeredRefetchTags prop on the mutationForm that fired, then we should probably
    // retry this query.
    const tagIntersects =
      intersection(refetchTags, triggeredRefetchTags).length > 0;
    if (!tagIntersects) return;

    // We're not asking MutationForm consumers to memoize the refetchTags prop, which is
    // an array, so we need to store a reference to the previous version and do a deep
    // compare to avoid unnecessarily triggering the refetch.
    const refetchTagsChanged = !isEqual(previousRefetchTags, refetchTags);

    // In the case of the triggered refetch tags, we need to do a shallow comparison,
    // because the same tag can be triggered twice in a row, in which case the two arrays
    // have deep but not shallow equality. In this case, a refetch is necessary.
    const triggeredRefetchTagsChanged =
      previoustriggeredRefetchTags !== triggeredRefetchTags;

    // If neither the query nor the mutation tags have changed, we can bail out without
    // retrying the query.
    if (!refetchTagsChanged && !triggeredRefetchTagsChanged) return;

    refetchQuery();
  }, [
    triggeredRefetchTags,
    refetchTags,
    refetchQuery,
    previousRefetchTags,
    previoustriggeredRefetchTags,
  ]);

  const renderChildren = () => {
    return children({ queryRef, variables, refetchQuery });
  };

  return (
    <ErrorBoundary
      fallbackRender={({ error }) => <ErrorFallback error={error} />}
    >
      <Suspense fallback={loadingFallback}>
        {/* Don't update query state when queryRef is stale. */}
        <QueryStateContext.Provider
          value={{
            loading: isPending && match,
            completed: !isPending && match,
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
