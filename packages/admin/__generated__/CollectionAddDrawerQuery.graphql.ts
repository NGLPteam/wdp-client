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
        readonly id: string;
    } | null;
    readonly community: {
        readonly id: string;
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
    id
  }
  community(slug: $parentSlug) {
    id
  }
  ...CollectionAddFormFragment
}

fragment CollectionAddFormFragment on Query {
  ...SchemaSelectFragment
  ...CommunitySelectFragment
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": (v1/*: any*/),
  "concreteType": "Collection",
  "kind": "LinkedField",
  "name": "collection",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": (v1/*: any*/),
  "concreteType": "Community",
  "kind": "LinkedField",
  "name": "community",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionAddDrawerQuery",
    "selections": [
      (v4/*: any*/),
      (v5/*: any*/),
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
      (v4/*: any*/),
      (v5/*: any*/),
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
          }
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
                  (v2/*: any*/),
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
    "cacheID": "ff40218c6fe9061a23bcb28d75b0ccbe",
    "id": null,
    "metadata": {},
    "name": "CollectionAddDrawerQuery",
    "operationKind": "query",
    "text": "query CollectionAddDrawerQuery(\n  $parentSlug: Slug!\n  $schemaKind: SchemaKind!\n) {\n  collection(slug: $parentSlug) {\n    id\n  }\n  community(slug: $parentSlug) {\n    id\n  }\n  ...CollectionAddFormFragment\n}\n\nfragment CollectionAddFormFragment on Query {\n  ...SchemaSelectFragment\n  ...CommunitySelectFragment\n}\n\nfragment CommunitySelectFragment on Query {\n  communities {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment SchemaSelectFragment on Query {\n  schemaVersionOptions(kind: $schemaKind) {\n    label\n    value\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ab773d4f1d69ea7b0fac6bdeb935cd78';
export default node;
