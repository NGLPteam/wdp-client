/**
 * @generated SignedSource<<c0a9ead88ac90c0e32f96380c999edf5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributionSummaryFragment$data = {
  readonly entity?: {
    readonly " $fragmentSpreads": FragmentRefs<"ContributionSummaryEntityFragment">;
  };
  readonly roles?: ReadonlyArray<{
    readonly identifier: string;
    readonly label: string;
  }>;
  readonly " $fragmentType": "ContributionSummaryFragment";
};
export type ContributionSummaryFragment$key = {
  readonly " $data"?: ContributionSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionSummaryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
      "name": "identifier",
      "storageKey": null
    },
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
v1 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ContributionSummaryEntityFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionSummaryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": "entity",
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "type": "ContributorItemAttribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": "entity",
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "type": "ContributorCollectionAttribution",
      "abstractKey": null
    }
  ],
  "type": "AnyContributorAttribution",
  "abstractKey": "__isAnyContributorAttribution"
};
})();

(node as any).hash = "a077c2ff7db1b41ac9d7c9b5c95b4440";

export default node;
