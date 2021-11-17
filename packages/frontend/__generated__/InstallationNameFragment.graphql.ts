/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type InstallationNameFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerFragment">;
    readonly " $refType": "InstallationNameFragment";
};
export type InstallationNameFragment$data = InstallationNameFragment;
export type InstallationNameFragment$key = {
    readonly " $data"?: InstallationNameFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"InstallationNameFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstallationNameFragment",
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
(node as any).hash = '5e0f4af028d6e042cc08909f0cb98996';
export default node;
