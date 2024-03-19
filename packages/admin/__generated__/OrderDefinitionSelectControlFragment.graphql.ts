/**
 * @generated SignedSource<<0f545fc6fa83b18822787c03904d8b3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrderDefinitionSelectControlFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectFragment">;
  readonly " $fragmentType": "OrderDefinitionSelectControlFragment";
};
export type OrderDefinitionSelectControlFragment$key = {
  readonly " $data"?: OrderDefinitionSelectControlFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrderDefinitionSelectControlFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrderDefinitionSelectControlFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "OrderDefinitionSelectFragment"
    }
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
};

(node as any).hash = "076619853dc6ede72f0af88989c79498";

export default node;
