/**
 * @generated SignedSource<<85a3a9e80f88b047c801e7aa5381ee40>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type TemplateKind = "CONTRIBUTOR_LIST" | "DESCENDANT_LIST" | "DETAIL" | "HERO" | "LINK_LIST" | "LIST_ITEM" | "METADATA" | "NAVIGATION" | "ORDERING" | "PAGE_LIST" | "SUPPLEMENTARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FactoryTemplatesFragment$data = {
  readonly templateKind?: TemplateKind;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsTemplateLayoutFragment" | "DescendantsTemplateFragment" | "DetailTemplateFragment" | "LinksTemplateFragment" | "OrderingNavigationTemplateFragment" | "PagesTemplateFragment">;
  readonly " $fragmentType": "FactoryTemplatesFragment";
};
export type FactoryTemplatesFragment$key = {
  readonly " $data"?: FactoryTemplatesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FactoryTemplatesFragment">;
};

const node: ReaderFragment = {
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
          "name": "ContributorsTemplateLayoutFragment"
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
          "name": "DescendantsTemplateFragment"
        }
      ],
      "type": "DescendantListTemplateInstance",
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
          "name": "LinksTemplateFragment"
        }
      ],
      "type": "LinkListTemplateInstance",
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
    }
  ],
  "type": "AnyMainTemplateInstance",
  "abstractKey": "__isAnyMainTemplateInstance"
};

(node as any).hash = "131326fa03a6bdc166cb53c0f155172a";

export default node;
