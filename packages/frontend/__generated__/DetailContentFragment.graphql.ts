/**
 * @generated SignedSource<<b64413563ae1c05c788f98d2b61bfcfd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailContentFragment$data = {
  readonly contributions?: {
    readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
  };
  readonly slug?: string;
  readonly " $fragmentType": "DetailContentFragment";
};
export type DetailContentFragment$key = {
  readonly " $data"?: DetailContentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetailContentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailContentFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemContributionConnection",
          "kind": "LinkedField",
          "name": "contributions",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ContributorsListFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};

(node as any).hash = "477f8c1335d0fa64d8477b0f65cdad67";

export default node;
