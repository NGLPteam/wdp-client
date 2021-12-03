/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticlePageLayoutFragment = {
    readonly page: {
        readonly title: string;
        readonly body: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ArticleLayoutFragment">;
    readonly " $refType": "ArticlePageLayoutFragment";
};
export type ArticlePageLayoutFragment$data = ArticlePageLayoutFragment;
export type ArticlePageLayoutFragment$key = {
    readonly " $data"?: ArticlePageLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticlePageLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "pageSlug"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticlePageLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "slug",
          "variableName": "pageSlug"
        }
      ],
      "concreteType": "Page",
      "kind": "LinkedField",
      "name": "page",
      "plural": false,
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
          "name": "body",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleLayoutFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '172b0064afc683c899ac906deb1100ed';
export default node;
