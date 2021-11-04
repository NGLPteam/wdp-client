/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserGrantItemAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ItemTypeaheadFragment" | "RoleSelectFragment">;
    readonly " $refType": "UserGrantItemAccessFormFragment";
};
export type UserGrantItemAccessFormFragment$data = UserGrantItemAccessFormFragment;
export type UserGrantItemAccessFormFragment$key = {
    readonly " $data"?: UserGrantItemAccessFormFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserGrantItemAccessFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserGrantItemAccessFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemTypeaheadFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoleSelectFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '39afbd1b0a44d807ce24d2298404086e';
export default node;
