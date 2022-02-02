/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type OrderDefinitionSelectControlFragment = {
    readonly " $fragmentRefs": FragmentRefs<"OrderDefinitionSelectFragment">;
    readonly " $refType": "OrderDefinitionSelectControlFragment";
};
export type OrderDefinitionSelectControlFragment$data = OrderDefinitionSelectControlFragment;
export type OrderDefinitionSelectControlFragment$key = {
    readonly " $data"?: OrderDefinitionSelectControlFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"OrderDefinitionSelectControlFragment">;
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
(node as any).hash = '076619853dc6ede72f0af88989c79498';
export default node;
