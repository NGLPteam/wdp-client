/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type useResetOrderingFragment = {
    readonly destroyed?: boolean | null | undefined;
    readonly globalErrors?: ReadonlyArray<{
        readonly message: string;
        readonly type: string;
    }> | undefined;
    readonly revoked?: boolean | null | undefined;
    readonly disabled?: boolean | null | undefined;
    readonly " $refType": "useResetOrderingFragment";
};
export type useResetOrderingFragment$data = useResetOrderingFragment;
export type useResetOrderingFragment$key = {
    readonly " $data"?: useResetOrderingFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useResetOrderingFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "useResetOrderingFragment"
};
(node as any).hash = 'd502755a7f3ac40e9d562924a78666f2';
export default node;
