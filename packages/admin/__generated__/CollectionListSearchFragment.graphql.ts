/**
 * @generated SignedSource<<5e5bd8e0a0d20aaa61e244cf4641c048>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionListSearchFragment$data = {
  readonly results?: {
    readonly nodes: ReadonlyArray<{
      readonly entity: {
        readonly allowedActions?: ReadonlyArray<string>;
        readonly createdAt?: String;
        readonly id?: string;
        readonly schemaVersion?: {
          readonly name: string;
          readonly number: string;
        };
        readonly slug?: String;
        readonly title?: string;
        readonly " $fragmentSpreads": FragmentRefs<"EntityThumbnailColumnFragment" | "PublishedDateColumnFragment">;
      };
      readonly slug: String;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageSearchFragment">;
  readonly " $fragmentType": "CollectionListSearchFragment";
};
export type CollectionListSearchFragment$key = {
  readonly " $data"?: CollectionListSearchFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionListSearchFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "createdAt",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "hasQuery"
    },
    {
      "defaultValue": "PUBLISHED_ASCENDING",
      "kind": "LocalArgument",
      "name": "order"
    },
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "page"
    },
    {
      "defaultValue": [],
      "kind": "LocalArgument",
      "name": "predicates"
    },
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "query"
    },
    {
      "defaultValue": [],
      "kind": "LocalArgument",
      "name": "schema"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionListSearchFragment",
  "selections": [
    {
      "condition": "hasQuery",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Variable",
              "name": "order",
              "variableName": "order"
            },
            {
              "kind": "Variable",
              "name": "page",
              "variableName": "page"
            },
            {
              "kind": "Literal",
              "name": "perPage",
              "value": 20
            },
            {
              "kind": "Variable",
              "name": "predicates",
              "variableName": "predicates"
            },
            {
              "kind": "Variable",
              "name": "query",
              "variableName": "query"
            },
            {
              "kind": "Variable",
              "name": "schema",
              "variableName": "schema"
            },
            {
              "kind": "Literal",
              "name": "scope",
              "value": "COLLECTION"
            }
          ],
          "concreteType": "SearchResultConnection",
          "kind": "LinkedField",
          "name": "results",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "SearchResult",
              "kind": "LinkedField",
              "name": "nodes",
              "plural": true,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "entity",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v0/*: any*/)
                      ],
                      "type": "Sluggable",
                      "abstractKey": "__isSluggable"
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "id",
                          "storageKey": null
                        }
                      ],
                      "type": "Node",
                      "abstractKey": "__isNode"
                    },
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
                          "concreteType": "SchemaVersion",
                          "kind": "LinkedField",
                          "name": "schemaVersion",
                          "plural": false,
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
                              "name": "number",
                              "storageKey": null
                            }
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "allowedActions",
                          "storageKey": null
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "PublishedDateColumnFragment"
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "EntityThumbnailColumnFragment"
                        }
                      ],
                      "type": "Entity",
                      "abstractKey": "__isEntity"
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": (v1/*: any*/),
                      "type": "Collection",
                      "abstractKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": (v1/*: any*/),
                      "type": "Item",
                      "abstractKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ModelListPageFragment"
            }
          ],
          "storageKey": null
        }
      ]
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageSearchFragment"
    }
  ],
  "type": "SearchScope",
  "abstractKey": null
};
})();

(node as any).hash = "33aab870b14c3d5c183e9cc556df6827";

export default node;
