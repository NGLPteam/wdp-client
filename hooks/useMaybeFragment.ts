import { useFragment } from "react-relay";
import type { GraphQLTaggedNode } from "react-relay";

type Fragment = Readonly<{
  " $data"?: unknown;
  " $fragmentRefs": unknown;
}>;

export default function useMaybeFragment<TKey extends Fragment>(
  fragmentInput: GraphQLTaggedNode,
  fragmentRef?: TKey | null
) {
  return useFragment<TKey>(fragmentInput, fragmentRef ?? null);
}
