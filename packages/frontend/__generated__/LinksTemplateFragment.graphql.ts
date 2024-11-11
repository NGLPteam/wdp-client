/**
 * @generated SignedSource<<b787e8e8231f957d3819672c0ef17f44>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type LinkListVariant = "CARDS" | "COMPACT" | "GRID" | "PROMOS" | "SUMMARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type LinksTemplateFragment$data = {
  readonly __typename: "LinkListTemplateInstance";
  readonly linksDefinition?: {
    readonly variant: LinkListVariant | null | undefined;
  };
  readonly " $fragmentSpreads": FragmentRefs<"sharedListTemplateFragment">;
  readonly " $fragmentType": "LinksTemplateFragment";
};
export type LinksTemplateFragment$key = {
  readonly " $data"?: LinksTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LinksTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "variant",
  "storageKey": null
},
v1 = [
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
    "name": "seeAllButtonLabel",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "showSeeAllButton",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "selectionLimit",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "showEntityContext",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  (v0/*: any*/)
],
v2 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
],
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "header",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "headerAside",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "metadata",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "subtitle",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": null
  }
],
v4 = {
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
      "name": "count",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "empty",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "sharedListItemsTemplateFragment"
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinksTemplateFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "alias": "linksDefinition",
          "args": null,
          "concreteType": "LinkListTemplateDefinition",
          "kind": "LinkedField",
          "name": "definition",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "LinkListTemplateInstance",
      "abstractKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "sharedListTemplateFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": "linksDefinition",
              "args": null,
              "concreteType": "LinkListTemplateDefinition",
              "kind": "LinkedField",
              "name": "definition",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "LinkListTemplateInstanceSlots",
              "kind": "LinkedField",
              "name": "slots",
              "plural": false,
              "selections": (v3/*: any*/),
              "storageKey": null
            },
            (v4/*: any*/)
          ],
          "type": "LinkListTemplateInstance",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": "descendantsDefinition",
              "args": null,
              "concreteType": "DescendantListTemplateDefinition",
              "kind": "LinkedField",
              "name": "definition",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "DescendantListTemplateInstanceSlots",
              "kind": "LinkedField",
              "name": "slots",
              "plural": false,
              "selections": (v3/*: any*/),
              "storageKey": null
            },
            (v4/*: any*/)
          ],
          "type": "DescendantListTemplateInstance",
          "abstractKey": null
        }
      ],
      "args": null,
      "argumentDefinitions": []
    }
  ],
  "type": "AnyMainTemplateInstance",
  "abstractKey": "__isAnyMainTemplateInstance"
};
})();

(node as any).hash = "14b4e04062118018bd9e3ccfd4abee78";

export default node;
