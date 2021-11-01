/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoleEditAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"RoleSelectFragment">;
    readonly " $refType": "RoleEditAccessFormFragment";
};
export type RoleEditAccessFormFragment$data = RoleEditAccessFormFragment;
export type RoleEditAccessFormFragment$key = {
    readonly " $data"?: RoleEditAccessFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"RoleEditAccessFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleEditAccessFormFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoleSelectFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '854048115d0c3b291db7fe3b676b5696';
export default node;
