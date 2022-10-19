/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PublishedDateColumnFragment = {
    readonly published: {
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly " $refType": "PublishedDateColumnFragment";
};
export type PublishedDateColumnFragment$data = PublishedDateColumnFragment;
export type PublishedDateColumnFragment$key = {
    readonly " $data"?: PublishedDateColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PublishedDateColumnFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "PublishedDateColumnFragment"
};
(node as any).hash = '639d8cee49a6849552ed809202030da0';
export default node;
