import React, { useState, useEffect } from "react";
import { QueryOptions } from "relay-hooks";
import QueryVariablesContext from "contexts/QueryVariablesContext";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import type { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { usePageContext } from "hooks";
import { QueryStateContext } from "contexts";
import ErrorPage from "next/error";
export default function QueryWrapper<T extends OperationType>(props: Props<T>) {
  const { query, initialVariables, options } = props;

  const { variables, setVariables } = useManagedVariables<T>(initialVariables);

  useEffect(() => initialVariables && setVariables(initialVariables), [
    initialVariables,
    setVariables,
  ]);

  const { data, error, isLoading } = useAuthenticatedQuery<T>(
    query,
    variables,
    options
  );

  const { setLoading: setPageLoading } = usePageContext();

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
      value={{ started: true, loading: isLoading, completed: !isLoading }}
    >
      <QueryVariablesContext.Provider
        value={{ queryVariables: variables, setQueryVariables: setVariables }}
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
