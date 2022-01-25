/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserNameColumnFragment = {
    readonly " $fragmentRefs": FragmentRefs<"UserNameColumnCellFragment">;
    readonly " $refType": "UserNameColumnFragment";
};
export type UserNameColumnFragment$data = UserNameColumnFragment;
export type UserNameColumnFragment$key = {
    readonly " $data"?: UserNameColumnFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserNameColumnFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserNameColumnFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UserNameColumnCellFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'b5e14fb1ccc97ea1a2a2a732e742c94a';
export default node;
