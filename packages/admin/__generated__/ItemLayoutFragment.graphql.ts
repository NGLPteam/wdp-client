/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemLayoutFragment = {
    readonly title: string;
    readonly slug: string;
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"useBreadcrumbsFragment">;
    readonly " $refType": "ItemLayoutFragment";
};
export type ItemLayoutFragment$data = ItemLayoutFragment;
export type ItemLayoutFragment$key = {
    readonly " $data"?: ItemLayoutFragment$data | undefined;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
(node as any).hash = '32fa1fd291dd2e6213706568226a237b';
export default node;
