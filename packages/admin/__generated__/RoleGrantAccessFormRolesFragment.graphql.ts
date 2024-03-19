/**
 * @generated SignedSource<<606bdfa4609717a58701a19717f4923b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoleGrantAccessFormRolesFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RoleSelectFragment">;
  readonly " $fragmentType": "RoleGrantAccessFormRolesFragment";
};
export type RoleGrantAccessFormRolesFragment$key = {
  readonly " $data"?: RoleGrantAccessFormRolesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoleGrantAccessFormRolesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoleGrantAccessFormRolesFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RoleSelectFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "a9ad3a46c13cb94ab271c2a6d761008a";

export default node;
