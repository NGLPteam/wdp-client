/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrderingEditDrawerQueryVariables = {
    slug: string;
    identifier: string;
};
export type EntityOrderingEditDrawerQueryResponse = {
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"EntityOrderingEditFormFragment">;
    } | null;
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"EntityOrderingEditFormFragment">;
    } | null;
};
export type EntityOrderingEditDrawerQuery = {
    readonly response: EntityOrderingEditDrawerQueryResponse;
    readonly variables: EntityOrderingEditDrawerQueryVariables;
};



/*
query EntityOrderingEditDrawerQuery(
  $slug: Slug!
  $identifier: String!
) {
  collection(slug: $slug) {
    ...EntityOrderingEditFormFragment
    id
  }
  item(slug: $slug) {
    ...EntityOrderingEditFormFragment
    id
  }
}

fragment EntityOrderingEditFormFragment on Entity {
  __isEntity: __typename
  ...OrderDefinitionSelectControlFragment
  ordering(identifier: $identifier) {
    id
    name
    order {
      path
      direction
    }
    select {
      direct
    }
    filter {
      schemas {
        namespace
        identifier
        version
      }
    }
  }
}

fragment OrderDefinitionSelectControlFragment on Entity {
  __isEntity: __typename
  ...OrderDefinitionSelectFragment
}

fragment OrderDefinitionSelectFragment on Entity {
  __isEntity: __typename
  schemaRanks {
    namespace
    identifier
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identifier"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v2 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v3 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "EntityOrderingEditFormFragment"
  }
],
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
  "name": "namespace",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v7 = [
  (v4/*: any*/),
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
          (v5/*: any*/),
          (v6/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "identifier",
            "variableName": "identifier"
          }
        ],
        "concreteType": "Ordering",
        "kind": "LinkedField",
        "name": "ordering",
        "plural": false,
        "selections": [
          (v4/*: any*/),
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
            "concreteType": "OrderDefinition",
            "kind": "LinkedField",
            "name": "order",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "path",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "direction",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderingSelectDefinition",
            "kind": "LinkedField",
            "name": "select",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "direct",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "OrderingFilterDefinition",
            "kind": "LinkedField",
            "name": "filter",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderingSchemaFilter",
                "kind": "LinkedField",
                "name": "schemas",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "version",
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
    "type": "Entity",
    "abstractKey": "__isEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityOrderingEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "EntityOrderingEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v7/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v7/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a4d6d1e4fccde6deb311e0bc2f3c2b76",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingEditDrawerQuery",
    "operationKind": "query",
    "text": "query EntityOrderingEditDrawerQuery(\n  $slug: Slug!\n  $identifier: String!\n) {\n  collection(slug: $slug) {\n    ...EntityOrderingEditFormFragment\n    id\n  }\n  item(slug: $slug) {\n    ...EntityOrderingEditFormFragment\n    id\n  }\n}\n\nfragment EntityOrderingEditFormFragment on Entity {\n  __isEntity: __typename\n  ...OrderDefinitionSelectControlFragment\n  ordering(identifier: $identifier) {\n    id\n    name\n    order {\n      path\n      direction\n    }\n    select {\n      direct\n    }\n    filter {\n      schemas {\n        namespace\n        identifier\n        version\n      }\n    }\n  }\n}\n\nfragment OrderDefinitionSelectControlFragment on Entity {\n  __isEntity: __typename\n  ...OrderDefinitionSelectFragment\n}\n\nfragment OrderDefinitionSelectFragment on Entity {\n  __isEntity: __typename\n  schemaRanks {\n    namespace\n    identifier\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '8f777cfe02777dcb48001bd33f57054a';
export default node;
