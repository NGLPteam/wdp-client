/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ControllerEntitySelectorEntityQueryVariables = {
    slug: string;
};
export type ControllerEntitySelectorEntityQueryResponse = {
    readonly community: {
        readonly title: string;
        readonly collections: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly __typename: string;
                    readonly id: string;
                    readonly title: string;
                    readonly slug: string;
                    readonly hasItems: boolean;
                    readonly hasCollections: boolean;
                };
            }>;
        };
    } | null;
    readonly collection: {
        readonly title: string;
        readonly parent: ({
            readonly __typename: "Collection";
            readonly slug: string;
            readonly title: string;
        } | {
            readonly __typename: "Community";
            readonly slug: string;
            readonly title: string;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        }) | null;
        readonly collections: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly __typename: string;
                    readonly id: string;
                    readonly title: string;
                    readonly slug: string;
                    readonly hasItems: boolean;
                    readonly hasCollections: boolean;
                };
            }>;
        };
        readonly items: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly __typename: string;
                    readonly id: string;
                    readonly title: string;
                    readonly slug: string;
                    readonly hasItems: boolean;
                };
            }>;
        };
    } | null;
    readonly item: {
        readonly __typename: string;
        readonly title: string;
        readonly parent: ({
            readonly __typename: "Collection";
            readonly slug: string;
            readonly title: string;
        } | {
            readonly __typename: "Item";
            readonly slug: string;
            readonly title: string;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        }) | null;
        readonly items: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly __typename: string;
                    readonly id: string;
                    readonly title: string;
                    readonly slug: string;
                    readonly hasItems: boolean;
                };
            }>;
        };
    } | null;
};
export type ControllerEntitySelectorEntityQuery = {
    readonly response: ControllerEntitySelectorEntityQueryResponse;
    readonly variables: ControllerEntitySelectorEntityQueryVariables;
};



/*
query ControllerEntitySelectorEntityQuery(
  $slug: Slug!
) {
  community(slug: $slug) {
    title
    collections {
      edges {
        node {
          __typename
          id
          title
          slug
          hasItems
          hasCollections
        }
      }
    }
    id
  }
  collection(slug: $slug) {
    title
    parent {
      __typename
      ... on Collection {
        __typename
        slug
        title
      }
      ... on Community {
        __typename
        slug
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    collections {
      edges {
        node {
          __typename
          id
          title
          slug
          hasItems
          hasCollections
        }
      }
    }
    items {
      edges {
        node {
          __typename
          id
          title
          slug
          hasItems
        }
      }
    }
    id
  }
  item(slug: $slug) {
    __typename
    title
    parent {
      __typename
      ... on Collection {
        __typename
        slug
        title
      }
      ... on Item {
        __typename
        slug
        title
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
    items {
      edges {
        node {
          __typename
          id
          title
          slug
          hasItems
        }
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasItems",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionConnection",
  "kind": "LinkedField",
  "name": "collections",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v3/*: any*/),
            (v4/*: any*/),
            (v2/*: any*/),
            (v5/*: any*/),
            (v6/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasCollections",
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
},
v8 = [
  (v3/*: any*/),
  (v5/*: any*/),
  (v2/*: any*/)
],
v9 = {
  "kind": "InlineFragment",
  "selections": (v8/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v10 = {
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
            (v3/*: any*/),
            (v4/*: any*/),
            (v2/*: any*/),
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
},
v11 = [
  (v5/*: any*/),
  (v2/*: any*/)
],
v12 = {
  "kind": "InlineFragment",
  "selections": (v11/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v13 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ControllerEntitySelectorEntityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v8/*: any*/),
                "type": "Community",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v10/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v8/*: any*/),
                "type": "Item",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          (v10/*: any*/)
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
    "name": "ControllerEntitySelectorEntityQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v7/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v12/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v11/*: any*/),
                "type": "Community",
                "abstractKey": null
              },
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v10/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v12/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v11/*: any*/),
                "type": "Item",
                "abstractKey": null
              },
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cb33693647d560b0532953ba019a2eaa",
    "id": null,
    "metadata": {},
    "name": "ControllerEntitySelectorEntityQuery",
    "operationKind": "query",
    "text": "query ControllerEntitySelectorEntityQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    title\n    collections {\n      edges {\n        node {\n          __typename\n          id\n          title\n          slug\n          hasItems\n          hasCollections\n        }\n      }\n    }\n    id\n  }\n  collection(slug: $slug) {\n    title\n    parent {\n      __typename\n      ... on Collection {\n        __typename\n        slug\n        title\n      }\n      ... on Community {\n        __typename\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    collections {\n      edges {\n        node {\n          __typename\n          id\n          title\n          slug\n          hasItems\n          hasCollections\n        }\n      }\n    }\n    items {\n      edges {\n        node {\n          __typename\n          id\n          title\n          slug\n          hasItems\n        }\n      }\n    }\n    id\n  }\n  item(slug: $slug) {\n    __typename\n    title\n    parent {\n      __typename\n      ... on Collection {\n        __typename\n        slug\n        title\n      }\n      ... on Item {\n        __typename\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    items {\n      edges {\n        node {\n          __typename\n          id\n          title\n          slug\n          hasItems\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '6acdaccaae3c4818d44da4223c642fd4';
export default node;
