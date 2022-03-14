/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserGrantItemAccessFormFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ItemTypeaheadFragment">;
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '799b2ccd8a3e8cfd78025bbea317517a';
export default node;
