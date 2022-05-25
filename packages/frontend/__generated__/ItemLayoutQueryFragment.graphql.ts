/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutFragment">;
    readonly " $refType": "ItemLayoutQueryFragment";
};
export type ItemLayoutQueryFragment$data = ItemLayoutQueryFragment;
export type ItemLayoutQueryFragment$key = {
    readonly " $data"?: ItemLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutQueryFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "slug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemLayoutQueryFragment",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "slug"
        }
      ],
      "kind": "FragmentSpread",
      "name": "ItemLayoutFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'e4f9ef8de9afdbe57b3444e7534b22a9';
export default node;
