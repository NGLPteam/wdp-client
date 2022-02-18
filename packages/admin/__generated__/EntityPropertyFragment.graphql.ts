/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityPropertyFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ScalarPropertyFragment">;
    readonly " $refType": "EntityPropertyFragment";
};
export type EntityPropertyFragment$data = EntityPropertyFragment;
export type EntityPropertyFragment$key = {
    readonly " $data"?: EntityPropertyFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityPropertyFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityPropertyFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ScalarPropertyFragment"
    }
  ],
  "type": "EntityProperty",
  "abstractKey": null
};
(node as any).hash = '89447b7a308d1c1afdeb1dc34eb6861a';
export default node;
