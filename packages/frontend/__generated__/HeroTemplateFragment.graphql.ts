/**
 * @generated SignedSource<<b972779129f90692edb1cac5074dca51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HeroBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type HeroImageLayout = "ONE_COLUMN" | "TWO_COLUMN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HeroTemplateFragment$data = {
  readonly entity: {
    readonly __typename: "Community";
    readonly heroImage?: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageHeroTemplateFragment">;
    };
    readonly heroImageLayout?: HeroImageLayout;
    readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment" | "EntityNavBarFragment">;
  };
  readonly template: {
    readonly definition: {
      readonly background: HeroBackground | null | undefined;
      readonly descendantSearchPrompt: string | null | undefined;
      readonly enableDescendantBrowsing: boolean | null | undefined;
      readonly enableDescendantSearch: boolean | null | undefined;
      readonly showBigSearchPrompt: boolean | null | undefined;
      readonly showBreadcrumbs: boolean | null | undefined;
      readonly showHeroImage: boolean | null | undefined;
      readonly showSharingLink: boolean | null | undefined;
      readonly showSplitDisplay: boolean | null | undefined;
    };
    readonly " $fragmentSpreads": FragmentRefs<"DetailHeroFragment" | "HeaderHeroFragment">;
  } | null | undefined;
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
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
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
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeroTemplateFragment",
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
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
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
          "selections": (v2/*: any*/),
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v2/*: any*/),
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
              "name": "descendantSearchPrompt",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "enableDescendantBrowsing",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "enableDescendantSearch",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showBreadcrumbs",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showHeroImage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showSharingLink",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showSplitDisplay",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showBigSearchPrompt",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeaderHeroFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DetailHeroFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroLayoutInstance",
  "abstractKey": null
};
})();

(node as any).hash = "0f4025782c0cbb827e78b4164f12777a";

export default node;
