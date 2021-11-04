/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutFragment">;
    readonly " $refType": "CommunityLayoutQueryFragment";
};
export type CommunityLayoutQueryFragment$data = CommunityLayoutQueryFragment;
export type CommunityLayoutQueryFragment$key = {
    readonly " $data"?: CommunityLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutQueryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityLayoutFragment"
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'baf34842677e5e4a845aadc281bb5504';
export default node;
