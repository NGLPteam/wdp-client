/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingAddDrawerQueryVariables = {
    entitySlug: string;
};
export type EntityOrderingAddDrawerQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"EntityOrderingAddFormFragment">;
    } | null;
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"EntityOrderingAddFormFragment">;
    } | null;
};
export type EntityOrderingAddDrawerQuery = {
    readonly response: EntityOrderingAddDrawerQueryResponse;
    readonly variables: EntityOrderingAddDrawerQueryVariables;
};



/*
query EntityOrderingAddDrawerQuery(
  $entitySlug: Slug!
) {
  item(slug: $entitySlug) {
    ...EntityOrderingAddFormFragment
    id
  }
  collection(slug: $entitySlug) {
    ...EntityOrderingAddFormFragment
    id
  }
}

fragment EntityOrderingAddFormFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    id
  }
  ... on Item {
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
    "args": null,
    "kind": "FragmentSpread",
    "name": "EntityOrderingAddFormFragment"
  }
],
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "kind": "TypeDiscriminator",
    "abstractKey": "__isAnyEntity"
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
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v2/*: any*/),
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
    "name": "EntityOrderingAddDrawerQuery",
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
      }
    ]
  },
  "params": {
    "cacheID": "3b1cfc8bde15825c3d98bc7cb9c16bec",
    "id": null,
    "metadata": {},
    "name": "EntityOrderingAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityOrderingAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  item(slug: $entitySlug) {\n    ...EntityOrderingAddFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    ...EntityOrderingAddFormFragment\n    id\n  }\n}\n\nfragment EntityOrderingAddFormFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    id\n  }\n  ... on Item {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '63974536c78c00d25987d4a1d1b8644e';
export default node;
