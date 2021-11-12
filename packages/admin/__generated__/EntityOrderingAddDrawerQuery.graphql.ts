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
  }
  item(slug: $entitySlug) {
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
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "entitySlug"
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
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
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0ed7dd467accab8ac908b85de06d9882",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityOrderingAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  ...EntityOrderingAddFormFragment\n}\n\nfragment EntityOrderingAddFormFragment on Query {\n  collection(slug: $entitySlug) {\n    id\n  }\n  item(slug: $entitySlug) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '82d6c209e97187ee5e84408c1a2cc853';
export default node;
