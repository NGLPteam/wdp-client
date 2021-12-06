/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueSummaryListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly slug: string;
            readonly " $fragmentRefs": FragmentRefs<"IssueSummaryItemFragment">;
        };
    }>;
    readonly " $refType": "IssueSummaryListFragment";
};
export type IssueSummaryListFragment$data = IssueSummaryListFragment;
export type IssueSummaryListFragment$key = {
    readonly " $data"?: IssueSummaryListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueSummaryListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueSummaryListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Item",
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
              "name": "IssueSummaryItemFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ItemConnection",
  "abstractKey": null
};
(node as any).hash = '24cc08a3c1706f04be04faac21ae1f10';
export default node;
