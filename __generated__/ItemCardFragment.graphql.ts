/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemCardFragment = {
    readonly slug: string;
    readonly title: string | null;
    readonly " $refType": "ItemCardFragment";
};
export type ItemCardFragment$data = ItemCardFragment;
export type ItemCardFragment$key = {
    readonly " $data"?: ItemCardFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemCardFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'f7697758a19d89112dcacd516c1bf6fc';
export default node;
