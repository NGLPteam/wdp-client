/**
 * @generated SignedSource<<91077cd823005c38dc70218f752ed8b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type TemplateKind = "BLURB" | "CONTRIBUTOR_LIST" | "DESCENDANT_LIST" | "DETAIL" | "HERO" | "LINK_LIST" | "LIST_ITEM" | "METADATA" | "NAVIGATION" | "ORDERING" | "PAGE_LIST" | "SUPPLEMENTARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FactoryTemplatesFragment$data = {
  readonly entityList?: {
    readonly empty: boolean;
  };
  readonly templateKind?: TemplateKind;
  readonly " $fragmentSpreads": FragmentRefs<"BlurbTemplateFragment" | "ContributorsTemplateFragment" | "DescendantsTemplateFragment" | "DetailTemplateFragment" | "LinksTemplateFragment" | "OrderingNavigationTemplateFragment" | "PagesTemplateFragment">;
  readonly " $fragmentType": "FactoryTemplatesFragment";
};
export type FactoryTemplatesFragment$key = {
  readonly " $data"?: FactoryTemplatesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FactoryTemplatesFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateEntityList",
    "kind": "LinkedField",
    "name": "entityList",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "empty",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FactoryTemplatesFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "templateKind",
          "storageKey": null
        }
      ],
      "type": "TemplateInstance",
      "abstractKey": "__isTemplateInstance"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorsTemplateFragment"
        }
      ],
      "type": "ContributorListTemplateInstance",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DetailTemplateFragment"
        }
      ],
      "type": "DetailTemplateInstance",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "OrderingNavigationTemplateFragment"
        }
      ],
      "type": "OrderingTemplateInstance",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PagesTemplateFragment"
        }
      ],
      "type": "PageListTemplateInstance",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "DescendantListTemplateInstance",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "LinkListTemplateInstance",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BlurbTemplateFragment"
        }
      ],
      "type": "BlurbTemplateInstance",
      "abstractKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DescendantsTemplateFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LinksTemplateFragment"
    }
  ],
  "type": "AnyMainTemplateInstance",
  "abstractKey": "__isAnyMainTemplateInstance"
};
})();

(node as any).hash = "6334abacdc1023b3326f45711efdd3ed";

export default node;
