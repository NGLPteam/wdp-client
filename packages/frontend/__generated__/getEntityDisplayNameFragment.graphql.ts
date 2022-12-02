/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getEntityDisplayNameFragment = {
    readonly title?: string | undefined;
    readonly volume?: {
        readonly title?: string | undefined;
    } | null | undefined;
    readonly issueNumber?: {
        readonly content?: string | null | undefined;
    } | null | undefined;
    readonly volumeNumber?: {
        readonly content?: string | null | undefined;
    } | null | undefined;
    readonly " $refType": "getEntityDisplayNameFragment";
};
export type getEntityDisplayNameFragment$data = getEntityDisplayNameFragment;
export type getEntityDisplayNameFragment$key = {
    readonly " $data"?: getEntityDisplayNameFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getEntityDisplayNameFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getEntityDisplayNameFragment"
};
(node as any).hash = '3d8e8c964d9ad885dff22d55e926c039';
export default node;
