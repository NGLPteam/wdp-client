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
        readonly title: string | null;
        readonly " $fragmentRefs": FragmentRefs<"EntityLinksAddFormFragment">;
    } | null;
    readonly collection: {
        readonly title: string | null;
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
    title
    ...EntityLinksAddFormFragment
    id
  }
  collection(slug: $entitySlug) {
    title
    ...EntityLinksAddFormFragment
    id
  }
}

fragment EntityLinksAddFormFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Collection {
    entityId: id
  }
  ... on Item {
    entityId: id
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
  "name": "title",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "EntityLinksAddFormFragment"
  }
],
v4 = [
  {
    "alias": "entityId",
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
],
v5 = [
  (v2/*: any*/),
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
        "selections": (v4/*: any*/),
        "type": "Collection",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v4/*: any*/),
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
        "selections": (v5/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": (v5/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "70c27dd1bead0f50f79c07be78688c77",
    "id": null,
    "metadata": {},
    "name": "EntityLinksAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityLinksAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  item(slug: $entitySlug) {\n    title\n    ...EntityLinksAddFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    title\n    ...EntityLinksAddFormFragment\n    id\n  }\n}\n\nfragment EntityLinksAddFormFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Collection {\n    entityId: id\n  }\n  ... on Item {\n    entityId: id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c21b36cd8e5be5f562a08ddf392ba840';
export default node;
