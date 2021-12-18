/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppHeaderFragment = {
    readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment" | "CommunityPickerFragment" | "MobileMenuFragment">;
    readonly " $refType": "AppHeaderFragment";
};
export type AppHeaderFragment$data = AppHeaderFragment;
export type AppHeaderFragment$key = {
    readonly " $data"?: AppHeaderFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppHeaderFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHeaderFragment",
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
(node as any).hash = '2f8494b0b6665e732c0bba799aebc7bd';
export default node;
