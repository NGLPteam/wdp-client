/**
 * @generated SignedSource<<721acbac1fe63e73f72352dd9d9cbfe6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type TemplateKind = "BLURB" | "CONTRIBUTOR_LIST" | "DESCENDANT_LIST" | "DETAIL" | "HERO" | "LINK_LIST" | "LIST_ITEM" | "METADATA" | "NAVIGATION" | "ORDERING" | "PAGE_LIST" | "SUPPLEMENTARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type MainLayoutFragment$data = {
  readonly allHidden: boolean;
  readonly entity: {
    readonly __typename: string;
  };
  readonly templates: ReadonlyArray<{
    readonly hidden?: boolean;
    readonly nextSiblings?: ReadonlyArray<{
      readonly dark: boolean;
      readonly hidden: boolean;
      readonly position: number;
      readonly templateKind: TemplateKind;
    }>;
    readonly prevSiblings?: ReadonlyArray<{
      readonly dark: boolean;
      readonly hidden: boolean;
      readonly position: number;
      readonly templateKind: TemplateKind;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"FactoryTemplatesFragment">;
  }>;
  readonly " $fragmentType": "MainLayoutFragment";
};
export type MainLayoutFragment$key = {
  readonly " $data"?: MainLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainLayoutFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hidden",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "dark",
    "storageKey": null
  },
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "position",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "templateKind",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "allHidden",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "templates",
      "plural": true,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateInstanceSibling",
              "kind": "LinkedField",
              "name": "prevSiblings",
              "plural": true,
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateInstanceSibling",
              "kind": "LinkedField",
              "name": "nextSiblings",
              "plural": true,
              "selections": (v1/*: any*/),
              "storageKey": null
            }
          ],
          "type": "TemplateInstance",
          "abstractKey": "__isTemplateInstance"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "FactoryTemplatesFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MainLayoutInstance",
  "abstractKey": null
};
})();

(node as any).hash = "515364d7c7a8aa7aac1c15f01676d153";

export default node;
