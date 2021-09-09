/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CommunityUpdateFormFieldsFragment = {
    readonly title: string;
    readonly " $refType": "CommunityUpdateFormFieldsFragment";
};
export type CommunityUpdateFormFieldsFragment$data = CommunityUpdateFormFieldsFragment;
export type CommunityUpdateFormFieldsFragment$key = {
    readonly " $data"?: CommunityUpdateFormFieldsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CommunityUpdateFormFieldsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommunityUpdateFormFieldsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
};
(node as any).hash = '192e8b78715e3d8decd67f8d71719f76';
export default node;
