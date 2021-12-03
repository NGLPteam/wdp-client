/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsBarFragment" | "ArticleParentHeaderFragment" | "ArticleHeroFragment" | "ArticleTabNavFragment">;
    readonly " $refType": "ArticleLayoutFragment";
};
export type ArticleLayoutFragment$data = ArticleLayoutFragment;
export type ArticleLayoutFragment$key = {
    readonly " $data"?: ArticleLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleParentHeaderFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleHeroFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleTabNavFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = 'b5a28813c7f27b20951d87fa1f6298b7';
export default node;
