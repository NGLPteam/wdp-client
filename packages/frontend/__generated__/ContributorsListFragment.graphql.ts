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
    readonly pageInfo: {
        readonly totalCount: number;
    };
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ItemContributionConnection",
  "abstractKey": null
};
(node as any).hash = '5ecd7e9bcb9f27e56fbfd40e7b3a728b';
export default node;
