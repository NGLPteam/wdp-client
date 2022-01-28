/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemUpdateForm_schemaErrorsFragment = {
    readonly schemaErrors: ReadonlyArray<{
        readonly hint: boolean;
        readonly message: string;
        readonly metadata: unknown | null;
        readonly path: string;
    }>;
    readonly " $refType": "ItemUpdateForm_schemaErrorsFragment";
};
export type ItemUpdateForm_schemaErrorsFragment$data = ItemUpdateForm_schemaErrorsFragment;
export type ItemUpdateForm_schemaErrorsFragment$key = {
    readonly " $data"?: ItemUpdateForm_schemaErrorsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemUpdateForm_schemaErrorsFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "ItemUpdateForm_schemaErrorsFragment"
};
(node as any).hash = '1640f84d874ff8994761f019067fcdc3';
export default node;
