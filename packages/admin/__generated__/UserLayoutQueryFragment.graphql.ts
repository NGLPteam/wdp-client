/**
 * @generated SignedSource<<310fa11ce7c676cccfe9a7c72df1cbb4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserLayoutQueryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"UserLayoutFragment">;
  readonly " $fragmentType": "UserLayoutQueryFragment";
};
export type UserLayoutQueryFragment$key = {
  readonly " $data"?: UserLayoutQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserLayoutQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UserLayoutFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "3f5ebc24be9d6462f7716d36163e9a65";

export default node;
