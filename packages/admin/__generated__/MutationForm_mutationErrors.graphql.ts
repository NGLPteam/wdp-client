/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type MutationForm_mutationErrors = {
    readonly attributeErrors: ReadonlyArray<{
        readonly path: string;
        readonly type: string;
        readonly messages: ReadonlyArray<string>;
    }>;
    readonly globalErrors: ReadonlyArray<{
        readonly message: string;
    }>;
    readonly errors: ReadonlyArray<{
        readonly message: string;
    }>;
    readonly " $refType": "MutationForm_mutationErrors";
};
export type MutationForm_mutationErrors$data = MutationForm_mutationErrors;
export type MutationForm_mutationErrors$key = {
    readonly " $data"?: MutationForm_mutationErrors$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"MutationForm_mutationErrors">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "MutationForm_mutationErrors"
};
(node as any).hash = '0995e98f6c32f8229802aac5f5e85045';
export default node;
