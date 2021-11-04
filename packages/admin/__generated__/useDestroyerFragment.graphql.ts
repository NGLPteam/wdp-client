/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type useDestroyerFragment = {
    readonly destroyed?: boolean | null | undefined;
    readonly globalErrors?: ReadonlyArray<{
        readonly message: string;
        readonly type: string;
    }> | undefined;
    readonly revoked?: boolean | null | undefined;
    readonly disabled?: boolean | null | undefined;
    readonly " $refType": "useDestroyerFragment";
};
export type useDestroyerFragment$data = useDestroyerFragment;
export type useDestroyerFragment$key = {
    readonly " $data"?: useDestroyerFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useDestroyerFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useDestroyerFragment"
};
(node as any).hash = 'fde776a3a4a19ebefb1b262474b47125';
export default node;
