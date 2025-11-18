/**
 * @generated SignedSource<<d49ff02530af1331eefbf3cb7e8fdecb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityPageAddDrawerQuery$variables = {
  entitySlug: string;
};
export type EntityPageAddDrawerQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPageAddFormFragment">;
  } | null | undefined;
  readonly community: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPageAddFormFragment">;
  } | null | undefined;
  readonly item: {
    readonly " $fragmentSpreads": FragmentRefs<"EntityPageAddFormFragment">;
  } | null | undefined;
};
export type EntityPageAddDrawerQuery = {
  response: EntityPageAddDrawerQuery$data;
  variables: EntityPageAddDrawerQuery$variables;
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
    "abstractKey": "__isEntity"
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
    "cacheID": "225393f88863c1e4de2e3ed081624513",
    "id": null,
    "metadata": {},
    "name": "EntityPageAddDrawerQuery",
    "operationKind": "query",
    "text": "query EntityPageAddDrawerQuery(\n  $entitySlug: Slug!\n) {\n  item(slug: $entitySlug) {\n    ...EntityPageAddFormFragment\n    id\n  }\n  collection(slug: $entitySlug) {\n    ...EntityPageAddFormFragment\n    id\n  }\n  community(slug: $entitySlug) {\n    ...EntityPageAddFormFragment\n    id\n  }\n}\n\nfragment EntityPageAddFormFragment on Entity {\n  __isEntity: __typename\n  ... on Community {\n    id\n  }\n  ... on Collection {\n    id\n  }\n  ... on Item {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b66ee82605922a611d5b3fe5162b7cfb";

export default node;
