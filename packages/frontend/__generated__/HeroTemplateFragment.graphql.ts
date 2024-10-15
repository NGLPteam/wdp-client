/**
 * @generated SignedSource<<e14e9d0dc9b26b7b266680f26f581091>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HeroImageLayout = "ONE_COLUMN" | "TWO_COLUMN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HeroTemplateFragment$data = {
  readonly heroImage?: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageHeroTemplateFragment">;
  };
  readonly heroImageLayout?: HeroImageLayout;
  readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "DetailHeroFragment" | "EntityNavBarFragment">;
  readonly " $fragmentType": "HeroTemplateFragment";
};
export type HeroTemplateFragment$key = {
  readonly " $data"?: HeroTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageAttachment",
  "kind": "LinkedField",
  "name": "heroImage",
  "plural": false,
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ImageHeroTemplateFragment"
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeroTemplateFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BreadcrumbsBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityNavBarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailHeroFragment"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "heroImageLayout",
          "storageKey": null
        }
      ],
      "type": "Community",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "41c1b31ca2229a2be937a2d50c65aa8c";

export default node;
