/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleLayoutFragment = {
    readonly relatedItems: {
        readonly " $fragmentRefs": FragmentRefs<"RelatedArticlesFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"EntityHTMLHeadFragment" | "BreadcrumbsBarFragment" | "ArticleParentHeaderFragment" | "ArticleHeroFragment" | "ArticleTabNavFragment">;
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
      "alias": null,
      "args": null,
      "concreteType": "ItemConnection",
      "kind": "LinkedField",
      "name": "relatedItems",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RelatedArticlesFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityHTMLHeadFragment"
    },
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
(node as any).hash = 'b35686d19e30a0d7e6b0dfc5684e62a9';
export default node;
