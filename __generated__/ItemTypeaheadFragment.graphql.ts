/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemTypeaheadFragment = {
    readonly viewer: {
        readonly items: {
            readonly nodes: ReadonlyArray<{
                readonly id: string;
                readonly title: string | null;
            }>;
        };
    };
    readonly " $refType": "ItemTypeaheadFragment";
};
export type ItemTypeaheadFragment$data = ItemTypeaheadFragment;
export type ItemTypeaheadFragment$key = {
    readonly " $data"?: ItemTypeaheadFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemTypeaheadFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemTypeaheadFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemConnection",
          "kind": "LinkedField",
          "name": "items",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Item",
              "kind": "LinkedField",
              "name": "nodes",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
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
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'a9a616de612c2203772a6963e6e2a804';
export default node;
