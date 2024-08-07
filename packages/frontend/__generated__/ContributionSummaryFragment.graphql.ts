/**
 * @generated SignedSource<<923743361779f9efa184ce29d70a021a>>
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
  readonly role?: string | null | undefined;
  readonly " $fragmentType": "ContributionSummaryFragment";
};
export type ContributionSummaryFragment$key = {
  readonly " $data"?: ContributionSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionSummaryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "role",
          "storageKey": null
        }
      ],
      "type": "Contribution",
      "abstractKey": "__isContribution"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "entity",
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "type": "CollectionContribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "entity",
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "type": "ItemContribution",
      "abstractKey": null
    }
  ],
  "type": "AnyContribution",
  "abstractKey": "__isAnyContribution"
};
})();

(node as any).hash = "105707330827ea90e14bfc934bb364bc";

export default node;
