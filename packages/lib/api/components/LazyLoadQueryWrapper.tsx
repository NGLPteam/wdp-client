import isFunction from "lodash/isFunction";
import { Suspense, useEffect, useDeferredValue } from "react";
import { GraphQLTaggedNode, useLazyLoadQuery } from "react-relay";
import { OperationType } from "relay-runtime";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props<T extends OperationType> = {
  query: GraphQLTaggedNode;
  variables: T["variables"];
  onCompleted?: (data: T["response"], variables: T["variables"]) => void;
  fallback?: React.ReactNode;
  children?: LazyLoadQueryRenderer<T> | React.ReactNode | null;
  checkIsFirst?: boolean;
};

export type LazyLoadQueryRenderer<T extends OperationType> = (props: {
  data: T["response"];
}) => React.ReactNode | null;

/**
 * This component runs a query, and when it's complete returns the data.
 */
export default function LazyLoadQueryWrapper<T extends OperationType>({
  query,
  variables,
  onCompleted,
  fallback,
  children,
}: Props<T>) {
  return (
    <Suspense fallback={fallback}>
      <LazyLoadQueryWrapperInner
        query={query}
        variables={variables}
        onCompleted={onCompleted}
      >
        {children}
      </LazyLoadQueryWrapperInner>
    </Suspense>
  );
}

function LazyLoadQueryWrapperInner<T extends OperationType>({
  query,
  variables,
  onCompleted,
  children,
}: Props<T>) {
  const data = useLazyLoadQuery<T>(query, variables, {
    fetchPolicy: "store-or-network",
  });
  const deferred = useDeferredValue(data);

  useEffect(() => {
    if (onCompleted) {
      onCompleted(deferred, variables);
    }
  }, [deferred, variables, onCompleted]);

  return <>{isFunction(children) ? children({ data: deferred }) : children}</>;
}
