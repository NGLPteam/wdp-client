/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EntityLinksAddDrawerQueryVariables = {
    entitySlug: string;
};
export type EntityLinksAddDrawerQueryResponse = {
    readonly item: {
        readonly " $fragmentRefs": FragmentRefs<"EntityLinksAddFormFragment">;
    } | null;
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"EntityLinksAddFormFragment">;
    } | null;
};
export type EntityLinksAddDrawerQuery = {
    readonly response: EntityLinksAddDrawerQueryResponse;
    readonly variables: EntityLinksAddDrawerQueryVariables;
};



/*
query EntityLinksAddDrawerQuery(
  $entitySlug: Slug!
) {
  item(slug: $entitySlug) {
    ...EntityLinksAddFormFragment
    id
  }
  collection(slug: $entitySlug) {
    ...EntityLinksAddFormFragment
    id
  }
}

fragment EntityLinksAddFormFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    id
    title
    slug
  }
  ... on Item {
    id
    title
    slug
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
    "name": "EntityLinksAddFormFragment"
  }
],
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  }
],
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": (v3/*: any*/),
        "type": "Collection",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v3/*: any*/),
        "type": "Item",
        "abstractKey": null
      }
    ],
    "type": "AnyEntity",
    "abstractKey": "__isAnyEntity"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EntityLinksAddDrawerQuery",
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
    "name": "EntityLinksAddDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v4/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "57bf8a4ded79302b45326fbb8886ef42",
    "id": null,
    "metadata": {},
    "name": "EntityLinksAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityLinksAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  item(slug: $entitySlug) {\n    ...EntityLinksAddFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    ...EntityLinksAddFormFragment\n    id\n  }\n}\n\nfragment EntityLinksAddFormFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    id\n    title\n    slug\n  }\n  ... on Item {\n    id\n    title\n    slug\n  }\n}\n"
  }
};
})();
(node as any).hash = '20ba05759bbf69c7c7a9176ced9abf33';
export default node;
