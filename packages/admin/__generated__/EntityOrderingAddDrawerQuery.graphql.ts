/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityOrderingAddDrawerQueryVariables = {
    entitySlug: string;
};
export type EntityOrderingAddDrawerQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingAddFormFragment">;
};
export type EntityOrderingAddDrawerQuery = {
    readonly response: EntityOrderingAddDrawerQueryResponse;
    readonly variables: EntityOrderingAddDrawerQueryVariables;
};



/*
query EntityOrderingAddDrawerQuery(
  $entitySlug: Slug!
) {
  ...EntityOrderingAddFormFragment
}

fragment EntityOrderingAddFormFragment on Query {
  collection(slug: $entitySlug) {
    id
    schemaRanks {
      name
      namespace
      identifier
      id
    }
  }
  item(slug: $entitySlug) {
    id
    schemaRanks {
      name
      namespace
      identifier
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "entitySlug"
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
    "alias": null,
    "args": null,
    "concreteType": "HierarchicalSchemaRank",
    "kind": "LinkedField",
    "name": "schemaRanks",
    "plural": true,
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
        "name": "namespace",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "identifier",
        "storageKey": null
      },
      (v2/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityOrderingAddDrawerQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "EntityOrderingAddFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EntityOrderingAddDrawerQuery",
    "selections": [
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
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e026c51947757c02810321d4fd4cbe8a",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityOrderingAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  ...EntityOrderingAddFormFragment\n}\n\nfragment EntityOrderingAddFormFragment on Query {\n  collection(slug: $entitySlug) {\n    id\n    schemaRanks {\n      name\n      namespace\n      identifier\n      id\n    }\n  }\n  item(slug: $entitySlug) {\n    id\n    schemaRanks {\n      name\n      namespace\n      identifier\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '82d6c209e97187ee5e84408c1a2cc853';
export default node;
