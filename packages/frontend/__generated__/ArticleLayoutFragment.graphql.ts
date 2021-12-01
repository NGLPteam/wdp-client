/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"BreadcrumbsBarFragment" | "ArticleHeroFragment">;
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
      "name": "ArticleHeroFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '85dca6669a35ac94f89f1b349d3c2754';
export default node;
