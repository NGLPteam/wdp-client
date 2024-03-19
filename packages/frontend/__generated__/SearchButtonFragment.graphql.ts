/**
 * @generated SignedSource<<96c5b0f733effac8c81d7ddadb478633>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchButtonFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SearchModalFragment">;
  readonly " $fragmentType": "SearchButtonFragment";
};
export type SearchButtonFragment$key = {
  readonly " $data"?: SearchButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchButtonFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchModalFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "0473a1fc75abe666d8b71bfff42ed689";

export default node;
