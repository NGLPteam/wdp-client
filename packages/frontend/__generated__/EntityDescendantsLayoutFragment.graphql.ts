/**
 * @generated SignedSource<<05e629bd1dbd128048d08aaf461faad1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityDescendantsLayoutFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly descendant: {
        readonly slug?: String;
        readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFactoryFragment">;
      };
    };
  }>;
  readonly pageInfo: {
    readonly " $fragmentSpreads": FragmentRefs<"BrowseListLayoutFragment">;
  };
  readonly " $fragmentType": "EntityDescendantsLayoutFragment";
};
export type EntityDescendantsLayoutFragment$key = {
  readonly " $data"?: EntityDescendantsLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityDescendantsLayoutFragment">;
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

(node as any).hash = "9e20e8bcb1bff1792122878645d537fa";

export default node;
