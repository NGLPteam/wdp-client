/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppLayoutCommunityFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityNavBarFragment" | "AppBodyCommunityFragment">;
    readonly " $refType": "AppLayoutCommunityFragment";
};
export type AppLayoutCommunityFragment$data = AppLayoutCommunityFragment;
export type AppLayoutCommunityFragment$key = {
    readonly " $data"?: AppLayoutCommunityFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppLayoutCommunityFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppLayoutCommunityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityNavBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyCommunityFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '98ba507729ff46964d2690205d713cdf';
export default node;
