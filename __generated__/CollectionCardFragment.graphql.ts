/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionCardFragment = {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly " $refType": "CollectionCardFragment";
};
export type CollectionCardFragment$data = CollectionCardFragment;
export type CollectionCardFragment$key = {
    readonly " $data"?: CollectionCardFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CollectionCardFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '4dfa227076a44d412811f9ad27de0173';
export default node;
