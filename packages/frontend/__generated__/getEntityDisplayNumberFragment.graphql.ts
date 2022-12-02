/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getEntityDisplayNumberFragment = {
    readonly issueNumber?: {
        readonly content?: string | null | undefined;
    } | null | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getEntityVolumeNumberFragment">;
    readonly " $refType": "getEntityDisplayNumberFragment";
};
export type getEntityDisplayNumberFragment$data = getEntityDisplayNumberFragment;
export type getEntityDisplayNumberFragment$key = {
    readonly " $data"?: getEntityDisplayNumberFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getEntityDisplayNumberFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getEntityDisplayNumberFragment"
};
(node as any).hash = 'b09c02fae8afe1e9c24fb0ccf9352a54';
export default node;
