/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityNameColumnFragment = {
    readonly name: string;
    readonly slug: string;
    readonly " $refType": "CommunityNameColumnFragment";
};
export type CommunityNameColumnFragment$data = CommunityNameColumnFragment;
export type CommunityNameColumnFragment$key = {
    readonly " $data"?: CommunityNameColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityNameColumnFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "CommunityNameColumnFragment"
};
(node as any).hash = '1d39e7d2d85dc1b4a7706453a91aca4e';
export default node;
