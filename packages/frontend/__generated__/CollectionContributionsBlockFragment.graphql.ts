/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionContributionsBlockFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly " $fragmentRefs": FragmentRefs<"ContributionBlockItemFragment">;
        };
    }>;
    readonly " $refType": "CollectionContributionsBlockFragment";
};
export type CollectionContributionsBlockFragment$data = CollectionContributionsBlockFragment;
export type CollectionContributionsBlockFragment$key = {
    readonly " $data"?: CollectionContributionsBlockFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionContributionsBlockFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionContributionsBlockFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionContributionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionContribution",
          "kind": "LinkedField",
          "name": "node",
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
              "name": "ContributionBlockItemFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CollectionContributionConnection",
  "abstractKey": null
};
(node as any).hash = '2b11123c1892052b47b283f5e91cfea9';
export default node;
