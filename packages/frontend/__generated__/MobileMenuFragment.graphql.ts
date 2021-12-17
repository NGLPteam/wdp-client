/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type MobileMenuFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerFragment">;
    readonly " $refType": "MobileMenuFragment";
};
export type MobileMenuFragment$data = MobileMenuFragment;
export type MobileMenuFragment$key = {
    readonly " $data"?: MobileMenuFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"MobileMenuFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MobileMenuFragment",
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
(node as any).hash = 'ddcbe6c924245808c9751b8653f7f7e7';
export default node;
