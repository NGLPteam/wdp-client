/**
 * @generated SignedSource<<9e754051295a613e3aff2ddc3da5c0ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorsListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly contributor: {
      readonly slug?: string;
      readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
    };
    readonly role: string | null | undefined;
  }>;
  readonly " $fragmentType": "ContributorsListFragment";
};
export type ContributorsListFragment$key = {
  readonly " $data"?: ContributorsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContribution",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "role",
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
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
                  "storageKey": null
                }
              ],
              "type": "Sluggable",
              "abstractKey": "__isSluggable"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ContributorNameFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ItemContributionConnection",
  "abstractKey": null
};

(node as any).hash = "a09e941c4a9ea551c9b520a64b6a5e70";

export default node;
