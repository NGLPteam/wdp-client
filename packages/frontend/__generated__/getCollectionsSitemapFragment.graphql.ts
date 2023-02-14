/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getCollectionsSitemapFragment = {
    readonly nodes: ReadonlyArray<{
        readonly __typename: string;
        readonly slug: string;
        readonly updatedAt: string;
    }>;
    readonly " $refType": "getCollectionsSitemapFragment";
};
export type getCollectionsSitemapFragment$data = getCollectionsSitemapFragment;
export type getCollectionsSitemapFragment$key = {
    readonly " $data"?: getCollectionsSitemapFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getCollectionsSitemapFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getCollectionsSitemapFragment"
};
(node as any).hash = 'e4a72caa3455bec3dbcf5df33432e3ff';
export default node;
