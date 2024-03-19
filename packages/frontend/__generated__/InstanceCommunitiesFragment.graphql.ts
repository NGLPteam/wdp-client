/**
 * @generated SignedSource<<b5addb125da12e0fd05e534e4497a93b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InstanceCommunitiesFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly slug: string;
      readonly " $fragmentSpreads": FragmentRefs<"InstanceCommunitySummaryFragment">;
    };
  }>;
  readonly " $fragmentType": "InstanceCommunitiesFragment";
};
export type InstanceCommunitiesFragment$key = {
  readonly " $data"?: InstanceCommunitiesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InstanceCommunitiesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InstanceCommunitiesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CommunityEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Community",
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
              "name": "InstanceCommunitySummaryFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CommunityConnection",
  "abstractKey": null
};

(node as any).hash = "b990fca7b252aba6519a8a9d1c179c0d";

export default node;
