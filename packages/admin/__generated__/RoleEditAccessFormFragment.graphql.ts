/**
 * @generated SignedSource<<8b93aceb741608c88528b81d6ab66721>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoleEditAccessFormFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RoleSelectFragment">;
  readonly " $fragmentType": "RoleEditAccessFormFragment";
};
export type RoleEditAccessFormFragment$key = {
  readonly " $data"?: RoleEditAccessFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoleEditAccessFormFragment">;
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
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "3fa9e436fd358033f0f9ee6ae8e5fe8f";

export default node;
