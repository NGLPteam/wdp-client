/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemCardListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly " $fragmentRefs": FragmentRefs<"ItemCardFragment">;
        } | null;
    } | null> | null;
    readonly " $refType": "ItemCardListFragment";
};
export type ItemCardListFragment$data = ItemCardListFragment;
export type ItemCardListFragment$key = {
    readonly " $data"?: ItemCardListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemCardListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemCardListFragment",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "ItemCardFragment"
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
(node as any).hash = '9d8c17dd7e2d21de72697cf8d6c07b47';
export default node;
