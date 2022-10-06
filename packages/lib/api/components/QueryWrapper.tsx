import React, { useState, useEffect } from "react";
import type { QueryOptions } from "relay-hooks";
import type { GraphQLTaggedNode, OperationType } from "relay-runtime";
import ErrorPage from "next/error";
import intersection from "lodash/intersection";
import isEqual from "lodash/isEqual";
import { useAuthenticatedQuery, usePageContext } from "../hooks";
import { usePrevious } from "../../hooks";
import { QueryStateContext, QueryVariablesContext } from "../contexts";

export default function QueryWrapper<T extends OperationType>(props: Props<T>) {
  const { query, initialVariables, options, refetchTags } = props;

  const { variables, setVariables } = useManagedVariables<T>(initialVariables);

  useEffect(
    () => initialVariables && setVariables(initialVariables),
    [initialVariables, setVariables]
  );

  const { data, error, isLoading, retry } = useAuthenticatedQuery<T>(
    query,
    variables,
    options
  );

  const { setLoading: setPageLoading, triggeredRefetchTags } = usePageContext();

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

    retry();
  }, [triggeredRefetchTags, refetchTags, retry]);

  useEffect(() => {
    setPageLoading(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const { children, onError } = props;

  if (error) {
    if (onError) {
      return onError({ error });
    } else {
      /* eslint-disable no-console */
      console.log("The QueryWrapper component encountered an error.");
      console.log(error);
      /* eslint-enable no-console */
      return <ErrorPage statusCode={404} />;
    }
  }

  return (
    <QueryStateContext.Provider
      value={{
        started: true,
        loading: isLoading,
        completed: !isLoading,
        retry,
      }}
    >
      <QueryVariablesContext.Provider
        value={{
          queryVariables: variables,
          setQueryVariables: setVariables,
        }}
      >
        {children({ data, variables })}
      </QueryVariablesContext.Provider>
    </QueryStateContext.Provider>
  );
}

interface DataRenderProps<T extends OperationType> {
  data?: T["response"] | null;
  variables?: T["variables"];
}

interface OnEmptyProps<T extends OperationType> {
  variables?: T["variables"];
}

type DataRenderer<T extends OperationType> = (
  props: DataRenderProps<T>
) => JSX.Element | null;
type LoadRenderer = () => JSX.Element;
type ErrorRenderer = (props: { error: Error }) => JSX.Element;
type EmptyRenderer<T extends OperationType> = (
  props: OnEmptyProps<T>
) => JSX.Element;

interface Props<T extends OperationType> {
  refetchTags?: string[];
  query: GraphQLTaggedNode;
  initialVariables?: T["variables"];
  options?: QueryOptions;
  onLoading?: LoadRenderer;
  onError?: ErrorRenderer;
  children: DataRenderer<T>;
  onEmpty?: EmptyRenderer<T>;
}

function useManagedVariables<T extends OperationType>(
  initialVariables?: T["variables"]
) {
  const [variables, setVariables] = useState<T["variables"]>(
    initialVariables ?? {}
  );

  return { variables, setVariables };
}
