/**
 * @generated SignedSource<<84d4a38481fd16acf2c554dde30f4ebc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppBodyEntityFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppHeaderEntityFragment">;
  readonly " $fragmentType": "AppBodyEntityFragment";
};
export type AppBodyEntityFragment$key = {
  readonly " $data"?: AppBodyEntityFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppBodyEntityFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBodyEntityFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppHeaderEntityFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "63c3696fb51b55649aa792a7a47a98d2";

export default node;
