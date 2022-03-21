/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorsListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly role: string | null;
        readonly contributor: {
            readonly slug?: string | undefined;
            readonly " $fragmentRefs": FragmentRefs<"ContributorNameFragment">;
        };
    }>;
    readonly " $refType": "ContributorsListFragment";
};
export type ContributorsListFragment$data = ContributorsListFragment;
export type ContributorsListFragment$key = {
    readonly " $data"?: ContributorsListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributorsListFragment">;
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
(node as any).hash = 'a09e941c4a9ea551c9b520a64b6a5e70';
export default node;
