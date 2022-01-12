/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityCondensedNavAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerFragment">;
    readonly " $refType": "CommunityCondensedNavAppFragment";
};
export type CommunityCondensedNavAppFragment$data = CommunityCondensedNavAppFragment;
export type CommunityCondensedNavAppFragment$key = {
    readonly " $data"?: CommunityCondensedNavAppFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityCondensedNavAppFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityCondensedNavAppFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '34c0b8c2a4cde931f16d6957db7a9524';
export default node;
