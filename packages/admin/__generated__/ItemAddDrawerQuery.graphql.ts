/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SchemaKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type ItemAddDrawerQueryVariables = {
    entitySlug: string;
    schemaKind: SchemaKind;
};
export type ItemAddDrawerQueryResponse = {
    readonly item: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"ItemAddFormParentFragment">;
    } | null;
    readonly collection: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"ItemAddFormParentFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ItemAddFormFragment">;
};
export type ItemAddDrawerQuery = {
    readonly response: ItemAddDrawerQueryResponse;
    readonly variables: ItemAddDrawerQueryVariables;
};



/*
query ItemAddDrawerQuery(
  $entitySlug: Slug!
  $schemaKind: SchemaKind!
) {
  ...ItemAddFormFragment
  item(slug: $entitySlug) {
    id
    ...ItemAddFormParentFragment
  }
  collection(slug: $entitySlug) {
    id
    ...ItemAddFormParentFragment
  }
}

fragment ItemAddFormFragment on Query {
  ...SchemaSelectFragment
}

fragment ItemAddFormParentFragment on Entity {
  __isEntity: __typename
  ... on Node {
    __isNode: __typename
    id
  }
  ...SchemaSelectParentFragment
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
    "name": "entitySlug"
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
    "variableName": "entitySlug"
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
  (v2/*: any*/),
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ItemAddFormParentFragment"
  }
],
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
  (v2/*: any*/),
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
          (v2/*: any*/)
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
    "name": "ItemAddDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemAddFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemAddDrawerQuery",
    "selections": [
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
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v6/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v6/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2e8c2ac71ad3baee02c201f93bdc7c0b",
    "id": null,
    "metadata": {},
    "name": "ItemAddDrawerQuery",
    "operationKind": "query",
    "text": "query ItemAddDrawerQuery(\n  $entitySlug: Slug!\n  $schemaKind: SchemaKind!\n) {\n  ...ItemAddFormFragment\n  item(slug: $entitySlug) {\n    id\n    ...ItemAddFormParentFragment\n  }\n  collection(slug: $entitySlug) {\n    id\n    ...ItemAddFormParentFragment\n  }\n}\n\nfragment ItemAddFormFragment on Query {\n  ...SchemaSelectFragment\n}\n\nfragment ItemAddFormParentFragment on Entity {\n  __isEntity: __typename\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n  ...SchemaSelectParentFragment\n}\n\nfragment SchemaSelectFragment on Query {\n  schemaVersionOptions(kind: $schemaKind) {\n    label\n    value\n    identifier\n    namespace\n  }\n}\n\nfragment SchemaSelectParentFragment on Entity {\n  __isEntity: __typename\n  schemaRanks {\n    identifier\n    namespace\n    kind\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '35b4fc057ad208533ccdf952be3372ca';
export default node;
