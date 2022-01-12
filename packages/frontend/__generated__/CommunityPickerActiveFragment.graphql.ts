/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CommunityPickerActiveFragment = {
    readonly title: string;
    readonly slug: string;
    readonly " $refType": "CommunityPickerActiveFragment";
};
export type CommunityPickerActiveFragment$data = CommunityPickerActiveFragment;
export type CommunityPickerActiveFragment$key = {
    readonly " $data"?: CommunityPickerActiveFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CommunityPickerActiveFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityPickerActiveFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = 'c4e022f67450ab127ee465353c7150db';
export default node;
