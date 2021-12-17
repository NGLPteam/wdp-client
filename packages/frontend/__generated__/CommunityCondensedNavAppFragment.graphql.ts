/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityCondensedNavAppFragment = {
    readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment" | "CommunityPickerFragment">;
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'b04145c8e1f04f64f68cc86109a670d6';
export default node;
