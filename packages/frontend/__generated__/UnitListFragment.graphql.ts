/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UnitListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly descendant: {
                readonly title?: string | undefined;
                readonly slug?: string | undefined;
            };
        };
    }>;
    readonly " $refType": "UnitListFragment";
};
export type UnitListFragment$data = UnitListFragment;
export type UnitListFragment$key = {
    readonly " $data"?: UnitListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UnitListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UnitListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "EntityDescendantEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "EntityDescendant",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "descendant",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "title",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "slug",
                      "storageKey": null
                    }
                  ],
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
  "type": "EntityDescendantConnection",
  "abstractKey": null
};
(node as any).hash = '6e473d596371c37221073b764be4eee4';
export default node;
