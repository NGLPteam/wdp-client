/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionLayoutFragment = {
    readonly title: string | null;
    readonly slug: string;
    readonly " $fragmentRefs": FragmentRefs<"useBreadcrumbsFragment">;
    readonly " $refType": "CollectionLayoutFragment";
};
export type CollectionLayoutFragment$data = CollectionLayoutFragment;
export type CollectionLayoutFragment$key = {
    readonly " $data"?: CollectionLayoutFragment$data;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "useBreadcrumbsFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'affa9b32c541f2e241d17797e72f29b5';
export default node;
