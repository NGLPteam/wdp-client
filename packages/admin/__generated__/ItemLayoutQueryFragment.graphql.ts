/**
 * @generated SignedSource<<56f6dc3b422bb2430b35f6fb76450a0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemLayoutQueryFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AuthContextFragment" | "ItemLayoutFragment">;
  readonly " $fragmentType": "ItemLayoutQueryFragment";
};
export type ItemLayoutQueryFragment$key = {
  readonly " $data"?: ItemLayoutQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemLayoutQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemLayoutQueryFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemLayoutFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AuthContextFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};

(node as any).hash = "ae008e44b61d6f81ed8c99d4baca8cc4";

export default node;
