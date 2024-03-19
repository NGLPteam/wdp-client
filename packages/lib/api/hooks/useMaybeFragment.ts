import { useFragment } from "react-relay";
import type { GraphQLTaggedNode } from "react-relay";
import type { KeyType } from "react-relay/relay-hooks/helpers";

export default function useMaybeFragment<TKey extends KeyType>(
  fragmentInput: GraphQLTaggedNode,
  fragmentRef?: TKey | null,
) {
  return useFragment<TKey>(fragmentInput, fragmentRef ?? null);
}
