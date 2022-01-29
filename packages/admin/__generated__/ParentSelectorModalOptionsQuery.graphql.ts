/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type EntityDescendantScopeFilter = "ALL" | "ANY_ENTITY" | "ANY_LINK" | "COLLECTION" | "COLLECTION_OR_LINK" | "ITEM" | "ITEM_OR_LINK" | "LINKED_COLLECTION" | "LINKED_ITEM" | "%future added value";
export type ParentSelectorModalOptionsQueryVariables = {
    scope: EntityDescendantScopeFilter;
};
export type ParentSelectorModalOptionsQueryResponse = {
    readonly communities: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly title: string;
                readonly descendants: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly descendant: {
                                readonly id?: string | undefined;
                                readonly title?: string | undefined;
                            };
                        };
                    }>;
                };
            };
        }>;
    };
};
export type ParentSelectorModalOptionsQuery = {
    readonly response: ParentSelectorModalOptionsQueryResponse;
    readonly variables: ParentSelectorModalOptionsQueryVariables;
};



/*
query ParentSelectorModalOptionsQuery(
  $scope: EntityDescendantScopeFilter!
) {
  communities {
    edges {
      node {
        id
        title
        descendants(scope: $scope) {
          edges {
            node {
              descendant {
                __typename
                ... on Collection {
                  id
                  title
                }
                ... on Item {
                  id
                  title
                }
                ... on Node {
                  __isNode: __typename
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scope"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "scope",
    "variableName": "scope"
  }
],
v4 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v5 = {
  "kind": "InlineFragment",
  "selections": (v4/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v6 = {
  "kind": "InlineFragment",
  "selections": (v4/*: any*/),
  "type": "Item",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ParentSelectorModalOptionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": (v3/*: any*/),
                    "concreteType": "EntityDescendantConnection",
                    "kind": "LinkedField",
                    "name": "descendants",
                    "plural": false,
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
                                  (v5/*: any*/),
                                  (v6/*: any*/)
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
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ParentSelectorModalOptionsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": (v3/*: any*/),
                    "concreteType": "EntityDescendantConnection",
                    "kind": "LinkedField",
                    "name": "descendants",
                    "plural": false,
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
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "__typename",
                                    "storageKey": null
                                  },
                                  (v5/*: any*/),
                                  (v6/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v1/*: any*/)
                                    ],
                                    "type": "Node",
                                    "abstractKey": "__isNode"
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
    ]
  },
  "params": {
    "cacheID": "5fa613cffa4667ad5914a4cb79f24dc9",
    "id": null,
    "metadata": {},
    "name": "ParentSelectorModalOptionsQuery",
    "operationKind": "query",
    "text": "query ParentSelectorModalOptionsQuery(\n  $scope: EntityDescendantScopeFilter!\n) {\n  communities {\n    edges {\n      node {\n        id\n        title\n        descendants(scope: $scope) {\n          edges {\n            node {\n              descendant {\n                __typename\n                ... on Collection {\n                  id\n                  title\n                }\n                ... on Item {\n                  id\n                  title\n                }\n                ... on Node {\n                  __isNode: __typename\n                  id\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a9e7c15b20c039c17a3e8004eac98c56';
export default node;
