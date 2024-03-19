/**
 * @generated SignedSource<<f3718ea8a488c4be6dfe78f970d7f205>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuthContextFragment$data = {
  readonly allowedActions: ReadonlyArray<string>;
  readonly " $fragmentType": "AuthContextFragment";
};
export type AuthContextFragment$key = {
  readonly " $data"?: AuthContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AuthContextFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AuthContextFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allowedActions",
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "61bde179b6fd8b20067e0c6b1f7d97e9";

export default node;
