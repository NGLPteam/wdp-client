/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useDestroyerFragment = {
    readonly destroyed: boolean | null;
    readonly globalErrors: ReadonlyArray<{
        readonly message: string;
        readonly type: string;
    }>;
    readonly " $refType": "useDestroyerFragment";
};
export type useDestroyerFragment$data = useDestroyerFragment;
export type useDestroyerFragment$key = {
    readonly " $data"?: useDestroyerFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"useDestroyerFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useDestroyerFragment"
};
(node as any).hash = '6747fde3b910db3c320f13be497e1017';
export default node;
