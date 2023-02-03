/**
 * @generated SignedSource<<25e61f9dda3e201cc846c6be8a9be06f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AssetsPropertyFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ScalarPropertyFragment">;
  readonly " $fragmentType": "AssetsPropertyFragment";
};
export type AssetsPropertyFragment$key = {
  readonly " $data"?: AssetsPropertyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssetsPropertyFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetsPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "AssetsProperty",
  "abstractKey": null
};

(node as any).hash = "a2a21a4230526467a85e228defd9566d";

export default node;
