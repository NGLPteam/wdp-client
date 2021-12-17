/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityCondensedNavAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment" | "CommunityPickerFragment" | "MobileMenuFragment">;
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
      "name": "InstallationNameFragment"
    },
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
(node as any).hash = 'b55ca2d88d5c1c1128ee2424ff05a94d';
export default node;
