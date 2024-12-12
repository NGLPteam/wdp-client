/**
 * @generated SignedSource<<784deec49b0dcf84c0ab6addbaee89b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type OrderingRenderMode = "FLAT" | "TREE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingLayoutFragment$data = {
  readonly children: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly entry: {
          readonly slug?: string;
          readonly " $fragmentSpreads": FragmentRefs<"EntitySummaryFragment">;
        };
        readonly id: string;
      };
    }>;
    readonly pageInfo: {
      readonly " $fragmentSpreads": FragmentRefs<"BrowseListLayoutFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"BrowseTreeLayoutFragment">;
  };
  readonly entity: {
    readonly __typename: string;
    readonly slug?: string;
  };
  readonly header: string | null | undefined;
  readonly name: string | null | undefined;
  readonly render: {
    readonly mode: OrderingRenderMode;
  };
  readonly " $fragmentType": "EntityOrderingLayoutFragment";
};
export type EntityOrderingLayoutFragment$key = {
  readonly " $data"?: EntityOrderingLayoutFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingLayoutFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    },
    {
      "defaultValue": 40,
      "kind": "LocalArgument",
      "name": "perPage"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingLayoutFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "header",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "OrderingRenderDefinition",
      "kind": "LinkedField",
      "name": "render",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "mode",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "page",
          "variableName": "page"
        },
        {
          "kind": "Variable",
          "name": "perPage",
          "variableName": "perPage"
        }
      ],
      "concreteType": "OrderingEntryConnection",
      "kind": "LinkedField",
      "name": "children",
      "plural": false,
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
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "entry",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "EntitySummaryFragment"
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BrowseTreeLayoutFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Ordering",
  "abstractKey": null
};
})();

(node as any).hash = "42194ad8013a8c7a7c3c365e4e1146ab";

export default node;
