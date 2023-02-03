/**
 * @generated SignedSource<<492626db2bcaedef0b2e2f54d76655e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticleLayoutFragment$data = {
  readonly relatedItems: {
    readonly " $fragmentSpreads": FragmentRefs<"RelatedArticlesFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ArticleHeroFragment" | "ArticleParentHeaderFragment" | "ArticleTabNavFragment" | "BreadcrumbsBarFragment">;
  readonly " $fragmentType": "ArticleLayoutFragment";
};
export type ArticleLayoutFragment$key = {
  readonly " $data"?: ArticleLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleLayoutFragment">;
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
    },
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
    }
  ],
  "type": "Item",
  "abstractKey": null
};

(node as any).hash = "79ccdf1baaa754542e9043908dc2004b";

export default node;
