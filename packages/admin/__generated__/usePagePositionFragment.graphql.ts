/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type usePagePositionFragment = {
    readonly pageId: string;
    readonly title: string;
    readonly slug: string;
    readonly body: string;
    readonly position: number | null;
    readonly " $refType": "usePagePositionFragment";
};
export type usePagePositionFragment$data = usePagePositionFragment;
export type usePagePositionFragment$key = {
    readonly " $data"?: usePagePositionFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"usePagePositionFragment">;
};



const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "usePagePositionFragment"
};
(node as any).hash = '12bf56ac7db80d5c54052b4e9a5d66b6';
export default node;
