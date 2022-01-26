/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionUpdateForm_schemaErrorsFragment = {
    readonly schemaErrors: ReadonlyArray<{
        readonly hint: boolean;
        readonly message: string;
        readonly metadata: unknown | null;
        readonly path: string;
    }>;
    readonly " $refType": "CollectionUpdateForm_schemaErrorsFragment";
};
export type CollectionUpdateForm_schemaErrorsFragment$data = CollectionUpdateForm_schemaErrorsFragment;
export type CollectionUpdateForm_schemaErrorsFragment$key = {
    readonly " $data"?: CollectionUpdateForm_schemaErrorsFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionUpdateForm_schemaErrorsFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CollectionUpdateForm_schemaErrorsFragment"
};
(node as any).hash = 'ad269a8a7c1848707e489b9c31a9e98a';
export default node;
