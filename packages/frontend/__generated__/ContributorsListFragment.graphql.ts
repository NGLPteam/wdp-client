/**
 * @generated SignedSource<<aa6caf2760889ebc8fcff995af194955>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorsListFragment$data = {
  readonly attributions?: ReadonlyArray<{
    readonly contributor: {
      readonly slug: string;
      readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
    };
    readonly roles: ReadonlyArray<{
      readonly label: string;
    }>;
  }>;
  readonly " $fragmentType": "ContributorsListFragment";
};
export type ContributorsListFragment$key = {
  readonly " $data"?: ContributorsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "roles",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
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
    "name": "contributor",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "slug",
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ContributorNameFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorsListFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemAttribution",
          "kind": "LinkedField",
          "name": "attributions",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionAttribution",
          "kind": "LinkedField",
          "name": "attributions",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();

(node as any).hash = "7fc6b8c601186a86643041c6d1ea1b68";

export default node;
