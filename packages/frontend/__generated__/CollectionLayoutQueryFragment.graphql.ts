/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutQueryFragment = {
    readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutFragment">;
    readonly " $refType": "CollectionLayoutQueryFragment";
};
export type CollectionLayoutQueryFragment$data = CollectionLayoutQueryFragment;
export type CollectionLayoutQueryFragment$key = {
    readonly " $data"?: CollectionLayoutQueryFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutQueryFragment">;
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
  "name": "CollectionLayoutQueryFragment",
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
      "name": "CollectionLayoutFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '201b697f8e0d653addaa60828e928832';
export default node;
