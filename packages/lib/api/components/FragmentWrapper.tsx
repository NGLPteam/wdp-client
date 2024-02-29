import { useFragment } from "react-relay";
import type { GraphQLTaggedNode } from "react-relay";
import type { KeyType, KeyTypeData } from "react-relay/relay-hooks/helpers";

export default function FragmentWrapper<TKey extends KeyType>({
  children,
  data,
  fragment,
}: Props<TKey>) {
  const enhancedData = useFragment<TKey>(fragment, data ?? null);
  return children({ enhancedData });
}

type Props<TKey extends KeyType> = {
  children: FragmentRenderer<TKey>;
  data?: TKey | null;
  fragment: GraphQLTaggedNode;
};

interface FragmentRenderProps<TKey extends KeyType> {
  enhancedData: KeyTypeData<TKey>;
}

type FragmentRenderer<TKey extends KeyType> = (
  props: FragmentRenderProps<TKey>,
) => React.JSX.Element | null;
