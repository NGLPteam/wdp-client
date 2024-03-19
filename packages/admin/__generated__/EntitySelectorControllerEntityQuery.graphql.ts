/**
 * @generated SignedSource<<7d7010fa1d7f7a609c9ad9eec5702ae7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type EntitySelectorControllerEntityQuery$variables = {
  slug: string;
};
export type EntitySelectorControllerEntityQuery$data = {
  readonly collection: {
    readonly collections: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly __typename: "Collection";
          readonly hasCollections: boolean;
          readonly hasItems: boolean;
          readonly id: string;
          readonly schemaVersion: {
            readonly identifier: string;
            readonly kind: SchemaKind;
            readonly name: string;
            readonly namespace: string;
          };
          readonly slug: string;
          readonly title: string;
        };
      }>;
    };
    readonly items: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly __typename: "Item";
          readonly hasItems: boolean;
          readonly id: string;
          readonly schemaVersion: {
            readonly identifier: string;
            readonly kind: SchemaKind;
            readonly name: string;
            readonly namespace: string;
          };
          readonly slug: string;
          readonly title: string;
        };
      }>;
    };
    readonly parent: {
      readonly __typename: "Collection";
      readonly slug: string;
      readonly title: string;
    } | {
      readonly __typename: "Community";
      readonly slug: string;
      readonly title: string;
    } | {
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      readonly __typename: "%other";
    } | null | undefined;
    readonly title: string;
  } | null | undefined;
  readonly community: {
    readonly collections: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly __typename: "Collection";
          readonly hasCollections: boolean;
          readonly hasItems: boolean;
          readonly id: string;
          readonly schemaVersion: {
            readonly identifier: string;
            readonly kind: SchemaKind;
            readonly name: string;
            readonly namespace: string;
          };
          readonly slug: string;
          readonly title: string;
        };
      }>;
    };
    readonly title: string;
  } | null | undefined;
  readonly item: {
    readonly __typename: "Item";
    readonly items: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly __typename: "Item";
          readonly hasItems: boolean;
          readonly id: string;
          readonly schemaVersion: {
            readonly identifier: string;
            readonly kind: SchemaKind;
            readonly name: string;
            readonly namespace: string;
          };
          readonly slug: string;
          readonly title: string;
        };
      }>;
    };
    readonly parent: {
      readonly __typename: "Collection";
      readonly slug: string;
      readonly title: string;
    } | {
      readonly __typename: "Item";
      readonly slug: string;
      readonly title: string;
    } | {
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      readonly __typename: "%other";
    } | null | undefined;
    readonly title: string;
  } | null | undefined;
};
export type EntitySelectorControllerEntityQuery = {
  response: EntitySelectorControllerEntityQuery$data;
  variables: EntitySelectorControllerEntityQuery$variables;
};

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
  "kind": "ScalarField",
  "name": "hasCollections",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "namespace",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaVersion",
  "kind": "LinkedField",
  "name": "schemaVersion",
  "plural": false,
  "selections": [
    (v8/*: any*/),
    (v9/*: any*/),
    (v10/*: any*/),
    (v11/*: any*/)
  ],
  "storageKey": null
},
v13 = {
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
            (v7/*: any*/),
            (v12/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = [
  (v3/*: any*/),
  (v5/*: any*/),
  (v2/*: any*/)
],
v15 = {
  "kind": "InlineFragment",
  "selections": (v14/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v16 = {
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
            (v6/*: any*/),
            (v12/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "SchemaVersion",
  "kind": "LinkedField",
  "name": "schemaVersion",
  "plural": false,
  "selections": [
    (v8/*: any*/),
    (v9/*: any*/),
    (v10/*: any*/),
    (v11/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v18 = {
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
            (v7/*: any*/),
            (v17/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v19 = [
  (v5/*: any*/),
  (v2/*: any*/)
],
v20 = {
  "kind": "InlineFragment",
  "selections": (v19/*: any*/),
  "type": "Collection",
  "abstractKey": null
},
v21 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v22 = {
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
            (v6/*: any*/),
            (v17/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntitySelectorControllerEntityQuery",
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
          (v13/*: any*/)
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
              (v15/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v14/*: any*/),
                "type": "Community",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          (v13/*: any*/),
          (v16/*: any*/)
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
              (v15/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v14/*: any*/),
                "type": "Item",
                "abstractKey": null
              }
            ],
            "storageKey": null
          },
          (v16/*: any*/)
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
    "name": "EntitySelectorControllerEntityQuery",
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
          (v18/*: any*/),
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
              (v20/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v19/*: any*/),
                "type": "Community",
                "abstractKey": null
              },
              (v21/*: any*/)
            ],
            "storageKey": null
          },
          (v18/*: any*/),
          (v22/*: any*/),
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
              (v20/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v19/*: any*/),
                "type": "Item",
                "abstractKey": null
              },
              (v21/*: any*/)
            ],
            "storageKey": null
          },
          (v22/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cfb3551a7feddc7f61bba0e218e796df",
    "id": null,
    "metadata": {},
    "name": "EntitySelectorControllerEntityQuery",
    "operationKind": "query",
    "text": "query EntitySelectorControllerEntityQuery(\n  $slug: Slug!\n) {\n  community(slug: $slug) {\n    title\n    collections {\n      edges {\n        node {\n          __typename\n          id\n          title\n          slug\n          hasItems\n          hasCollections\n          schemaVersion {\n            name\n            kind\n            identifier\n            namespace\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n  collection(slug: $slug) {\n    title\n    parent {\n      __typename\n      ... on Collection {\n        __typename\n        slug\n        title\n      }\n      ... on Community {\n        __typename\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    collections {\n      edges {\n        node {\n          __typename\n          id\n          title\n          slug\n          hasItems\n          hasCollections\n          schemaVersion {\n            name\n            kind\n            identifier\n            namespace\n            id\n          }\n        }\n      }\n    }\n    items {\n      edges {\n        node {\n          __typename\n          id\n          title\n          slug\n          hasItems\n          schemaVersion {\n            name\n            kind\n            identifier\n            namespace\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n  item(slug: $slug) {\n    __typename\n    title\n    parent {\n      __typename\n      ... on Collection {\n        __typename\n        slug\n        title\n      }\n      ... on Item {\n        __typename\n        slug\n        title\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    items {\n      edges {\n        node {\n          __typename\n          id\n          title\n          slug\n          hasItems\n          schemaVersion {\n            name\n            kind\n            identifier\n            namespace\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "00add991ce0abe760b87f7b0f8dbe4bc";

export default node;
