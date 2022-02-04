/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type CollectionAddDrawerQueryVariables = {
    parentSlug: string;
    schemaKind: SchemaKind;
};
export type CollectionAddDrawerQueryResponse = {
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"CollectionAddFormParentFragment">;
    } | null;
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"CollectionAddFormParentFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"CollectionAddFormFragment">;
};
export type CollectionAddDrawerQuery = {
    readonly response: CollectionAddDrawerQueryResponse;
    readonly variables: CollectionAddDrawerQueryVariables;
};



/*
query CollectionAddDrawerQuery(
  $parentSlug: Slug!
  $schemaKind: SchemaKind!
) {
  collection(slug: $parentSlug) {
    ...CollectionAddFormParentFragment
    id
  }
  community(slug: $parentSlug) {
    ...CollectionAddFormParentFragment
    id
  }
  ...CollectionAddFormFragment
}

fragment CollectionAddFormFragment on Query {
  ...SchemaSelectFragment
  ...CommunitySelectFragment
}

fragment CollectionAddFormParentFragment on Entity {
  __isEntity: __typename
  ... on Node {
    __isNode: __typename
    id
  }
  ...SchemaSelectParentFragment
}

fragment CommunitySelectFragment on Query {
  communities {
    edges {
      node {
        id
        name
      }
    }
  }
}

fragment SchemaSelectFragment on Query {
  schemaVersionOptions(kind: $schemaKind) {
    label
    value
    identifier
    namespace
  }
}

fragment SchemaSelectParentFragment on Entity {
  __isEntity: __typename
  schemaRanks {
    identifier
    namespace
    kind
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "parentSlug"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "schemaKind"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "parentSlug"
  }
],
v2 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "CollectionAddFormParentFragment"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "namespace",
  "storageKey": null
},
v6 = [
  (v3/*: any*/),
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HierarchicalSchemaRank",
        "kind": "LinkedField",
        "name": "schemaRanks",
        "plural": true,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "kind",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "kind": "TypeDiscriminator",
        "abstractKey": "__isNode"
      }
    ],
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionAddDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CollectionAddFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CollectionAddDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v6/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v6/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "kind",
            "variableName": "schemaKind"
          }
        ],
        "concreteType": "SchemaVersionOption",
        "kind": "LinkedField",
        "name": "schemaVersionOptions",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          },
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      },
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
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
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
    "cacheID": "b86915b8cbbde8738b7c51fe4e3ec76e",
    "id": null,
    "metadata": {},
    "name": "CollectionAddDrawerQuery",
    "operationKind": "query",
    "text": "query CollectionAddDrawerQuery(\n  $parentSlug: Slug!\n  $schemaKind: SchemaKind!\n) {\n  collection(slug: $parentSlug) {\n    ...CollectionAddFormParentFragment\n    id\n  }\n  community(slug: $parentSlug) {\n    ...CollectionAddFormParentFragment\n    id\n  }\n  ...CollectionAddFormFragment\n}\n\nfragment CollectionAddFormFragment on Query {\n  ...SchemaSelectFragment\n  ...CommunitySelectFragment\n}\n\nfragment CollectionAddFormParentFragment on Entity {\n  __isEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ...SchemaSelectParentFragment\n}\n\nfragment CommunitySelectFragment on Query {\n  communities {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment SchemaSelectFragment on Query {\n  schemaVersionOptions(kind: $schemaKind) {\n    label\n    value\n    identifier\n    namespace\n  }\n}\n\nfragment SchemaSelectParentFragment on Entity {\n  __isEntity: __typename\n  schemaRanks {\n    identifier\n    namespace\n    kind\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '915aece20dbc3874f8c940afcea0de63';
export default node;
