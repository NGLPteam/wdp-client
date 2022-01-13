/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityDescendantsLayoutFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly descendant: {
                readonly slug?: string | undefined;
                readonly " $fragmentRefs": FragmentRefs<"EntitySummaryFactoryFragment">;
            };
        };
    }>;
    readonly pageInfo: {
        readonly " $fragmentRefs": FragmentRefs<"BrowseListLayoutFragment">;
    };
    readonly " $refType": "EntityDescendantsLayoutFragment";
};
export type EntityDescendantsLayoutFragment$data = EntityDescendantsLayoutFragment;
export type EntityDescendantsLayoutFragment$key = {
    readonly " $data"?: EntityDescendantsLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityDescendantsLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityDescendantsLayoutFragment",
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
                      "name": "slug",
                      "storageKey": null
                    }
                  ],
                  "type": "Sluggable",
                  "abstractKey": "__isSluggable"
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "showJournal",
                          "value": true
                        }
                      ],
                      "kind": "FragmentSpread",
                      "name": "EntitySummaryFactoryFragment"
                    }
                  ],
                  "type": "Entity",
                  "abstractKey": "__isEntity"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BrowseListLayoutFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "EntityDescendantConnection",
  "abstractKey": null
};
(node as any).hash = '9e20e8bcb1bff1792122878645d537fa';
export default node;
