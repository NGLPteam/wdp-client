/**
 * @generated SignedSource<<89657324ed050d76bd42e745127483dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecentIssuesFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly slug: String;
      readonly " $fragmentSpreads": FragmentRefs<"IssueSummaryFragment">;
    };
  }>;
  readonly " $fragmentType": "RecentIssuesFragment";
};
export type RecentIssuesFragment$key = {
  readonly " $data"?: RecentIssuesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecentIssuesFragment">;
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

(node as any).hash = "db239a90bee22188a46a7f4b2ea43081";

export default node;
