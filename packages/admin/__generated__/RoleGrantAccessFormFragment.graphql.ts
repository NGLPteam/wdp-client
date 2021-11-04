/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RoleGrantAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"UserTypeaheadFragment" | "RoleSelectFragment">;
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
(node as any).hash = '0b8608c34d58357a498970a658cce3bc';
export default node;
