/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ResearchUnitsListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly descendant: {
                readonly title?: string | undefined;
            };
        };
    }>;
    readonly " $refType": "ResearchUnitsListFragment";
};
export type ResearchUnitsListFragment$data = ResearchUnitsListFragment;
export type ResearchUnitsListFragment$key = {
    readonly " $data"?: ResearchUnitsListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ResearchUnitsListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResearchUnitsListFragment",
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
(node as any).hash = '57559f402baa7840bd79bd394f439bb0';
export default node;
