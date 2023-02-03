/**
 * @generated SignedSource<<6ea19a9c64b188eee78aec988b47d953>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppHeaderEntityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SearchButtonFragment">;
  readonly " $fragmentType": "AppHeaderEntityFragment";
};
export type AppHeaderEntityFragment$key = {
  readonly " $data"?: AppHeaderEntityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppHeaderEntityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppHeaderEntityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchButtonFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "d4c31338f5e65611b1ccaa5ca0c03526";

export default node;
