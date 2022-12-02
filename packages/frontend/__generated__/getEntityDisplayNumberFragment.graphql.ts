/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getEntityDisplayNumberFragment = {
    readonly volume?: {
        readonly title?: string | undefined;
        readonly number?: {
            readonly content?: string | null | undefined;
        } | null | undefined;
    } | null | undefined;
    readonly issueNumber?: {
        readonly content?: string | null | undefined;
    } | null | undefined;
    readonly volumeNumber?: {
        readonly content?: string | null | undefined;
    } | null | undefined;
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
(node as any).hash = 'a324df77ea10e1d31a7ffba282768eb7';
export default node;
