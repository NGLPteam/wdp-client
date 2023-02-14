/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getEntitySitemapFragment = {
    readonly __typename: "Community";
    readonly slug: string;
    readonly updatedAt: string;
    readonly collections: {
        readonly pageInfo: {
            readonly pageCount: number | null;
        };
    };
    readonly " $refType": "getEntitySitemapFragment";
} | {
    readonly __typename: "Collection";
    readonly slug: string;
    readonly updatedAt: string;
    readonly collections: {
        readonly pageInfo: {
            readonly pageCount: number | null;
        };
    };
    readonly items: {
        readonly pageInfo: {
            readonly pageCount: number | null;
        };
    };
    readonly " $refType": "getEntitySitemapFragment";
} | {
    readonly __typename: "Item";
    readonly slug: string;
    readonly updatedAt: string;
    readonly items: {
        readonly pageInfo: {
            readonly pageCount: number | null;
        };
    };
    readonly " $refType": "getEntitySitemapFragment";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "getEntitySitemapFragment";
};
export type getEntitySitemapFragment$data = getEntitySitemapFragment;
export type getEntitySitemapFragment$key = {
    readonly " $data"?: getEntitySitemapFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getEntitySitemapFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getEntitySitemapFragment"
};
(node as any).hash = '2c3ddd020c4bc13f9cbd23e1ba8aa55d';
export default node;
