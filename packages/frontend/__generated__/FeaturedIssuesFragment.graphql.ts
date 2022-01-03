/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FeaturedIssuesFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly " $fragmentRefs": FragmentRefs<"IssueSummaryFragment">;
        };
    }>;
    readonly " $refType": "FeaturedIssuesFragment";
};
export type FeaturedIssuesFragment$data = FeaturedIssuesFragment;
export type FeaturedIssuesFragment$key = {
    readonly " $data"?: FeaturedIssuesFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedIssuesFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedIssuesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
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
              "name": "IssueSummaryFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CollectionConnection",
  "abstractKey": null
};
(node as any).hash = 'a9cfa7453a1e9c131fc5cf3214b786d2';
export default node;
