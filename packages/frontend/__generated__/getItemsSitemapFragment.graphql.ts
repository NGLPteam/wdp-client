/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getItemsSitemapFragment = {
    readonly nodes: ReadonlyArray<{
        readonly __typename: string;
        readonly slug: string;
        readonly updatedAt: string;
    }>;
    readonly " $refType": "getItemsSitemapFragment";
};
export type getItemsSitemapFragment$data = getItemsSitemapFragment;
export type getItemsSitemapFragment$key = {
    readonly " $data"?: getItemsSitemapFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getItemsSitemapFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getItemsSitemapFragment"
};
(node as any).hash = '9bef693045b4fbff4f0418abe830c499';
export default node;
