/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorsListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly contributor: {
                readonly slug?: string | undefined;
                readonly " $fragmentRefs": FragmentRefs<"ContributorNameFragment">;
            };
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
      "concreteType": "ItemContributionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemContribution",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
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
      "storageKey": null
    }
  ],
  "type": "ItemContributionConnection",
  "abstractKey": null
};
(node as any).hash = '9d7ba90166f93e3e7ac5b802cc453d52';
export default node;
