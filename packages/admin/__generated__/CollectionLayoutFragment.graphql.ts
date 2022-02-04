/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutFragment = {
    readonly title: string;
    readonly slug: string;
    readonly id: string;
    readonly " $fragmentRefs": FragmentRefs<"useBreadcrumbsFragment" | "CollectionCreateButtonFragment" | "ItemCreateButtonFragment">;
    readonly " $refType": "CollectionLayoutFragment";
};
export type CollectionLayoutFragment$data = CollectionLayoutFragment;
export type CollectionLayoutFragment$key = {
    readonly " $data"?: CollectionLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionLayoutFragment",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionCreateButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemCreateButtonFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'dbf7607cb41df2aca4f607bc8c6e4f56';
export default node;
