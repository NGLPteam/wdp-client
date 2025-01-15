/**
 * @generated SignedSource<<d664d9f4787ae41127d9be6a61125592>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavButtonsFragment$data = {
  readonly orderingPair: {
    readonly exists: boolean;
    readonly first: boolean;
    readonly last: boolean;
    readonly nextSibling: {
      readonly " $fragmentSpreads": FragmentRefs<"routesOrderingTemplateFragment">;
    } | null | undefined;
    readonly prevSibling: {
      readonly " $fragmentSpreads": FragmentRefs<"routesOrderingTemplateFragment">;
    } | null | undefined;
  };
  readonly slots: {
    readonly nextLabel: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly previousLabel: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "NavButtonsFragment";
};
export type NavButtonsFragment$key = {
  readonly " $data"?: NavButtonsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavButtonsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = {
  "kind": "InlineFragment",
  "selections": (v1/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": (v1/*: any*/),
  "type": "Item",
  "abstractKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": (v1/*: any*/),
  "type": "Community",
  "abstractKey": null
},
v5 = [
  {
    "kind": "InlineDataFragmentSpread",
    "name": "routesOrderingTemplateFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "entrySlug",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "entry",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "EntityLink",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "args": null,
    "argumentDefinitions": ([]/*: any*/)
  }
],
v6 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavButtonsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TemplateOrderingPair",
      "kind": "LinkedField",
      "name": "orderingPair",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "exists",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "first",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "last",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "OrderingEntry",
          "kind": "LinkedField",
          "name": "nextSibling",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "OrderingEntry",
          "kind": "LinkedField",
          "name": "prevSibling",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "nextLabel",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "previousLabel",
          "plural": false,
          "selections": (v6/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "OrderingTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "f5ac6de0597deb4be94c5d23f12f8333";

export default node;
