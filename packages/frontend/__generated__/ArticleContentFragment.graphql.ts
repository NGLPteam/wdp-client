/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleContentFragment = {
    readonly title: string;
    readonly " $fragmentRefs": FragmentRefs<"ArticleTabNavFragment">;
    readonly " $refType": "ArticleContentFragment";
};
export type ArticleContentFragment$data = ArticleContentFragment;
export type ArticleContentFragment$key = {
    readonly " $data"?: ArticleContentFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleContentFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleContentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
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
(node as any).hash = 'b00087b7386aad537e590ff508318aec';
export default node;
