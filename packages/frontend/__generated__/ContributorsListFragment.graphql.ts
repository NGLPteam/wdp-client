/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ContributorsListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly contributor: {
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
(node as any).hash = '83c33284ac8f8ad6b657c718aa0b8d24';
export default node;
