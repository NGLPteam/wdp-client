/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityCondensedNavAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerFragment" | "MobileMenuFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MobileMenuFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '96c0cc078ade0c4b253bfcdbd0aa21f4';
export default node;
