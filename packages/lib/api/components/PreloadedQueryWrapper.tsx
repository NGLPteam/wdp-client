import {
  PreloadedQuery,
  usePreloadedQuery,
  GraphQLTaggedNode,
} from "react-relay";
import type { OperationType } from "relay-runtime";

interface Props<T extends OperationType> {
  query: GraphQLTaggedNode;
  children: PreloadQueryRenderer<T>;
  queryRef: PreloadedQuery<T>;
}

export default function PreloadedQueryWrapper<T extends OperationType>({
  children,
  query,
  queryRef,
}: Props<T>) {
  /** Initialize query loader */
  const data = usePreloadedQuery<T>(query, queryRef);

  return children({ data });
}

interface PreloadQueryRenderProps<T extends OperationType> {
  data: T["response"];
}

export type PreloadQueryRenderer<T extends OperationType> = (
  props: PreloadQueryRenderProps<T>
) => JSX.Element | null;
