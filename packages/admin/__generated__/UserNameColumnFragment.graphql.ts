/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserNameColumnFragment = {
    readonly " $fragmentRefs": FragmentRefs<"UserNameColumnCellFragment">;
    readonly " $refType": "UserNameColumnFragment";
};
export type UserNameColumnFragment$data = UserNameColumnFragment;
export type UserNameColumnFragment$key = {
    readonly " $data"?: UserNameColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserNameColumnFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "UserNameColumnFragment"
};
(node as any).hash = '8ac00e0acbe4f975618b5fd8c0e46a49';
export default node;
