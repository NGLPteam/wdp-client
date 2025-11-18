/**
 * @generated SignedSource<<9b990ed0df75554051702ab6fc23787e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityLinksAddDrawerQuery$variables = {
  entitySlug: string;
};
export type EntityLinksAddDrawerQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityLinksAddFormFragment">;
  } | null | undefined;
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityLinksAddFormFragment">;
  } | null | undefined;
};
export type EntityLinksAddDrawerQuery = {
  response: EntityLinksAddDrawerQuery$data;
  variables: EntityLinksAddDrawerQuery$variables;
};

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
    "type": "Entity",
    "abstractKey": "__isEntity"
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
    "cacheID": "46516b2697f4a92816b20973fae777cf",
    "id": null,
    "metadata": {},
    "name": "EntityLinksAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityLinksAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  item(slug: $entitySlug) {\n    ...EntityLinksAddFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    ...EntityLinksAddFormFragment\n    id\n  }\n}\n\nfragment EntityLinksAddFormFragment on Entity {\n  __isEntity: __typename\n  ... on Collection {\n    id\n    title\n    slug\n  }\n  ... on Item {\n    id\n    title\n    slug\n  }\n}\n"
  }
};
})();

(node as any).hash = "20ba05759bbf69c7c7a9176ced9abf33";

export default node;
