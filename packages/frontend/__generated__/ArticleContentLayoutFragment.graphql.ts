/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleContentLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"ArticleLayoutFragment" | "ArticleTextFragment">;
    readonly " $refType": "ArticleContentLayoutFragment";
};
export type ArticleContentLayoutFragment$data = ArticleContentLayoutFragment;
export type ArticleContentLayoutFragment$key = {
    readonly " $data"?: ArticleContentLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleContentLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleContentLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleLayoutFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleTextFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '7cbf2faacce813ea05ec9f2f69b7b03c';
export default node;
