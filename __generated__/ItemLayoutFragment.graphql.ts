/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemLayoutFragment = {
    readonly title: string;
    readonly slug: string;
    readonly " $fragmentRefs": FragmentRefs<"useBreadcrumbsFragment">;
    readonly " $refType": "ItemLayoutFragment";
};
export type ItemLayoutFragment$data = ItemLayoutFragment;
export type ItemLayoutFragment$key = {
    readonly " $data"?: ItemLayoutFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemLayoutFragment",
  "selections": [
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
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useBreadcrumbsFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'e6a7a960f46af9982698f6ed84018b8e';
export default node;
