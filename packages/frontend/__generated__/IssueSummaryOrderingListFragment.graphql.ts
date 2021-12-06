/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type IssueSummaryOrderingListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly entry: {
                readonly " $fragmentRefs": FragmentRefs<"IssueSummaryItemFragment">;
            };
        };
    }>;
    readonly " $refType": "IssueSummaryOrderingListFragment";
};
export type IssueSummaryOrderingListFragment$data = IssueSummaryOrderingListFragment;
export type IssueSummaryOrderingListFragment$key = {
    readonly " $data"?: IssueSummaryOrderingListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"IssueSummaryOrderingListFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "IssueSummaryItemFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueSummaryOrderingListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingEntryEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OrderingEntry",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "entry",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": (v0/*: any*/),
                  "type": "Item",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v0/*: any*/),
                  "type": "Collection",
                  "abstractKey": null
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
  "type": "OrderingEntryConnection",
  "abstractKey": null
};
})();
(node as any).hash = '34283f06c27192e3e54a88ddd474ddab';
export default node;
