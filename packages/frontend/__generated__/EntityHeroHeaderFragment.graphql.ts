/**
 * @generated SignedSource<<2eb7a2c3e8d73c3b086c4234e35bb12c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HeroBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityHeroHeaderFragment$data = {
  readonly entity: {
    readonly __typename: "Collection";
    readonly heroImage: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageHeroTemplateFragment">;
    };
  } | {
    readonly __typename: "Item";
    readonly heroImage: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageHeroTemplateFragment">;
    };
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly template: {
    readonly definition: {
      readonly background: HeroBackground | null | undefined;
      readonly showHeroImage: boolean | null | undefined;
    };
    readonly " $fragmentSpreads": FragmentRefs<"HeaderHeroFragment">;
  } | null | undefined;
  readonly " $fragmentType": "EntityHeroHeaderFragment";
};
export type EntityHeroHeaderFragment$key = {
  readonly " $data"?: EntityHeroHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityHeroHeaderFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  {
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
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityHeroHeaderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Item",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroTemplateInstance",
      "kind": "LinkedField",
      "name": "template",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "HeroTemplateDefinition",
          "kind": "LinkedField",
          "name": "definition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "background",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showHeroImage",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeaderHeroFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroLayoutInstance",
  "abstractKey": null
};
})();

(node as any).hash = "313aa70212978cd6154bf940e1b1de0a";

export default node;
