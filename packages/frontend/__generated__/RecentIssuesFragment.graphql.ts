/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RecentIssuesFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly " $fragmentRefs": FragmentRefs<"IssueSummaryFragment">;
        };
    }>;
    readonly " $refType": "RecentIssuesFragment";
};
export type RecentIssuesFragment$data = RecentIssuesFragment;
export type RecentIssuesFragment$key = {
    readonly " $data"?: RecentIssuesFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RecentIssuesFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecentIssuesFragment",
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
(node as any).hash = 'db239a90bee22188a46a7f4b2ea43081';
export default node;
