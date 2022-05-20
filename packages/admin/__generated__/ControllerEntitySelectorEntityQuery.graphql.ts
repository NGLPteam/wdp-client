/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ControllerEntitySelectorEntityQueryVariables = {
    slug: string;
};
export type ControllerEntitySelectorEntityQueryResponse = {
    readonly community: {
        readonly __typename: string;
        readonly title: string;
        readonly collections: {
            readonly edges: ReadonlyArray<{
                readonly node: {
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
        readonly __typename: string;
        readonly title: string;
        readonly parent: {
            readonly slug?: string | undefined;
            readonly title?: string | undefined;
        } | null;
        readonly collections: {
            readonly edges: ReadonlyArray<{
                readonly node: {
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
        readonly parent: {
            readonly slug?: string | undefined;
            readonly title?: string | undefined;
        } | null;
        readonly items: {
            readonly edges: ReadonlyArray<{
                readonly node: {
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
    __typename
    title
    collections {
      edges {
        node {
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
    __typename
    title
    parent {
      __typename
      ... on Collection {
        slug
        title
      }
      ... on Community {
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
        slug
        title
      }
      ... on Item {
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
            (v4/*: any*/),
            (v3/*: any*/),
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
  (v5/*: any*/),
  (v3/*: any*/)
],
v9 = {
  "kind": "InlineFragment",
  "selections": (v8/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v10 = {
  "kind": "InlineFragment",
  "selections": (v8/*: any*/),
  "type": "Community",
  "abstractKey": null
},
v11 = {
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
            (v4/*: any*/),
            (v3/*: any*/),
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
v12 = {
  "kind": "InlineFragment",
  "selections": (v8/*: any*/),
  "type": "Item",
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
          (v3/*: any*/),
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
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v11/*: any*/)
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
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/)
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
          (v3/*: any*/),
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
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v11/*: any*/),
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
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "parent",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v9/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "51c6fe0e23367ad471c17b1ae45c3842",
    "id": null,
    "metadata": {},
    "name": "ControllerEntitySelectorEntityQuery",
    "operationKind": "query",
    "text": "query ControllerEntitySelectorEntityQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    __typename\n    title\n    collections {\n      edges {\n        node {\n          id\n          title\n          slug\n          hasItems\n          hasCollections\n        }\n      }\n    }\n    id\n  }\n  collection(slug: $slug) {\n    __typename\n    title\n    parent {\n      __typename\n      ... on Collection {\n        slug\n        title\n      }\n      ... on Community {\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    collections {\n      edges {\n        node {\n          id\n          title\n          slug\n          hasItems\n          hasCollections\n        }\n      }\n    }\n    items {\n      edges {\n        node {\n          id\n          title\n          slug\n          hasItems\n        }\n      }\n    }\n    id\n  }\n  item(slug: $slug) {\n    __typename\n    title\n    parent {\n      __typename\n      ... on Collection {\n        slug\n        title\n      }\n      ... on Item {\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    items {\n      edges {\n        node {\n          id\n          title\n          slug\n          hasItems\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '686088c8d797759b5c16b756c8799bbd';
export default node;
