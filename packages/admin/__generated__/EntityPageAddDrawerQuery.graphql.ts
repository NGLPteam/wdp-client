/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityPageAddDrawerQueryVariables = {
    entitySlug: string;
};
export type EntityPageAddDrawerQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"EntityPageAddFormFragment">;
    } | null;
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"EntityPageAddFormFragment">;
    } | null;
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"EntityPageAddFormFragment">;
    } | null;
};
export type EntityPageAddDrawerQuery = {
    readonly response: EntityPageAddDrawerQueryResponse;
    readonly variables: EntityPageAddDrawerQueryVariables;
};



/*
query EntityPageAddDrawerQuery(
  $entitySlug: Slug!
) {
  item(slug: $entitySlug) {
    ...EntityPageAddFormFragment
    id
  }
  collection(slug: $entitySlug) {
    ...EntityPageAddFormFragment
    id
  }
  community(slug: $entitySlug) {
    ...EntityPageAddFormFragment
    id
  }
}

fragment EntityPageAddFormFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Community {
    id
  }
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
    "name": "EntityPageAddFormFragment"
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
    "name": "EntityPageAddDrawerQuery",
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
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EntityPageAddDrawerQuery",
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
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "98298044e7f266073e46206bbb3e45c7",
    "id": null,
    "metadata": {},
    "name": "EntityPageAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityPageAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  item(slug: $entitySlug) {\n    ...EntityPageAddFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    ...EntityPageAddFormFragment\n    id\n  }\n  community(slug: $entitySlug) {\n    ...EntityPageAddFormFragment\n    id\n  }\n}\n\nfragment EntityPageAddFormFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Community {\n    id\n  }\n  ... on Collection {\n    id\n  }\n  ... on Item {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b66ee82605922a611d5b3fe5162b7cfb';
export default node;
