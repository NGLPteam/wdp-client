/**
 * @generated SignedSource<<6257677434342b82c988ffffea8922f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContentHeaderFragment$data = {
  readonly markedForPurge: boolean;
  readonly " $fragmentType": "ContentHeaderFragment";
};
export type ContentHeaderFragment$key = {
  readonly " $data"?: ContentHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContentHeaderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContentHeaderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "markedForPurge",
      "storageKey": null
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "68221fff4b747e6d9be5bbd5551cb745";

export default node;
