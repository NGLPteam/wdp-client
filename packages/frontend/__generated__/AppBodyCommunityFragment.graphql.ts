/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppBodyCommunityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderCommunityFragment" | "AppFooterCommunityFragment">;
    readonly " $refType": "AppBodyCommunityFragment";
};
export type AppBodyCommunityFragment$data = AppBodyCommunityFragment;
export type AppBodyCommunityFragment$key = {
    readonly " $data"?: AppBodyCommunityFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppBodyCommunityFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBodyCommunityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppHeaderCommunityFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppFooterCommunityFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '596f7e5b47415c229efd257b9cdf05ce';
export default node;
