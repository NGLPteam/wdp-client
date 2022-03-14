/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RoleGrantAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"UserTypeaheadFragment">;
    readonly " $refType": "RoleGrantAccessFormFragment";
};
export type RoleGrantAccessFormFragment$data = RoleGrantAccessFormFragment;
export type RoleGrantAccessFormFragment$key = {
    readonly " $data"?: RoleGrantAccessFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RoleGrantAccessFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleGrantAccessFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UserTypeaheadFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '547a6326c61944b24d7c8f281e19ac7e';
export default node;
