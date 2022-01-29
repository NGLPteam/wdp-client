/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type getEntityTitleFragment = {
    readonly __typename: string;
    readonly title: string;
    readonly schemaVersion: {
        readonly identifier: string;
    };
    readonly namedAncestors?: ReadonlyArray<{
        readonly ancestor: {
            readonly title?: string | undefined;
        };
    }> | undefined;
    readonly " $refType": "getEntityTitleFragment";
};
export type getEntityTitleFragment$data = getEntityTitleFragment;
export type getEntityTitleFragment$key = {
    readonly " $data"?: getEntityTitleFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"getEntityTitleFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "getEntityTitleFragment"
};
(node as any).hash = 'b2c655a56c2308a93728710382f17ecd';
export default node;
