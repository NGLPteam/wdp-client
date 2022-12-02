/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getEntityVolumeNumberFragment = {
    readonly volume?: {
        readonly number?: {
            readonly content?: string | null | undefined;
        } | null | undefined;
    } | null | undefined;
    readonly volumeNumber?: {
        readonly content?: string | null | undefined;
    } | null | undefined;
    readonly " $refType": "getEntityVolumeNumberFragment";
};
export type getEntityVolumeNumberFragment$data = getEntityVolumeNumberFragment;
export type getEntityVolumeNumberFragment$key = {
    readonly " $data"?: getEntityVolumeNumberFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getEntityVolumeNumberFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getEntityVolumeNumberFragment"
};
(node as any).hash = '9d0a4d9fdbd631854ddd9f81772ac64f';
export default node;
